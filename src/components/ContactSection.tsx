import { useState, type FormEvent } from "react";
import { AtSign, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { contato, socialLinks } from "@/data/contact";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type FormState = {
  name: string;
  route: string;
  date: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  route: "",
  date: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.route.trim() || !form.message.trim()) {
      setError("Preencha nome, trajeto e mensagem para continuar.");
      return;
    }

    setError("");

    const message = [
      "Olá! Vim pelo site e quero solicitar um orçamento.",
      `Nome: ${form.name}`,
      `Trajeto: ${form.route}`,
      form.date ? `Data desejada: ${form.date}` : null,
      `Mensagem: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = buildWhatsAppLink(message);
  };

  return (
    <section className="page-shell py-18 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal className="surface-card p-8 md:p-10">
          <SectionHeader
            eyebrow="Contato"
            title="Solicite orçamento com contexto claro desde a primeira mensagem."
            description="A melhor conversão para esse tipo de negócio costuma acontecer no WhatsApp. O formulário abaixo organiza os dados e já envia tudo pronto para a conversa."
          />

          <div className="mt-8 space-y-4 text-sm text-ink/72">
            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-white px-4 py-4 transition hover:border-primary/30">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span>{contato.telefone}</span>
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-white px-4 py-4 transition hover:border-primary/30">
              <AtSign className="h-5 w-5 text-primary" />
              <span>{contato.instagram}</span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-white px-4 py-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{contato.cidade}</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-white px-4 py-4">
              <Phone className="h-5 w-5 text-primary" />
              <span>Atendimento para viagens, transfers e fretamento</span>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="feature-card p-8 md:p-10">
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/76">
                Nome
                <input
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/34 focus:border-accent"
                  placeholder="Seu nome"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/76">
                Data desejada
                <input
                  type="date"
                  value={form.date}
                  onChange={(event) => setForm((current) => ({ ...current, date: event.target.value }))}
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none focus:border-accent"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-white/76">
              Trajeto ou destino
              <input
                value={form.route}
                onChange={(event) => setForm((current) => ({ ...current, route: event.target.value }))}
                className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/34 focus:border-accent"
                placeholder="Ex.: São Paulo para Campinas"
              />
            </label>

            <label className="grid gap-2 text-sm text-white/76">
              Mensagem
              <textarea
                rows={6}
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/34 focus:border-accent"
                placeholder="Conte o tipo de viagem, quantidade de passageiros e o contexto do atendimento."
              />
            </label>

            {error ? <p className="text-sm text-[#ffd4d4]">{error}</p> : null}

            <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-95">
              Enviar para o WhatsApp
              <MessageCircle className="h-4 w-4" />
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
