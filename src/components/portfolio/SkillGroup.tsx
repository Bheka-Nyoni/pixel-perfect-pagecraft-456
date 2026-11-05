import type { SkillGroupData } from "@/data/skills";

export function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <article className="glass h-full rounded-xl p-6">
      <h3 className="font-mono text-sm font-semibold text-foreground">
        <span className="text-primary">{"> "}</span>
        {group.title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((s) => (
          <li
            key={s}
            className="rounded-md border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors duration-150 hover:border-primary/50 hover:text-foreground"
          >
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}
