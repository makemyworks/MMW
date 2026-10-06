import React from "react";

const RankOnGoogle: React.FC = () => {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .rog-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
        }

        .rog-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }

        /* ---------- LEFT CONTENT ---------- */
        .rog-content { display: flex; flex-direction: column; }

        .rog-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #007BFF;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .rog-title {
          font-size: clamp(32px, 3.6vw, 48px);
          line-height: 1.1;
          font-weight: 700;
          color: #0F2044;
          letter-spacing: -0.02em;
          margin: 0 0 22px;
        }

        .rog-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #4E5963;
          margin: 0 0 28px;
          max-width: 460px;
        }

        .rog-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .rog-list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #0F2044;
          font-weight: 500;
        }

        .rog-check {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #EAF3FF;
          border: 1.5px solid #007BFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rog-check svg { width: 12px; height: 12px; }

        /* ---------- RIGHT IMAGE ---------- */
        .rog-image-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rog-image-wrap img {
          display: block;
          width: 100%;
          max-width: 700px;
          height: auto;
          object-fit: contain;
        }

        /* ---------- Responsive ---------- */
        @media (min-width: 1024px) {
          .rog-section { padding: 100px 24px; }
          .rog-container {
            grid-template-columns: 1fr 1.15fr;
            gap: 60px;
          }
        }

        @media (max-width: 640px) {
          .rog-section { padding: 55px 18px; }

          .rog-image-wrap img { max-width: 420px; }
        }
      `}</style>

      <section className="rog-section">
        <div className="rog-container">

          {/* ---------- LEFT CONTENT ---------- */}
          <div className="rog-content">
            <div className="rog-eyebrow">Be Visible Everywhere</div>

            <h2 className="rog-title">
              Rank on Google and
              <br />
              AI Platforms
            </h2>

            <p className="rog-desc">
              We optimize your brand for traditional search engines
              as well as AI-powered platforms to ensure maximum visibility.
            </p>

            <ul className="rog-list">
              {[
                "Appear in Google Search & Maps",
                "Get recommended on AI platforms",
                "Drive more qualified traffic and leads",
                "Build long-term brand authority",
              ].map((item, i) => (
                <li className="rog-list-item" key={i}>
                  <span className="rog-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="rog-image-wrap">
            <img
              src="/Images/seo.png"
              alt="Rank on Google and AI platforms visual"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default RankOnGoogle;