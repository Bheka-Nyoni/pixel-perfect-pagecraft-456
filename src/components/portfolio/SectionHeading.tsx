import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionHeading({ id, label, title, description, children }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-primary">{label}</p>
        <h2
          id={`${id}-heading`}
          className="mt-3 font-mono text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
