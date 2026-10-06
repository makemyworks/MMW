import React from 'react';
import { Search, Target, BarChart3, FileText } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      icon: <Search size={22} strokeWidth={2.5} />,
      title: "Website Analysis",
      description: "In-depth audit to identify opportunities and technical issues."
    },
    {
      icon: <Target size={22} strokeWidth={2.5} />,
      title: "Strategy Planning",
      description: "Custom SEO & AI search strategy based on your business goals."
    },
    {
      icon: <BarChart3 size={22} strokeWidth={2.5} />,
      title: "Implementation",
      description: "On-page, off-page and technical SEO execution."
    },
    {
      icon: <FileText size={22} strokeWidth={2.5} />,
      title: "Monitoring & Reporting",
      description: "Regular reports with insights and continuous improvement."
    }
  ];

  return (
    <>
      <style>{`
        .wwd-section {
          width: 100%;
          background-color: #F4F7FB;
          padding: 55px 24px 60px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .wwd-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .wwd-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          margin-bottom: 45px;
        }

        .wwd-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .wwd-subtitle {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #007BFF;
          text-transform: uppercase;
        }

        .wwd-line {
          width: 32px;
          height: 2px;
          background-color: rgba(0, 123, 255, 0.3);
        }

        .wwd-title {
          font-size: 30px;
          line-height: 1.15;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .wwd-title .highlight {
          color: #007BFF;
        }

        .wwd-description-wrap {
          display: flex;
          align-items: flex-start;
        }

        .wwd-description {
          font-size: 14px;
          color: #4E5963;
          line-height: 1.55;
          max-width: 500px;
          margin: 0;
        }

        .wwd-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        /* --- Card: blue gradient is ALWAYS visible now --- */
        .wwd-card {
          position: relative;
          background: linear-gradient(135deg, #007BFF 0%, #0F2044 100%);
          border: 1px solid #007BFF;
          border-radius: 12px;
          padding: 22px;
          box-shadow: 0 12px 28px -10px rgba(0, 123, 255, 0.35);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.35s ease;
          overflow: hidden;
          cursor: pointer;
        }

        .wwd-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 44px -12px rgba(0, 123, 255, 0.55);
        }

        /* Icon wrap: white circle with blue icon (normal state) */
        .wwd-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007BFF;
          margin-bottom: 18px;
          box-shadow: 0 6px 16px rgba(255, 255, 255, 0.25);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .wwd-card:hover .wwd-icon-wrap {
          transform: scale(1.1) rotate(-6deg);
        }

        /* Title: white (normal state) */
        .wwd-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        /* Description: soft white (normal state) */
        .wwd-card-desc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0;
        }

        @media (min-width: 768px) {
          .wwd-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 22px;
          }
        }

        @media (min-width: 1024px) {
          .wwd-section {
            padding: 65px 24px 70px;
          }

          .wwd-header {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
            margin-bottom: 55px;
          }

          .wwd-title {
            font-size: 38px;
          }

          .wwd-description-wrap {
            padding-top: 38px;
          }

          .wwd-description {
            font-size: 15px;
          }

          .wwd-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 22px;
          }
        }
      `}</style>

      <section className="wwd-section">
        <div className="wwd-container">

          <div className="wwd-header">

            <div>
              <div className="wwd-subtitle-wrap">
                <span className="wwd-subtitle">What We Do</span>
                <div className="wwd-line"></div>
              </div>

              <h2 className="wwd-title">
                Grow Your Business <br />
                with SEO & <span className="highlight">AI Search</span>
              </h2>
            </div>

            <div className="wwd-description-wrap">
              <p className="wwd-description">
                We combine proven SEO strategies with AI search optimization to improve
                your online visibility, attract high-quality traffic and keep your brand
                ahead of the competition.
              </p>
            </div>

          </div>

          <div className="wwd-grid">
            {services.map((service, index) => (
              <div key={index} className="wwd-card">

                <div className="wwd-icon-wrap">
                  {service.icon}
                </div>

                <h3 className="wwd-card-title">{service.title}</h3>
                <p className="wwd-card-desc">{service.description}</p>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhatWeDo;