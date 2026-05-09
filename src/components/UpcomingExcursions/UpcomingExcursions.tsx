import { CalendarRange, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function UpcomingExcursions() {
  return (
    <section className="page-shell py-18 md:py-24">
      <SectionReveal>
        <SectionHeader
          eyebrow="Próximas excursões"
          title="Calendário aberto para novos destinos."
          description="Em vez de publicar pacotes genéricos, o foco está em organizar saídas com demanda real. Isso reduz ruído e melhora a experiência para cada grupo."
          align="center"
        />
      </SectionReveal>

      <SectionReveal className="mt-10">
        <div className="surface-card mx-auto max-w-4xl p-10 text-center md:p-14">
          <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-accent shadow-card">
            <CalendarRange className="h-7 w-7" />
          </span>
          <h3 className="mt-6 font-serif text-4xl text-ink">Novas excursões em breve</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink/70">
            Entre em contato para sugerir um destino, pedir uma excursão sob demanda ou solicitar uma proposta para grupo fechado.
          </p>
          <a
            href={buildWhatsAppLink("Olá! Quero sugerir um destino ou solicitar uma excursão em grupo.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-light"
          >
            Solicitar no WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
