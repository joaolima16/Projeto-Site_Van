import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import logoVan from '@/assets/logo-van.svg';
const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/excursoes", label: "Excursões" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-primary/92 shadow-elegant backdrop-blur-xl"
          : "border-transparent bg-primary/80 backdrop-blur-md",
      ].join(" ")}
    >
      <div className="page-shell flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center">
              <img src={logoVan} alt="Ícone de van" className="rounded-full" />
          </span>
          <div>
            <p className="font-serif text-xl text-white">{`Transporte Executivo`}</p>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">viagens e transfers</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "text-sm font-medium transition",
                  isActive ? "text-accent" : "text-white/70 hover:text-white",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppLink("Olá! Gostaria de solicitar um orçamento para transporte executivo.")}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-card transition hover:brightness-95 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Fale no WhatsApp
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/14 lg:hidden"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-primary lg:hidden">
          <div className="page-shell flex flex-col gap-2 py-5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-2xl px-4 py-3 text-base transition",
                    isActive ? "bg-white/10 text-accent" : "text-white/78 hover:bg-white/6 hover:text-white",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={buildWhatsAppLink("Olá! Gostaria de solicitar um orçamento para transporte executivo.")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-whatsapp px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Fale no WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
