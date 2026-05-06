import { contato } from "@/data/contact";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(message)}`;
}
