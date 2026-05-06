import { Star } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="page-shell py-18 md:py-24">
      <SectionReveal>
        <SectionHeader
          eyebrow="Depoimentos"
          title="Prova social construída em cima de confiança e recorrência."
          description="Os depoimentos abaixo são textos estáticos de exemplo. A estrutura já está pronta para depois receber avaliações reais do Google, WhatsApp ou mensagens autorizadas pelos clientes."
          align="center"
        />
      </SectionReveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <SectionReveal key={item.name}>
            <article className="surface-card h-full p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-primary text-lg font-semibold text-accent">
                  {item.name.slice(0, 1)}
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{item.name}</h3>
                  <p className="text-sm text-ink/58">{item.city}</p>
                </div>
              </div>

              <div className="mt-5 flex gap-1 text-accent">
                {Array.from({ length: item.stars }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-ink/72">{item.text}</p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
