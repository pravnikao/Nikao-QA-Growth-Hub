(() => {
  const data = window.NIKAO_ROADMAP;
  const categories = data.categories || [];
  const state = { category: categories[0]?.name, page: "home", currentSkill: null };

  const allResources = categories.flatMap(category =>
    category.skills.flatMap(skill =>
      skill.resources.map(resource => ({
        ...resource,
        category: category.name,
        skill: skill.name
      }))
    )
  );

  const qs = selector => document.querySelector(selector);
  const qsa = selector => [...document.querySelectorAll(selector)];
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
  const slugify = value => String(value ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const typeLabel = type => ({ course: "Course", video: "Video", article: "Reference" }[type] || "Resource");
  const looseMatch = (a, b) => {
    const al = String(a ?? "").toLowerCase();
    const bl = String(b ?? "").toLowerCase();
    return !!al && !!bl && (al.includes(bl) || bl.includes(al));
  };

  function findSkillByLooseName(name) {
    for (const category of categories) {
      for (const skill of category.skills) {
        if (looseMatch(skill.name, name)) return { category, skill };
      }
    }
    return null;
  }

  function findSkill(slug) {
    for (const category of categories) {
      for (const skill of category.skills) {
        if (slugify(skill.name) === slug) return { category, skill };
      }
    }
    return null;
  }

  function findSkillByExactName(name) {
    for (const category of categories) {
      for (const skill of category.skills) {
        if (skill.name === name) return { category, skill };
      }
    }
    return null;
  }

  function topResourceForSkill(skill) {
    const bySection = section => skill.resources.find(r => r.section === section);
    return bySection("Premium Courses") || bySection("Free YouTube") || bySection("Free References") || null;
  }

  function navigate(page, opts = {}) {
    state.page = page;
    qsa(".page").forEach(el => el.classList.toggle("active", el.id === `${page}Page`));
    qsa("[data-nav]").forEach(el => el.classList.toggle("active", el.dataset.nav === page));
    const hash = page === "skillDetail" && opts.slug ? `#skill/${opts.slug}` : `#${page}`;
    history.replaceState(null, "", hash);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (page === "library") renderLibrary();
  }

  function renderStats() {
    const skillCount = categories.reduce((sum, category) => sum + category.skills.length, 0);
    const freeCount = allResources.filter(resource => resource.isFree).length;
    const stats = [
      [categories.length, "Learning categories"],
      [skillCount, "Skills"],
      [allResources.length, "Curated resources"],
      [freeCount, "Free resources"]
    ];
    qs("#stats").innerHTML = stats.map(([value, label]) =>
      `<article class="stat-card"><strong>${value}</strong><span>${label}</span></article>`
    ).join("");
  }

  function renderHomeCategories() {
    qs("#homeCategories").innerHTML = categories.map(category => `
      <article class="skill-card" tabindex="0" data-accent="${category.accent}" data-category-open="${escapeHtml(category.name)}">
        <div class="card-kicker">Category ${category.displayOrder}</div>
        <h3>${escapeHtml(category.name)}</h3>
        <p>${escapeHtml(category.description)}</p>
        <span class="card-link">${category.skills.length} skills &rarr;</span>
      </article>
    `).join("");
  }

  function renderPills() {
    const pills = categories.map(c => ({ name: c.name, label: c.name }));
    qs("#categoryPills").innerHTML = pills.map(item => `
      <button class="pill ${state.category === item.name ? "active" : ""}" data-category="${escapeHtml(item.name)}">
        ${escapeHtml(item.label)}
      </button>
    `).join("");
  }

  function renderSkills() {
    const visibleCategories = categories.filter(category => category.name === state.category);

    qs("#skillGrid").innerHTML = visibleCategories.flatMap(category =>
      category.skills.map(skill => `
        <article class="skill-card" tabindex="0" data-accent="${category.accent}"
          data-skill-slug="${slugify(skill.name)}">
          <div class="card-kicker">${escapeHtml(category.name)}</div>
          <h3>${escapeHtml(skill.name)}</h3>
          <p>${skill.resources.length} resources across premium courses, free videos and free references.</p>
          <span class="card-link">View skill details &rarr;</span>
        </article>
      `)
    ).join("");
  }

  function resourceCard(resource) {
    return `
      <article class="resource-card">
        <div class="badges">
          <span class="badge">${typeLabel(resource.type)}</span>
          <span class="badge ${resource.isFree ? "free" : "premium"}">${resource.isFree ? "Free" : "Premium"}</span>
        </div>
        <div class="provider">${escapeHtml(resource.provider || resource.section)}</div>
        <h3>${escapeHtml(resource.title)}</h3>
        <p class="meta-line">${escapeHtml(resource.skill)}${resource.category ? " &middot; " + escapeHtml(resource.category) : ""}</p>
        <div class="resource-actions">
          <a class="action-button" href="${escapeHtml(resource.url || "#")}" target="_blank" rel="noopener noreferrer">Start learning</a>
        </div>
      </article>
    `;
  }

  function renderSkillDetail(slug) {
    const found = findSkill(slug);
    if (!found) { navigate("skills"); return; }
    const { category, skill } = found;
    state.currentSkill = slug;

    qs("#skillDetailCategory").textContent = category.name;
    qs("#skillDetailTitle").textContent = skill.name;
    qs("#skillDetailDescription").textContent = category.description;

    const sections = [
      { key: "Premium Courses", label: "Premium courses" },
      { key: "Free YouTube", label: "Free YouTube" },
      { key: "Free References", label: "Free references" }
    ];

    let badgeNumber = 0;
    const sectionsHtml = sections.map(section => {
      const items = skill.resources.filter(r => r.section === section.key);
      if (!items.length) return "";
      badgeNumber += 1;
      return `
        <div class="section-label">
          <span class="step-badge">${badgeNumber}</span>
          <h3>${section.label}</h3>
        </div>
        <div class="resource-grid">
          ${items.map(resourceCard).join("")}
        </div>
      `;
    }).join("");

    const relatedCerts = (data.certifications || [])
      .flatMap(group => group.items)
      .filter(item => (item.requiredSkills || []).some(tag => looseMatch(skill.name, tag)));

    const relatedCertsHtml = relatedCerts.length ? `
      <div class="section-label">
        <span class="step-badge">${badgeNumber + 1}</span>
        <h3>Related certifications</h3>
      </div>
      <div class="badges">
        ${relatedCerts.map(item => `<button type="button" class="badge" data-nav="certifications">${escapeHtml(item.name)}</button>`).join("")}
      </div>
    ` : "";

    qs("#skillDetailBody").innerHTML = sectionsHtml + relatedCertsHtml;

    navigate("skillDetail", { slug });
  }

  function populateFilters() {
    qs("#categoryFilter").innerHTML = `<option value="">All categories</option>` +
      categories.map(category => `<option value="${escapeHtml(category.name)}">${escapeHtml(category.name)}</option>`).join("");
  }

  function renderLibrary() {
    const search = qs("#resourceSearch").value.trim().toLowerCase();
    const category = qs("#categoryFilter").value;
    const type = qs("#typeFilter").value;
    const cost = qs("#costFilter").value;

    const filtered = allResources.filter(resource => {
      const haystack = `${resource.title} ${resource.provider || ""} ${resource.skill} ${resource.category}`.toLowerCase();
      return (!search || haystack.includes(search))
        && (!category || resource.category === category)
        && (!type || resource.type === type)
        && (!cost || (cost === "free" ? resource.isFree : !resource.isFree));
    });

    qs("#resultsLine").textContent = `${filtered.length} resource${filtered.length === 1 ? "" : "s"} found`;
    qs("#resourceGrid").innerHTML = filtered.length
      ? filtered.map(resourceCard).join("")
      : `<div class="empty-state"><h3>No resources match these filters</h3><p>Try clearing one or more filters.</p></div>`;
  }

  function renderCertifications() {
    const groups = data.certifications || [];
    qs("#certificationGroups").innerHTML = groups.map(group => `
      <div class="cert-group-header">
        <span class="step-badge" style="background:var(--nikao-${group.accent === "ocean" ? "ocean" : group.accent === "teal" ? "teal" : "lime"});${group.accent === "lime" ? "color:var(--nikao-aubergine)" : ""}">${escapeHtml(group.category.split(" ")[0][0])}</span>
        <h3>${escapeHtml(group.category)}</h3>
      </div>
      <div class="cert-grid">
        ${group.items.map(item => `
          <article class="cert-card" data-accent="${group.accent}">
            <span class="badge cert-level">${escapeHtml(item.level)}</span>
            <div class="provider">${escapeHtml(item.body)}</div>
            <h4>${escapeHtml(item.name)}</h4>
            <p>${escapeHtml(item.description)}</p>
            ${(item.requiredSkills || []).length ? `
              <div class="badges skill-tags">
                ${item.requiredSkills.map(tag => {
                  const match = findSkillByLooseName(tag);
                  return match
                    ? `<button type="button" class="badge" data-skill-slug="${slugify(match.skill.name)}">${escapeHtml(tag)}</button>`
                    : `<span class="badge">${escapeHtml(tag)}</span>`;
                }).join("")}
              </div>
            ` : ""}
            <div class="resource-actions">
              <a class="action-button secondary" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">View certification</a>
            </div>
          </article>
        `).join("")}
      </div>
    `).join("");
  }

  function renderPaths() {
    qs("#pathGrid").innerHTML = (data.learningPaths || []).map(path => `
      <article class="path-card">
        <h3>${escapeHtml(path.level || "Learning path")}</h3>
        ${(path.steps || []).map((step, index) => {
          const title = step.title || step;
          const description = step.description || "";
          const skillNames = step.skillNames || (step.skillName ? [step.skillName] : []);
          const matches = skillNames.map(name => findSkillByExactName(name)).filter(Boolean);

          const skillBlocksHtml = matches.map(({ skill }) => {
            const resource = topResourceForSkill(skill);
            return `
              ${resource ? `
                <p>${escapeHtml(resource.provider)} &mdash; ${escapeHtml(resource.title)}
                  <a class="badge" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">Start</a>
                </p>
              ` : ""}
              <button type="button" class="card-link" data-skill-slug="${slugify(skill.name)}">View full skill &rarr;</button>
            `;
          }).join("");

          return `
            <div class="path-step">
              <span class="step-number">${index + 1}</span>
              <div>
                <strong>${escapeHtml(title)}</strong>
                ${description ? `<p>${escapeHtml(description)}</p>` : ""}
                ${skillBlocksHtml}
              </div>
            </div>
          `;
        }).join("")}
      </article>
    `).join("");
  }

  function platformCard(platform, extra) {
    return `
      <article class="platform-card">
        <h3>${escapeHtml(platform.name)}</h3>
        ${extra ? `<div class="cost">${escapeHtml(extra)}</div>` : ""}
        <p>${escapeHtml(platform.description || platform.bestFor || "")}</p>
        <div class="resource-actions">
          <a class="action-button" href="${escapeHtml(platform.url || "#")}" target="_blank" rel="noopener noreferrer">Visit site</a>
        </div>
      </article>
    `;
  }

  function renderPlatforms() {
    qs("#freePlatformGrid").innerHTML = (data.freePlatforms || []).map(p => platformCard(p)).join("");
    qs("#premiumPlatformGrid").innerHTML = (data.premiumPlatforms || []).map(p => platformCard(p, p.cost)).join("");
  }

  document.addEventListener("click", event => {
    const nav = event.target.closest("[data-nav]");
    if (nav) { navigate(nav.dataset.nav); return; }

    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      state.category = categoryButton.dataset.category;
      renderPills();
      renderSkills();
      return;
    }

    const categoryCard = event.target.closest("[data-category-open]");
    if (categoryCard) {
      state.category = categoryCard.dataset.categoryOpen;
      renderPills();
      renderSkills();
      navigate("skills");
      return;
    }

    const skillCard = event.target.closest("[data-skill-slug]");
    if (skillCard) { renderSkillDetail(skillCard.dataset.skillSlug); return; }
  });

  document.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches(".skill-card")) {
      event.preventDefault();
      event.target.click();
    }
  });

  ["resourceSearch", "categoryFilter", "typeFilter", "costFilter"].forEach(id => {
    qs(`#${id}`).addEventListener(id === "resourceSearch" ? "input" : "change", renderLibrary);
  });

  qs("#mobileMenuButton").addEventListener("click", () => {
    const order = ["home", "skills", "library", "paths", "certifications", "platforms"];
    const next = order[(order.indexOf(state.page) + 1) % order.length] || "home";
    navigate(next);
  });

  renderStats();
  renderHomeCategories();
  renderPills();
  renderSkills();
  populateFilters();
  renderLibrary();
  renderPaths();
  renderPlatforms();
  renderCertifications();

  const initialHash = location.hash.replace("#", "");
  if (initialHash.startsWith("skill/")) {
    renderSkillDetail(initialHash.replace("skill/", ""));
  } else {
    const pages = ["home", "skills", "library", "paths", "certifications", "platforms"];
    navigate(pages.includes(initialHash) ? initialHash : "home");
  }
})();
