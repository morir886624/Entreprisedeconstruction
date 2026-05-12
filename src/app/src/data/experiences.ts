export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Développeur Full Stack Senior",
    company: "Tech Innovation SAS",
    location: "Paris, France",
    period: "2022 - Présent",
    description:
      "Développement d'applications web modernes avec React et Node.js. Architecture et mise en place de solutions scalables.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Docker"],
    achievements: [
      "Migration complète vers TypeScript",
      "Amélioration des performances de 40%",
      "Mise en place CI/CD avec GitHub Actions",
    ],
  },
  {
    id: 2,
    title: "Développeur Frontend",
    company: "Digital Agency",
    location: "Lyon, France",
    period: "2020 - 2022",
    description:
      "Création d'interfaces utilisateur responsives et accessibles. Collaboration avec l'équipe design pour implémenter des solutions créatives.",
    technologies: ["React", "JavaScript", "SASS", "Webpack"],
    achievements: [
      "Développement de 15+ sites web clients",
      "Score Lighthouse moyen de 95+",
      "Formation de 3 développeurs juniors",
    ],
  },
  {
    id: 3,
    title: "Développeur Web Junior",
    company: "StartUp Digital",
    location: "Marseille, France",
    period: "2018 - 2020",
    description:
      "Développement et maintenance de sites web. Apprentissage des bonnes pratiques et méthodologies agiles.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    achievements: [
      "Contribution à 10+ projets",
      "Refonte complète du site principal",
      "Certification en développement web",
    ],
  },
];
