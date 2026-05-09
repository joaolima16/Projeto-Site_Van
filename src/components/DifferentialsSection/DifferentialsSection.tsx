import { HeartHandshake, ShieldCheck, Snowflake, UserCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { differentials } from "@/data/differentials";

const iconMap = {
  Snowflake,
  UserCheck,
  ShieldCheck,
  HeartHandshake,
};

export function DifferentialsSection() {
  return (
    <section className="page-shell py-18 md:py-24">
      <SectionReveal>
        <SectionHeader
          eyebrow="Diferenciais"
          title="Experiência premium sem perder o cuidado pessoal."
          description="O serviço foi pensado para quem valoriza conforto, organização e confiança. Cada detalhe da operação comunica tranquilidade para quem contrata e para quem embarca."
          align="center"
        />
      </SectionReveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {differentials.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <SectionReveal key={item.title}>
              <article className="surface-card h-full p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-accent shadow-card">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/72">{item.description}</p>
              </article>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
