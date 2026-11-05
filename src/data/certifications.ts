export type Certification = { title: string; issuer?: string; year?: string; focus: string };

export const certifications: Certification[] = [
  {
    title: "Software Development Professional Certificate",
    issuer: "Life Choices Academy",
    focus: "Front-end, back-end, APIs and data modeling.",
  },
  {
    title: "Scrum Fundamentals",
    focus: "Applying Scrum activities for efficient team collaboration and value delivery.",
  },
  {
    title: "Financial Markets",
    year: "2026",
    focus: "Technology integration in finance, market optimization and behavioral finance.",
  },
  {
    title: "Managing a Business Venture",
    focus: "Operational strategy and leveraging technology for business efficiency.",
  },
  {
    title: "Engaging Stakeholders for Business",
    focus: "Client communication and stakeholder mapping.",
  },
  {
    title: "Creating Compelling Reports",
    focus: "Professional business writing and reporting efficiency.",
  },
];
