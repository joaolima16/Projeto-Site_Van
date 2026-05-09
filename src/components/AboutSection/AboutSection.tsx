import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionReveal } from "@/components/SectionReveal";

const metrics = [
  { value: 8, suffix: "+", label: "anos de experiência com grupos e transfers" },
  { value: 120, suffix: "+", label: "viagens realizadas com planejamento dedicado" },
  { value: 98, suffix: "%", label: "de clientes retornando ou indicando o serviço" },
];

function AnimatedMetric({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) {
          return;
        }

        started = true;
        const duration = 1200;
        const startedAt = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - (1 - progress) * (1 - progress);
          setDisplayValue(Math.round(value * eased));

          if (progress < 1) {
            frame = window.requestAnimationFrame(tick);
          }
        };

        frame = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={ref} className="rounded-[1.7rem] border border-primary/10 bg-white p-5 shadow-card">
      <p className="font-serif text-4xl text-primary">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-3 text-sm leading-7 text-ink/68">{label}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="page-shell py-18 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionReveal>
          <div className="surface-card relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,168,75,0.3),_transparent_35%)]" />
            <div className="relative rounded-[2rem] border border-primary/10 bg-[linear-gradient(150deg,rgba(12,45,94,0.05),rgba(168,200,232,0.4))] p-6">
              <div className="rounded-[1.8rem] border border-white/55 bg-white/70 p-6 backdrop-blur">
                <div className="driver-portrait">
                  <div className="portrait-badge">motorista parceiro</div>
                  <div className="portrait-card">
                    <div className="portrait-head" />
                    <div className="portrait-body" />
                    <div className="portrait-vehicle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <SectionHeader
            eyebrow="Sobre"
            title="Uma operação enxuta, confiável e preparada para representar bem o seu deslocamento."
            description="O posicionamento do serviço é simples: transmitir segurança antes do embarque e entregar tranquilidade durante o trajeto. Isso inclui comunicação objetiva, cuidado com horários, apresentação profissional e uma experiência confortável dentro da van."
          />

          <div className="mt-8 space-y-4 text-base leading-8 text-ink/72">
            <p>
              Ideal para quem precisa transportar equipes, convidados, famílias ou grupos turísticos com mais organização do que um transporte informal costuma oferecer.
            </p>
            <p>
              O foco não é apenas levar até o destino. É cuidar da experiência completa de deslocamento para que ela reflita a qualidade da sua empresa, do seu evento ou da sua viagem.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <AnimatedMetric key={metric.label} {...metric} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
