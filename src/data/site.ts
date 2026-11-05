// Site-wide content. Swap the placeholder URLs for real ones.
// NOTE: never add a phone number here — it must not appear on the site.

export type NavLink = { label: string; href: string };

export const site = {
  name: "Bheka Nyoni",
  role: "Full Stack Developer",
  location: "Cape Town, South Africa",
  email: "bhekanyoni87@gmail.com",
  cvUrl: "/Bheka-Nyoni-CV.pdf",
  socials: {
    github: "https://github.com/YOUR-USERNAME", // TODO: replace with real GitHub URL
    linkedin: "https://www.linkedin.com/in/YOUR-PROFILE", // TODO: replace with real LinkedIn URL
  },
  hero: {
    label: "// full stack developer",
    headline: "Hi, I'm Bheka Nyoni. I build full-stack web apps from database to UI.",
    subtext:
      "Full Stack Developer and BSc Computing student in Cape Town, with a focus on FinTech, Agile delivery and software quality assurance. Scrum certified.",
    tags: ["JavaScript", "Vue.js", "Node.js", "Express", "MySQL", "Oracle APEX"],
  },
  // ✏️ EDIT ME: personal bio shown in the About section (first person, ~80-100 words).
  about: {
    photo: undefined as string | undefined, // set to an image URL to replace the initials placeholder
    bio: [
      "I'm a full-stack developer who likes owning a product end to end, from the database schema to the last pixel of the interface.",
      "My background in QA and Scrum shapes how I build: I think about edge cases early, keep work visible, and ship in small, testable steps. I'm especially drawn to FinTech, where correctness and clarity really matter, and I use AI-assisted tooling to move faster without cutting corners.",
      "Right now I'm building client projects at Life Choices Academy while studying Computing at UNISA.",
    ],
  },
  contact: {
    headline: "Let's build something.",
    blurb: "I'm open to full-time full-stack roles and freelance projects. Send a message and I'll get back to you.",
  },
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
};
