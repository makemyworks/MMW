import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteEffects from "./components/RouteEffects";
import FloatingActions from "./components/FloatingActions";
import CookieBanner from "./components/CookieBanner";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

function MainLayout() {
  return (
    <>
      <a href="#main-content" className="mw-skip">Skip to main content</a>
      <Header />
      <main id="main-content">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
      <FloatingActions />
      <CookieBanner />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
          <Route path="/terms-and-conditions" element={<Legal kind="terms" />} />
          <Route path="/cookie-policy" element={<Legal kind="cookies" />} />

          {/* Old page addresses now go to the new single Services / About pages */}
          <Route path="/our-services" element={<Navigate to="/services" replace />} />
          <Route path="/solutions" element={<Navigate to="/services" replace />} />
          <Route path="/services/:slug" element={<Navigate to="/services" replace />} />
          <Route path="/web-app-development" element={<Navigate to="/services#websites-apps" replace />} />
          <Route path="/ai-video" element={<Navigate to="/services#ai-automation" replace />} />
          <Route path="/seo-ai" element={<Navigate to="/services#google-marketing" replace />} />
          <Route path="/products" element={<Navigate to="/services" replace />} />
          <Route path="/products-lab" element={<Navigate to="/services" replace />} />
          <Route path="/our-team" element={<Navigate to="/about" replace />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
