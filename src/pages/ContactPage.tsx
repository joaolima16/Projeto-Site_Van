import { ContactSection } from "@/components/ContactSection";
import { Seo } from "@/components/Seo";

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contato | Transporte Executivo"
        description="Solicite orçamento de transporte executivo, transfers ou viagens fretadas diretamente pelo WhatsApp."
      />
      <section className="page-shell py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="status-pill status-pill-light">Contato</span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-ink md:text-6xl">Canal direto para orçamento, dúvidas e alinhamento de rota.</h1>
          <p className="mt-5 text-base leading-8 text-ink/72">
            O formulário desta página foi desenhado para transformar a intenção do visitante em uma conversa útil, com informações claras logo na primeira mensagem.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
