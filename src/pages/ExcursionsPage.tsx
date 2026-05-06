import { Seo } from "@/components/Seo";
import { UpcomingExcursions } from "@/components/UpcomingExcursions";

export function ExcursionsPage() {
  return (
    <>
      <Seo
        title="Excursões | Transporte Executivo"
        description="Página institucional de excursões com estado vazio elegante e chamada para orçamento no WhatsApp."
      />
      <section className="page-shell py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="status-pill status-pill-light">Excursões em grupo</span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-ink md:text-6xl">Calendário pronto para receber novos roteiros.</h1>
          <p className="mt-5 text-base leading-8 text-ink/72">
            Quando você tiver destinos e datas reais, esta página já está preparada para evoluir de estado vazio para uma grade de excursões com preço, vagas e botão de reserva.
          </p>
        </div>
      </section>
      <UpcomingExcursions />
    </>
  );
}
