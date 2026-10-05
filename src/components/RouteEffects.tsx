import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMeta, services } from "../data/services";

function setMeta(desc: string) {
  let el = document.querySelector('meta[name="description"]');
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "description");
    document.head.appendChild(el);
  }
  el.setAttribute("content", desc);
}

/** Scrolls to top on page change and sets the page title and description. */
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
    const svc = services.find((s) => pathname === "/services/" + s.slug);
    if (svc) {
      document.title = svc.title + " | Alpha Zeta World";
      setMeta(svc.meta);
      return;
    }
    const m = pageMeta[pathname];
    document.title = m ? m.title : "Page not found | Alpha Zeta World";
    if (m) setMeta(m.desc);
  }, [pathname]);

  return null;
}
