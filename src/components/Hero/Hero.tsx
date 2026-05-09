import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionReveal } from "@/components/SectionReveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const highlights = ["Van executiva climatizada", "Atendimento em todo o Brasil", "Planejamento e pontualidade"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(145deg,rgba(12,45,94,1),rgba(17,53,105,0.94))] pt-28 md:pt-32">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="page-shell relative grid gap-12 py-18 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-30">
        <SectionReveal className="space-y-8">
          <div className="space-y-6">
            <span className="status-pill">Atendimento executivo para viagens, eventos e transfers</span>
            <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Viaje com conforto, segurança e presença profissional em cada trajeto.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/74 md:text-lg">
              Soluções sob medida para empresas, grupos e passageiros que precisam de uma experiência organizada, pontual e confortável do embarque ao destino.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsAppLink("Olá! Quero falar sobre uma viagem com transporte executivo.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Falar no WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/7 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="glass-panel flex items-center gap-3 px-4 py-4 text-sm text-white/82">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="relative">
          <div className="feature-card overflow-hidden p-6 md:p-8">
            <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6">
              <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(168,200,232,0.18),rgba(12,45,94,0.12))] p-6">
                <div className="vehicle-illustration">
                  <div className="vehicle-body" />
                  <div className="vehicle-window" />
                  <div className="vehicle-window second" />
                  <div className="vehicle-window third" />
                  <div className="vehicle-light left" />
                  <div className="vehicle-light right" />
                  <div className="vehicle-wheel left" />
                  <div className="vehicle-wheel right" />
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-accent">Diferencial</p>
                <p className="mt-3 font-serif text-2xl text-white">Atendimento humano</p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Comunicação direta, resposta rápida e acompanhamento antes, durante e depois da viagem.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-accent">Cobertura</p>
                <p className="mt-3 font-serif text-2xl text-white">Rotas sob demanda</p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Excursões, fretamentos e transfers ajustados ao perfil do seu grupo ou operação.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
