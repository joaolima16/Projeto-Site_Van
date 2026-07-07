import { useParams, Navigate } from "react-router-dom";
import { travels } from "@/data/Travel";
import { Seo } from "@/components/Seo";
import { TravelHero } from "@/components/TravelPage/TravelHero";
import { TravelStickyBar } from "@/components/TravelPage/TravelStickyBar";
import { TravelAbout } from "@/components/TravelPage/TravelAbout";
import { TravelGallerySection } from "@/components/TravelPage/TravelGallerySection";
import { TravelCta } from "@/components/TravelPage/TravelCta";
import { RelatedTrips } from "@/components/TravelPage/RelatedTrips";

export function TravelPage() {
  const { slug } = useParams<{ slug: string }>();
  const viagem = travels.find((t) => t.slug === slug);

  if (!viagem) {
    return <Navigate to="/galeria" replace />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Trip",
    name: viagem.titulo,
    description: viagem.descricao,
    image: viagem.capa,
    arrivalLocation: {
      "@type": "City",
      name: viagem.local,
    },
    category: viagem.categoria,
  };

  return (
    <>
      <Seo
        title={`${viagem.titulo} | Transporte Executivo`}
        description={viagem.resumo}
        image={viagem.capa}
        jsonLd={jsonLd}
      />
      <TravelHero viagem={viagem} />
      <TravelStickyBar viagem={viagem} />
      <TravelAbout viagem={viagem} />
      <TravelGallerySection viagem={viagem} />
      <TravelCta viagem={viagem} />
      <RelatedTrips currentId={viagem.id} />
    </>
  );
}
