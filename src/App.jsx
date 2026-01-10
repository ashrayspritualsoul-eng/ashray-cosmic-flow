import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

// Service Pages
import PsychicTarotReadings from "./pages/services/PsychicTarotReadings";
import Numerology from "./pages/services/Numerology";
import ReikiHealing from "./pages/services/ReikiHealing";
import SpiritualRemedies from "./pages/services/SpiritualRemedies";
import TherapyMentalHealth from "./pages/services/TherapyMentalHealth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          {/* Individual Service Pages */}
          <Route path="/services/psychic-tarot-readings" element={<PsychicTarotReadings />} />
          <Route path="/services/numerology" element={<Numerology />} />
          <Route path="/services/reiki-healing" element={<ReikiHealing />} />
          <Route path="/services/spiritual-remedies" element={<SpiritualRemedies />} />
          <Route path="/services/therapy-mental-health" element={<TherapyMentalHealth />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
