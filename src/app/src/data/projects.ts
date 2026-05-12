export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plateforme de commerce électronique complète avec gestion des produits, panier et paiement sécurisé.",
    image: "ecommerce platform",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/morir/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description:
      "Tableau de bord analytique avec visualisations de données en temps réel et rapports personnalisables.",
    image: "analytics dashboard",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/morir/dashboard",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Application de gestion de tâches collaborative avec notifications en temps réel.",
    image: "task management",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/morir/tasks",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Builder",
    description:
      "Outil de création de portfolio pour développeurs avec templates personnalisables.",
    image: "portfolio website",
    technologies: ["React", "Tailwind", "Markdown", "GitHub API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/morir/portfolio",
    featured: false,
  },
];
