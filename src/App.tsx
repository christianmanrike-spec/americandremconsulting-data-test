import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComoSacarVisaPorPrimeraVez from "./pages/ComoSacarVisaPorPrimeraVez";
import CuantoCuestaVisaAmericana from "./pages/CuantoCuestaVisaAmericana";
import CuantoTardaVisaAmericana from "./pages/CuantoTardaVisaAmericana";
import CitaVisaAmericana2026 from "./pages/CitaVisaAmericana2026";
import DocumentosEntrevistaVisa from "./pages/DocumentosEntrevistaVisa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/como-sacar-visa-americana-por-primera-vez-colombia" element={<ComoSacarVisaPorPrimeraVez />} />
          <Route path="/cuanto-cuesta-visa-americana-colombia" element={<CuantoCuestaVisaAmericana />} />
          <Route path="/cuanto-tarda-sacar-visa-americana-colombia" element={<CuantoTardaVisaAmericana />} />
          <Route path="/cita-visa-americana-2026-colombia" element={<CitaVisaAmericana2026 />} />
          <Route path="/documentos-entrevista-visa-americana-colombia" element={<DocumentosEntrevistaVisa />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
