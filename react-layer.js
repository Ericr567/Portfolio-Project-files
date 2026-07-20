import React, { useMemo, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const data = window.PORTFOLIO_DATA || {};

const nowFocus = Array.isArray(data.nowFocus) ? data.nowFocus : [];
const skills = Array.isArray(data.skills) ? data.skills : [];
const educationItems = Array.isArray(data.educationItems) ? data.educationItems : [];
const projects = Array.isArray(data.projects) ? data.projects : [];
const useReactProjectsLayer = Boolean(data.useReactProjectsLayer);

const educationTagMap = {
  html: "Markup",
  css: "Styling",
  javascript: "Frontend",
  react: "Frontend",
  typescript: "Frontend",
  sql: "Data",
  python: "Backend",
  swift: "Mobile",
  "front end development": "Frontend"
};

function inferCategory(title) {
  const normalized = String(title || "").toLowerCase();
  const key = Object.keys(educationTagMap).find((candidate) => normalized.includes(candidate));
  return key ? educationTagMap[key] : "General";
}

function NowGrid() {
  return React.createElement(
    React.Fragment,
    null,
    nowFocus.map((item) =>
      React.createElement(
        "article",
        { className: "now-card", key: item.title },
        React.createElement("h3", null, item.title),
        React.createElement("p", null, item.detail)
      )
    )
  );
}

function SkillsCloud() {
  const normalized = useMemo(() => skills.map((skill) => ({ skill, label: skill.trim() })), []);

  return React.createElement(
    React.Fragment,
    null,
    normalized.map((item) => React.createElement("span", { key: item.skill }, item.label))
  );
}

function EducationGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const catalog = useMemo(
    () =>
      educationItems.map((item) => ({
        ...item,
        category: inferCategory(item.title),
        searchText: `${item.title} ${item.detail} ${item.issuer}`.toLowerCase()
      })),
    []
  );

  const categories = useMemo(() => ["All", ...new Set(catalog.map((item) => item.category))], [catalog]);

  const visible = useMemo(() => {
    const text = query.trim().toLowerCase();
    return catalog.filter((item) => {
      const categoryMatch = category === "All" || item.category === category;
      const textMatch = !text || item.searchText.includes(text);
      return categoryMatch && textMatch;
    });
  }, [catalog, category, query]);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "education-controls", style: { marginBottom: "0.9rem", display: "grid", gap: "0.6rem" } },
      React.createElement("input", {
        type: "search",
        value: query,
        onChange: (event) => setQuery(event.target.value),
        placeholder: "Search credentials",
        "aria-label": "Search credentials"
      }),
      React.createElement(
        "div",
        { className: "filters", "aria-label": "Credential categories" },
        categories.map((item) =>
          React.createElement(
            "button",
            {
              key: item,
              type: "button",
              className: category === item ? "active" : "",
              "aria-pressed": String(category === item),
              onClick: () => setCategory(item)
            },
            item
          )
        )
      )
    ),
    visible.map((item) =>
      React.createElement(
        "article",
        { className: "education-card", key: item.title },
        React.createElement("h3", null, item.title),
        React.createElement("p", { className: "education-meta" }, `Issued via ${item.issuer}`),
        React.createElement("p", null, item.detail),
        React.createElement(
          "div",
          { className: "project-actions" },
          React.createElement(
            "button",
            {
              className: "button ghost project-link certificate-trigger",
              type: "button",
              "data-certificate": item.href,
              "data-title": item.title
            },
            "Preview Certificate"
          ),
          React.createElement(
            "a",
            {
              className: "button ghost project-link",
              href: item.href,
              target: "_blank",
              rel: "noreferrer"
            },
            "Open PDF"
          )
        )
      )
    )
  );
}

function ProjectsSection() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedTitle, setSelectedTitle] = useState(null);

  const indexedProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        searchText: `${project.title} ${project.summary} ${(project.tags || []).join(" ")} ${(project.highlights || []).join(" ")}`.toLowerCase()
      })),
    []
  );

  const tags = useMemo(() => ["All", ...new Set(indexedProjects.flatMap((project) => project.tags || []))], [indexedProjects]);

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const byTag = filter === "All" ? indexedProjects : indexedProjects.filter((project) => (project.tags || []).includes(filter));
    return normalized ? byTag.filter((project) => project.searchText.includes(normalized)) : byTag;
  }, [filter, indexedProjects, query]);

  const selectedProject = useMemo(() => {
    const found = visible.find((project) => project.title === selectedTitle);
    return found || visible[0] || null;
  }, [selectedTitle, visible]);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "section-header" },
      React.createElement(
        "div",
        null,
        React.createElement("p", { className: "eyebrow" }, "Featured Work"),
        React.createElement("h2", null, "Projects That Show How I Work")
      ),
      React.createElement(
        "div",
        { className: "project-tools" },
        React.createElement("label", { className: "project-search-wrap", htmlFor: "project-search-react" }, "Search projects"),
        React.createElement("input", {
          id: "project-search-react",
          type: "search",
          placeholder: "Search by title, tag, or keyword",
          autoComplete: "off",
          value: query,
          onChange: (event) => setQuery(event.target.value)
        }),
        React.createElement(
          "div",
          { className: "filters", "aria-label": "Project filters" },
          tags.map((tag) =>
            React.createElement(
              "button",
              {
                key: tag,
                type: "button",
                className: filter === tag ? "active" : "",
                "aria-pressed": String(filter === tag),
                onClick: () => setFilter(tag)
              },
              tag
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "project-grid", "aria-live": "polite" },
      visible.map((project) =>
        React.createElement(
          "article",
          { className: `project-card ${project.featured ? "project-card--featured" : ""}`, key: project.title },
          project.featured ? React.createElement("span", { className: "project-badge" }, "Featured") : null,
          project.image
            ? React.createElement("img", {
                className: "project-thumb",
                src: project.image,
                alt: project.imageAlt || `${project.title} preview`,
                loading: "lazy"
              })
            : null,
          React.createElement("h3", null, project.title),
          React.createElement("p", null, project.summary),
          React.createElement(
            "ul",
            { className: "project-proof compact" },
            (project.highlights || []).map((item) => React.createElement("li", { key: `${project.title}-${item}` }, item))
          ),
          React.createElement(
            "div",
            { className: "project-actions" },
            React.createElement(
              "button",
              {
                className: "button ghost project-link",
                type: "button",
                onClick: () => setSelectedTitle(project.title)
              },
              "Preview Project"
            ),
            project.demoHref
              ? React.createElement(
                  "a",
                  {
                    className: "button primary project-link",
                    href: project.demoHref,
                    target: "_blank",
                    rel: "noreferrer"
                  },
                  project.demoLabel || "Live Demo"
                )
              : null,
            project.href
              ? React.createElement(
                  "a",
                  {
                    className: "button ghost project-link",
                    href: project.href,
                    target: "_blank",
                    rel: "noreferrer"
                  },
                  project.hrefLabel || "View Details"
                )
              : null
          ),
          React.createElement(
            "ul",
            { className: "tag-list" },
            (project.tags || []).map((tag) => React.createElement("li", { key: `${project.title}-${tag}` }, tag))
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "project-display", "aria-live": "polite" },
      selectedProject
        ? React.createElement(
            React.Fragment,
            null,
            selectedProject.image
              ? React.createElement(
                  "div",
                  { className: "project-display__media" },
                  React.createElement("img", {
                    src: selectedProject.image,
                    alt: selectedProject.imageAlt || `${selectedProject.title} preview`,
                    loading: "lazy"
                  })
                )
              : null,
            React.createElement(
              "div",
              { className: "project-display__body" },
              selectedProject.featured ? React.createElement("span", { className: "project-badge" }, "Featured Project") : null,
              React.createElement("p", { className: "eyebrow" }, "Project Case Study"),
              React.createElement("h3", null, selectedProject.title),
              React.createElement("p", null, selectedProject.summary),
              React.createElement("p", { className: "project-proof-label" }, "What this project demonstrates"),
              React.createElement(
                "ul",
                { className: "project-proof" },
                (selectedProject.highlights || []).map((item) => React.createElement("li", { key: `${selectedProject.title}-detail-${item}` }, item))
              ),
              React.createElement(
                "ul",
                { className: "tag-list" },
                (selectedProject.tags || []).map((tag) => React.createElement("li", { key: `${selectedProject.title}-detail-${tag}` }, tag))
              ),
              React.createElement(
                "div",
                { className: "hero-cta" },
                selectedProject.demoHref
                  ? React.createElement(
                      "a",
                      {
                        className: "button primary",
                        href: selectedProject.demoHref,
                        target: "_blank",
                        rel: "noreferrer"
                      },
                      selectedProject.demoLabel || "Live Demo"
                    )
                  : null,
                selectedProject.href
                  ? React.createElement(
                      "a",
                      {
                        className: "button ghost",
                        href: selectedProject.href,
                        target: "_blank",
                        rel: "noreferrer"
                      },
                      selectedProject.hrefLabel || "View Details"
                    )
                  : null
              )
            )
          )
        : React.createElement("p", null, "No project is available for this filter yet.")
    )
  );
}

function mountReactLayer() {
  requestIdleCallback(
    () => {
      const projectsRootNode = document.getElementById("projects");
      const nowRootNode = document.getElementById("now-grid");
      const skillsRootNode = document.getElementById("skills-cloud");
      const educationRootNode = document.getElementById("education-grid");

      if (useReactProjectsLayer && projectsRootNode) {
        createRoot(projectsRootNode).render(React.createElement(ProjectsSection));
      }

      if (nowRootNode) {
        createRoot(nowRootNode).render(React.createElement(NowGrid));
      }

      if (skillsRootNode) {
        createRoot(skillsRootNode).render(React.createElement(SkillsCloud));
      }

      if (educationRootNode) {
        createRoot(educationRootNode).render(React.createElement(EducationGrid));
      }
    },
    { timeout: 3000 }
  );
}

mountReactLayer();
