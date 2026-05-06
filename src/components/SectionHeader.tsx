type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="inline-flex rounded-full border border-accent/35 bg-accent/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-ink/72">{description}</p>
    </div>
  );
}
