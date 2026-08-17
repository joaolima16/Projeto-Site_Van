import { contato } from "@/data/contact";
import { trackWhatsAppClick } from "@/lib/analytics";

export function buildWhatsAppLink(message: string, trackLocation?: string) {
  if (trackLocation) {
    trackWhatsAppClick(trackLocation);
  }
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(message)}`;
}
