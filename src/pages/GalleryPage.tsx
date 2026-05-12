import TravelGallery from "@/components/TravelGallery";
import { Seo } from "@/components/Seo";

export function GalleryPage() {
  return (
    <>
      <Seo
        title="Galeria | Transporte Executivo"
        description="Galeria institucional com estrutura pronta para fotos da van, do motorista e dos destinos atendidos."
      />
      <section className="page-shell pb-16 pt-32 md:pb-20 md:pt-36">
        <div className="max-w-3xl">
          <span className="status-pill status-pill-light">Galeria</span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-ink md:text-6xl">Estrutura pronta para prova social visual.</h1>
          <p className="mt-5 text-base leading-8 text-ink/72">
            Neste estágio, os cards usam composições visuais abstratas no lugar das fotos finais. Isso permite evoluir design e layout antes de investir nos assets definitivos.
          </p>
        </div>
      </section>
      <TravelGallery />
    </>
  );
}
