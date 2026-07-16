export type Locale = "fr" | "en";
export const locales: Locale[] = ["fr", "en"];

export type ExpEntry = {
  role: string;
  company: string;
  logo?: string;
  logoFit?: "contain" | "cover";
  location: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: string[];
  stack: string[];
};

export type EduEntry = {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
};

export type Dict = {
  htmlLang: string;
  meta: { title: string; description: string };
  common: {
    location: string;
    nationality: string;
    available: string;
    firstName: string;
    lastName: string;
  };
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
    cta: string;
    open_menu: string;
    close_menu: string;
  };
  hero: {
    kicker: string;
    title_role: string;
    tagline: string;
    badge_available: string;
    cta_contact: string;
    cta_journey: string;
  };
  about: {
    kicker: string;
    title_pre: string;
    title_accent: string;
    title_post: string;
    p1: string;
    p2: string;
    qualities_title: string;
    soft_skills: string[];
    languages_title: string;
    languages: { name: string; level: string }[];
    interests_title: string;
    interests: { title: string; description: string }[];
  };
  experience: {
    kicker: string;
    title: string;
    lead: string;
    current_badge: string;
    items: ExpEntry[];
  };
  education: {
    kicker: string;
    title: string;
    lead: string;
    items: EduEntry[];
  };
  skills: {
    kicker: string;
    title: string;
    lead: string;
    groups: {
      kind: "languages" | "frameworks" | "tools";
      title: string;
      subtitle: string;
    }[];
  };
  contact: {
    kicker: string;
    title_pre: string;
    title_accent: string;
    title_post: string;
    description: string;
    cta_email: string;
    cta_linkedin: string;
    row_email: string;
    row_phone: string;
    row_location: string;
  };
  footer: {
    role: string;
  };
  toggles: {
    theme_to_light: string;
    theme_to_dark: string;
    lang_aria: string;
  };
};

const fr: Dict = {
  htmlLang: "fr",
  meta: {
    title: "Aïssatou GUEYE - Ingénieure Informatique",
    description:
      "Portfolio d'Aïssatou GUEYE, ingénieure informatique. À la recherche d'un CDI à partir d'octobre 2026.",
  },
  common: {
    location: "Nîmes, France",
    nationality: "Sénégalaise",
    available: "Octobre 2026",
    firstName: "Aïssatou",
    lastName: "GUEYE",
  },
  nav: {
    about: "À propos",
    experience: "Expériences",
    education: "Formations",
    skills: "Compétences",
    contact: "Contact",
    cta: "Me contacter",
    open_menu: "Ouvrir le menu",
    close_menu: "Fermer le menu",
  },
  hero: {
    kicker: "Portfolio · 2026",
    title_role: "Ingénieure Informatique",
    tagline:
      "Diplômée en ingénierie informatique, actuellement en stage chez TechnipFMC. Je conçois des logiciels métier robustes, à la croisée du produit et de l'ingénierie.",
    badge_available: "Disponible en CDI dès octobre 2026",
    cta_contact: "Me contacter",
    cta_journey: "Voir le parcours",
  },
  about: {
    kicker: "À propos",
    title_pre: "Ingénieure informatique",
    title_accent: "",
    title_post: "",
    p1: "Actuellement stagiaire en informatique chez TechnipFMC Subsea France à Nîmes, je conçois des outils d'automatisation de simulations pour l'ingénierie sous-marine. Après trois années d'alternance chez Covéa et MMA, j'aborde le développement logiciel avec une double approche : rigueur d'ingénieur et sens du produit.",
    p2: "Autonome et rigoureuse, j'aime concevoir des outils utiles, travailler en équipe pluridisciplinaire, et faire le pont entre les besoins métiers et les solutions techniques.",
    qualities_title: "Qualités clés",
    soft_skills: [
      "Autonomie",
      "Créativité",
      "Curiosité",
      "Travail d'équipe",
      "Adaptation",
      "Communication écrite & orale",
    ],
    languages_title: "Langues",
    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Wolof", level: "Langue maternelle" },
      { name: "Anglais", level: "Avancé" },
      { name: "Espagnol", level: "Intermédiaire" },
    ],
    interests_title: "Centres d'intérêt",
    interests: [
      {
        title: "Nouvelles technologies",
        description: "Veille sur l'évolution des technologies numériques.",
      },
      { title: "Lecture & écriture", description: "Romans, essais." },
      { title: "Art & culture", description: "Cinéma, photographie." },
    ],
  },
  experience: {
    kicker: "Parcours",
    title: "Expériences professionnelles",
    lead: "",
    current_badge: "En poste",
    items: [
      {
        role: "Stagiaire - Ingénieur Informatique",
        company: "TechnipFMC Subsea France",
        logo: "/TECHNIP.png",
        location: "Nîmes, France",
        period: "Depuis février 2026",
        current: true,
        description:
          "Automatisation de simulations d'ingénierie sous-marine dans le secteur Oil & Gas.",
        highlights: [
          "Développement et maintenance de blocs ARENA avec backends Python pour automatiser les simulations Abaqus de flowlines dans le secteur Oil & Gas.",
          "Implémentation d'interfaces graphiques performantes en React/TypeScript et Vue.js, intégration backend dans l'environnement ARENA et contributions à la logique backend pour l'optimisation des workflows de post-traitement.",
          "Travail réalisé dans des environnements conteneurisés Docker, avec Git/GitHub pour la gestion de version et la collaboration.",
          "Montée en compétences continue en ingénierie sous-marine et analyse mécanique afin d'aligner les outils logiciels avec les workflows de calcul de structures offshore.",
        ],
        stack: [
          "ARENA",
          "Abaqus",
          "Python",
          "React",
          "TypeScript",
          "Vue.js",
          "Docker",
          "Git",
          "GitHub",
        ],
      },
      {
        role: "Apprentie Ingénieure SI - BA & Dev",
        company: "Covéa",
        logo: "/covea.png",
        location: "Paris Montparnasse",
        period: "Août 2023 - Août 2025",
        description:
          "Analyse métier et développement fullstack.",
        highlights: [
          "Analyse des besoins métiers, communication, collecte et documentation des exigences, et reporting auprès des équipes techniques et fonctionnelles",
          "Conception et développement d'un outil interne de comparaison des configurations Genesys (téléphonie) sur les environnements Dev, Homol, Preprod et Prod",
          "Backend Java (Spring Boot) et frontend React / JavaScript",
          "Intégration applicative, conception et gestion des pipelines CI/CD, gestion de version avec Git (Bitbucket) et participation aux opérations DevOps.",
        ],
        stack: [
          "Java",
          "Git",
          "React",
          "JavaScript",
          "REST API",
          "Jenkins",
        ],
      },
      {
        role: "Apprentie Ingénieure SI - DevOps",
        company: "MMA",
        logo: "/MMA.png",
        logoFit: "cover",
        location: "Chartres",
        period: "Octobre 2022 - Juillet 2023",
        description:
          "Industrialisation et développement autour des CMS JCMS et Jahia pour les sites de la marque.",
        highlights: [
          "Gestion de contenus sur plateformes CMS (JCMS et Jahia), déploiement des versions 9 et 10 de JCMS avec Ruby/Chef, Ansible et Jenkins, gestion des logs via ELK/KAFKA",
          "Développement d'un outil interne de téléchargement des modules Jahia (sources et artefacts) - utilisé pour les livraisons éditeur et les audits",
          "Développement de modules Jahia dédiés à la gestion des imports et exports de sites",
        ],
        stack: [
          "Java",
          "JCMS",
          "Jahia",
          "Maven",
          "Git",
          "Ruby",
          "Chef",
          "Ansible",
          "Jenkins",
          "ELK",
          "KAFKA",
        ],
      },
      {
        role: "Recruteuse de donateurs / Fundraiser",
        company: "RAVESS SRL",
        logo: "/ravess.png",
        logoFit: "cover",
        location: "Région parisienne",
        period: "Juillet 2022 - Septembre 2022",
        description:
          "Mission de street marketing pour le compte de l'UNICEF.",
        highlights: [
          "Sensibilisation du public aux programmes humanitaires clés de l'UNICEF sur le terrain",
          "Recrutement de donateurs réguliers via des échanges directs et l'obtention d'engagements de soutien sur le long terme",
        ],
        stack: [
          "Communication",
          "Sensibilisation",
          "Stratégie marketing",
        ],
      },
    ],
  },
  education: {
    kicker: "Formations",
    title: "Cursus académique",
    lead: "",
    items: [
      {
        degree: "Diplôme d'Ingénieur en Informatique",
        school: "Sup Galilée",
        location: "Villetaneuse",
        period: "Septembre 2022 - Juillet 2026",
        description:
          "Formation généraliste d'ingénieur en Informatique : Développement, Data/IA, Réseaux, Cloud, Gestion de projet.",
      },
      {
        degree: "Séjour linguistique",
        school: "ACE English Malta",
        location: "Malte",
        period: "Juin 2025 - Août 2025",
        description:
          "Mobilité internationale : cours d'anglais conversationnels.",
      },
      {
        degree: "Classes Préparatoires aux Grandes Écoles",
        school: "Lycée Marceau",
        location: "Chartres",
        period: "Septembre 2020 - Août 2022",
        description:
          "Maths, Physique, Chimie, Informatique & Science de l'Ingénieur.",
      },
      {
        degree: "Baccalauréat Scientifique - Mention Bien",
        school: "Lycée Scientifique d'Excellence de Diourbel",
        location: "Diourbel, Sénégal",
        period: "Octobre 2017 - Septembre 2020",
        description: "Option Sciences Expérimentales.",
      },
    ],
  },
  skills: {
    kicker: "Stack technique",
    title: "Compétences",
    lead: "",
    groups: [
      {
        kind: "languages",
        title: "Langages",
        subtitle: "Backend, frontend, systèmes & data",
      },
      {
        kind: "frameworks",
        title: "Frameworks & librairies",
        subtitle: "Web, IA & développement fullstack",
      },
      {
        kind: "tools",
        title: "Outils & technologies",
        subtitle: "CI/CD, cloud, observabilité",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title_pre: "",
    title_accent: "Prenons contact",
    title_post: ".",
    description:
      "Ouverte aux opportunités d'ingénieure Informatique en CDI à partir d'octobre 2026.",
    cta_email: "Envoyer un email",
    cta_linkedin: "LinkedIn",
    row_email: "Email",
    row_phone: "Téléphone",
    row_location: "Localisation",
  },
  footer: {
    role: "Ingénieure Informatique",
  },
  toggles: {
    theme_to_light: "Passer en mode clair",
    theme_to_dark: "Passer en mode sombre",
    lang_aria: "Changer la langue",
  },
};

const en: Dict = {
  htmlLang: "en",
  meta: {
    title: "Aïssatou GUEYE - Software Engineer",
    description:
      "Portfolio of Aïssatou GUEYE, software engineer. Looking for a full-time position from October 2026.",
  },
  common: {
    location: "Nîmes, France",
    nationality: "Senegalese",
    available: "October 2026",
    firstName: "Aïssatou",
    lastName: "GUEYE",
  },
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    contact: "Contact",
    cta: "Get in touch",
    open_menu: "Open menu",
    close_menu: "Close menu",
  },
  hero: {
    kicker: "Portfolio · 2026",
    title_role: "Computer Science Engineer",
    tagline:
      "Computer Science graduate, completing my internship at TechnipFMC. I build robust business software at the crossroads of product and engineering.",
    badge_available: "Available full-time from October 2026",
    cta_contact: "Get in touch",
    cta_journey: "See the journey",
  },
  about: {
    kicker: "About",
    title_pre: "A",
    title_accent: "Computer Science Engineer",
    title_post: "",
    p1: "Currently a Computer Science Engineering intern at TechnipFMC Subsea France in Nîmes, I design automation tools for subsea engineering simulations. After three years of apprenticeship at Covéa and MMA, I approach software development with a dual mindset: engineering rigor and product sense.",
    p2: "Autonomous and detail-oriented, I enjoy building useful tools, working within multidisciplinary teams, and bridging business needs with technical solutions.",
    qualities_title: "Key qualities",
    soft_skills: [
      "Autonomy",
      "Creativity",
      "Curiosity",
      "Teamwork",
      "Adaptability",
      "Written & oral communication",
    ],
    languages_title: "Languages",
    languages: [
      { name: "French", level: "Native" },
      { name: "Wolof", level: "Native" },
      { name: "English", level: "Advanced" },
      { name: "Spanish", level: "Intermediate" },
    ],
    interests_title: "Interests",
    interests: [
      {
        title: "New technologies",
        description: "Following the evolution of digital technologies.",
      },
      { title: "Reading & writing", description: "Novels, essays." },
      { title: "Art & culture", description: "Cinema, photography." },
    ],
  },
  experience: {
    kicker: "Career",
    title: "Professional experience",
    lead: "",
    current_badge: "Current",
    items: [
      {
        role: "Software Engineer Intern",
        company: "TechnipFMC Subsea France",
        logo: "/TECHNIP.png",
        location: "Nîmes, France",
        period: "Since February 2026",
        current: true,
        description:
          "Automating subsea engineering simulations in the Oil & Gas sector.",
        highlights: [
          "Development and maintenance of ARENA blocks featuring Python backends to automate Abaqus flowline simulations within the Oil & Gas sector.",
          "Implementation of high-performance graphical user interfaces using React/TypeScript and Vue.js, along with backend integration into the ARENA environment and contributions to selected backend logic aimed at optimizing post-processing workflows.",
          "Work carried out within Docker-based containerized environments, using Git/GitHub for version control and collaboration.",
          "Role also involves continuous upskilling in subsea engineering and mechanical analysis to ensure alignment between software tools and offshore structural calculation workflows.",
        ],
        stack: [
          "ARENA",
          "Abaqus",
          "Python",
          "React",
          "TypeScript",
          "Vue.js",
          "Docker",
          "Git",
          "GitHub",
        ],
      },
      {
        role: "IS Engineer Apprentice - BA & Dev",
        company: "Covéa",
        logo: "/covea.png",
        location: "Paris",
        period: "Aug. 2023 - Aug. 2025",
        description:
          "Business analysis and fullstack development.",
        highlights: [
          "Business analysis, communication and reporting with technical and functional teams, including requirement gathering and documentation",
          "Design and development of an internal tool comparing Genesys (telephony) configurations across Dev, Test, Preprod and Prod environments",
          "Java (Spring Boot) backend and React / JavaScript frontend",
          "Application integration, design and management of CI/CD pipelines, version control with Git (Bitbucket), and involvement in DevOps operations."
        ],
        stack: [
          "Java",
          "Git",
          "React",
          "JavaScript",
          "REST API",
          "Jenkins",
        ],
      },
      {
        role: "IS Engineer Apprentice - DevOps",
        company: "MMA",
        logo: "/MMA.png",
        logoFit: "cover",
        location: "Chartres",
        period: "Oct. 2022 - Jul. 2023",
        description:
          "Industrialization and development around JCMS and Jahia CMS platforms for the brand's websites.",
        highlights: [
          "Content management using CMS platforms (JCMS and Jahia), deployment of JCMS versions 9 and 10  with Ruby/Chef, Ansible, Jenkins and ELK/KAFKA for logs management",
          "Development of an internal tool to download Jahia modules (sources and artifacts) - used for vendor deliveries and audits",
          "Development of Jahia modules dedicated to site import/export management",
        ],
        stack: ["Java", "JCMS", "Jahia", "Maven", "Git", "Ruby", "Chef", "Ansible", "Jenkins", "ELK", "KAFKA"],
      },
      {
        role: "Fundraiser / Donor Recruiter",
        company: "RAVESS SRL",
        logo: "/ravess.png",
        logoFit: "cover",
        location: "Greater Paris",
        period: "Jul. 2022 - Sep. 2022",
        description:
          "Street marketing mission on behalf of UNICEF.",
        highlights: [
          "On-the-ground public engagement to introduce UNICEF's key humanitarian programs",
          "Recruitment of regular donors through direct outreach and long-term commitment sign-ups",
        ],
        stack: [
          "Community outreach",
          "Public awareness",
          "Marketing strategy",
        ],
      },
    ],
  },
  education: {
    kicker: "Education",
    title: "Academic background",
    lead: "",
    items: [
      {
        degree: "Engineering degree - Computer Science Engineering",
        school: "Sup Galilée",
        location: "Villetaneuse",
        period: "Sep. 2022 - Jul. 2026",
        description:
          "General computer science engineering curriculum: development, data/AI, networks, cloud, project management.",
      },
      {
        degree: "Language stay",
        school: "ACE English Malta",
        location: "Malta",
        period: "Jun. 2025 - Aug. 2025",
        description: "International mobility: conversational English classes.",
      },
      {
        degree: "Preparatory classes for Grandes Écoles",
        school: "Lycée Marceau",
        location: "Chartres",
        period: "Sep. 2020 - Aug. 2022",
        description:
          "Math, Physics, Chemistry, Computer Science & Engineering Sciences.",
      },
      {
        degree: "Scientific Baccalauréat - Honors",
        school: "Lycée Scientifique d'Excellence de Diourbel",
        location: "Diourbel, Senegal",
        period: "Oct. 2017 - Sep. 2020",
        description: "Experimental Sciences track.",
      },
    ],
  },
  skills: {
    kicker: "Tech stack",
    title: "Hard Skills",
    lead: "",
    groups: [
      {
        kind: "languages",
        title: "Languages",
        subtitle: "Backend, frontend, systems & data",
      },
      {
        kind: "frameworks",
        title: "Frameworks & libraries",
        subtitle: "Web, AI & fullstack development",
      },
      {
        kind: "tools",
        title: "Tools & technologies",
        subtitle: "CI/CD, cloud, observability",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title_pre: "",
    title_accent: "Let's connect",
    title_post: ".",
    description:
      "Open to full-time Computer Science Engineering opportunities from October 2026",
    cta_email: "Send an email",
    cta_linkedin: "LinkedIn",
    row_email: "Email",
    row_phone: "Phone",
    row_location: "Location",
  },
  footer: {
    role: "Software Engineer",
  },
  toggles: {
    theme_to_light: "Switch to light mode",
    theme_to_dark: "Switch to dark mode",
    lang_aria: "Change language",
  },
};

export const dictionaries: Record<Locale, Dict> = { fr, en };
