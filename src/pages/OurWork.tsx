import { useState } from "react";
import Reveal from "../components/Reveal";
import { CTA, PageHero } from "../components/Bits";
import { work, workFilters } from "../data/site";

export default function OurWork() {
  const [cat, setCat] = useState("All");
  const show = work.filter((w) => cat === "All" || w.cat === cat);
  const showBrand = cat === "All" || cat === "Branding";

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="The kind of work we create"
        text="A look at our style across websites, apps, video and design. These are sample and concept projects that show our standard."
      />

      <section className="mw-section">
        <div className="mw-wrap">
          <div className="mw-filters" role="group" aria-label="Filter projects">
            {workFilters.map((f) => (
              <button
                key={f}
                type="button"
                className={f === cat ? "mw-filter active" : "mw-filter"}
                aria-pressed={f === cat}
                onClick={() => setCat(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mw-grid mw-grid-3">
            {show.map((w) => (
              <article key={w.title} className="mw-card mw-work-card">
                <div className="mw-work-img">
                  <img src={w.img} alt={w.title} loading="lazy" width={1672} height={941} />
                  <span className="mw-sample">Sample project</span>
                </div>
                <div className="mw-work-body">
                  <span className="mw-tag">{w.tag}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </article>
            ))}
            {showBrand && (
              <article className="mw-card mw-work-card">
                <div className="mw-work-img mw-work-brand">
                  <img src="/brand/logo-light.png" alt="Make My Works logo" width={240} height={147} loading="lazy" />
                  <span className="mw-sample">Sample project</span>
                </div>
                <div className="mw-work-body">
                  <span className="mw-tag">Logo & Branding</span>
                  <h3>Brand Identity</h3>
                  <p>A clear logo, colours and style that make a business look trusted everywhere.</p>
                </div>
              </article>
            )}
          </div>
          {show.length === 0 && !showBrand && <p className="mw-empty">No projects in this group yet.</p>}
        </div>
      </section>

      <Reveal>
        <CTA title="Want results like these?" text="Tell us your idea and we will suggest the best way to build it." />
      </Reveal>
    </>
  );
}
