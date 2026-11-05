import { GraduationCap } from "lucide-react";

import { education, experience } from "@/data/experience";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-pad border-t">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="experience" label="// experience" title="Where I've been working" />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <ol className="glass rounded-xl p-6 md:p-8">
              {experience.map((job) => (
                <li key={job.company + job.role} className="relative border-l pl-6 md:pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-primary shadow-[var(--shadow-glow)]"
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-mono text-base font-semibold text-foreground md:text-lg">
                      {job.role}
                    </h3>
                    <p className="font-mono text-xs text-primary">{job.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.company} · {job.location}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>

          {education.map((ed) => (
            <Reveal key={ed.institution} delay={80}>
              <article className="glass h-full rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-2 font-mono text-xs text-primary">
                  <GraduationCap className="size-4" aria-hidden="true" /> education
                </div>
                <h3 className="mt-4 font-mono text-base font-semibold text-foreground">
                  {ed.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{ed.institution}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{ed.period}</p>
                <p className="mt-6 font-mono text-xs text-muted-foreground">key modules</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {ed.modules.map((m) => (
                    <li
                      key={m}
                      className="rounded border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
