import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { ServicesSection } from "@/components/ServicesSection";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Serviços | Transporte Executivo"
        description="Conheça os formatos de atendimento: excursões em grupo, viagens fretadas e transfers executivos."
      />
      <section className="page-shell pb-16 pt-32 md:pb-20 md:pt-36">
        <div className="max-w-3xl">
          <span className="status-pill status-pill-light">Soluções de transporte</span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-ink md:text-6xl">
            Serviços pensados para viagens com conforto, pontualidade e boa apresentação.
          </h1>
          <p className="mt-5 text-base leading-8 text-ink/72">
            Aqui você encontra os formatos de atendimento mais comuns para transporte executivo, fretamento e excursões.
            O objetivo é ajudar o visitante a reconhecer rápido qual solução atende melhor a necessidade dele.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink("Olá! Quero entender qual serviço se encaixa melhor na minha viagem ou evento.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Falar no WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/14 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
            >
              Ir para contato
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="page-shell pb-20 md:pb-24">
        <div className="rounded-[2rem] border border-primary/10 bg-white p-8 shadow-card md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Próximo passo</p>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
                Descreva a rota, a data e o tipo de atendimento.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/72">
                Com essas três informações já dá para direcionar a conversa e responder com mais precisão sobre
                disponibilidade e formato de atendimento.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={buildWhatsAppLink("Olá! Quero solicitar orçamento para transporte executivo.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-light"
              >
                Solicitar orçamento
                <MessageCircle className="h-4 w-4" />
              </a>
              <Link
                to="/galeria"
                className="inline-flex items-center justify-center rounded-full border border-primary/14 px-6 py-3.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
              >
                Ver galeria
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
