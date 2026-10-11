
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const API_BASE_URL = "https://alphazetaworld.onrender.com/api";

const getOrCreateId = (key: string): string => {
  try {
    let id = localStorage.getItem(key);

    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(key, id);
    }

    return id;
  } catch {
    return crypto.randomUUID();
  }
};

const WebsiteAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const trackEvent = async (
      eventType: "page_view" | "button_click",
      elementLabel = ""
    ) => {
      try {
        const visitorId = getOrCreateId("azw_analytics_visitor");
        const sessionId = getOrCreateId("azw_analytics_session");

        await fetch(`${API_BASE_URL}/website-analytics/track`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventType,
            pagePath: location.pathname,
            pageTitle: document.title || location.pathname,
            elementLabel,
            visitorId,
            sessionId,
          }),
          signal: controller.signal,
          keepalive: true,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Website analytics tracking failed:", error);
        }
      }
    };

    // Track page views
    void trackEvent("page_view");

    // Track clicks on buttons and links
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const clickable = target.closest(
        "button, a, [role='button']"
      );

      if (!(clickable instanceof HTMLElement)) return;

      // Ignore links/buttons without a meaningful label.
      const label =
        clickable.getAttribute("aria-label") ||
        clickable.getAttribute("title") ||
        clickable.innerText?.trim() ||
        clickable.getAttribute("href") ||
        "";

      if (!label) return;

      // Avoid recording password, email, or other form-control clicks.
      if (clickable.closest("form") && clickable.matches("button[type='submit']")) {
        // Keep submit button clicks because they are important conversion actions.
      }

      void trackEvent("button_click", label.slice(0, 150));
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      controller.abort();
      document.removeEventListener("click", handleClick, true);
    };
  }, [location.pathname]);

  return null;
};

export default WebsiteAnalyticsTracker;
