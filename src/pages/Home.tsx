import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { CTA, SectionHead } from "../components/Bits";
import { faqs, reasons, services, steps, whatsappLink, work } from "../data/site";

function HeroVisual() {
  return (
    <div className="mw-hero-visual" aria-hidden="true">
      <div className="mw-hv-card">
        <div className="mw-hv-top">
          <span className="mw-dot r" /><span className="mw-dot y" /><span className="mw-dot g" />
          <b>Your business growth</b>
        </div>
        <svg viewBox="0 0 420 230" className="mw-hv-chart">
          <defs>
            <linearGradient id="mwBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0a72ff" stopOpacity="0.9" />
              <stop offset="1" stopColor="#0a72ff" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <g fill="url(#mwBar)">
            <rect x="20" y="170" width="42" height="40" rx="8" />
            <rect x="85" y="140" width="42" height="70" rx="8" />
            <rect x="150" y="115" width="42" height="95" rx="8" />
            <rect x="215" y="85" width="42" height="125" rx="8" />
            <rect x="280" y="55" width="42" height="155" rx="8" />
            <rect x="345" y="25" width="42" height="185" rx="8" />
          </g>
          <path d="M20 150 L85 125 L150 100 L215 70 L280 45 L378 8" fill="none" stroke="#0b1730" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M360 6 L384 4 L376 28 Z" fill="#0b1730" />
        </svg>
        <div className="mw-hv-legend">
          <span>More visitors</span>
          <span>More enquiries</span>
          <span>More sales</span>
        </div>
      </div>
      <div className="mw-chip mw-chip-1"><Icon name="web" size={18} /> New website live</div>
      <div className="mw-chip mw-chip-2"><Icon name="whatsapp" size={18} /> New customer enquiry</div>
      <div className="mw-chip mw-chip-3"><Icon name="growth" size={18} /> Ranking on Google</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="mw-hero">
        <div className="mw-wrap mw-hero-grid">
          <div className="mw-hero-copy">
            <span className="mw-pill"><Icon name="bolt" size={16} /> Your growth partner</span>
            <h1>
              We Make You <span className="mw-grad">Grow.</span>
            </h1>
            <p>
              Websites, branding, marketing and AI tools for your business, all from one friendly team.
              Tell us your goal in simple words, and we take care of the rest.
            </p>
            <div className="mw-btn-row">
              <Link to="/contact" className="mw-btn mw-btn-primary mw-btn-lg">
                Get Free Quote <Icon name="arrow" size={18} />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mw-btn mw-btn-ghost mw-btn-lg">
                <Icon name="whatsapp" size={20} /> WhatsApp Us
              </a>
            </div>
            <ul className="mw-trust">
              <li><Icon name="check" size={18} /> No technical knowledge needed</li>
              <li><Icon name="check" size={18} /> Clear price before we start</li>
              <li><Icon name="check" size={18} /> Reply within 24 hours</li>
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-wrap">
          <SectionHead
            eyebrow="What we do"
            title="Everything your business needs, in one place"
            text="Pick what you need. Not sure? Just tell us your goal and we will suggest the best way."
          />
          <div className="mw-grid mw-grid-3">
            {services.map((s) => (
              <Link key={s.id} to={`/services#${s.id}`} className="mw-card mw-service-card">
                <span className="mw-icon"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.simple}</p>
                <span className="mw-more">Learn more <Icon name="arrow" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section mw-soft">
        <div className="mw-wrap">
          <SectionHead eyebrow="How it works" title="Four easy steps from idea to growth" />
          <div className="mw-grid mw-grid-4">
            {steps.map((s, i) => (
              <div key={s.title} className="mw-step">
                <span className="mw-step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section mw-dark">
        <div className="mw-wrap">
          <SectionHead
            light
            eyebrow="Why Make My Works"
            title="A team that is easy to work with"
            text="We keep everything simple, honest and focused on your growth."
          />
          <div className="mw-grid mw-grid-3">
            {reasons.map((r) => (
              <div key={r.title} className="mw-card mw-card-dark">
                <span className="mw-icon mw-icon-dark"><Icon name={r.icon} size={24} /></span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-wrap">
          <SectionHead
            eyebrow="Our work"
            title="See the kind of work we create"
            text="Sample and concept projects that show our style and quality."
          />
          <div className="mw-grid mw-grid-3">
            {work.slice(0, 3).map((w) => (
              <article key={w.title} className="mw-card mw-work-card">
                <img src={w.img} alt={w.title} loading="lazy" width={1672} height={941} />
                <div className="mw-work-body">
                  <span className="mw-tag">{w.tag}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mw-center-btn">
            <Link to="/our-work" className="mw-btn mw-btn-ghost">
              See all work <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mw-section mw-soft">
        <div className="mw-wrap mw-narrow">
          <SectionHead eyebrow="Questions" title="Quick answers" />
          <div className="mw-faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
