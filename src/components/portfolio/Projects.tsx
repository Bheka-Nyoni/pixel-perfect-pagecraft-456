import { useMemo, useState } from "react";

import {
  filterProjects,
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/data/projects";

import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory>("All");
  const visible = filterProjects(projects, category);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        projectCategories.map((c) => [c, filterProjects(projects, c).length]),
      ) as Record<ProjectCategory, number>,
    [],
  );

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="projects"
            label="// projects"
            title="Things I've built and tested"
            description="Selected work across full-stack development and quality assurance."
          >
            <ProjectFilter value={category} onChange={setCategory} counts={counts} />
          </SectionHeading>
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>

        <ul key={category} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <li
              key={p.slug}
              className="animate-in fade-in-0 slide-in-from-bottom-2 fill-mode-both duration-250"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
