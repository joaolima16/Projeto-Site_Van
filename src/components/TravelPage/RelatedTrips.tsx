import { useNavigate } from "react-router-dom";
import { CalendarDays, MapPinned } from "lucide-react";
import { travels } from "@/data/Travel";
import { buildSrcSet, pickBestSrc } from "@/lib/image";
import { SectionReveal } from "@/components/SectionReveal";
import type { Travel } from "@/components/TravelGallery";

export function RelatedTrips({ currentId }: { currentId: number }) {
  const navigate = useNavigate();

  const related = travels
    .filter((t) => t.id !== currentId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="page-shell pb-14 md:pb-20">
      <SectionReveal>
        <h2 className="mb-8 font-serif text-3xl text-stone-800">Outras viagens</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((viagem: Travel) => (
            <article
              key={viagem.id}
              className="cursor-pointer overflow-hidden rounded-2xl border border-stone-100 bg-white transition-shadow hover:shadow-lg"
              onClick={() => navigate(`/viagem/${viagem.slug}`)}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={pickBestSrc(viagem.capa, 800)}
                  srcSet={buildSrcSet(viagem.capa, [400, 800, 1200])}
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  alt={viagem.titulo}
                  className="h-full w-full object-cover object-center block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

                <div className="absolute left-3 top-3">
                  <span
                    className={[
                      "rounded-full px-3 py-1 text-xs font-medium",
                      viagem.corClass,
                      viagem.corLightClass,
                    ].join(" ")}
                  >
                    {viagem.categoria}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="mb-1 font-serif text-lg leading-snug text-stone-800">
                  {viagem.titulo}
                </h3>
                <div className="mb-3 flex items-center gap-1.5 text-xs text-stone-400">
                  <CalendarDays className="h-3 w-3" />
                  {viagem.data}
                  <span className="mx-1 opacity-40">·</span>
                  <MapPinned className="h-3 w-3" />
                  {viagem.local}
                </div>
                <p className="text-sm leading-relaxed text-stone-500">{viagem.resumo}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
