import React from "react";

const DigitalSolutions: React.FC = () => {
  const solutions = [
    {
      icon: "code",
      title: "Web & App Development",
      description: "Custom websites and web applications tailored to your business goals.",
      image: "/Images/solution-web-app.png",
      features: ["Custom Development", "Scalable Architecture", "Modern Technologies"],
    },
    {
      icon: "gear",
      title: "Business Automation",
      description: "Automate repetitive tasks and streamline your business workflows.",
      image: "/Images/solution-automation.png",
      features: ["Workflow Automation", "Integrations", "Save Time & Cost"],
    },
    {
      icon: "database",
      title: "CRM Solutions",
      description: "Manage leads, customers and sales with a powerful CRM system.",
      image: "/Images/solution-crm.png",
      features: ["Lead Management", "Sales Tracking", "Reports & Analytics"],
    },
    {
      icon: "cloud",
      title: "Cloud & IT Solutions",
      description: "Scalable cloud infrastructure and IT solutions for business growth.",
      image: "/Images/solution-cloud.png",
      features: ["Cloud Deployment", "Secure Infrastructure", "24/7 Support"],
    },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .dsc-section {
          width: 100%;
          background: #ffffff;
          padding: 50px 24px 55px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        .dsc-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ---------- Header ---------- */
        .dsc-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-bottom: 32px;
        }

        .dsc-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #007BFF;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .dsc-title {
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1.1;
          font-weight: 700;
          color: #0F2044;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .dsc-desc {
          font-size: 14px;
          line-height: 1.55;
          color: #4E5963;
          margin: 0;
          max-width: 520px;
        }

        /* ---------- Grid ---------- */
        .dsc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        /* ---------- Card ---------- */
        .dsc-card {
          background: #ffffff;
          border: 1px solid #E6EEF7;
          border-radius: 14px;
          padding: 20px 18px 22px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .dsc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15, 32, 68, 0.12);
        }

        /* ---------- Icon badge ---------- */
        .dsc-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 25%, #EAF3FF 0%, #D6E4F0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          color: #007BFF;
        }

        .dsc-icon-wrap svg {
          width: 22px;
          height: 22px;
        }

        /* ---------- Text ---------- */
        .dsc-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #0F2044;
          margin: 0 0 8px;
          letter-spacing: -0.2px;
        }

        .dsc-card-desc {
          font-size: 13px;
          line-height: 1.5;
          color: #5A6673;
          margin: 0 0 16px;
        }

        /* ---------- Image preview ---------- */
        .dsc-card-image {
          width: 100%;
          border-radius: 9px;
          overflow: hidden;
          background: #F4F7FB;
          margin-bottom: 16px;
        }

        .dsc-card-image img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        /* ---------- Features list ---------- */
        .dsc-features {
          list-style: none;
          padding: 0;
          margin: auto 0 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .dsc-feature-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 12.5px;
          color: #0F2044;
          font-weight: 500;
        }

        .dsc-check {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #007BFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dsc-check svg {
          width: 10px;
          height: 10px;
        }

        /* ---------- Responsive ---------- */
        @media (min-width: 768px) {
          .dsc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .dsc-section {
            padding: 60px 24px 65px;
          }

          .dsc-header {
            grid-template-columns: 1fr 1fr;
            align-items: flex-end;
            gap: 50px;
            margin-bottom: 38px;
          }

          .dsc-desc {
            font-size: 14.5px;
          }

          .dsc-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .dsc-section { padding: 40px 18px 45px; }
          .dsc-card { padding: 18px 16px 20px; }
        }
      `}</style>

      <section className="dsc-section">
        <div className="dsc-container">

          {/* ---------- Header ---------- */}
          <div className="dsc-header">
            <div>
              <div className="dsc-eyebrow">Our Digital Solutions</div>
              <h2 className="dsc-title">
                All-in-One Solutions for
                <br />
                a Connected Business
              </h2>
            </div>
            <p className="dsc-desc">
              From web and mobile solutions to automation, CRM and
              cloud infrastructure, we help you build a stronger, more
              efficient and future-ready business.
            </p>
          </div>

          {/* ---------- Cards ---------- */}
          <div className="dsc-grid">
            {solutions.map((s, i) => (
              <div className="dsc-card" key={i}>

                <div className="dsc-icon-wrap">
                  <SolutionIcon name={s.icon} />
                </div>

                <h3 className="dsc-card-title">{s.title}</h3>
                <p className="dsc-card-desc">{s.description}</p>

                <div className="dsc-card-image">
                  <img src={s.image} alt={`${s.title} preview`} />
                </div>

                <ul className="dsc-features">
                  {s.features.map((f, j) => (
                    <li className="dsc-feature-item" key={j}>
                      <span className="dsc-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

/* ---------- Top icons ---------- */
const SolutionIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 18v3" />
          <path d="M9 9l-2 2 2 2M15 9l2 2-2 2" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6-1.5A4.5 4.5 0 0 0 6.5 19h11z" />
          <path d="M12 14v4M10 16h4" />
        </svg>
      );
    default:
      return null;
  }
};

export default DigitalSolutions;