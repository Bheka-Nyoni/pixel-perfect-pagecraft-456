export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  modules: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Life Choices Academy",
    role: "Intern Full-Stack Developer",
    location: "Cape Town",
    period: "Apr 2025 – Present",
    points: [
      "Promoted to the Studio Team to work on live client projects after strong performance in the intensive training phase.",
      "Served as Project Manager, applying Scrum activities to coordinate tasks, set milestones and keep delivery on track.",
      "Developed enterprise-grade applications with Oracle APEX, using complex SQL queries to structure databases and generate dynamic reports.",
      "Built and deployed scalable applications with the MEVN stack (MySQL, Express, Vue, Node), collaborating through GitHub version control.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "University of South Africa (UNISA)",
    degree: "BSc in Computing",
    period: "2024 – Present (in progress)",
    modules: [
      "Theoretical Computer Science",
      "Linear Algebra",
      "Visual Programming",
      "Computer Networks",
    ],
  },
];
