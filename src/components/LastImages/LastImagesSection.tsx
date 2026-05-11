import { CalendarDays, MapPinned } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { lastTrips } from "@/data/lastTrips";
import oneImage from "@/assets/viagem-1.jpeg";
export function LastImagesSection() {
  return (
    <section id="lastimages" className="page-shell py-18 md:py-24">
      <SectionReveal>
        <SectionHeader
          eyebrow="Últimas viagens"
          title="Três viagens recentes prontas para receber suas fotos"
          description="A seção abaixo já fica estruturada com data, rota e contexto de cada saída. Depois, basta substituir o espaço reservado pela imagem real de cada viagem."
          align="center"
        />
      </SectionReveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {lastTrips.map((trip, index) => (
          <SectionReveal key={trip.title} className="h-full">
            <article className="surface-card group h-full overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(12,45,94,0.18)]">
              <div className="last-trip-placeholder relative min-h-72 overflow-hidden transition duration-500 group-hover:scale-[1.02]">
                <img
                  src={oneImage}
                  alt={`Imagem da viagem ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,45,94,0.42)] via-transparent to-[rgba(255,255,255,0.08)]" />
                <div className="last-trip-placeholder-tag absolute bottom-4 left-4">
                  Viagem 0{index + 1}
                </div>
              </div>

              <div className="p-6 transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(12,45,94,0.015),rgba(200,168,75,0.04))] md:p-7">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                  <span className="rounded-full bg-primary/6 px-3 py-1.5 text-primary transition duration-500 group-hover:bg-primary group-hover:text-white">
                    {trip.category}
                  </span>
                  <span className="text-ink/45">0{index + 1}</span>
                </div>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-ink transition duration-500 group-hover:text-primary">
                  {trip.title}
                </h3>

                <div className="mt-5 space-y-3 text-sm text-ink/70">
                  <div className="flex items-center gap-2 transition duration-500 group-hover:translate-x-1">
                    <CalendarDays className="h-4 w-4 text-accent transition duration-500 group-hover:text-primary" />
                    <span>{trip.date}</span>
                  </div>
                  <div className="flex items-center gap-2 transition duration-500 group-hover:translate-x-1">
                    <MapPinned className="h-4 w-4 text-accent transition duration-500 group-hover:text-primary" />
                    <span>{trip.route}</span>
                  </div>
                </div>

                <p className="mt-5 text-base leading-7 text-ink/72">{trip.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {trip.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-primary/12 bg-primary/4 px-3 py-1.5 text-xs font-medium text-primary transition duration-500 group-hover:border-accent/35 group-hover:bg-accent/10"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
