
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
import Fellowship from "./pages/Fellowship";
import FellowshipDetail from "./pages/FellowshipDetail";
import Activities from "./pages/Activities";
import Podcasts from "./pages/Podcasts";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fellowship" element={<Fellowship />} />
          <Route path="/fellowship/:id" element={<FellowshipDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin-access-only" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
