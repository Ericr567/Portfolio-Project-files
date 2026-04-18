const profile = {
  name: "Eric Rogers Jr.",
  linkedin: "https://www.linkedin.com/in/eric-rogers-46298b2aa",
  github: "https://github.com/Ericr567",
  email: "ericrrj98@gmail.com",
  headline: "Junior front-end developer focused on React, JavaScript, accessible UI, and responsive design.",
  about:
    "I bring a hospitality background shaped by consistency, communication, and service-first thinking into front-end development. My work centers on responsive interfaces, clean UI decisions, and practical user experience improvements built with modern web tools. I am actively looking for an opportunity where I can contribute to a team, keep learning fast, and ship polished front-end work that helps real users."
};

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

const projectGrid = document.getElementById("project-grid");
const projectDisplay = document.getElementById("project-display");
const projectFilters = document.getElementById("project-filters");
const educationGrid = document.getElementById("education-grid");
const skillsCloud = document.getElementById("skills-cloud");
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

function hydrateProfileContent() {
  heroCopy.textContent = `${profile.name} is a junior front-end developer building clean, responsive, and user-focused interfaces. ${profile.headline}`;
  aboutTitle.textContent = `About ${profile.name}`;
  aboutCopy.innerHTML = `${profile.about} <a href="#projects">See the project work that demonstrates this approach</a>.`;
}

function renderSkills() {
  skillsCloud.innerHTML = skills.map((skill) => `<span>${skill}</span>`).join("");
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

function renderProjects(filter = "All") {
  const visible = filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter));

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
    renderProjects(target.dataset.filter);
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

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
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

    const selectedProject = projects.find((project) => project.title === trigger.dataset.project);
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
  };

  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "night" : "light";
    localStorage.setItem("portfolio-theme", nextTheme);
    applyTheme(nextTheme);
  });
}

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

function initNoise() {
  const canvas = document.getElementById("noise-canvas");
  const context = canvas.getContext("2d", { alpha: true });
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

    for (let i = 0; i < data.length; i += 4) {
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
  const redrawInterval = window.innerWidth < 768 ? 1300 : 900;
  const noiseTimer = setInterval(draw, redrawInterval);
  window.addEventListener("beforeunload", () => clearInterval(noiseTimer), { once: true });
}

hydrateProfileContent();
renderSkills();
renderProjects();
renderEducation();
initFilters();
cycleTyping();
initCounters();
initReveal();
initSectionSpy();
initProjectDisplay();
initContactForm();
initYear();
initThemeToggle();
initCertificateViewer();
initNoise();
