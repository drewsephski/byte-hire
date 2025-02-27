
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AppPage from "./pages/App";
import PricingPage from "./pages/Pricing";
import AboutUsPage from "./pages/AboutUs";
import BlogPage from "./pages/Blog";
import GetStartedPage from "./pages/GetStarted";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
