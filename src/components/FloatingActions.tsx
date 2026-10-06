import { useEffect, useState } from "react";
import Icon from "./Icon";
import { whatsappLink } from "../data/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mw-float">
      {showTop && (
        <button
          type="button"
          className="mw-float-btn mw-float-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Icon name="up" size={20} />
        </button>
      )}
      <a
        className="mw-float-btn mw-float-wa"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </div>
  );
}
