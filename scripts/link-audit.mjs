// Link audit for roadmap-data.js — checks every resource URL for liveness/redirects,
// flags YouTube search/channel/unavailable-video links, and flags duplicate URLs.
// Read-only: does not modify roadmap-data.js.
//
// Usage: node scripts/link-audit.mjs
// Output: link-audit-report.md (in project root)

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'roadmap-data.js');
const REPORT_FILE = path.join(ROOT, 'link-audit-report.md');

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const TIMEOUT_MS = 10000;
const CONCURRENCY = 12;
const MAX_RETRIES_429 = 2;

// ---------- 1. Load + parse roadmap-data.js ----------

function loadResources() {
  let txt = readFileSync(DATA_FILE, 'utf8');
  txt = txt.replace(/^window\.NIKAO_ROADMAP\s*=\s*/, '').replace(/;\s*$/, '');
  const data = JSON.parse(txt);

  const resources = [];
  for (const cat of data.categories) {
    for (const skill of cat.skills) {
      for (const res of skill.resources || []) {
        resources.push({
          category: cat.name,
          skill: skill.name,
          section: res.section,
          provider: res.provider,
          title: res.title,
          url: res.url,
          type: res.type,
        });
      }
    }
  }
  return resources;
}

// ---------- 2. URL classification helpers ----------

function classifyYouTube(url) {
  let u;
  try {
    u = new URL(url);
  } catch {
    return null;
  }
  if (!/(^|\.)youtube\.com$/.test(u.hostname) && u.hostname !== 'youtu.be') return null;

  if (u.pathname === '/results') return 'search';
  if (u.pathname === '/watch' && u.searchParams.has('v')) return 'watch';
  if (u.hostname === 'youtu.be' && u.pathname.length > 1) return 'watch';
  if (/^\/@[^/]+\/?$/.test(u.pathname)) return 'channel';
  if (/^\/(c|channel|user)\/[^/]+\/?$/.test(u.pathname)) return 'channel';
  if (u.pathname === '/' || u.pathname === '') return 'home';
  return 'other';
}

function hostnameOf(urlStr) {
  try {
    return new URL(urlStr).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

// ---------- 3. HTTP fetch with timeout/retry ----------

async function fetchWithTimeout(url, opts) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...opts, signal: controller.signal, redirect: 'follow' });
  } finally {
    clearTimeout(timer);
  }
}

async function requestOnce(url, method) {
  return fetchWithTimeout(url, {
    method,
    headers: {
      'User-Agent': UA,
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });
}

// Returns { ok, status, finalUrl, error, body? }
async function checkUrl(url, { needBody = false } = {}) {
  // Pages where we need to inspect HTML (YouTube watch pages) skip HEAD entirely —
  // no point spending a request on a response body we're about to discard.
  const methods = needBody ? ['GET'] : ['HEAD', 'GET'];
  let lastErr = null;

  for (const method of methods) {
    let attempt = 0;
    while (attempt <= MAX_RETRIES_429) {
      try {
        const res = await requestOnce(url, method);
        if (res.status === 429 && attempt < MAX_RETRIES_429) {
          const retryAfter = Number(res.headers.get('retry-after')) || 1.5 * (attempt + 1);
          await sleep(retryAfter * 1000);
          attempt++;
          continue;
        }
        // HEAD blocked/not allowed (incl. rate-limited past retry budget) -> fall back to GET
        if (method === 'HEAD' && [403, 405, 429, 501].includes(res.status)) {
          lastErr = `HEAD->${res.status}`;
          break; // fall through to GET
        }
        // 429 with retries exhausted: report the real status rather than swallowing it.
        const body = needBody || res.status >= 400 ? await safeText(res) : undefined;
        return {
          ok: res.status < 400,
          status: res.status,
          finalUrl: res.url || url,
          error: null,
          body,
          headers: res.headers,
        };
      } catch (e) {
        lastErr = e.name === 'AbortError' ? 'timeout' : e.message;
        break; // fall through to next method (GET) if any remain
      }
    }
  }

  return { ok: false, status: null, finalUrl: url, error: lastErr || 'unknown error', body: undefined };
}

async function safeText(res) {
  try {
    return await res.text();
  } catch {
    return '';
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------- 4. Concurrency pool ----------

async function runPool(items, worker, concurrency) {
  const results = new Array(items.length);
  let idx = 0;
  async function next() {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, next));
  return results;
}

// ---------- 5. Main ----------

const YT_UNAVAILABLE_STRINGS = [
  'Video unavailable',
  'This video is private',
  'This video has been removed',
];

const BOT_CHALLENGE_STRINGS = [
  'just a moment',
  'attention required',
  'verify you are human',
  'checking your browser',
  'cf-browser-verification',
  'unusual traffic',
  'security check',
  'sorry, you have been blocked',
  'vercel security checkpoint',
  'additional security check is required',
];

// Best-effort: a 4xx/5xx from a CDN/anti-bot challenge page is not proof the
// underlying resource is gone — it means our automated request got challenged.
function detectBotChallenge(status, body, headers) {
  if (!status || status < 400) return null;
  const bodyLower = (body || '').toLowerCase();
  const stringHit = BOT_CHALLENGE_STRINGS.find((s) => bodyLower.includes(s));
  if (stringHit) return `page content matched bot-challenge marker "${stringHit}"`;
  if (headers) {
    if (headers.get('x-vercel-mitigated')) return 'Vercel bot-mitigation header present';
    const server = (headers.get('server') || '').toLowerCase();
    if (server.includes('cloudflare') && [403, 429, 503].includes(status)) {
      return `Cloudflare-fronted origin returned HTTP ${status} (likely bot challenge, not confirmed dead)`;
    }
  }
  return null;
}

async function main() {
  const resources = loadResources();
  console.log(`Loaded ${resources.length} resources from roadmap-data.js`);

  // Duplicate URL detection (independent of network check)
  const byUrl = new Map();
  for (const r of resources) {
    if (!byUrl.has(r.url)) byUrl.set(r.url, []);
    byUrl.get(r.url).push(r);
  }
  const duplicateGroups = [...byUrl.entries()].filter(
    ([, list]) => list.length > 1 && new Set(list.map((r) => r.title)).size > 1
  );

  let checked = 0;
  const results = await runPool(
    resources,
    async (r) => {
      const ytKind = classifyYouTube(r.url);
      let outcome;

      if (ytKind === 'search') {
        outcome = { kind: 'search', ok: null, status: null, finalUrl: r.url };
      } else if (ytKind === 'channel') {
        // Still probe so we know if the channel itself is dead, but category is informational.
        const check = await checkUrl(r.url);
        outcome = { kind: 'channel', ...check };
      } else if (ytKind === 'watch') {
        const check = await checkUrl(r.url, { needBody: true });
        const bodyLower = (check.body || '').toLowerCase();
        const unavailableHit = YT_UNAVAILABLE_STRINGS.find((s) =>
          bodyLower.includes(s.toLowerCase())
        );
        outcome = { kind: 'watch', ...check, unavailableHit: unavailableHit || null };
      } else {
        const check = await checkUrl(r.url);
        outcome = { kind: ytKind === 'home' ? 'yt-home' : 'normal', ...check };
      }

      checked++;
      if (checked % 25 === 0) console.log(`  checked ${checked}/${resources.length}`);
      return { ...r, ...outcome };
    },
    CONCURRENCY
  );

  // ---------- Bucket results ----------

  const brokenConfirmed = [];
  const brokenInconclusive = [];
  const redirectedDiffDomain = [];
  const ytUnavailable = [];
  const searchLinks = [];
  const channelOnly = [];

  for (const r of results) {
    if (r.kind === 'search') {
      searchLinks.push(r);
      continue;
    }
    if (r.kind === 'watch' && r.unavailableHit) {
      ytUnavailable.push(r);
    }
    if (r.kind === 'channel') {
      channelOnly.push(r);
    }

    // Broken: applies to any kind that we actually probed
    if (r.status === null || r.status >= 400) {
      const botReason = r.status ? detectBotChallenge(r.status, r.body, r.headers) : null;
      if (botReason) {
        brokenInconclusive.push({ ...r, botReason });
      } else {
        brokenConfirmed.push(r);
      }
    } else {
      const origHost = hostnameOf(r.url);
      const finalHost = hostnameOf(r.finalUrl);
      if (origHost && finalHost && origHost !== finalHost) {
        redirectedDiffDomain.push(r);
      }
    }
  }

  // ---------- Report ----------

  const lines = [];
  lines.push('# Link Audit Report — roadmap-data.js');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(
    `**Summary:** ${resources.length} checked, ${brokenConfirmed.length + brokenInconclusive.length} broken ` +
      `(${brokenConfirmed.length} confirmed, ${brokenInconclusive.length} inconclusive/bot-challenge), ` +
      `${searchLinks.length} search-links, ${duplicateGroups.length} duplicate-url groups, ` +
      `${ytUnavailable.length} youtube-unavailable, ${channelOnly.length} channel-only, ` +
      `${redirectedDiffDomain.length} redirected-to-different-domain.`
  );
  lines.push('');
  lines.push(
    'This report only flags problems. No replacement URLs are suggested — each flagged entry needs a human-verified replacement before roadmap-data.js is edited.'
  );
  lines.push('');
  lines.push(
    '**Note on "inconclusive/bot-challenge" entries:** several premium platforms (Udemy, Pluralsight) and ' +
      'Cloudflare/Vercel-protected sites (Guru99, WebPageTest, TryHackMe) return a bot-challenge page ' +
      '("Just a moment...", "Attention Required", "Verify you are human", a Vercel checkpoint, etc.) to ' +
      'automated requests instead of the real page. That is not proof the underlying resource is dead — it means ' +
      'this script could not get past the challenge. These need a manual browser check, not an automated one, ' +
      'before being treated as broken. Genuine 404/410 "Page Not Found" responses (verified by inspecting real ' +
      'page content on a sample of them) are listed separately as confirmed.'
  );
  lines.push('');

  function entryLine(r, extra) {
    return (
      `- **${r.title}** _(${r.provider})_\n` +
      `  - Category: ${r.category} → ${r.skill}\n` +
      `  - URL: ${r.url}\n` +
      (extra ? `  - ${extra}\n` : '')
    );
  }

  lines.push('## BROKEN — CONFIRMED (4xx / 5xx / timeout / DNS failure, not a bot-challenge page)');
  lines.push('');
  if (brokenConfirmed.length === 0) lines.push('_None found._');
  for (const r of brokenConfirmed) {
    const detail =
      r.status === null
        ? `Problem: request failed — ${r.error}`
        : `Problem: HTTP ${r.status}` + (r.finalUrl !== r.url ? ` (final URL: ${r.finalUrl})` : '');
    lines.push(entryLine(r, detail));
  }
  lines.push('');

  lines.push('## BROKEN — INCONCLUSIVE (bot/CDN challenge — needs manual browser check)');
  lines.push('');
  if (brokenInconclusive.length === 0) lines.push('_None found._');
  for (const r of brokenInconclusive) {
    lines.push(entryLine(r, `Problem: HTTP ${r.status} — ${r.botReason}`));
  }
  lines.push('');

  lines.push('## REDIRECTED TO DIFFERENT DOMAIN (possible dead-site takeover)');
  lines.push('');
  if (redirectedDiffDomain.length === 0) lines.push('_None found._');
  for (const r of redirectedDiffDomain) {
    lines.push(
      entryLine(
        r,
        `Problem: redirects from ${hostnameOf(r.url)} to ${hostnameOf(r.finalUrl)} (HTTP ${r.status}) — final URL: ${r.finalUrl}`
      )
    );
  }
  lines.push('');

  lines.push('## YOUTUBE VIDEO UNAVAILABLE (detected via page content)');
  lines.push('');
  if (ytUnavailable.length === 0) lines.push('_None found._');
  for (const r of ytUnavailable) {
    lines.push(entryLine(r, `Problem: page content matched "${r.unavailableHit}" (HTTP ${r.status})`));
  }
  lines.push('');

  lines.push('## SEARCH-QUERY LINKS (not a real resource)');
  lines.push('');
  if (searchLinks.length === 0) lines.push('_None found._');
  for (const r of searchLinks) {
    lines.push(entryLine(r, 'Problem: URL is a YouTube search-results page, not a direct resource link'));
  }
  lines.push('');

  lines.push('## DUPLICATE URLS (same link reused for different titles)');
  lines.push('');
  if (duplicateGroups.length === 0) lines.push('_None found._');
  for (const [url, list] of duplicateGroups) {
    lines.push(`- URL: ${url}`);
    for (const r of list) {
      lines.push(`  - **${r.title}** _(${r.provider})_ — ${r.category} → ${r.skill}`);
    }
    lines.push('');
  }

  lines.push('## CHANNEL-ONLY LINKS (informational — works fine, just not video-specific)');
  lines.push('');
  if (channelOnly.length === 0) lines.push('_None found._');
  for (const r of channelOnly) {
    const status = r.status === null ? `unreachable (${r.error})` : `HTTP ${r.status}`;
    lines.push(entryLine(r, `Info: links to a channel, not a specific resource (${status})`));
  }
  lines.push('');

  writeFileSync(REPORT_FILE, lines.join('\n'), 'utf8');

  console.log('');
  console.log(
    `${resources.length} checked, ${brokenConfirmed.length} broken-confirmed, ` +
      `${brokenInconclusive.length} broken-inconclusive, ${searchLinks.length} search-links, ` +
      `${duplicateGroups.length} duplicates, ${ytUnavailable.length} youtube-unavailable, ${channelOnly.length} channel-only`
  );
  console.log(`Report written to ${REPORT_FILE}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
