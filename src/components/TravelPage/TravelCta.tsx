import { MessageCircle } from "lucide-react";
import type { Travel } from "@/components/TravelGallery";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SectionReveal } from "@/components/SectionReveal";

export function TravelCta({ viagem }: { viagem: Travel }) {
  const whatsappMessage = `Olá! Vi no site a viagem "${viagem.titulo}" (${viagem.periodo} - ${viagem.local}) e gostaria de saber mais detalhes e valores.`;

  return (
    <section className="page-shell py-14 md:py-20">
      <SectionReveal>
        <div
          className="overflow-hidden rounded-3xl p-8 text-center md:p-12"
          style={{ background: `linear-gradient(145deg, ${viagem.cor}, ${viagem.cor}dd)` }}
        >
          <h2 className="mb-3 font-serif text-3xl text-white md:text-4xl">
            Gostou desta viagem?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Solicite um orçamento personalizado pelo WhatsApp. Respondemos rapidamente com todas as informações detalhadas.
          </p>
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold shadow-lg transition hover:brightness-95"
            style={{ color: viagem.cor }}
          >
            Chamar no WhatsApp
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
