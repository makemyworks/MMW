import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { CTA, PageHero, SectionHead } from "../components/Bits";
import { BRAND, teams, values } from "../data/site";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`${BRAND.name}: ${BRAND.tagline}`}
        text="We are a friendly digital team that helps businesses build, brand and grow online."
      />

      <section className="mw-section">
        <div className="mw-wrap mw-split">
          <Reveal>
            <div className="mw-photo">
              <img src="/Images/about.webp" alt="The Make My Works team working together" width={1536} height={1024} />
            </div>
          </Reveal>
          <Reveal delay={100}>
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
              <ul className="mw-checks">
                <li><Icon name="check" size={18} /> One team for website, brand, video and marketing</li>
                <li><Icon name="check" size={18} /> Plain language, no confusing jargon</li>
                <li><Icon name="check" size={18} /> Support that continues after launch</li>
              </ul>
              <Link to="/contact" className="mw-btn mw-btn-primary">
                Work with us <Icon name="arrow" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mw-section mw-dark">
        <div className="mw-wrap">
          <SectionHead light eyebrow="What we believe" title="Four simple values" />
          <div className="mw-grid mw-grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="mw-card mw-card-dark mw-center-card">
                  <span className="mw-icon mw-icon-dark"><Icon name={v.icon} size={26} /></span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
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
            {teams.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 80}>
                <div className="mw-card">
                  <span className="mw-icon"><Icon name={t.icon} size={26} /></span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section mw-soft">
        <div className="mw-wrap mw-split mw-split-rev">
          <Reveal>
            <div>
              <span className="mw-eyebrow">Our promise</span>
              <h2 className="mw-h2">Every project has one aim: your growth.</h2>
              <p className="mw-p">
                Every website, design and campaign we make is built to help your business get more customers. If an idea
                will not help you grow, we will tell you honestly.
              </p>
              <img className="mw-about-logo" src="/brand/logo.png" alt="Make My Works logo" width={220} height={135} loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mw-photo">
              <img src="/Images/story1.webp" alt="Ideas, strategy, design, build, grow" width={1536} height={1024} loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
