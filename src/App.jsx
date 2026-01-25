import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

// Personal Wellness Service Pages
import PsychicReadings from "./pages/personal/PsychicReadings";
import TarotReadings from "./pages/personal/TarotReadings";
import Numerology from "./pages/personal/Numerology";
import ReikiHealing from "./pages/personal/ReikiHealing";
import SpiritualRemedies from "./pages/personal/SpiritualRemedies";
import IndividualTherapy from "./pages/personal/IndividualTherapy";

// Corporate Services Pages
import CorporateServicesOverview from "./pages/corporate/CorporateServicesOverview";
import MentalHealth from "./pages/corporate/MentalHealth";
import WellnessBurnout from "./pages/corporate/WellnessBurnout";
import TherapyCounseling from "./pages/corporate/TherapyCounseling";
import StressManagement from "./pages/corporate/StressManagement";
import EmotionalIntelligence from "./pages/corporate/EmotionalIntelligence";
import LeadershipMindfulness from "./pages/corporate/LeadershipMindfulness";
import HolisticWellness from "./pages/corporate/HolisticWellness";

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
          
          {/* Personal Wellness Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/psychic-readings" element={<PsychicReadings />} />
          <Route path="/services/tarot" element={<TarotReadings />} />
          <Route path="/services/numerology" element={<Numerology />} />
          <Route path="/services/reiki" element={<ReikiHealing />} />
          <Route path="/services/spiritual-remedies" element={<SpiritualRemedies />} />
          <Route path="/services/therapy" element={<IndividualTherapy />} />
          
          {/* Corporate Services */}
          <Route path="/corporate-services" element={<CorporateServicesOverview />} />
          <Route path="/corporate-services/mental-health" element={<MentalHealth />} />
          <Route path="/corporate-services/wellness-burnout" element={<WellnessBurnout />} />
          <Route path="/corporate-services/therapy-counseling" element={<TherapyCounseling />} />
          <Route path="/corporate-services/stress-management" element={<StressManagement />} />
          <Route path="/corporate-services/emotional-intelligence" element={<EmotionalIntelligence />} />
          <Route path="/corporate-services/leadership-mindfulness" element={<LeadershipMindfulness />} />
          <Route path="/corporate-services/holistic-wellness" element={<HolisticWellness />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;