import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { Hero } from "@/components/Hero";
import { LastImagesSection } from "@/components/LastTrips/LastTrips";
import { Seo } from "@/components/Seo";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { contato } from "@/data/contact";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Transporte Executivo",
  telephone: contato.telefone,
  url: "https://transporte-executivo.vercel.app",
  image: "https://transporte-executivo.vercel.app/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/transporteexecutivo.oficial/"],
  areaServed: {
    "@type": "City",
    name: "São Paulo",
  },
};

export function HomePage() {
  return (
    <>
      <Seo
        title="Transporte Executivo | Viagens, transfers e fretamento com conforto"
        description="Site institucional para divulgação de transporte executivo com foco em conforto, segurança, excursões, transfers e viagens fretadas."
        url="https://transporte-executivo.vercel.app"
        jsonLd={localBusiness}
      />
      <Hero />
      <DifferentialsSection />
      <ServicesSection compact />
      <LastImagesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
