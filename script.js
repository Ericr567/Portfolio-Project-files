const profile = {
  name: "Eric Rogers Jr.",
  linkedin: "https://www.linkedin.com/in/eric-rogers-46298b2aa",
  github: "https://github.com/Ericr567",
  email: "ericrrj98@gmail.com",
  headline: "Junior front-end developer focused on React, JavaScript, accessible UI, and responsive design.",
  about:
    "I bring a hospitality background shaped by consistency, communication, and service-first thinking into front-end development. My work centers on responsive interfaces, clean UI decisions, and practical user experience improvements built with modern web tools. I am actively looking for an opportunity where I can contribute to a team, keep learning fast, and ship polished front-end work that helps real users."
};

const nowFocus = [
  {
    title: "Sharpening React Fundamentals",
    detail: "Building reusable components and improving state patterns to ship cleaner front-end architecture."
  },
  {
    title: "Accessibility-First UI",
    detail: "Applying keyboard, contrast, and semantic structure checks so interfaces are comfortable for all users."
  },
  {
    title: "Production Readiness",
    detail: "Practicing deployment workflows, bug triage, and polish passes that keep projects reliable after launch."
  }
];

const projects = [
  {
    title: "LineFlow BOH Dashboard",
    summary:
      "An installable TypeScript dashboard for restaurant operations that gives managers quick visibility into prep status, station workload, low-stock alerts, and shift handoff notes.",
    tags: ["React", "TypeScript", "Dashboard", "PWA"],
    highlights: [
      "Built manager and staff views for service readiness, station workload, and handoff tracking",
      "Added backup export and import workflows with resilient local data handling",
      "Shipped a live Vercel deployment with responsive UI and production build checks"
    ],
    featured: true,
    image: "assets/images/generated/boh-dashboard-live.png",
    imageAlt: "LineFlow BOH Dashboard live app screenshot",
    demoHref: "https://boh-dashboard.vercel.app/",
    demoLabel: "Live Demo",
    href: "https://github.com/Ericr567/Boh-dashboard",
    hrefLabel: "View Code on GitHub"
  },
  {
    title: "Pokédex Web App",
    summary:
      "A feature-rich React app that turns public Pokémon API data into a polished experience with search, team building, favorites, and battle features.",
    tags: ["React", "JavaScript", "API", "UX"],
    highlights: [
      "Integrated search, filters, favorites, and cached detail views from external API data",
      "Built team builder, shiny tracking, and battle mode interactions beyond a basic list app",
      "Improved usability with dark mode, offline handling, and sprite fallback behavior"
    ],
    image: "assets/images/generated/pokedex-live.png",
    imageAlt: "Pokédex live app screenshot",
    demoHref: "https://pokedex-projectv2.netlify.app/",
    demoLabel: "Live Demo",
    href: "https://github.com/Ericr567/PokeDex-project-folder",
    hrefLabel: "View Code on GitHub"
  },
  {
    title: "NorthLine Club Landing Page",
    summary:
      "A responsive sign-up landing page concept designed to improve first impressions through strong hierarchy, clear calls to action, and polished form presentation.",
    tags: ["HTML", "CSS", "Responsive Design"],
    highlights: [
      "Structured a single-page layout around conversion-focused messaging and CTA placement",
      "Used modern CSS styling and spacing to create a cleaner onboarding experience",
      "Built a lightweight mobile-friendly page that stays readable across screen sizes"
    ],
    image: "assets/images/generated/northline-club-link.png",
    imageAlt: "NorthLine Club project preview screenshot",
    href: "https://github.com/Ericr567/NorthLineProject",
    hrefLabel: "View Code on GitHub"
  },
  {
    title: "Northline E-Com",
    summary:
      "A live storefront concept focused on product presentation, browsing flow, and a clean front-end shopping experience.",
    tags: ["HTML", "CSS", "JavaScript", "E-Commerce"],
    highlights: [
      "Built a product-focused layout with clear browsing sections and visual hierarchy",
      "Designed responsive shopping views for desktop and mobile users",
      "Demonstrated polished front-end styling and practical e-commerce UI patterns"
    ],
    image: "assets/images/generated/northline-ecom-live.png",
    imageAlt: "Northline E-Com live storefront screenshot",
    demoHref: "https://northlinee-market.netlify.app",
    demoLabel: "Live Demo",
    href: "https://github.com/Ericr567",
    hrefLabel: "View GitHub Profile"
  }
];

const educationItems = [
  {
    title: "HTML Certification",
    issuer: "Certificate File",
    detail: "Validated certification in HTML fundamentals and markup structure.",
    href: "assets/certs/sql-certificate.pdf?v=20260418",
    hrefLabel: "View HTML Certificate"
  },
  {
    title: "CSS Certification",
    issuer: "Certificate File",
    detail: "Validated certification in CSS styling, layout systems, and responsive design.",
    href: "assets/certs/swift-certificate.pdf?v=20260418",
    hrefLabel: "View CSS Certificate"
  },
  {
    title: "SQL Certification",
    issuer: "Certificate File",
    detail: "Validated certification in SQL querying, relational data concepts, and database operations.",
    href: "assets/certs/css-certificate.pdf?v=20260418",
    hrefLabel: "View SQL Certificate"
  },
  {
    title: "JavaScript Certification",
    issuer: "Certificate File",
    detail: "Validated certification in JavaScript syntax, interactivity, and application logic.",
    href: "assets/certs/javascript-certificate.pdf?v=20260418",
    hrefLabel: "View JavaScript Certificate"
  },
  {
    title: "React Certification",
    issuer: "Certificate File",
    detail: "Validated certification in React components, state management, and modern UI development.",
    href: "assets/certs/python-certificate.pdf?v=20260418",
    hrefLabel: "View React Certificate"
  },
  {
    title: "TypeScript Certification",
    issuer: "Certificate File",
    detail: "Validated certification in typed JavaScript development and scalable application patterns.",
    href: "assets/certs/typescript-certificate.pdf?v=20260418",
    hrefLabel: "View TypeScript Certificate"
  },
  {
    title: "Python Certification",
    issuer: "Certificate File",
    detail: "Validated certification in Python programming, scripting, and problem solving.",
    href: "assets/certs/html-certificate.pdf?v=20260418",
    hrefLabel: "View Python Certificate"
  },
  {
    title: "Swift Certification",
    issuer: "Certificate File",
    detail: "Validated certification in Swift programming and native application development fundamentals.",
    href: "assets/certs/react-certificate.pdf?v=20260418",
    hrefLabel: "View Swift Certificate"
  },
  {
    title: "Front End Development Certification",
    issuer: "Certificate File",
    detail: "Validated certification in front-end development principles, responsive interfaces, and modern web UI implementation.",
    href: "assets/certs/frontend-development-certificate.pdf?v=20260418",
    hrefLabel: "View Front End Development Certificate"
  }
];

const skills = [
  "UI Design",
  "UX Design",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "SQL",
  "Python",
  "Swift"
];

const words = ["with React and JavaScript.", "with accessible design.", "for teams that need polished UI."];
const useReactProjectsLayer = document.body?.dataset.reactLayer === "true";

window.PORTFOLIO_DATA = {
  profile,
  nowFocus,
  projects,
  educationItems,
  skills,
  useReactProjectsLayer
};

const devModeParams = new URLSearchParams(window.location.search);
const devModeParam = devModeParams.get("dev");
const forceProdMode = devModeParam === "0" || devModeParam === "false";

if (devModeParam === "1" || devModeParam === "true") {
  localStorage.setItem("portfolio-dev-mode", "true");
}

if (devModeParam === "0" || devModeParam === "false") {
  localStorage.removeItem("portfolio-dev-mode");
}

const runtimeFlags = {
  isDevMode: (() => {
    if (forceProdMode) {
      return false;
    }

    const host = window.location.hostname;
    const isLocalHost = host === "localhost" || host === "127.0.0.1" || host === "::1";
    const isFilePreview = window.location.protocol === "file:";
    const storedDevFlag = localStorage.getItem("portfolio-dev-mode") === "true";
    return isLocalHost || isFilePreview || storedDevFlag;
  })()
};

document.documentElement.dataset.devMode = String(runtimeFlags.isDevMode);

const projectGrid = document.getElementById("project-grid");
const projectDisplay = document.getElementById("project-display");
const projectFilters = document.getElementById("project-filters");
const projectSearch = document.getElementById("project-search");
const siteHeader = document.querySelector(".site-header");
const siteNav = document.getElementById("site-nav");
const navToggle = document.getElementById("nav-toggle");
const styleToggle = document.getElementById("style-toggle");
const educationGrid = document.getElementById("education-grid");
const skillsCloud = document.getElementById("skills-cloud");
const nowGrid = document.getElementById("now-grid");
const typingText = document.getElementById("typing-text");
const counters = document.querySelectorAll(".counter");
const statusText = document.getElementById("form-status");
const heroCopy = document.getElementById("hero-copy");
const aboutTitle = document.getElementById("about-title");
const aboutCopy = document.getElementById("about-copy");
const certificateModal = document.getElementById("certificate-modal");
const certificateFrame = document.getElementById("certificate-frame");
const certificateTitle = document.getElementById("certificate-title");
const certificateClose = document.getElementById("certificate-close");
const certificateOpenLink = document.getElementById("certificate-open-link");
const certificateDownloadLink = document.getElementById("certificate-download-link");
const backToTopButton = document.getElementById("back-to-top");
const atmosphere = document.querySelector(".atmosphere");

const projectState = {
  filter: "All",
  query: ""
};

const projectsSearchIndex = projects.map((project) => ({
  ...project,
  searchText: `${project.title} ${project.summary} ${(project.tags || []).join(" ")} ${(project.highlights || []).join(" ")}`.toLowerCase()
}));

const stylePresetOrder = ["clean", "bold", "minimal"];

const cssRefinementProfiles = {
  night: {
    clean: {
      accent: "#6cb6ff",
      accentAlt: "#4fd1c5",
      accentCool: "#8af0df",
      sunGlow: "rgba(108, 182, 255, 0.16)",
      tideGlow: "rgba(79, 209, 197, 0.16)",
      fxBase: 0.82,
      blur: 11,
      radius: 21
    },
    bold: {
      accent: "#72beff",
      accentAlt: "#5ce3d0",
      accentCool: "#9bf5e8",
      sunGlow: "rgba(114, 190, 255, 0.22)",
      tideGlow: "rgba(92, 227, 208, 0.2)",
      fxBase: 1,
      blur: 12,
      radius: 22
    },
    minimal: {
      accent: "#7da8d8",
      accentAlt: "#6eb8bf",
      accentCool: "#97cfd4",
      sunGlow: "rgba(125, 168, 216, 0.12)",
      tideGlow: "rgba(110, 184, 191, 0.11)",
      fxBase: 0.58,
      blur: 8,
      radius: 18
    }
  },
  light: {
    clean: {
      accent: "#2f76d9",
      accentAlt: "#1ea7a1",
      accentCool: "#0f8f87",
      sunGlow: "rgba(47, 118, 217, 0.12)",
      tideGlow: "rgba(30, 167, 161, 0.11)",
      fxBase: 0.74,
      blur: 10,
      radius: 20
    },
    bold: {
      accent: "#2c7df0",
      accentAlt: "#11b6a8",
      accentCool: "#17a39d",
      sunGlow: "rgba(44, 125, 240, 0.15)",
      tideGlow: "rgba(17, 182, 168, 0.13)",
      fxBase: 0.92,
      blur: 11,
      radius: 22
    },
    minimal: {
      accent: "#4e729f",
      accentAlt: "#4e8e8d",
      accentCool: "#4f7f81",
      sunGlow: "rgba(78, 114, 159, 0.08)",
      tideGlow: "rgba(78, 142, 141, 0.08)",
      fxBase: 0.5,
      blur: 7,
      radius: 17
    }
  }
};

function initCssRefinements() {
  const root = document.documentElement;
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const storedPreset = localStorage.getItem("portfolio-style-preset");
  const state = {
    stylePreset: runtimeFlags.isDevMode && stylePresetOrder.includes(storedPreset) ? storedPreset : "clean"
  };

  const getTheme = () => root.dataset.theme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "night");

  const getProfile = (theme = getTheme()) => {
    const themeProfiles = cssRefinementProfiles[theme] || cssRefinementProfiles.night;
    return themeProfiles[state.stylePreset] || themeProfiles.clean;
  };

  const applyLayoutRefinements = () => {
    const profile = getProfile();
    const width = window.innerWidth;
    const compact = width < 760;
    const ultraWide = width > 1440;
    const compactScale = compact ? 0.85 : 1;
    const motionScale = reducedMotionQuery.matches ? 0.68 : 1;
    const fxStrength = Math.max(0.35, profile.fxBase * compactScale * motionScale);

    root.style.setProperty("--section-gap", compact ? "2.8rem" : ultraWide ? "5.8rem" : "clamp(3.2rem, 6vw, 5.2rem)");
    root.style.setProperty("--hero-min-height", compact ? "auto" : "70vh");
    root.style.setProperty("--panel-radius", `${Math.max(16, Math.round(profile.radius - (compact ? 2 : 0)))}px`);
    root.style.setProperty("--glass-blur", `${Math.max(6, Math.round(profile.blur - (compact ? 2 : 0)))}px`);
    root.style.setProperty("--fx-strength", fxStrength.toFixed(2));
  };

  const applyThemeRefinements = (theme) => {
    const profile = getProfile(theme);
    root.style.setProperty("--accent", profile.accent);
    root.style.setProperty("--accent-alt", profile.accentAlt);
    root.style.setProperty("--accent-cool", profile.accentCool);
    root.style.setProperty("--sun-glow", profile.sunGlow);
    root.style.setProperty("--tide-glow", profile.tideGlow);
  };

  const applyStylePreset = (preset) => {
    if (!runtimeFlags.isDevMode) {
      state.stylePreset = "clean";
      root.dataset.stylePreset = "clean";
      if (styleToggle instanceof HTMLButtonElement) {
        styleToggle.textContent = "Style: Clean";
      }
      applyThemeRefinements(getTheme());
      applyLayoutRefinements();
      return;
    }

    if (stylePresetOrder.includes(preset)) {
      state.stylePreset = preset;
      localStorage.setItem("portfolio-style-preset", preset);
    }

    root.dataset.stylePreset = state.stylePreset;

    if (styleToggle instanceof HTMLButtonElement) {
      const label = `${state.stylePreset.charAt(0).toUpperCase()}${state.stylePreset.slice(1)}`;
      styleToggle.textContent = `Style: ${label}`;
    }

    applyThemeRefinements(getTheme());
    applyLayoutRefinements();
  };

  const cycleStylePreset = () => {
    const currentIndex = stylePresetOrder.indexOf(state.stylePreset);
    const nextPreset = stylePresetOrder[(currentIndex + 1) % stylePresetOrder.length];
    applyStylePreset(nextPreset);
  };

  applyLayoutRefinements();
  applyStylePreset(state.stylePreset);

  window.addEventListener("resize", applyLayoutRefinements, { passive: true });
  if (typeof reducedMotionQuery.addEventListener === "function") {
    reducedMotionQuery.addEventListener("change", applyLayoutRefinements);
  }

  return {
    isDevMode: runtimeFlags.isDevMode,
    applyStylePreset,
    applyLayoutRefinements,
    applyThemeRefinements,
    cycleStylePreset
  };
}

const cssRefiner = initCssRefinements();

function initStylePresetToggle() {
  if (!(styleToggle instanceof HTMLButtonElement)) {
    return;
  }

  if (!cssRefiner.isDevMode) {
    styleToggle.hidden = true;
    return;
  }

  styleToggle.addEventListener("click", () => {
    cssRefiner.cycleStylePreset();
  });
}

function debounce(callback, delay = 140) {
  let timerId;
  return (...args) => {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => callback(...args), delay);
  };
}

/**
 * Populate profile information from data into the DOM
 * Sets hero copy, about title, and about section copy
 */
function hydrateProfileContent() {
  heroCopy.textContent = `${profile.name} is a junior front-end developer building clean, responsive, and user-focused interfaces. ${profile.headline}`;
  aboutTitle.textContent = `About ${profile.name}`;
  aboutCopy.innerHTML = `${profile.about} <a href="#projects">See the project work that demonstrates this approach</a>.`;
}

/**
 * Render skills cloud as individual span elements
 * Skipped if React layer is enabled (React renders instead)
 */
function renderSkills() {
  skillsCloud.innerHTML = skills.map((skill) => `<span>${skill}</span>`).join("");
}

/**
 * Render "now" focus items as cards
 * Skipped if React layer is enabled (React renders instead)
 */
function renderNow() {
  if (!(nowGrid instanceof HTMLDivElement)) {
    return;
  }

  nowGrid.innerHTML = nowFocus
    .map(
      (item) => `
      <article class="now-card reveal">
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </article>
    `
    )
    .join("");
}

function updateStats() {
  const values = {
    0: projects.filter((project) => project.featured).length || projects.length,
    1: projects.filter((project) => Boolean(project.demoHref)).length,
    2: educationItems.length
  };

  counters.forEach((counter, index) => {
    if (typeof values[index] === "number") {
      counter.dataset.target = String(values[index]);
    }
  });
}

function renderProjectDisplay(project) {
  if (!(projectDisplay instanceof HTMLDivElement)) {
    return;
  }

  if (!project) {
    projectDisplay.innerHTML = "<p>No project is available for this filter yet.</p>";
    return;
  }

  projectDisplay.innerHTML = `
    ${
      project.image
        ? `<div class="project-display__media"><img src="${project.image}" alt="${project.imageAlt || `${project.title} preview`}" loading="lazy" /></div>`
        : ""
    }
    <div class="project-display__body">
      ${project.featured ? `<span class="project-badge">Featured Project</span>` : ""}
      <p class="eyebrow">Project Case Study</p>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <p class="project-proof-label">What this project demonstrates</p>
      <ul class="project-proof">
        ${(project.highlights || []).map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <ul class="tag-list">
        ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
      <div class="hero-cta">
        ${project.demoHref ? `<a class="button primary" href="${project.demoHref}" target="_blank" rel="noreferrer">${project.demoLabel || "Live Demo"}</a>` : ""}
        ${project.href ? `<a class="button ghost" href="${project.href}" target="_blank" rel="noreferrer">${project.hrefLabel || "View Details"}</a>` : ""}
      </div>
    </div>
  `;
}

function renderProjects(filter = "All", query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredByTag = filter === "All" ? projectsSearchIndex : projectsSearchIndex.filter((project) => project.tags.includes(filter));

  const visible = normalizedQuery
    ? filteredByTag.filter((project) => project.searchText.includes(normalizedQuery))
    : filteredByTag;

  projectGrid.innerHTML = visible
    .map(
      (project) => `
      <article class="project-card ${project.featured ? "project-card--featured" : ""}">
        ${project.featured ? `<span class="project-badge">Featured</span>` : ""}
        ${
          project.image
            ? `<img class="project-thumb" src="${project.image}" alt="${project.imageAlt || `${project.title} preview`}" loading="lazy" />`
            : ""
        }
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <ul class="project-proof compact">
          ${(project.highlights || []).map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="project-actions">
          <button class="button ghost project-link preview-trigger" type="button" data-project="${project.title}">Preview Project</button>
          ${project.demoHref ? `<a class="button primary project-link" href="${project.demoHref}" target="_blank" rel="noreferrer">${project.demoLabel || "Live Demo"}</a>` : ""}
          ${
            project.href
              ? `<a class="button ghost project-link" href="${project.href}" target="_blank" rel="noreferrer">${
                  project.hrefLabel || "View Details"
                }</a>`
              : ""
          }
        </div>
        <ul class="tag-list">
          ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");

  renderProjectDisplay(visible[0]);
}

function renderEducation() {
  educationGrid.innerHTML = educationItems
    .map(
      (item) => `
      <article class="education-card">
        <h3>${item.title}</h3>
        <p class="education-meta">Issued via ${item.issuer}</p>
        <p>${item.detail}</p>
        <div class="project-actions">
          <button class="button ghost project-link certificate-trigger" type="button" data-certificate="${item.href}" data-title="${item.title}">
            Preview Certificate
          </button>
          <a class="button ghost project-link" href="${item.href}" target="_blank" rel="noreferrer">
            Open PDF
          </a>
        </div>
      </article>
    `
    )
    .join("");
}

function initFilters() {
  if (!(projectFilters instanceof HTMLDivElement)) {
    return;
  }

  const tags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

  projectFilters.innerHTML = tags
    .map(
      (tag, index) =>
        `<button type="button" class="${index === 0 ? "active" : ""}" aria-pressed="${index === 0 ? "true" : "false"}" data-filter="${tag}">${tag}</button>`
    )
    .join("");

  projectFilters.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    projectFilters.querySelectorAll("button").forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-pressed", "false");
    });
    target.classList.add("active");
    target.setAttribute("aria-pressed", "true");
    projectState.filter = target.dataset.filter || "All";
    renderProjects(projectState.filter, projectState.query);
  });
}

function initProjectSearch() {
  if (!(projectSearch instanceof HTMLInputElement)) {
    return;
  }

  const applySearch = debounce((value) => {
    projectState.query = value;
    renderProjects(projectState.filter, projectState.query);
  });

  projectSearch.addEventListener("input", () => {
    applySearch(projectSearch.value);
  });
}

function cycleTyping() {
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function step() {
    const word = words[wordIndex];

    if (!deleting) {
      charIndex += 1;
      typingText.textContent = word.slice(0, charIndex);

      if (charIndex === word.length) {
        deleting = true;
        setTimeout(step, 1200);
        return;
      }

      setTimeout(step, 70);
      return;
    }

    charIndex -= 1;
    typingText.textContent = word.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(step, 35);
  }

  step();
}

function initCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const counter = entry.target;
        const endValue = Number(counter.dataset.target);
        let current = 0;
        const duration = 900;
        const increment = Math.max(1, Math.ceil(endValue / (duration / 16)));

        const timer = setInterval(() => {
          current += increment;
          counter.textContent = String(Math.min(current, endValue));

          if (current >= endValue) {
            clearInterval(timer);
          }
        }, 16);

        observer.unobserve(counter);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

/**
 * Initialize scroll reveal animations
 * Uses Intersection Observer to fade in and slide up sections as they enter viewport
 * Staggered animation delays for visual polish
 */
function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  revealItems.forEach((item, index) => item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

/**
 * Initialize section spy for navigation highlighting
 * Updates active nav link as user scrolls through sections
 */
function initSectionSpy() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".site-nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach((link) => {
          const href = link.getAttribute("href")?.slice(1);
          link.classList.toggle("active", href === entry.target.id);
        });
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initProjectDisplay() {
  if (!(projectGrid instanceof HTMLDivElement)) {
    return;
  }

  projectGrid.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const trigger = target.closest(".preview-trigger");

    if (!(trigger instanceof HTMLButtonElement)) {
      return;
    }

    const selectedProject = projectsSearchIndex.find((project) => project.title === trigger.dataset.project);
    renderProjectDisplay(selectedProject);
    projectDisplay?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const recipient = profile.email.trim();

    const outreachMessage = `Hello Eric,\n\nMy name is ${name} and you can reach me at ${email}.\n\n${message}\n\nBest regards,\n${name}`;
    const params = new URLSearchParams({
      subject: `Portfolio inquiry from ${name}`,
      body: outreachMessage
    });

    try {
      window.location.href = `mailto:${recipient}?${params.toString()}`;
      statusText.textContent = "Your email app has been opened with a draft message ready to send.";
      statusText.dataset.state = "success";
    } catch (error) {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(outreachMessage);
      }
      statusText.textContent = "Your message has been copied. Please paste it into your email app and send it manually.";
      statusText.dataset.state = "error";
    }

    form.reset();
  });
}

function initYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

/**
 * Initialize theme toggle button with localStorage persistence
 * Respects user's system color scheme preference as fallback
 * Updates CSS custom properties when theme changes
 */
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");

  if (!(themeToggle instanceof HTMLButtonElement)) {
    return;
  }

  const savedTheme = localStorage.getItem("portfolio-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "night";
  const initialTheme = savedTheme || preferredTheme;

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const isLight = theme === "light";
    themeToggle.textContent = isLight ? "Night Mode" : "Light Mode";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    cssRefiner.applyThemeRefinements(theme);
    cssRefiner.applyLayoutRefinements();
  };

  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "night" : "light";
    localStorage.setItem("portfolio-theme", nextTheme);
    applyTheme(nextTheme);
  });
}

/**
 * Initialize certificate preview modal
 * Handles PDF preview loading and download functionality for credentials
 */
function initCertificateViewer() {
  if (
    !(educationGrid instanceof HTMLDivElement) ||
    !(certificateModal instanceof HTMLDivElement) ||
    !(certificateFrame instanceof HTMLIFrameElement) ||
    !(certificateTitle instanceof HTMLElement) ||
    !(certificateClose instanceof HTMLButtonElement) ||
    !(certificateOpenLink instanceof HTMLAnchorElement) ||
    !(certificateDownloadLink instanceof HTMLAnchorElement)
  ) {
    return;
  }

  const openViewer = (title, href) => {
    if (!href) {
      return;
    }

    certificateTitle.textContent = title;
    certificateFrame.src = "";
    certificateOpenLink.href = href;
    certificateDownloadLink.href = href;
    certificateModal.hidden = false;
    certificateModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      certificateFrame.src = href;
    });
  };

  const closeViewer = () => {
    certificateModal.hidden = true;
    certificateModal.setAttribute("aria-hidden", "true");
    certificateFrame.src = "";
    document.body.style.overflow = "";
  };

  educationGrid.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const trigger = target.closest(".certificate-trigger");

    if (!(trigger instanceof HTMLButtonElement)) {
      return;
    }

    openViewer(trigger.dataset.title || "Certificate Preview", trigger.dataset.certificate || "");
  });

  certificateClose.addEventListener("click", closeViewer);

  certificateModal.addEventListener("click", (event) => {
    if (event.target === certificateModal) {
      closeViewer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !certificateModal.hidden) {
      closeViewer();
    }
  });
}

/**
 * Initialize noise canvas effect
 * Creates animated film grain overlay with performance optimization
 * Deferred to requestIdleCallback for better initial load performance
 * Respects prefers-reduced-motion preference
 */
function initNoise() {
  const canvas = document.getElementById("noise-canvas");
  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    canvas.style.display = "none";
    return;
  }

  function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const image = context.createImageData(canvas.width, canvas.height);
    const data = image.data;

    // Draw noise with lower frequency sampling for better performance
    const sampleRate = window.innerWidth < 768 ? 2 : 1;
    for (let i = 0; i < data.length; i += 4 * sampleRate) {
      const shade = Math.floor(Math.random() * 255);
      data[i] = shade;
      data[i + 1] = shade;
      data[i + 2] = shade;
      data[i + 3] = 13;
    }

    context.putImageData(image, 0, 0);
  }

  draw();
  window.addEventListener("resize", draw);
  // Reduce redraw frequency: 2000ms on mobile, 1500ms on desktop
  const redrawInterval = window.innerWidth < 768 ? 2000 : 1500;
  const noiseTimer = setInterval(draw, redrawInterval);
  window.addEventListener("beforeunload", () => clearInterval(noiseTimer), { once: true });
}

function initBackToTop() {
  if (!(backToTopButton instanceof HTMLButtonElement)) {
    return;
  }

  const setVisible = () => {
    backToTopButton.classList.toggle("visible", window.scrollY > 500);
  };

  setVisible();
  window.addEventListener("scroll", setVisible, { passive: true });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initMobileNav() {
  if (!(siteHeader instanceof HTMLElement) || !(siteNav instanceof HTMLElement) || !(navToggle instanceof HTMLButtonElement)) {
    return;
  }

  const closeMenu = () => {
    siteHeader.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }
    if (!siteHeader.contains(target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      closeMenu();
    }
  });
}

function initPageLoadAnimation() {
  requestAnimationFrame(() => {
    document.body.classList.add("page-ready");
  });
}

function initVisualAtmosphere() {
  if (!(atmosphere instanceof HTMLDivElement)) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    return;
  }

  const setPointer = (x, y) => {
    document.documentElement.style.setProperty("--pointer-x", `${x}px`);
    document.documentElement.style.setProperty("--pointer-y", `${y}px`);
  };

  setPointer(window.innerWidth * 0.78, window.innerHeight * 0.16);

  window.addEventListener(
    "mousemove",
    (event) => {
      setPointer(event.clientX, event.clientY);
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      setPointer(touch.clientX, touch.clientY);
    },
    { passive: true }
  );
}

hydrateProfileContent();
renderSkills();
renderNow();
updateStats();
if (!useReactProjectsLayer) {
  renderProjects(projectState.filter, projectState.query);
}
renderEducation();
if (!useReactProjectsLayer) {
  initFilters();
  initProjectSearch();
}
cycleTyping();
initCounters();
initReveal();
initSectionSpy();
if (!useReactProjectsLayer) {
  initProjectDisplay();
}
initContactForm();
initYear();
initStylePresetToggle();
initThemeToggle();
initCertificateViewer();
initBackToTop();
initMobileNav();
initPageLoadAnimation();

// Defer heavy effects until after initial render
requestIdleCallback(() => {
  initNoise();
  initVisualAtmosphere();
}, { timeout: 2000 });
