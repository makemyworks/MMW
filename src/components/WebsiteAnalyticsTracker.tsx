
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

    const trackPageView = async () => {
      try {
        const visitorId = getOrCreateId("azw_analytics_visitor");
        const sessionId = getOrCreateId("azw_analytics_session");

        const pageTitle = document.title || location.pathname;

        await fetch(`${API_BASE_URL}/website-analytics/track`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventType: "page_view",
            pagePath: location.pathname,
            pageTitle,
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

    void trackPageView();

    return () => controller.abort();
  }, [location.pathname]);

  return null;
};

export default WebsiteAnalyticsTracker;
