import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteEffects from "./components/RouteEffects";
import FloatingActions from "./components/FloatingActions";
import CookieBanner from "./components/CookieBanner";
import ErrorBoundary from "./components/ErrorBoundary";
import PageLoader from "./components/PageLoader";

import Home from "./pages/Home";
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));
const OurServices = lazy(() => import("./pages/OurServices"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const Solutions = lazy(() => import("./pages/Solutions"));
const OurWork = lazy(() => import("./pages/OurWork"));
const OurTeam = lazy(() => import("./pages/OurTeam"));

const Contact = lazy(() => import("./pages/Contact/Contact"));
const WebAppDevelopment = lazy(() => import("./pages/WebAppDevelopment/WebAppDevelopment"));
const AiVideo = lazy(() => import("./pages/AiVideo/AiVideo"));
const ProductsLab = lazy(() => import("./pages/ProductsLab/ProductsLab"));
const SeoAi = lazy(() => import("./pages/SeoAi"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function MainLayout() {
  return (
    <>
      <a href="#main-content" className="azw-skip">Skip to main content</a>
      <Header />

      <main id="main-content">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
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

          <Route path="/about" element={<AboutUs />} />

          <Route path="/services" element={<Services />} />

          <Route path="/products" element={<Products />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/web-app-development"
            element={<WebAppDevelopment />}
          />

          <Route path="/ai-video" element={<AiVideo />} />

          <Route path="/products-lab" element={<ProductsLab />} />

          <Route path="/seo-ai" element={<SeoAi />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
          <Route path="/terms-and-conditions" element={<Legal kind="terms" />} />
          <Route path="/cookie-policy" element={<Legal kind="cookies" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
