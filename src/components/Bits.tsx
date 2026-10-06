import { Link } from "react-router-dom";
import Icon from "./Icon";
import { BRAND, whatsappLink } from "../data/site";

export function SectionHead({
  eyebrow,
  title,
  text,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mw-head${center ? " center" : ""}${light ? " light" : ""}`}>
      {eyebrow && <span className="mw-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function CTA({
  title = "Ready to grow your business?",
  text = "Tell us what you need. We reply within 24 hours with a clear plan and price.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mw-cta">
      <div className="mw-wrap mw-cta-inner">
        <div>
          <span className="mw-eyebrow">{BRAND.tagline}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="mw-cta-btns">
          <Link to="/contact" className="mw-btn mw-btn-light">
            Get Free Quote <Icon name="arrow" size={18} />
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mw-btn mw-btn-outline">
            <Icon name="whatsapp" size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="mw-page-hero">
      <div className="mw-wrap">
        <span className="mw-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
