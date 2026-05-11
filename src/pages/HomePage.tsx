import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { LastImagesSection } from "@/components/LastImages/LastImagesSection";
import { Seo } from "@/components/Seo";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export function HomePage() {
  return (
    <>
      <Seo
        title="Transporte Executivo | Viagens, transfers e fretamento com conforto"
        description="Site institucional para divulgação de transporte executivo com foco em conforto, segurança, excursões, transfers e viagens fretadas."
      />
      <Hero />
      <DifferentialsSection />
      <ServicesSection compact />
      <LastImagesSection />
      <AboutSection />
      <GallerySection preview />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
