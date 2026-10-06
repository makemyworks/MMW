import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { CTA, PageHero, SectionHead } from "../components/Bits";
import { BRAND, teams, values } from "../data/site";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`${BRAND.name}: ${BRAND.tagline}`}
        text="We are a friendly digital team that helps businesses build, brand and grow online."
      />

      <section className="mw-section">
        <div className="mw-wrap mw-two">
          <div>
            <span className="mw-eyebrow">Our story</span>
            <h2 className="mw-h2">You tell us the work. We make it happen.</h2>
            <p className="mw-p">
              Our name says it all. Many business owners are busy running their business and do not have time to
              understand websites, ads and design. That is where we come in.
            </p>
            <p className="mw-p">
              You tell us what you need in simple words. Our team of developers, designers, video creators and
              marketing experts handles the rest, and keeps you informed at every step.
            </p>
            <Link to="/contact" className="mw-btn mw-btn-primary">
              Work with us <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="mw-mission">
            <img src="/brand/logo-light.png" alt="Make My Works logo" width={320} height={196} loading="lazy" />
            <h3>Our promise</h3>
            <p>Every website, design and campaign we make has one aim: to help your business grow.</p>
          </div>
        </div>
      </section>

      <section className="mw-section mw-soft">
        <div className="mw-wrap">
          <SectionHead eyebrow="What we believe" title="Four simple values" />
          <div className="mw-grid mw-grid-4">
            {values.map((v) => (
              <div key={v.title} className="mw-card mw-center-card">
                <span className="mw-icon"><Icon name={v.icon} size={26} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-wrap">
          <SectionHead
            eyebrow="Our team"
            title="Skilled people, one goal"
            text="Every project has a project manager, so you always have one person to talk to."
          />
          <div className="mw-grid mw-grid-3">
            {teams.map((t) => (
              <div key={t.title} className="mw-card">
                <span className="mw-icon"><Icon name={t.icon} size={26} /></span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
