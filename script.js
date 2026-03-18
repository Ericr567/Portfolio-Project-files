const profile = {
  name: "Eric Rogers Jr.",
  linkedin: "https://www.linkedin.com/in/eric-rogers-46298b2aa",
  headline: "Chef-turned-UI/UX Designer | 27 | Career Pivot in Progress",
  about:
    "For five years, I've worked professionally in hospitality as a chef—developing skills in precision, problem-solving, and user-focused thinking. In 2024, I decided to pivot into UI/UX design, channeling the same creativity and attention to detail into digital experiences. This portfolio showcases the foundation of my design journey: projects built with modern tools like React and Vite, certified expertise in core web technologies, and a commitment to thoughtful, usable design. Every project here represents my transition from the kitchen to the screen."
};

const projects = [
  {
    title: "Pokédex Web App",
    summary:
      "Retro-inspired Pokédex built with React and Vite, featuring Pokémon search, sortable listings, favorites persistence, dark mode, shareable URL state, and API-backed detail caching.",
    tags: ["React", "Vite", "JavaScript", "API"],
    href: "https://github.com/Ericr567/PokeDex-project-folder",
    hrefLabel: "View GitHub Repo"
  },
  {
    title: "NorthLine Club",
    summary: "Membership community sign-up page with a glassmorphism split-card layout, animated form, responsive design, and polished onboarding UI built in vanilla HTML and CSS.",
    tags: ["HTML", "CSS", "UI Design"],
    href: "https://github.com/Ericr567/NorthLineProject",
    hrefLabel: "View GitHub Repo"
  }
];

const educationItems = [
  {
    title: "HTML Certification",
    issuer: "Certificate File",
    detail: "Validated certification in HTML fundamentals and markup structure.",
    href: "assets/certs/html-certificate.pdf",
    hrefLabel: "View HTML Certificate"
  },
  {
    title: "CSS Certification",
    issuer: "Certificate File",
    detail: "Validated certification in CSS styling, layout systems, and responsive design.",
    href: "assets/certs/css-certificate.pdf",
    hrefLabel: "View CSS Certificate"
  },
  {
    title: "SQL Certification",
    issuer: "Certificate File",
    detail: "Validated certification in SQL querying, relational data concepts, and database operations.",
    href: "assets/certs/sql-certificate.pdf",
    hrefLabel: "View SQL Certificate"
  },
  {
    title: "JavaScript Certification",
    issuer: "Certificate File",
    detail: "Validated certification in JavaScript syntax, interactivity, and application logic.",
    href: "assets/certs/javascript-certificate.pdf",
    hrefLabel: "View JavaScript Certificate"
  },
  {
    title: "React Certification",
    issuer: "Certificate File",
    detail: "Validated certification in React components, state management, and modern UI development.",
    href: "assets/certs/react-certificate.pdf",
    hrefLabel: "View React Certificate"
  },
  {
    title: "TypeScript Certification",
    issuer: "Certificate File",
    detail: "Validated certification in typed JavaScript development and scalable application patterns.",
    href: "assets/certs/typescript-certificate.pdf",
    hrefLabel: "View TypeScript Certificate"
  },
  {
    title: "Python Certification",
    issuer: "Certificate File",
    detail: "Validated certification in Python programming, scripting, and problem solving.",
    href: "assets/certs/python-certificate.pdf",
    hrefLabel: "View Python Certificate"
  },
  {
    title: "Swift Certification",
    issuer: "Certificate File",
    detail: "Validated certification in Swift programming and native application development fundamentals.",
    href: "assets/certs/swift-certificate.pdf",
    hrefLabel: "View Swift Certificate"
  }
];

const skills = [
  "Professional Networking",
  "Career Development",
  "Communication",
  "Collaboration",
  "Problem Solving",
  "Adaptability",
  "Project Coordination",
  "Client Communication",
  "Technical Learning",
  "Execution"
];

const words = ["from real profile data.", "for meaningful work.", "with professional focus."];

const projectGrid = document.getElementById("project-grid");
const projectFilters = document.getElementById("project-filters");
const educationGrid = document.getElementById("education-grid");
const skillsCloud = document.getElementById("skills-cloud");
const typingText = document.getElementById("typing-text");
const counters = document.querySelectorAll(".counter");
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const statusText = document.getElementById("form-status");
const heroCopy = document.getElementById("hero-copy");
const aboutTitle = document.getElementById("about-title");
const aboutCopy = document.getElementById("about-copy");

function hydrateProfileContent() {
  heroCopy.textContent = `I am ${profile.name}. ${profile.headline}`;
  aboutTitle.textContent = `About ${profile.name}`;
  aboutCopy.innerHTML = `${profile.about} <a href="#education">View my education and certification section</a>.`;
}

function renderSkills() {
  skillsCloud.innerHTML = skills.map((skill) => `<span>${skill}</span>`).join("");
}

function renderProjects(filter = "All") {
  const visible = filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter));

  projectGrid.innerHTML = visible
    .map(
      (project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        ${
          project.href
            ? `<a class="button ghost project-link" href="${project.href}" target="_blank" rel="noreferrer">${
                project.hrefLabel || "View Details"
              }</a>`
            : ""
        }
        <ul class="tag-list">
          ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function renderEducation() {
  educationGrid.innerHTML = educationItems
    .map(
      (item) => `
      <article class="education-card">
        <h3>${item.title}</h3>
        <p class="education-meta">Issued via ${item.issuer}</p>
        <p>${item.detail}</p>
          <a class="button ghost project-link" href="${item.href}" target="_blank" rel="noreferrer" download>${
          item.hrefLabel || "View Credential"
        }</a>
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
        `<button type="button" class="${index === 0 ? "active" : ""}" data-filter="${tag}">${tag}</button>`
    )
    .join("");

  projectFilters.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    projectFilters.querySelectorAll("button").forEach((button) => button.classList.remove("active"));
    target.classList.add("active");
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

function initTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  if (saved) {
    root.dataset.theme = saved;
  }

  themeToggle.addEventListener("click", () => {
    const next = root.dataset.theme === "night" ? "day" : "night";
    if (next === "day") {
      delete root.dataset.theme;
      localStorage.setItem("portfolio-theme", "day");
      return;
    }

    root.dataset.theme = "night";
    localStorage.setItem("portfolio-theme", "night");
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      statusText.textContent = "Please complete all fields before sending.";
      return;
    }

    window.open(profile.linkedin, "_blank", "noopener,noreferrer");
    statusText.textContent = `LinkedIn opened. You can send this message there: ${message}`;
    form.reset();
  });
}

function initYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function initNoise() {
  const canvas = document.getElementById("noise-canvas");
  const context = canvas.getContext("2d", { alpha: true });

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
  setInterval(draw, 550);
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
initTheme();
initContactForm();
initYear();
initNoise();
