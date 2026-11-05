import { ArrowRight, Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  const { hero } = site;
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
      <div className="container-page relative pt-16 pb-20 md:pt-28 md:pb-28">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-primary animate-in fade-in-0 duration-500">
            {hero.label}
            <span aria-hidden="true" className="cursor-blink ml-0.5 text-primary">
              _
            </span>
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl animate-in fade-in-0 slide-in-from-bottom-2 duration-500"
          >
            Hi, I'm Bheka Nyoni.{" "}
            <span className="text-muted-foreground">
              I build full-stack web apps from database to UI.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {hero.subtext}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <a href="#projects">
                View projects <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:bg-transparent hover:text-foreground">
              <a href={site.cvUrl} download>
                <Download /> CV
              </a>
            </Button>
          </div>

          <ul aria-label="Core technologies" className="mt-10 flex flex-wrap gap-2">
            {hero.tags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary-glow"
              >
                {t}
              </li>
            ))}
          </ul>

          <ul aria-label="Social links" className="mt-8 flex items-center gap-2">
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-muted-foreground transition-colors duration-150 hover:border-primary/60 hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-muted-foreground transition-colors duration-150 hover:border-primary/60 hover:text-foreground"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-muted-foreground transition-colors duration-150 hover:border-primary/60 hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
