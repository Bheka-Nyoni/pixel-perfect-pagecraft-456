import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { About } from "@/components/portfolio/About";
import { CertCard } from "@/components/portfolio/CertCard";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/icons";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SkillGroup } from "@/components/portfolio/SkillGroup";
import { Timeline } from "@/components/portfolio/Timeline";
import { certifications } from "@/data/certifications";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";

const title = "Bheka Nyoni — Full Stack Developer in Cape Town";
const description =
  "Full Stack Developer and BSc Computing student in Cape Town building Vue.js, Node.js, Express and MySQL web apps. Focus on FinTech, Agile delivery and QA.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Timeline />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-pad border-t">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="skills" label="// skills" title="What I work with" />
        </Reveal>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 50}>
              <SkillGroup group={g} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-pad border-t"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading id="certifications" label="// certifications" title="Certifications" />
        </Reveal>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 40}>
              <CertCard cert={c} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const linkClass =
    "inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground";
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad border-t">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <Reveal>
          <p className="font-mono text-sm text-primary">// contact</p>
          <h2
            id="contact-heading"
            className="mt-3 font-mono text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {site.contact.headline}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {site.contact.blurb}
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                <span className="glass inline-flex size-10 items-center justify-center rounded-lg">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                <span className="glass inline-flex size-10 items-center justify-center rounded-lg">
                  <LinkedinIcon className="size-4" />
                </span>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.socials.github} target="_blank" rel="noreferrer" className={linkClass}>
                <span className="glass inline-flex size-10 items-center justify-center rounded-lg">
                  <GithubIcon className="size-4" />
                </span>
                GitHub
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
