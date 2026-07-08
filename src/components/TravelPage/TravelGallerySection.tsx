import { useState } from "react";
import { buildSrcSet, pickBestSrc } from "@/lib/image";
import type { Travel } from "@/components/TravelGallery";
import { SectionReveal } from "@/components/SectionReveal";
import { X } from "lucide-react";

export function TravelGallerySection({ viagem }: { viagem: Travel }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="page-shell pb-14 md:pb-20">
        <SectionReveal>
          <h2 className="mb-6 font-serif text-3xl text-stone-800">Fotos da viagem</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {viagem.fotos.map((foto, index) => (
              <button
                key={foto}
                type="button"
                onClick={() => setLightbox(foto)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl transition duration-200 hover:scale-[1.03]"
              >
                <img
                  src={pickBestSrc(foto, 600)}
                  srcSet={buildSrcSet(foto, [300, 600, 1200])}
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                  alt={`${viagem.titulo} - foto ${index + 1}`}
                  className="h-full w-full object-cover object-center block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/10" />
              </button>
            ))}
          </div>
        </SectionReveal>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizar foto ampliada"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={pickBestSrc(lightbox, 1920)}
            srcSet={buildSrcSet(lightbox, [960, 1920])}
            sizes="90vw"
            alt="Foto ampliada"
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
