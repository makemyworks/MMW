
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WebsiteAnalyticsTracker from "./components/WebsiteAnalyticsTracker";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import WebAppDevelopment from "./pages/WebAppDevelopment/WebAppDevelopment";
import AiVideo from "./pages/AiVideo/AiVideo";
// import ProductsLab from "./pages/ProductsLab/ProductsLab";
import SeoAi from "./pages/SeoAi";
import Ourwork from "./pages/ourwork";
import Links from "./pages/links";

// Legal, help, and error pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy";
import Disclaimer from "./pages/Disclaimer";
import DataDeletion from "./pages/DataDeletion";
import Accessibility from "./pages/Accessibility";
import FAQ from "./pages/FAQ";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <WebsiteAnalyticsTracker />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/products-lab" element={<ProductsLab />} /> */}
          <Route path="/seo-ai" element={<SeoAi />} />
          <Route path="/ourwork" element={<Ourwork />} />
          <Route path="/links" element={<Links />} />

          {/* Legal and support pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/refund-cancellation" element={<RefundCancellationPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Unknown URLs should display the site's own 404 page. Keep last. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
