import type { Travel } from "@/components/TravelGallery";
import { SectionReveal } from "@/components/SectionReveal";

export function TravelAbout({ viagem }: { viagem: Travel }) {
  return (
    <section className="page-shell py-14 md:py-20">
      <SectionReveal>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-5 font-serif text-3xl text-stone-800">Sobre a viagem</h2>
            <p className="mb-8 text-base leading-relaxed text-stone-600 md:text-lg">
              {viagem.descricao}
            </p>
            <div className="flex flex-wrap gap-2">
              {viagem.tags.map((tag) => (
                <span
                  key={tag}
                  className={[
                    "rounded-full border px-4 py-1.5 text-xs font-medium",
                    viagem.corClass,
                    viagem.corLightClass,
                  ].join(" ")}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-stone-800">Detalhes</h3>

            <div className="space-y-3 text-sm text-stone-600">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="text-stone-400">Categoria</span>
                <span
                  className={[
                    "rounded-full px-3 py-0.5 text-xs font-medium",
                    viagem.corClass,
                    viagem.corLightClass,
                  ].join(" ")}
                >
                  {viagem.categoria}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="text-stone-400">Data</span>
                <span className="font-medium text-stone-700">{viagem.data}</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="text-stone-400">Período</span>
                <span className="font-medium text-stone-700">{viagem.periodo}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Local</span>
                <span className="font-medium text-stone-700">{viagem.local}</span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="mb-2 text-xs font-medium uppercase tracking-widest text-stone-400">
                Diferenciais
              </h4>
              <ul className="space-y-2">
                {viagem.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2 text-sm text-stone-600">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: viagem.cor }}
                    />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
