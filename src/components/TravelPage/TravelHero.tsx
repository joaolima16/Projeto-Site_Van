import IconCalendar from "@/lib/IconCalendar";
import IconPin from "@/lib/IconPin";
import { buildSrcSet, pickBestSrc } from "@/lib/image";
import type { Travel } from "@/components/TravelGallery";

export function TravelHero({ viagem }: { viagem: Travel }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src={pickBestSrc(viagem.capa, 1200)}
        srcSet={buildSrcSet(viagem.capa, [800, 1200, 2000])}
        sizes="100vw"
        alt={viagem.titulo}
        className="absolute inset-0 h-full w-full object-cover object-center block"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="page-shell pb-12 md:pb-16">
          <span
            className={[
              "mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase",
              viagem.corClass,
              viagem.corLightClass,
            ].join(" ")}
          >
            {viagem.categoria}
          </span>
          <h1 className="mb-4 max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            {viagem.titulo}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <IconCalendar />
              {viagem.periodo}
            </span>
            <span className="opacity-40">·</span>
            <span className="flex items-center gap-1.5">
              <IconPin />
              {viagem.local}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
