import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { CTA, Faq, SectionHead } from "../components/Bits";
import { faqs, industries, marquee, promises, reasons, services, steps, whatsappLink, work } from "../data/site";

function Collage() {
  return (
    <div className="mw-collage">
      <figure className="mw-frame mw-frame-main">
        <div className="mw-frame-bar"><i /><i /><i /><span>yourstore.com</span></div>
        <img src="/Images/eco.webp" alt="Sample online store design" width={1672} height={941} />
      </figure>
      <figure className="mw-frame mw-frame-2">
        <div className="mw-frame-bar"><i /><i /><i /><span>dashboard</span></div>
        <img src="/Images/dash.webp" alt="Sample business dashboard" width={1672} height={941} loading="lazy" />
      </figure>
      <figure className="mw-frame mw-frame-3">
        <div className="mw-frame-bar"><i /><i /><i /><span>clinic.com</span></div>
        <img src="/Images/hospital.webp" alt="Sample hospital website" width={1672} height={941} loading="lazy" />
      </figure>
      <div className="mw-badge mw-badge-1"><span className="mw-badge-ic"><Icon name="check" size={16} /></span><div><b>Website live</b><small>Ready for customers</small></div></div>
      <div className="mw-badge mw-badge-2"><span className="mw-badge-ic"><Icon name="growth" size={16} /></span><div><b>More enquiries</b><small>Every month</small></div></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="mw-hero">
        <div className="mw-wrap mw-hero-grid">
          <div className="mw-hero-copy">
            <span className="mw-pill"><i /> Digital agency for growing businesses</span>
            <h1>
              We Make You <span className="mw-grad">Grow.</span>
            </h1>
            <p>
              Websites, branding, marketing and AI tools for your business, all from one friendly team.
              Tell us your goal in simple words and we take care of the rest.
            </p>
            <div className="mw-btn-row">
              <Link to="/contact" className="mw-btn mw-btn-primary mw-btn-lg">
                Get Free Quote <Icon name="arrow" size={18} />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mw-btn mw-btn-outline mw-btn-lg">
                <Icon name="whatsapp" size={20} /> WhatsApp Us
              </a>
            </div>
            <ul className="mw-trust">
              <li><Icon name="check" size={18} /> No technical knowledge needed</li>
              <li><Icon name="check" size={18} /> Clear price before we start</li>
              <li><Icon name="check" size={18} /> Reply within 24 hours</li>
            </ul>
          </div>
          <Collage />
        </div>
      </section>

      <div className="mw-marquee" aria-hidden="true">
        <div className="mw-marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      <section className="mw-section">
        <div className="mw-wrap">
          <SectionHead
            eyebrow="What we do"
            title="Everything your business needs, in one place"
            text="Pick what you need. Not sure? Tell us your goal and we will suggest the simplest way to reach it."
          />
          <div className="mw-grid mw-grid-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <Link to={`/services#${s.id}`} className="mw-card mw-service-card">
                  <div className="mw-card-top">
                    <span className="mw-icon"><Icon name={s.icon} size={26} /></span>
                    <span className="mw-num">0{i + 1}</span>
                  </div>
                  <span className="mw-tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.simple}</p>
                  <span className="mw-more">Learn more <Icon name="arrowUR" size={16} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section mw-soft">
        <div className="mw-wrap mw-split">
          <Reveal>
            <div className="mw-photo">
              <img src="/Images/why.webp" alt="Our team planning a project together" width={1536} height={1024} loading="lazy" />
            </div>
          </Reveal>
          <div>
            <SectionHead center={false} eyebrow="How it works" title="From your idea to real growth in four steps" />
            <div className="mw-timeline">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 70}>
                  <div className="mw-tl-item">
                    <span className="mw-step-num">{i + 1}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
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
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 80}>
                <div className="mw-card mw-card-dark">
                  <span className="mw-icon mw-icon-dark"><Icon name={r.icon} size={24} /></span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-wrap">
          <SectionHead
            eyebrow="Who we help"
            title="Made for businesses like yours"
            text="From a small local shop to a fast-growing brand, we shape our work around your size and budget."
          />
          <Reveal>
            <ul className="mw-chips">
              {industries.map((n) => (
                <li key={n}><i /> {n}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mw-section mw-soft">
        <div className="mw-wrap">
          <SectionHead
            eyebrow="Our work"
            title="See the kind of work we create"
            text="Sample and concept projects that show our style and quality."
          />
          <div className="mw-grid mw-grid-3">
            {work.slice(0, 3).map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <article className="mw-card mw-work-card">
                  <div className="mw-work-img">
                    <img src={w.img} alt={w.title} loading="lazy" width={1672} height={941} />
                  </div>
                  <div className="mw-work-body">
                    <span className="mw-tag">{w.tag}</span>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mw-center-btn">
            <Link to="/our-work" className="mw-btn mw-btn-ghost">
              See all work <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-wrap">
          <SectionHead eyebrow="Our promise" title="What you can always count on" />
          <div className="mw-grid mw-grid-4">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="mw-card mw-center-card">
                  <span className="mw-icon"><Icon name={p.icon} size={26} /></span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section mw-soft">
        <div className="mw-wrap mw-narrow">
          <SectionHead eyebrow="Questions" title="Quick answers" />
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
