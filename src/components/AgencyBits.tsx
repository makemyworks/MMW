import { Link } from "react-router-dom";
import "./agency.css";
import { services, whyUs, growthServices, PHONE_DISPLAY, PHONE_TEL } from "../data/services";

export function AgencyCTA({
  title = "Ready to grow your business online?",
  text = "Tell us what you need. We reply within 24 hours with clear next steps.",
}: { title?: string; text?: string }) {
  return (
    <section className="az-cta">
      <div className="az-wrap">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="az-btns">
          <Link to="/contact" className="az-btn w">Start Your Project</Link>
          <a href={PHONE_TEL} className="az-btn" style={{ border: "1px solid rgba(255,255,255,.5)", color: "#fff" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

export function ServiceCards() {
  return (
    <div className="az-grid">
      {services.map((s) => (
        <Link key={s.slug} to={`/services/${s.slug}`} className="az-card">
          <div className="az-ico" aria-hidden="true">{s.icon}</div>
          <h3>{s.title}</h3>
          <p>{s.short}</p>
          <span className="az-more">Explore {s.title.split(" ")[0]} →</span>
        </Link>
      ))}
    </div>
  );
}

export function WhyList() {
  return (
    <ul className="az-list">
      {whyUs.map((w) => <li key={w}>{w}</li>)}
    </ul>
  );
}

export function GrowthList() {
  return (
    <ul className="az-list">
      {growthServices.map((w) => <li key={w}>{w}</li>)}
    </ul>
  );
}
