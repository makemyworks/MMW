import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TITLES: Record<string, string> = {
  "/": "Alpha Zeta World | Web & App Development, AI Video, SEO",
  "/about": "About Us | Alpha Zeta World",
  "/services": "Digital Solutions | Alpha Zeta World",
  "/web-app-development": "Web & App Development | Alpha Zeta World",
  "/ai-video": "AI Video & Content | Alpha Zeta World",
  "/seo-ai": "Google SEO & AI Search | Alpha Zeta World",
  "/products": "Products | Alpha Zeta World",
  "/products-lab": "Digital Product Lab | Alpha Zeta World",
  "/contact": "Contact Us | Alpha Zeta World",
  "/privacy-policy": "Privacy Policy | Alpha Zeta World",
  "/terms-and-conditions": "Terms & Conditions | Alpha Zeta World",
  "/cookie-policy": "Cookie Policy | Alpha Zeta World",
};

/** Scrolls to top on every page change and sets a proper browser tab title. */
export default function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  useEffect(() => {
    document.title = TITLES[pathname] ?? "Page not found | Alpha Zeta World";
  }, [pathname]);

  return null;
}
