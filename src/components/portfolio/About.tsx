import { MapPin } from "lucide-react";

import { site } from "@/data/site";

import { Reveal } from "./Reveal";

export function About() {
  const { about } = site;
  return (
    <section id="about" aria-labelledby="about-heading" className="section-pad border-t">
      <div className="container-page">
        <Reveal className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          <div className="mx-auto md:mx-0">
            {about.photo ? (
              <img
                src={about.photo}
                alt={`Portrait of ${site.name}`}
                loading="lazy"
                className="size-40 rounded-2xl border object-cover md:size-48"
              />
            ) : (
              <div
                role="img"
                aria-label={`Photo placeholder for ${site.name}`}
                className="panel-gradient relative flex size-40 items-center justify-center overflow-hidden rounded-2xl border md:size-48"
              >
                <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-50" />
                <span className="relative font-mono text-4xl font-semibold text-foreground">BN</span>
              </div>
            )}
          </div>

          <div className="max-w-2xl">
            <p className="font-mono text-sm text-primary">// about</p>
            <h2
              id="about-heading"
              className="mt-3 font-mono text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
            >
              A bit about me
            </h2>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden="true" /> {site.location}
            </p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              {about.bio.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
