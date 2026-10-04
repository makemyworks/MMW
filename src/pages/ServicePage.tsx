import { Link, useParams } from "react-router-dom";
import "../components/agency.css";
import { services } from "../data/services";
import { AgencyCTA } from "../components/AgencyBits";
import NotFound from "./NotFound";

export default function ServicePage() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <NotFound />;
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <div className="az">
      <section className="az-hero">
        <div className="az-wrap">
          <div className="az-crumb"><Link to="/">Home</Link> / <Link to="/our-services">Services</Link> / {s.title}</div>
          <h1>{s.icon} {s.title}</h1>
          <p>{s.intro}</p>
          <div className="az-btns">
            <Link to="/contact" className="az-btn p">Get a Free Quote</Link>
            {s.existingPage && <Link to={s.existingPage.path} className="az-btn s">{s.existingPage.label}</Link>}
          </div>
        </div>
      </section>

      <section className="az-sec">
        <div className="az-wrap">
          <h2>What we offer</h2>
          <p className="az-lead">{s.short}</p>
          <ul className="az-list">{s.offerings.map((o) => <li key={o}>{o}</li>)}</ul>
        </div>
      </section>

      <section className="az-sec soft">
        <div className="az-wrap az-two">
          <div>
            <h2>What you get</h2>
            <ul className="az-list" style={{ gridTemplateColumns: "1fr" }}>
              {s.benefits.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div>
            <h2>Who it is for</h2>
            <p className="az-lead">{s.bestFor}</p>
            <h2 style={{ fontSize: "1.2rem" }}>How we work</h2>
            <p className="az-lead" style={{ marginBottom: 0 }}>
              We listen to your goals, share a clear plan and price, build with regular updates, then launch and support you afterwards.
            </p>
          </div>
        </div>
      </section>

      <section className="az-sec az-faq">
        <div className="az-wrap" style={{ maxWidth: 820 }}>
          <h2>Common questions</h2>
          {s.faqs.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </section>

      <section className="az-sec soft">
        <div className="az-wrap">
          <h2 style={{ fontSize: "1.3rem" }}>More services</h2>
          <div className="az-tags">
            {others.map((o) => <Link key={o.slug} to={`/services/${o.slug}`}>{o.title}</Link>)}
          </div>
        </div>
      </section>

      <AgencyCTA />
    </div>
  );
}
