export type SkillGroupData = { title: string; items: string[] };

export const skillGroups: SkillGroupData[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "Dart", "Python", "PHP", "C++", "SQL (Advanced)"],
  },
  { title: "Web", items: ["Vue.js", "Node.js", "Express", "HTML5", "CSS3"] },
  {
    title: "Mobile & Enterprise",
    items: ["Flutter (mobile testing)", "Oracle APEX (low-code)"],
  },
  {
    title: "Data & FinTech",
    items: ["MySQL", "Firebase", "Web scraping algorithms", "Financial market analysis"],
  },
  {
    title: "Methodologies",
    items: [
      "Scrum / Agile (certified)",
      "Stakeholder management",
      "Technical reporting",
      "AI-assisted coding",
    ],
  },
];
