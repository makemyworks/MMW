import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMeta } from "../data/site";

function setDescription(desc: string) {
  let el = document.querySelector('meta[name="description"]');
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "description");
    document.head.appendChild(el);
  }
  el.setAttribute("content", desc);
}

/** On every page change: scroll to the right place and set the page title + description. */
export default function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      const timer = window.setInterval(() => {
        const el = document.getElementById(id);
        tries += 1;
        if (el) {
          el.scrollIntoView();
          window.clearInterval(timer);
        } else if (tries > 20) {
          window.clearInterval(timer);
        }
      }, 50);
      return () => window.clearInterval(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  useEffect(() => {
    const meta = pageMeta[pathname];
    if (meta) {
      document.title = meta.title;
      setDescription(meta.desc);
    } else {
      document.title = "Page not found | Make My Works";
    }
  }, [pathname]);

  return null;
}
