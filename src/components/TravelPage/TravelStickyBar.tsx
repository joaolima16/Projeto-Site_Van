import { MessageCircle } from "lucide-react";
import type { Travel } from "@/components/TravelGallery";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import IconCalendar from "@/lib/IconCalendar";
import IconPin from "@/lib/IconPin";

export function TravelStickyBar({ viagem }: { viagem: Travel }) {
  const whatsappMessage = `Olá! Vi no site a viagem "${viagem.titulo}" (${viagem.periodo} - ${viagem.local}) e gostaria de saber mais detalhes e valores.`;

  return (
    <div className="sticky top-[72px] z-30 border-b border-stone-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="hidden items-center gap-4 text-sm text-stone-500 sm:flex">
          <span className="flex items-center gap-1.5">
            <IconCalendar />
            {viagem.periodo}
          </span>
          <span className="opacity-30">·</span>
          <span className="flex items-center gap-1.5">
            <IconPin />
            {viagem.local}
          </span>
          <span
            className={[
              "rounded-full px-3 py-0.5 text-xs font-medium",
              viagem.corClass,
              viagem.corLightClass,
            ].join(" ")}
          >
            {viagem.categoria}
          </span>
        </div>

        <a
          href={buildWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Quero esta viagem
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
