import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import TravelGallery from "@/components/TravelGallery";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactPage } from "@/pages/ContactPage";
import { ExcursionsPage } from "@/pages/ExcursionsPage";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            <Route path="/excursoes" element={<ExcursionsPage />} />
            <Route path="/galeria" element={<TravelGallery />} />
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
