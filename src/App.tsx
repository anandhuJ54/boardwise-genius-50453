
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import BoardFootageCalculator from "./pages/BoardFootageCalculator";
import LinearToBoardFoot from "./pages/LinearToBoardFoot";
import SquareFootToBoardFoot from "./pages/SquareFootToBoardFoot";
import MetricToImperial from "./pages/MetricToImperial";
import HardwoodCalculator from "./pages/HardwoodCalculator";
import CmToMmCalculator from "./pages/CmToMmCalculator";
import MbfLumberCalculator from "./pages/MbfLumberCalculator";
import CostPerBoardFootCalculator from "./pages/CostPerBoardFootCalculator";
import SegmentCalculator from "./pages/SegmentCalculator";
import SlatsCalculator from "./pages/SlatsCalculator";
import LumberTypes from "./pages/LumberTypes";
import WoodworkingTips from "./pages/WoodworkingTips";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import BoardFootFormula from "./pages/BlogPosts/BoardFootFormula";
import CommonLumberSizes from "./pages/BlogPosts/CommonLumberSizes";
import BoardFeetToSquareFeet from "./pages/BlogPosts/BoardFeetToSquareFeet";
import LogBoardFootCalculator from "./pages/BlogPosts/LogBoardFootCalculator";
import BoardFootCalculatorApps from "./pages/BlogPosts/BoardFootCalculatorApps";
import BdftCalculator from "./pages/BlogPosts/BdftCalculator";
import WoodworkerMistakes from "./pages/BlogPosts/WoodworkerMistakes";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/board-footage-calculator" element={<BoardFootageCalculator />} />
            <Route path="/linear-to-board-foot" element={<LinearToBoardFoot />} />
            <Route path="/square-foot-to-board-foot" element={<SquareFootToBoardFoot />} />
            <Route path="/metric-to-imperial" element={<MetricToImperial />} />
            <Route path="/hardwood-calculator" element={<HardwoodCalculator />} />
            <Route path="/cm-to-mm-calculator" element={<CmToMmCalculator />} />
            <Route path="/mbf-lumber-calculator" element={<MbfLumberCalculator />} />
            <Route path="/cost-per-board-foot-calculator" element={<CostPerBoardFootCalculator />} />
            <Route path="/segment-calculator" element={<SegmentCalculator />} />
            <Route path="/slats-calculator" element={<SlatsCalculator />} />
            <Route path="/lumber-types" element={<LumberTypes />} />
            <Route path="/woodworking-tips" element={<WoodworkingTips />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/board-foot-formula" element={<BoardFootFormula />} />
            <Route path="/blog/common-lumber-sizes" element={<CommonLumberSizes />} />
            <Route path="/blog/board-feet-to-square-feet" element={<BoardFeetToSquareFeet />} />
            <Route path="/blog/log-board-foot-calculator" element={<LogBoardFootCalculator />} />
            <Route path="/blog/board-foot-calculator-apps" element={<BoardFootCalculatorApps />} />
            <Route path="/blog/bdft-calculator" element={<BdftCalculator />} />
            <Route path="/blog/woodworker-mistakes" element={<WoodworkerMistakes />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
