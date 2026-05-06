import { Seo } from "@/components/Seo";
import { ServicesSection } from "@/components/ServicesSection";

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Serviços | Transporte Executivo"
        description="Conheça os formatos de atendimento: excursões em grupo, viagens fretadas e transfers executivos."
      />
      <section className="page-shell pb-16 pt-32 md:pb-20 md:pt-36">
        <div className="max-w-3xl">
          <span className="status-pill status-pill-light">Soluções de transporte</span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-ink md:text-6xl">Serviços desenhados para rotinas corporativas, grupos e deslocamentos especiais.</h1>
          <p className="mt-5 text-base leading-8 text-ink/72">
            Esta página aprofunda cada frente de atendimento para você posicionar melhor a proposta comercial e facilitar pedidos de orçamento mais qualificados.
          </p>
        </div>
      </section>
      <ServicesSection />
    </>
  );
}
