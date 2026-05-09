import { useState } from "react";
import { travels } from "@/data/Travel";
import IconCalendar from "@/lib/IconCalendar";
import IconPin from "@/lib/IconPin";
import { DetailView } from "./DetailView/DetailView";
import type { GridViewProps, Travel } from "./types";

export default function TravelGallery() {
  const [selecionada, setSelecionada] = useState<Travel | null>(null);
  const [fotoAtiva, setFotoAtiva] = useState<string | null>(null);

  const handleSelect = (viagem: Travel): void => {
    setSelecionada(viagem);
    setFotoAtiva(viagem.capa);
  };

  const handleVoltar = (): void => {
    setSelecionada(null);
    setFotoAtiva(null);
  };

  if (selecionada) {
    return (
      <DetailView
        viagem={selecionada}
        fotoAtiva={fotoAtiva}
        setFotoAtiva={setFotoAtiva}
        onVoltar={handleVoltar}
      />
    );
  }

  return <GridView viagens={travels} onSelect={handleSelect} />;
}

function GridView({ viagens, onSelect }: GridViewProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-white font-sans">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
              </svg>
            </div>
            <span className="text-sm font-medium tracking-wide text-stone-800">Van do Borrg</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-stone-500 md:flex">
            <span className="border-b-2 pb-1 font-medium text-stone-800">Viagens</span>
            <span className="cursor-pointer hover:text-stone-700">Sobre</span>
            <span className="cursor-pointer hover:text-stone-700">Contato</span>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 font-sans">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-stone-300" />
          <span className="text-xs font-medium uppercase tracking-widest text-stone-400">Ãšltimas viagens</span>
        </div>

        <h1 className="mb-4 font-serif text-5xl leading-tight text-stone-800 md:text-6xl">
          Cada saÃ­da,
          <br />
          <span className="text-[#0F6E56]">uma histÃ³ria.</span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-stone-500">
          Registros de excursÃµes, transfers e passeios organizados com cuidado. Clique em uma viagem para ver todos os
          detalhes.
        </p>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-20 font-sans">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {viagens.map((viagem) => (
            <article
              key={viagem.id}
              className="cursor-pointer overflow-hidden rounded-2xl border border-stone-100 bg-white transition-shadow hover:shadow-lg"
              onClick={() => onSelect(viagem)}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img src={viagem.capa} alt={viagem.titulo} className="h-full w-full object-cover" loading="lazy" />
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

                <span className="absolute bottom-3 right-3 font-serif text-2xl font-light text-white opacity-50">
                  {viagem.num}
                </span>
              </div>

              <div className="p-5">
                <h2 className="mb-1 font-serif text-lg leading-snug text-stone-800">{viagem.titulo}</h2>
                <div className="mb-3 flex items-center gap-1.5 text-xs text-stone-400">
                  <IconCalendar />
                  {viagem.data}
                  <span className="mx-1 opacity-40">Â·</span>
                  <IconPin />
                  {viagem.local}
                </div>
                <p className="text-sm leading-relaxed text-stone-500">{viagem.resumo}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

