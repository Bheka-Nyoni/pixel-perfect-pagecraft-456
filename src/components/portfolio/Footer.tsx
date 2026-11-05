import { ArrowUp } from "lucide-react";

import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.name}</p>
        <p className="font-mono text-xs">Built with React + Tailwind</p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-foreground"
        >
          Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
