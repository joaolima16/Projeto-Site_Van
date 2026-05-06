import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { services } from "@/data/services";

type ServicesSectionProps = {
  compact?: boolean;
};

export function ServicesSection({ compact = false }: ServicesSectionProps) {
  const visibleServices = compact ? services.slice(0, 3) : services;

  return (
    <section className="page-shell py-18 md:py-24">
      <SectionReveal>
        <SectionHeader
          eyebrow="Serviços"
          title="Formatos flexíveis para turismo, empresas e grupos privados."
          description="A operação atende demandas recorrentes e viagens pontuais com o mesmo padrão: planejamento, apresentação profissional e conforto durante o percurso."
        />
      </SectionReveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <SectionReveal key={service.title}>
            <article className="feature-card flex h-full flex-col p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{service.eyebrow}</span>
              <h3 className="mt-4 font-serif text-3xl text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/78">
                {service.highlights.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </SectionReveal>
        ))}
      </div>

      {compact ? (
        <SectionReveal className="mt-8">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-light">
            Ver detalhes completos dos serviços
            <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionReveal>
      ) : null}
    </section>
  );
}
