import { projectCategories, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Props = {
  value: ProjectCategory;
  onChange: (c: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
};

export function ProjectFilter({ value, onChange, counts }: Props) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {projectCategories.map((c) => {
        const active = c === value;
        return (
          <button
            key={c}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(c)}
            className={cn(
              "rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors duration-150",
              active
                ? "border-primary/60 bg-primary/15 text-foreground"
                : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
            )}
          >
            {c}
            <span className={cn("ml-1.5", active ? "text-primary-glow" : "text-muted-foreground/70")}>
              {counts[c]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
