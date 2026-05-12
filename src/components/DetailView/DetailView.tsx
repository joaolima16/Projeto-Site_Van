import IconArrowLeft from "@/lib/IconArrowLeft";
import IconCalendar from "@/lib/IconCalendar";
import IconPin from "@/lib/IconPin";
import type{ DetailViewProps } from "./types";

export function DetailView({ viagem, fotoAtiva, setFotoAtiva, onVoltar }: DetailViewProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-white font-sans">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={onVoltar}
            className="group flex items-center gap-2 text-sm text-stone-600 transition-colors hover:text-stone-900"
          >
            <IconArrowLeft />
            Voltar para viagens
          </button>

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
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 font-sans animate-[fadeIn_0.4s_ease]">
        <div className="relative mb-10 h-[420px] overflow-hidden rounded-3xl">
          <img src={fotoAtiva ?? viagem.capa} alt={viagem.titulo} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />

          <div className="absolute bottom-0 left-0 p-8">
            <p
              className={[
                "mb-2 text-xs font-medium tracking-widest uppercase opacity-80",
                viagem.corLightClass,
              ].join(" ")}
            >
              {viagem.categoria.toUpperCase()}
            </p>
            <h1 className="mb-3 font-serif text-4xl leading-tight text-white md:text-5xl">{viagem.titulo}</h1>
            <div className="flex items-center gap-4 text-sm text-white opacity-80">
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

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 font-serif text-2xl text-stone-800">Sobre a viagem</h2>
            <p className="mb-6 text-base leading-relaxed text-stone-600">{viagem.descricao}</p>
            <div className="flex flex-wrap gap-2">
              {viagem.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs text-stone-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-2xl text-stone-800">Fotos</h2>
            <div className="mb-3 grid grid-cols-3 gap-2">
              {viagem.fotos.map((foto) => (
                <div
                  key={foto}
                  className={[
                    "aspect-square cursor-pointer overflow-hidden rounded-xl transition duration-200 ease-out hover:scale-[1.03] hover:opacity-100",
                    fotoAtiva === foto
                      ? ["ring-2 ring-offset-2 opacity-100", viagem.corRingClass].join(" ")
                      : "opacity-70",
                  ].join(" ")}
                  onClick={() => setFotoAtiva(foto)}
                >
                  <img src={foto} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-stone-400">Clique nas miniaturas para ver em destaque</p>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <button
            onClick={onVoltar}
            className={[
              "flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90",
              viagem.corClass,
            ].join(" ")}
          >
            <IconArrowLeft />
            Voltar para todas as viagens
          </button>
        </div>
      </main>
    </div>
  );
}
