import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink("Olá! Vim pelo site e quero falar sobre uma viagem.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(0,0,0,0.3)] transition hover:translate-y-[-2px] hover:brightness-95"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Atendimento rápido</span>
    </a>
  );
}
