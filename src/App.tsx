import { lazy, Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import TravelGallery from "@/components/TravelGallery";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const TravelPage = lazy(() =>
  import("@/pages/TravelPage").then((m) => ({ default: m.TravelPage })),
);

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(200,168,75,0.1),_transparent_28%),linear-gradient(180deg,_rgba(12,45,94,0.04),_transparent_22%)]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/galeria" element={<TravelGallery />} />
            <Route
              path="/viagem/:slug"
              element={
                <Suspense fallback={<PageLoader />}>
                  <TravelPage />
                </Suspense>
              }
            />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;
