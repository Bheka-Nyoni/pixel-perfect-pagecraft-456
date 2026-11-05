import { Fragment } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

import { GithubIcon } from "./icons";

function CardVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="panel-gradient relative flex h-full w-full items-center justify-center px-4">
      <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-60" />
      <div className="absolute top-3 left-4 flex gap-1.5" aria-hidden="true">
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
      </div>
      <figure
        className="relative flex flex-wrap items-center justify-center gap-1.5"
        aria-label={`Architecture: ${project.diagram.join(" to ")}`}
      >
        {project.diagram.map((node, i) => (
          <Fragment key={node}>
            {i > 0 ? <ArrowRight aria-hidden="true" className="size-3.5 text-primary" /> : null}
            <span className="rounded-md border border-border-strong bg-background/70 px-2.5 py-1.5 font-mono text-[11px] text-foreground">
              {node}
            </span>
          </Fragment>
        ))}
      </figure>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass glass-hover flex h-full flex-col overflow-hidden rounded-xl">
      <div className="h-36 border-b">
        <CardVisual project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-mono text-lg font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          {project.badge ? (
            <span className="shrink-0 rounded-md border border-primary/40 bg-primary/15 px-2 py-0.5 font-mono text-[11px] text-primary-glow">
              {project.badge}
            </span>
          ) : null}
        </div>

        <p className="mt-3 font-mono text-xs text-primary">{project.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/90">{project.summary}</p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>

        <ul aria-label="Tech stack" className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <Button asChild variant="glass" size="sm" className="h-9 px-3">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon /> View on GitHub
            </a>
          </Button>
          {project.liveUrl ? (
            <Button asChild variant="ghost" size="sm" className="h-9 px-3">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink /> Live demo
              </a>
            </Button>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-dashed border-border-strong px-3 text-xs text-muted-foreground"
            >
              <ExternalLink className="size-3.5" /> Live demo (coming soon)
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
