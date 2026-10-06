import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { CTA, Faq, PageHero, SectionHead } from "../components/Bits";
import { services, steps } from "../data/site";

const pricing = [
  { icon: "target" as const, title: "What you need", text: "A single logo and a full online store are very different jobs, so the scope sets the price." },
  { icon: "clock" as const, title: "How fast you need it", text: "Normal timelines keep cost lower. If you are in a hurry, tell us and we will plan for it." },
  { icon: "heart" as const, title: "Support you want", text: "Pay once for a project, or choose monthly support to keep growing after launch." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to grow, explained simply"
        text="Six clear services. Choose one, or combine them. We will help you pick the right mix for your business and budget."
      />

      <div className="mw-jump">
        <div className="mw-wrap mw-jump-inner">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="mw-jump-link">
              <Icon name={s.icon} size={18} /> {s.title}
            </a>
          ))}
        </div>
      </div>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={i % 2 === 0 ? "mw-section" : "mw-section mw-soft"}>
          <div className="mw-wrap mw-svc">
            <Reveal>
              <div className="mw-svc-intro">
                <div className="mw-svc-head">
                  <span className="mw-icon mw-icon-lg"><Icon name={s.icon} size={32} /></span>
                  <span className="mw-bignum">0{i + 1}</span>
                </div>
                <span className="mw-tag">{s.tag}</span>
                <h2>{s.title}</h2>
                <p>{s.simple}</p>
                <div className="mw-goodfor">
                  <b>Good for:</b> {s.goodFor}
                </div>
                <Link to="/contact" className="mw-btn mw-btn-primary">
                  Ask about this <Icon name="arrow" size={18} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mw-card mw-svc-list">
                <h3>What you get</h3>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>
                      <span className="mw-tick"><Icon name="check" size={16} /></span> {p}
                    </li>
                  ))}
                </ul>
                <h3 className="mw-svc-q">Common questions</h3>
                <Faq items={s.faqs} />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="mw-section mw-dark">
        <div className="mw-wrap">
          <SectionHead
            light
            eyebrow="Pricing"
            title="Simple, fair and clear"
            text="We do not hide prices in confusing lists. After a short chat you get one clear quote, and you only pay for what you need."
          />
          <div className="mw-grid mw-grid-3">
            {pricing.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="mw-card mw-card-dark">
                  <span className="mw-icon mw-icon-dark"><Icon name={p.icon} size={24} /></span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-wrap">
          <SectionHead eyebrow="How it works" title="Four easy steps, every time" />
          <div className="mw-grid mw-grid-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="mw-step">
                  <span className="mw-step-num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Not sure what you need?" text="No problem. Tell us about your business and we will suggest the simplest way to grow it." />
    </>
  );
}
