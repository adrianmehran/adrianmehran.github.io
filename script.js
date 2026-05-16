const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Language toggle
const defaultLanguage = "en";
const storageKey = "preferredLanguage";
const cvByLanguage = {
  en: "assets/Adrian_Mehran_CV_Eng.pdf",
  fr: "assets/Adrian_Mehran_CV_Fra.pdf",
};

const translations = {
  en: {
    meta: {
      description:
        "Adrian Mehran is a Grade 10 student in Nice, France, interested in neuroscience, AI in medicine, leadership, and global health. Explore his CV, research, and projects.",
    },
    skip: "Skip to content",
    brand: {
      aria: "Go to top",
      tag: "Student · Research & Leadership",
    },
    nav: {
      aria: "Primary",
      openMenu: "Open menu",
      education: "Education",
      research: "Research",
      leadership: "Leadership",
      experience: "Experience",
      honors: "Honors",
      skills: "Skills",
      contact: "Contact",
      download: "Download CV",
      toggleLabel: "Switch language to French",
    },
    hero: {
      location: "Nice, France",
      title:
        'Aspiring neurosurgeon building at the intersection of <span class="accent">medicine</span> and <span class="accent">technology</span>.',
      subtitle:
        "Research interests: Neuroscience, Artificial Intelligence in Medicine, Surgical Innovation, Bioethics, and Global Health.",
      download: "Download CV",
      contact: "Get in touch",
      continue: "Continue reading ↓",
      meta: {
        academicLabel: "Academic standing",
        academicValue: "Ranked 1st in cohort, 7.0/7.0 GPA",
        languagesLabel: "Languages",
      },
    },
    profile: {
      aria: "Profile",
      avatarAlt: "Portrait of Adrian Mehran",
      role: "· Grade 10 IGCSE Student (2024—current)<br>· Candidate for IB Diploma Programme (2026—2028)",
      contactLinks: "Contact links",
      school: "International School of Nice, France",
      email: "Email",
      dropByDrop: "DropByDrop project",
      ted: "TED-Ed talk",
    },
    education: {
      title: "Education",
      subtitle: "Academic trajectory, results, and leadership roles.",
      igcse: {
        title: "IGCSE Programme (Cambridge & Pearson Edexcel)",
        meta: "Grade 9-10 · 2024-current",
        item1: "<strong>Academic standing:</strong> Ranked 1st in cohort throughout middle & high school.",
        item2:
          "<strong>Key results:</strong> Math Extended (A*), Science Double Award (9/9), Computer Science (A*), English Language & Literature (A*), French First Language (A*).",
        item3: "<strong>Acceleration:</strong> Advanced directly from Grade 4 to Grade 6.",
        item4: "<strong>Leadership:</strong> Class Representative (Grades 9 & 10).",
      },
      ib: {
        title: "IB Diploma Programme + American High School Diploma",
        meta: "Grade 11-12 · 2026-2028",
        body:
          "Focusing on building depth in quantitative reasoning and research writing while sustaining extracurricular leadership and academic projects.",
        subjectsTitle: "Subject Choices",
        subjects: "Biology HL, Chemistry HL, Mathematics AA HL, Psychology HL, English A SL, French A SL",
      },
    },
    research: {
      title: "Research & Academic Projects",
      subtitle: "Selected work at the intersection of healthcare, ethics, and technology.",
      ai: {
        pill: "Research · 2025",
        title: "AI in Medical Diagnosis",
        meta: "IGCSE Global Perspectives · Nice, France",
        item1: "Authored a report on AI’s role in medical treatment & diagnosis.",
        item2: "Achieved a perfect mock score (A*) for research and team-project components.",
        item3: "Recognized for “forensic precision” and sophisticated analysis.",
      },
      essay: {
        pill: "John Locke Institute · 2025",
        title: "Junior Essay Prize",
        body:
          "Wrote <em>“Rethinking Fair Share in a Shared World”</em>, applying ethical theory to global policy analysis.",
        link: "Read essay",
      },
      ted: {
        pill: "TED-Ed · 2021",
        title: "Robotic Surgery Presentation",
        meta: "Presenter and Speaker · Global",
        body: "Researched and delivered a TED-Ed talk on the future of medicine and robotic surgery.",
        link: "Watch video",
      },
    },
    leadership: {
      title: "Leadership & Conferences",
      subtitle: "Speaking, chairing, and policy leadership.",
      conference: {
        title: "Globeducate Leadership Conference — Presenter and Speaker",
        meta: "Madrid, Spain",
        body: "Selected as 1 of 4 students out of 42,000 globally to present on leadership and innovation.",
      },
      mun: {
        title: "Globeducate Model United Nations — Head Chair (Security Council)",
        meta: "Nice, France",
        item1: "Awarded “Best Delegate” in the Security Council at GlobeducateMUN 2025.",
        item2: "Served as Head Chair of the Security Council at GlobeducateMUN 2026.",
      },
      epp: {
        title: "European Pupil’s Parliament — Chairperson of the EPP (European People's Party)",
        meta: "European Parliament, Strasbourg, France",
        body: "Served as Chairperson of the EPP in the ENG/FRA Committee, leading party coordination, directing legislative amendment work, chairing meetings, and shaping cross-party negotiation strategy.",
      },
    },
    experience: {
      title: "Experience & Volunteering",
      subtitle: "Clinical exposure, building initiatives, and coaching.",
      hospital: {
        title: "St. George Hospital — Clinical Observation Intern",
        meta: "Nice, France · 2025",
        item1: "Completed a one-week observational internship at a plastic surgeon’s practice.",
        item2: "Observed procedures within the operating block to gain early clinical exposure.",
      },
      water: {
        title: "DropByDrop Water Initiative — Founder & Project Lead",
        meta: "Nice, France · 2025-2026",
        item1: "Led an interdisciplinary project on water scarcity.",
        item2: "<strong>Raised 351€</strong> for TeamWater, funding clean water access for 351 individuals.",
        item3: "Designed and coded a public awareness website (HTML/CSS).",
        link: "Visit project",
      },
      tennis: {
        title: "Tennis Instruction — Volunteer Tennis Coach",
        meta: "Nice Lawn Tennis Club, France · 2025",
        body: "Taught tennis to children for a full year, focusing on skill development, confidence, and fitness.",
      },
      objective: {
        title: "Objective",
        meta: "Long-term direction",
        body:
          "Aspiring neurosurgeon aiming to combine medical expertise with technological innovation—bringing analytical depth and interdisciplinary research at the intersection of medicine and ethics.",
      },
    },
    honors: {
      title: "Honors & Distinctions",
      subtitle: "Competitive results and recognitions.",
      bronze: {
        value: "Bronze",
        label: "Duke of Edinburgh’s International Award (2025)",
      },
      silver: {
        value: "Silver",
        label: "Duke of Edinburgh’s International Award (2026)",
      },
      delegate: {
        value: "Best Delegate",
        label: "GlobeducateMUN <br> Security Council (2025)",
      },
      caribou: {
        value: "Top 5%",
        label: "Caribou Math Competition (2020)",
      },
      kangaroo: {
        value: "Honor",
        label: "International Math Kangaroo (2020)",
      },
      tsl: {
        value: "Winner",
        label: "TSL Essay Competition",
      },
      athletics: {
        title: "Athletics",
        item1: "Tennis U16 Dept. Championships (Div 1) — Runner-up (2026)",
        item2: "Tennis U14 Dept. Championships (Div 1) — Champion (2025)",
        item3: "FFT Competitive Tennis — 90+ singles matches/year (2021—2026)",
        item4: "National Karate Championship (U10) — Runner-up (Kumite)",
      },
      personal: {
        title: "Personal Development",
        item1: "Violin · 8 years · 3 performance diplomas",
        item2: "Chess · 1700 ELO (Lichess)",
        item3: "Languages · English, French, Persian; Spanish (semi-fluent)",
      },
    },
    skills: {
      title: "Skills",
      subtitle: "A practical toolkit for research and building.",
      research: {
        title: "Research",
        item1: "Literature synthesis",
        item2: "Qualitative analysis",
        item3: "Data interpretation",
        item4: "Scientific writing",
      },
      technical: {
        title: "Technical",
        item3: "Public-facing web builds",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Open to research opportunities, conferences, collaborations, and student-led initiatives.",
      pill: "Let’s connect",
      cardTitle: "Available for thoughtful conversations and meaningful opportunities.",
      body:
        "I am especially interested in discussions around medicine, research, leadership, and student innovation. Email is the best way to reach me for academic, speaking, or collaboration enquiries.",
      emailButton: "Email Adrian",
      copyButton: "Copy email",
      emailAddress: "Email address",
      emailLabel: "Email",
      note: "Best for academic, research, and speaking enquiries.",
      profileTitle: "Contact profile",
      profileDetails: "Contact profile details",
      basedLabel: "Based in",
      basedValue: "Nice, France",
      focusLabel: "Focus areas",
      focusValue: "Neuroscience · AI in Medicine · Leadership opportunities",
      languagesLabel: "Languages",
      channelsLabel: "Other channels",
      copied: "Copied to clipboard.",
      copyFailed: "Copy failed — you can manually select the email above.",
    },
    footer: {
      rights: "Adrian Mehran — All rights reserved",
    },
  },
  fr: {
    meta: {
      description:
        "Adrian Mehran est élève en Grade 10 à Nice, en France, avec un intérêt pour les neurosciences, l’IA en médecine, le leadership et la santé mondiale. Découvrez son CV, ses recherches et ses projets.",
    },
    skip: "Aller au contenu",
    brand: {
      aria: "Retour en haut de page",
      tag: "Élève · Recherche & Leadership",
    },
    nav: {
      aria: "Navigation principale",
      openMenu: "Ouvrir le menu",
      education: "Éducation",
      research: "Recherche",
      leadership: "Leadership",
      experience: "Expérience",
      honors: "Distinctions",
      skills: "Compétences",
      contact: "Contact",
      download: "Télécharger le CV",
      toggleLabel: "Passer le site en anglais",
    },
    hero: {
      location: "Nice, France",
      title:
        'Aspirant neurochirurgien, à la croisée de la <span class="accent">médecine</span> et de la <span class="accent">technologie</span>.',
      subtitle:
        "Intérêts de recherche : neurosciences, intelligence artificielle en médecine, innovation chirurgicale, bioéthique et santé mondiale.",
      download: "Télécharger le CV",
      contact: "Me contacter",
      continue: "Continuer la lecture ↓",
      meta: {
        academicLabel: "Niveau académique",
        academicValue: "Classé 1er de promotion, moyenne de 7,0/7,0",
        languagesLabel: "Langues",
      },
    },
    profile: {
      aria: "Profil",
      avatarAlt: "Portrait d’Adrian Mehran",
      role: "· Élève IGCSE en Grade 10 (2024—actuel)<br>· Candidat au Programme du diplôme de l’IB (2026—2028)",
      contactLinks: "Liens de contact",
      school: "International School of Nice, France",
      email: "E-mail",
      dropByDrop: "Projet DropByDrop",
      ted: "Conférence TED-Ed",
    },
    education: {
      title: "Éducation",
      subtitle: "Parcours académique, résultats et responsabilités de leadership.",
      igcse: {
        title: "Programme IGCSE (Cambridge & Pearson Edexcel)",
        meta: "Grade 9-10 · 2024-actuel",
        item1: "<strong>Niveau académique :</strong> classé 1er de la cohorte tout au long du collège et du lycée.",
        item2:
          "<strong>Résultats clés :</strong> Mathématiques Extended (A*), Science Double Award (9/9), Computer Science (A*), English Language & Literature (A*), French First Language (A*).",
        item3: "<strong>Accélération :</strong> passage direct du Grade 4 au Grade 6.",
        item4: "<strong>Leadership :</strong> délégué de classe (Grades 9 et 10).",
      },
      ib: {
        title: "Programme du diplôme de l’IB + diplôme de fin d’études secondaires américain",
        meta: "Grade 11-12 · 2026-2028",
        body:
          "Approfondissement du raisonnement quantitatif et de l’écriture de recherche, tout en poursuivant des responsabilités extrascolaires et des projets académiques.",
        subjectsTitle: "Choix des matières",
        subjects: "Biology HL, Chemistry HL, Mathematics AA HL, Psychology HL, English A SL, French A SL",
      },
    },
    research: {
      title: "Recherche & projets académiques",
      subtitle: "Travaux sélectionnés à l’intersection de la santé, de l’éthique et de la technologie.",
      ai: {
        pill: "Recherche · 2025",
        title: "IA dans le diagnostic médical",
        meta: "IGCSE Global Perspectives · Nice, France",
        item1: "Rédaction d’un rapport sur le rôle de l’IA dans le traitement et le diagnostic médical.",
        item2: "Obtention d’un score blanc parfait (A*) pour les composantes de recherche et de projet d’équipe.",
        item3: "Travail reconnu pour sa « précision médico-légale » et son analyse sophistiquée.",
      },
      essay: {
        pill: "John Locke Institute · 2025",
        title: "Junior Essay Prize",
        body:
          "Rédaction de <em>« Rethinking Fair Share in a Shared World »</em>, appliquant la théorie éthique à l’analyse des politiques mondiales.",
        link: "Lire l’essai",
      },
      ted: {
        pill: "TED-Ed · 2021",
        title: "Présentation sur la chirurgie robotique",
        meta: "Présentateur et orateur · International",
        body: "Recherche et présentation d’une conférence TED-Ed sur l’avenir de la médecine et de la chirurgie robotique.",
        link: "Voir la vidéo",
      },
    },
    leadership: {
      title: "Leadership & conférences",
      subtitle: "Prise de parole, présidence de comités et leadership en matière de politiques.",
      conference: {
        title: "Globeducate Leadership Conference — Présentateur et orateur",
        meta: "Madrid, Espagne",
        body: "Sélectionné parmi 4 élèves sur 42 000 dans le monde pour présenter sur le leadership et l’innovation.",
      },
      mun: {
        title: "Globeducate Model United Nations — Head Chair (Conseil de sécurité)",
        meta: "Nice, France",
        item1: "Récompensé « Best Delegate » au Conseil de sécurité lors de GlobeducateMUN 2025.",
        item2: "Head Chair du Conseil de sécurité lors de GlobeducateMUN 2026.",
      },
      epp: {
        title: "Parlement Européen des Lycéens (PEL) — Président du PPE (Parti Populaire Européen) ",
        meta: "Parlement Européen, Strasbourg, France",
        body: "Président du PPE au sein de la commission ENG/FRA, responsable de la coordination du parti, du travail d’amendement législatif, de la présidence des réunions et de la stratégie de négociation interpartis.",
      },
    },
    experience: {
      title: "Expérience & bénévolat",
      subtitle: "Exposition clinique, initiatives concrètes et encadrement.",
      hospital: {
        title: "Hôpital St. George — stagiaire en observation clinique",
        meta: "Nice, France · 2025",
        item1: "Stage d’observation d’une semaine dans le cabinet d’un chirurgien plasticien.",
        item2: "Observation d’interventions au bloc opératoire afin d’acquérir une première exposition clinique.",
      },
      water: {
        title: "Initiative DropByDrop — fondateur & responsable de projet",
        meta: "Nice, France · 2025-2026",
        item1: "Pilotage d’un projet interdisciplinaire sur la pénurie d’eau.",
        item2: "<strong>351 € collectés</strong> pour TeamWater, finançant l’accès à l’eau potable pour 351 personnes.",
        item3: "Conception et développement d’un site public de sensibilisation (HTML/CSS).",
        link: "Voir le projet",
      },
      tennis: {
        title: "Enseignement du tennis — moniteur de tennis bénévole",
        meta: "Nice Lawn Tennis Club, France · 2025",
        body: "Enseignement du tennis à des enfants pendant une année complète, avec un accent sur la technique, la confiance et la condition physique.",
      },
      objective: {
        title: "Objectif",
        meta: "Orientation à long terme",
        body:
          "Aspirant neurochirurgien souhaitant associer expertise médicale et innovation technologique, avec une approche analytique et interdisciplinaire à l’intersection de la médecine et de l’éthique.",
      },
    },
    honors: {
      title: "Distinctions & prix",
      subtitle: "Résultats compétitifs et reconnaissances.",
      bronze: {
        value: "Bronze",
        label: "Duke of Edinburgh’s International Award (2025)",
      },
      silver: {
        value: "Argent",
        label: "Duke of Edinburgh’s International Award (2026)",
      },
      delegate: {
        value: "Best Delegate",
        label: "GlobeducateMUN <br> Conseil de sécurité (2025)",
      },
      caribou: {
        value: "Top 5 %",
        label: "Concours Caribou Math (2020)",
      },
      kangaroo: {
        value: "Mention",
        label: "International Math Kangaroo (2020)",
      },
      tsl: {
        value: "Lauréat",
        label: "Concours d’essai TSL",
      },
      athletics: {
        title: "Sport",
        item1: "Championnats départementaux U16 de tennis (Div. 1) — finaliste (2026)",
        item2: "Championnats départementaux U14 de tennis (Div. 1) — champion (2025)",
        item3: "Tennis compétitif FFT — plus de 90 matchs en simple/an (2021—2026)",
        item4: "Championnat national de karaté (U10) — finaliste (Kumite)",
      },
      personal: {
        title: "Développement personnel",
        item1: "Violon · 8 ans · 3 diplômes de performance",
        item2: "Échecs · 1700 ELO (Lichess)",
        item3: "Langues · anglais, français, persan ; espagnol (niveau intermédiaire avancé)",
      },
    },
    skills: {
      title: "Compétences",
      subtitle: "Une boîte à outils pratique pour la recherche et la création.",
      research: {
        title: "Recherche",
        item1: "Synthèse bibliographique",
        item2: "Analyse qualitative",
        item3: "Interprétation de données",
        item4: "Rédaction scientifique",
      },
      technical: {
        title: "Technique",
        item3: "Création de sites web publics",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Ouvert aux opportunités de recherche, conférences, collaborations et initiatives étudiantes.",
      pill: "Entrons en contact",
      cardTitle: "Disponible pour des échanges réfléchis et des opportunités significatives.",
      body:
        "Je suis particulièrement intéressé par les discussions autour de la médecine, de la recherche, du leadership et de l’innovation étudiante. L’e-mail reste le meilleur moyen de me contacter pour des demandes académiques, de prise de parole ou de collaboration.",
      emailButton: "Écrire à Adrian",
      copyButton: "Copier l’e-mail",
      emailAddress: "Adresse e-mail",
      emailLabel: "E-mail",
      note: "Idéal pour les demandes académiques, de recherche et de prise de parole.",
      profileTitle: "Profil de contact",
      profileDetails: "Détails du profil de contact",
      basedLabel: "Basé à",
      basedValue: "Nice, France",
      focusLabel: "Domaines d’intérêt",
      focusValue: "Neurosciences · IA en médecine · Opportunités de leadership",
      languagesLabel: "Langues",
      channelsLabel: "Autres canaux",
      copied: "Copié dans le presse-papiers.",
      copyFailed: "Échec de la copie — vous pouvez sélectionner l’e-mail manuellement ci-dessus.",
    },
    footer: {
      rights: "Adrian Mehran — Tous droits réservés",
    },
  },
};

const allowedTranslationTags = new Set(["BR", "EM", "STRONG", "SPAN"]);
const allowedTranslationClasses = new Set(["accent"]);

function t(key, language = getCurrentLanguage()) {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]) ?? "";
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    // The site still works when browser storage is unavailable.
  }
}

function sanitizeTranslation(html) {
  const template = document.createElement("template");
  template.innerHTML = html;

  template.content.querySelectorAll("*").forEach((node) => {
    if (!allowedTranslationTags.has(node.tagName)) {
      node.replaceWith(document.createTextNode(node.textContent || ""));
      return;
    }

    Array.from(node.attributes).forEach((attr) => {
      if (node.tagName === "SPAN" && attr.name === "class") {
        const safeClasses = attr.value.split(/\s+/).filter((className) => allowedTranslationClasses.has(className));
        if (safeClasses.length) {
          node.setAttribute("class", safeClasses.join(" "));
        } else {
          node.removeAttribute("class");
        }
        return;
      }

      node.removeAttribute(attr.name);
    });
  });

  return template.innerHTML;
}

function getCurrentLanguage() {
  const savedLanguage = getStoredLanguage();
  return savedLanguage && translations[savedLanguage] ? savedLanguage : defaultLanguage;
}

function setLanguage(language) {
  const nextLanguage = translations[language] ? language : defaultLanguage;
  storeLanguage(nextLanguage);
  document.documentElement.lang = nextLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n, nextLanguage);
    if (value) element.innerHTML = sanitizeTranslation(value);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((mapping) => {
      const [attribute, key] = mapping.split(":").map((part) => part.trim());
      const value = t(key, nextLanguage);
      if (attribute && value) element.setAttribute(attribute, value);
    });
  });

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", t("meta.description", nextLanguage));
  }

  document.querySelectorAll("[data-cv-link]").forEach((link) => {
    link.setAttribute("href", cvByLanguage[nextLanguage] || cvByLanguage[defaultLanguage]);
  });

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    const targetLanguage = nextLanguage === "en" ? "fr" : "en";
    button.textContent = targetLanguage.toUpperCase();
    button.setAttribute("aria-label", t("nav.toggleLabel", nextLanguage));
  });
}

let isLanguageSwitching = false;

function switchLanguage(language) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    setLanguage(language);
    return;
  }

  if (isLanguageSwitching) return;
  isLanguageSwitching = true;
  document.documentElement.classList.add("is-language-switching");

  window.setTimeout(() => {
    setLanguage(language);

    window.requestAnimationFrame(() => {
      document.documentElement.classList.remove("is-language-switching");
      window.setTimeout(() => {
        isLanguageSwitching = false;
      }, 260);
    });
  }, 110);
}

document.querySelectorAll("[data-language-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = getCurrentLanguage() === "en" ? "fr" : "en";
    switchLanguage(nextLanguage);
  });
});

setLanguage(getCurrentLanguage());

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
        toast.textContent = t("contact.copied");
        setTimeout(() => {
          toast.textContent = "";
        }, 1800);
      }
    } catch {
      if (toast) {
        toast.textContent = t("contact.copyFailed");
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
