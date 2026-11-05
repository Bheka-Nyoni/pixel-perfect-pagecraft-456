import { BadgeCheck } from "lucide-react";

import type { Certification } from "@/data/certifications";

export function CertCard({ cert }: { cert: Certification }) {
  const meta = [cert.issuer, cert.year].filter(Boolean).join(" · ");
  return (
    <article className="glass glass-hover flex h-full gap-4 rounded-xl p-5">
      <BadgeCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
      <div>
        <h3 className="text-sm font-semibold leading-snug text-foreground">{cert.title}</h3>
        {meta ? <p className="mt-1 font-mono text-[11px] text-primary-glow">{meta}</p> : null}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cert.focus}</p>
      </div>
    </article>
  );
}
