import { Link } from "react-router-dom";
import { contato, socialLinks } from "@/data/contact";

const quickLinks = [
  { to: "/", label: "InÃ­cio" },
  { to: "/servicos", label: "Serviços" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-accent">
            Transporte Executivo
          </span>
          <div>
            <p className="font-serif text-3xl">Conforto, segurança e presença profissional em cada trajeto.</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
              Atendimento para viagens corporativas, fretamento de grupos e excursões sob demanda. Base em {contato.cidade}, com atendimento em todo o Brasil.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-accent">Navegação</h2>
          <div className="flex flex-col gap-3 text-sm text-white/75">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-accent">Contato</h2>
          <div className="space-y-3 text-sm text-white/75">
            <p>{contato.telefone}</p>
            <p>{contato.cidade}</p>
            <a className="block transition hover:text-accent" href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="block transition hover:text-accent" href={socialLinks.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-3 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {contato.nomeServico}. Todos os direitos reservados.</p>
          <p>Atendemos toda a região da Grande São Paulo com foco em experiência, pontualidade e descrição.</p>
        </div>
      </div>
    </footer>
  );
}
