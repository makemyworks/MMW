import Icon from "../components/Icon";
import { Link } from "react-router-dom";
import { CTA, PageHero } from "../components/Bits";
import { services } from "../data/site";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything you need to grow, explained simply"
        text="Six clear services. Choose one, or combine them. We will help you pick the right mix for your business and budget."
      />

      <section className="mw-jump">
        <div className="mw-wrap mw-jump-inner">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="mw-jump-link">
              <Icon name={s.icon} size={18} /> {s.title}
            </a>
          ))}
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={i % 2 === 0 ? "mw-section" : "mw-section mw-soft"}>
          <div className="mw-wrap mw-svc">
            <div className="mw-svc-intro">
              <span className="mw-icon mw-icon-lg"><Icon name={s.icon} size={32} /></span>
              <h2>{s.title}</h2>
              <p>{s.simple}</p>
              <div className="mw-goodfor">
                <b>Good for:</b> {s.goodFor}
              </div>
              <Link to="/contact" className="mw-btn mw-btn-primary">
                Ask about this <Icon name="arrow" size={18} />
              </Link>
            </div>
            <div className="mw-card mw-svc-list">
              <h3>What you get</h3>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>
                    <span className="mw-tick"><Icon name="check" size={16} /></span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CTA
        title="Not sure what you need?"
        text="No problem. Tell us about your business and we will suggest the simplest way to grow it."
      />
    </>
  );
}
