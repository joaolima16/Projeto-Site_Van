import type { SectionHeaderProps } from "./types";

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="inline-flex max-w-full rounded-full border border-accent/35 bg-accent/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.32em]">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-ink/72">{description}</p>
    </div>
  );
}
