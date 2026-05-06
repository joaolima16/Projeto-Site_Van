import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { galleryItems } from "@/data/gallery";

type GallerySectionProps = {
  preview?: boolean;
};

export function GallerySection({ preview = false }: GallerySectionProps) {
  const items = preview ? galleryItems.slice(0, 4) : galleryItems;

  return (
    <section className="page-shell py-18 md:py-24">
      <SectionReveal>
        <SectionHeader
          eyebrow="Galeria"
          title="Atmosfera de viagem traduzida em composições prontas para trocar por fotos reais."
          description="A estrutura abaixo já simula uma galeria premium com diferentes alturas e destaque para contexto de viagem. Depois, basta substituir os blocos pelas imagens finais do motorista, da van e dos destinos."
        />
      </SectionReveal>

      <div className="masonry-grid mt-10">
        {items.map((item) => (
          <SectionReveal key={item.title} className="mb-5 break-inside-avoid">
            <article className={`gallery-card ${item.tone}`}>
              <div className="gallery-card-overlay">
                <span className="gallery-card-chip">{item.location}</span>
                <div>
                  <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/78">{item.description}</p>
                </div>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>

      {preview ? (
        <SectionReveal className="mt-8">
          <Link to="/galeria" className="inline-flex rounded-full border border-primary/15 px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white">
            Abrir galeria completa
          </Link>
        </SectionReveal>
      ) : null}
    </section>
  );
}
