const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Mobile menu
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("navMenu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("is-open")) return;
    const isClickInside = menu.contains(e.target) || toggle.contains(e.target);
    if (!isClickInside) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !menu.classList.contains("is-open")) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  });
}

// Active section highlighting
const navLinks = Array.from(document.querySelectorAll(".nav__link")).filter((a) =>
  a.getAttribute("href")?.startsWith("#")
);

const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

function setActive(id) {
  navLinks.forEach((a) => {
    const isActive = a.getAttribute("href") === `#${id}`;
    a.classList.toggle("is-active", isActive);
    if (isActive) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
}

function updateActiveNav() {
  const header = document.querySelector(".topbar");
  const headerOffset = header ? header.offsetHeight + 24 : 100;

  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerOffset;
    if (window.scrollY >= sectionTop) {
      currentSection = section;
    }
  });

  if (currentSection?.id) {
    setActive(currentSection.id);
  } else {
    navLinks.forEach((a) => {
      a.classList.remove("is-active");
      a.removeAttribute("aria-current");
    });
  }
}

if (sections.length) {
  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("resize", updateActiveNav);
  window.addEventListener("load", updateActiveNav);
  updateActiveNav();
}

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");

if (!prefersReduced && revealEls.length) {
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => revealObs.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Copy email
const toast = document.getElementById("copyToast");

document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = btn.getAttribute("data-copy") || "";

    try {
      await navigator.clipboard.writeText(text);
      if (toast) {
        toast.textContent = "Copied to clipboard.";
        setTimeout(() => {
          toast.textContent = "";
        }, 1800);
      }
    } catch {
      if (toast) {
        toast.textContent = "Copy failed — you can manually select the email above.";
        setTimeout(() => {
          toast.textContent = "";
        }, 2200);
      }
    }
  });
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
