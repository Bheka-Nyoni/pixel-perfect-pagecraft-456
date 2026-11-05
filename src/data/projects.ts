export const projectCategories = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
  "Database",
  "QA",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  summary: string;
  highlights: string[];
  tech: string[];
  categories: Exclude<ProjectCategory, "All">[];
  /** Mini architecture diagram shown in the card header when no image is set. */
  diagram: string[];
  /** Optional real screenshot. When set, replaces the diagram header. */
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    slug: "proconnect",
    title: "ProConnect",
    subtitle: "Service Mediation Platform",
    role: "Lead Full-Stack Developer",
    summary: "A platform that connects clients with service providers, built end to end.",
    highlights: [
      "Engineered the complete end-to-end architecture, building both the Vue.js frontend and the Node.js backend.",
      "Wrote API endpoints for secure, real-time data transfer between the client and the MySQL database.",
      "Implemented job-matching algorithms and role-based access control (RBAC) to handle complex user interactions.",
    ],
    tech: ["Vue.js", "Node.js", "Express", "MySQL"],
    categories: ["Full-Stack", "Frontend", "Backend", "Database"],
    diagram: ["Vue.js", "Express API", "MySQL"],
    githubUrl: "https://github.com/YOUR-USERNAME/REPO", // TODO: replace
  },
  {
    slug: "modern-tech",
    title: "Modern Tech",
    subtitle: "Showcase Platform",
    role: "Full Stack Developer",
    summary: "A product showcase with a data-focused backend and a responsive vanilla JS client.",
    highlights: [
      "Designed a reliable Express and MySQL backend focused on efficient data management.",
      "Built interactive client-side features in Vanilla JavaScript to improve responsiveness.",
    ],
    tech: ["Node.js", "Express", "Vanilla JS", "MySQL"],
    categories: ["Full-Stack", "Backend", "Database"],
    diagram: ["Vanilla JS", "Express", "MySQL"],
    githubUrl: "https://github.com/YOUR-USERNAME/REPO", // TODO: replace
  },
  {
    slug: "shopwise",
    title: "ShopWise",
    subtitle: "Retail Price Comparison App",
    role: "Quality Assurance (QA) Tester",
    summary: "Cross-platform mobile app comparing prices from major South African retailers.",
    highlights: [
      "Ran UI/UX testing on a cross-platform mobile app that scrapes and compares prices from major South African retailers.",
      "Validated the “lowest price” comparison logic by simulating user journeys and checking responsiveness across devices.",
      "Worked with the development team to find logic errors in the Flutter codebase before deployment.",
    ],
    tech: ["Flutter", "Dart", "MongoDB", "Python"],
    categories: ["QA", "Frontend"],
    diagram: ["Test plan", "Flutter app", "Bug report"],
    githubUrl: "https://github.com/YOUR-USERNAME/REPO", // TODO: replace
    badge: "QA Role",
  },
];

export function filterProjects(list: Project[], category: ProjectCategory): Project[] {
  if (category === "All") return list;
  return list.filter((p) => p.categories.includes(category));
}
