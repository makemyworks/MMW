import React from 'react';
import { Megaphone, Settings, TrendingUp, Users } from 'lucide-react';

const DigitalSolutions: React.FC = () => {
  const features = [
    {
      icon: <Megaphone size={22} strokeWidth={2.5} />,
      title: "Strategy & Planning",
      description: "Understand your business goals and create a customized digital strategy."
    },
    {
      icon: <Settings size={22} strokeWidth={2.5} />,
      title: "Execution & Optimization",
      description: "Implement data-driven campaigns and continuously optimize for better results."
    },
    {
      icon: <TrendingUp size={22} strokeWidth={2.5} />,
      title: "Growth & Scale",
      description: "Help your brand reach the right audience and scale sustainably."
    },
    {
      icon: <Users size={22} strokeWidth={2.5} />,
      title: "Ongoing Support",
      description: "Continuous monitoring, reporting and support to ensure long-term success."
    }
  ];

  return (
    <>
      <style>{`
        .ds-section {
          width: 100%;
          background-color: #F4F7FB;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .ds-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .ds-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 48px;
        }

        .ds-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ds-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #007BFF;
          text-transform: uppercase;
        }

        .ds-line {
          width: 32px;
          height: 2px;
          background-color: rgba(0, 123, 255, 0.3);
        }

        .ds-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .ds-description-wrap {
          display: flex;
          align-items: center;
        }

        .ds-description {
          font-size: 14px;
          color: #4E5963;
          line-height: 1.6;
          max-width: 450px;
          margin: 0;
        }

        .ds-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 60px;
        }

        .ds-card {
          position: relative;
          background-color: #ffffff;
          border: 1px solid #E6EEF7;
          border-radius: 12px;
          padding: 28px 24px;
          box-shadow: 0 1px 3px rgba(15, 32, 68, 0.02);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 1;
        }

        /* Blue gradient background layer on hover */
        .ds-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #007BFF 0%, #0F2044 100%);
          opacity: 0;
          transform: translateY(100%);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease;
          z-index: -1;
        }

        .ds-card:hover::before {
          opacity: 1;
          transform: translateY(0);
        }

        .ds-card:hover {
          transform: translateY(-8px);
          border-color: #007BFF;
          box-shadow: 0 20px 40px -10px rgba(0, 123, 255, 0.35);
        }

        .ds-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #E6F0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007BFF;
          margin-bottom: 20px;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ds-card:hover .ds-icon-wrap {
          background-color: #ffffff;
          color: #007BFF;
          transform: scale(1.1) rotate(-6deg);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
        }

        .ds-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #0F2044;
          margin: 0 0 10px 0;
          line-height: 1.3;
          transition: color 0.35s ease;
        }

        .ds-card:hover .ds-card-title {
          color: #ffffff;
        }

        .ds-card-desc {
          font-size: 14px;
          color: #4E5963;
          line-height: 1.6;
          margin: 0;
          transition: color 0.35s ease;
        }

        .ds-card:hover .ds-card-desc {
          color: rgba(255, 255, 255, 0.9);
        }

        .ds-bottom-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid #D6E4F0;
          flex-wrap: wrap;
          gap: 16px;
        }

        .ds-bottom-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #4E5963;
          text-transform: uppercase;
          margin: 0;
        }

        .ds-bottom-desc {
          font-size: 14px;
          color: #4E5963;
          margin: 0;
          text-align: right;
        }

        @media (min-width: 768px) {
          .ds-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .ds-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          .ds-title {
            font-size: 40px;
          }

          .ds-description-wrap {
            justify-content: flex-end;
          }

          .ds-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <section className="ds-section">
        <div className="ds-container">
          
          <div className="ds-header">
            
            <div>
              <div className="ds-subtitle-wrap">
                <span className="ds-subtitle">What We Do</span>
                <div className="ds-line"></div>
              </div>
              
              <h2 className="ds-title">
                End-to-End Digital Solutions <br />
                for Modern Businesses
              </h2>
            </div>

            <div className="ds-description-wrap">
              <p className="ds-description">
                From strategy to execution, we help you build a strong digital 
                presence, attract the right audience and achieve measurable results 
                through innovative and effective solutions.
              </p>
            </div>
            
          </div>

          <div className="ds-grid">
            {features.map((feature, index) => (
              <div key={index} className="ds-card">
                
                <div className="ds-icon-wrap">
                  {feature.icon}
                </div>
                
                <h3 className="ds-card-title">{feature.title}</h3>
                <p className="ds-card-desc">{feature.description}</p>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default DigitalSolutions;