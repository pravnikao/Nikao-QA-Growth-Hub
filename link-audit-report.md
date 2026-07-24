# Link Audit Report — roadmap-data.js

Generated: 2026-07-24T17:28:40.860Z

**Summary:** 60 checked, 11 broken (1 confirmed, 10 inconclusive/bot-challenge), 0 search-links, 2 duplicate-url groups, 0 youtube-unavailable, 9 channel-only, 1 redirected-to-different-domain.

This report only flags problems. No replacement URLs are suggested — each flagged entry needs a human-verified replacement before roadmap-data.js is edited.

**Note on "inconclusive/bot-challenge" entries:** several premium platforms (Udemy, Pluralsight) and Cloudflare/Vercel-protected sites (Guru99, WebPageTest, TryHackMe) return a bot-challenge page ("Just a moment...", "Attention Required", "Verify you are human", a Vercel checkpoint, etc.) to automated requests instead of the real page. That is not proof the underlying resource is dead — it means this script could not get past the challenge. These need a manual browser check, not an automated one, before being treated as broken. Genuine 404/410 "Page Not Found" responses (verified by inspecting real page content on a sample of them) are listed separately as confirmed.

## BROKEN — CONFIRMED (4xx / 5xx / timeout / DNS failure, not a bot-challenge page)

- **Ministry of Testing YouTube Channel** _(Ministry of Testing)_
  - Category: Test Fundamentals & Design → ISTQB Foundations & Testing Principles
  - URL: https://www.youtube.com/@ministryoftesting
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@ministryoftesting?cbrd=1&ucbcb=1)


## BROKEN — INCONCLUSIVE (bot/CDN challenge — needs manual browser check)

- **ISTQB® Certified Tester - Foundation Level - 2026 (Accredited)** _(Udemy)_
  - Category: Test Fundamentals & Design → ISTQB Foundations & Testing Principles
  - URL: https://www.udemy.com/course/accredited-istqb-certified-tester-foundation-level-course/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Selenium WebDriver with Java - Basics to Advanced+Frameworks** _(Rahul Shetty Academy)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver
  - URL: https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Playwright JS/TS Automation Testing from Scratch & Framework** _(Rahul Shetty Academy)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.udemy.com/course/playwright-tutorials-automation-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Cypress: Web Automation Testing from Zero to Hero** _(Artem Bondar)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.udemy.com/course/cypress-web-automation-testing-from-zero-to-hero/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Appium - Mobile Testing (Android/iOS) from Scratch+Frameworks** _(Rahul Shetty Academy)_
  - Category: Test Automation (UI & Frameworks) → Appium (Mobile Automation)
  - URL: https://www.udemy.com/course/mobile-automation-using-appiumselenium-3/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **REST API Testing (Automation) from Scratch - Rest Assured Java** _(Rahul Shetty Academy)_
  - Category: API & Integration Testing → Postman & REST API Testing
  - URL: https://www.udemy.com/course/rest-api-automation-testing-rest-assured/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **ISTQB Performance Testing (CT-PT prep) - 2025** _(Udemy)_
  - Category: Performance Engineering → Performance Testing Fundamentals
  - URL: https://www.udemy.com/course/istqb-performance-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Free Cybersecurity Training Rooms** _(TryHackMe)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing
  - URL: https://tryhackme.com/
  - Problem: HTTP 429 — page content matched bot-challenge marker "security check"

- **2026 - ISTQB AI Testing (CT-AI) Certification Crash Course** _(Udemy)_
  - Category: AI-Assisted Testing → ISTQB AI Testing
  - URL: https://www.udemy.com/course/isqtb-ai-testing-ct-ai/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **ISTQB Test Management (CTAL-TM) v3.0/2012 - Updated 2025** _(Udemy)_
  - Category: Test Leadership & Delivery → Test Strategy & Management
  - URL: https://www.udemy.com/course/istqb-advanced-level-test-manager-ctal/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"


## REDIRECTED TO DIFFERENT DOMAIN (possible dead-site takeover)

- **Official k6 Documentation** _(Grafana)_
  - Category: Performance Engineering → Performance Testing Fundamentals
  - URL: https://k6.io/docs/
  - Problem: redirects from k6.io to grafana.com (HTTP 200) — final URL: https://grafana.com/docs/k6/latest/


## YOUTUBE VIDEO UNAVAILABLE (detected via page content)

_None found._

## SEARCH-QUERY LINKS (not a real resource)

_None found._

## DUPLICATE URLS (same link reused for different titles)

- URL: https://istqb.org/wp-content/uploads/2026/05/ISTQB-_CTAI_Syllabus_v2.0_Release.pdf
  - **ISTQB AI Testing Syllabus (Official PDF)** _(ISTQB)_ — Test Fundamentals & Design → ISTQB Foundations & Testing Principles
  - **CT-AI v2.0 Syllabus (Official PDF)** _(ISTQB)_ — AI-Assisted Testing → ISTQB AI Testing

- URL: https://www.youtube.com/@RaghavPal
  - **Raghav Pal - Selenium, Jenkins, Docker, JMeter, k6, Postman** _(Automation Step by Step)_ — Test Automation (UI & Frameworks) → Selenium WebDriver
  - **k6 Tutorials** _(Grafana Labs)_ — Performance Engineering → Performance Testing Fundamentals

## CHANNEL-ONLY LINKS (informational — works fine, just not video-specific)

- **Ministry of Testing YouTube Channel** _(Ministry of Testing)_
  - Category: Test Fundamentals & Design → ISTQB Foundations & Testing Principles
  - URL: https://www.youtube.com/@ministryoftesting
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Angie Jones YouTube Channel** _(Angie Jones)_
  - Category: Test Fundamentals & Design → Agile & Scrum Testing
  - URL: https://www.youtube.com/@angiejones
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Raghav Pal - Selenium, Jenkins, Docker, JMeter, k6, Postman** _(Automation Step by Step)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Selenium, Java, TestNG, Cucumber** _(Naveen AutomationLabs)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver
  - URL: https://www.youtube.com/@NaveenAutomationLabs
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Playwright with JavaScript** _(The Testing Academy)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Cypress Tutorial** _(Testers Talk)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.youtube.com/@TestersTalk
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Appium and Mobile Automation** _(SDET-QA (Pavan))_
  - Category: Test Automation (UI & Frameworks) → Appium (Mobile Automation)
  - URL: https://www.youtube.com/@sdetpavan
  - Info: links to a channel, not a specific resource (HTTP 200)

- **DevOps and CI/CD Full Courses** _(freeCodeCamp)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Pipeline Integration
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **k6 Tutorials** _(Grafana Labs)_
  - Category: Performance Engineering → Performance Testing Fundamentals
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

