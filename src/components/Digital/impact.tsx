import React from 'react';
import { BarChart3, Users, Filter, TrendingUp } from 'lucide-react';

const OurImpact: React.FC = () => {
  const impacts = [
    {
      icon: <BarChart3 size={24} strokeWidth={2} />,
      value: "3X",
      title: "Average Traffic Growth",
      description: "More visibility, more opportunities."
    },
    {
      icon: <Users size={24} strokeWidth={2} />,
      value: "2.5X",
      title: "Higher Engagement",
      description: "Stronger connection with your audience."
    },
    {
      icon: <Filter size={24} strokeWidth={2} />,
      value: "40%",
      title: "Increase in Lead Generation",
      description: "Turn visitors into valuable customers."
    },
    {
      icon: <TrendingUp size={24} strokeWidth={2} />,
      value: "4.8X",
      title: "Higher ROI",
      description: "Data-driven strategies that deliver real results."
    }
  ];

  return (
    <>
      <style>{`
        .oi-section {
          width: 100%;
          background-color: #F4F7FB;
          padding: 40px 16px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .oi-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .oi-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 26px;
        }

        .oi-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .oi-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #007BFF;
          text-transform: uppercase;
        }

        .oi-line {
          width: 32px;
          height: 2px;
          background-color: rgba(0, 123, 255, 0.3);
        }

        .oi-title {
          font-size: 24px;
          line-height: 1.25;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          letter-spacing: -0.02em;
          max-width: 100%;
        }

        .oi-title br {
          display: none;
        }

        .oi-description-wrap {
          display: flex;
          align-items: flex-start;
        }

        .oi-description {
          font-size: 15px;
          color: #4E5963;
          line-height: 1.6;
          max-width: 100%;
          margin: 0;
        }

        .oi-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .oi-card {
          position: relative;
          background-color: white;
          border: 1px solid #E6EEF7;
          border-radius: 12px;
          padding: 22px 20px;
          box-shadow: 0 1px 3px rgba(15, 32, 68, 0.02);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          z-index: 1;
        }

        .oi-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #007BFF 0%, #0F2044 100%);
          opacity: 0;
          transform: translateY(100%);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease;
          z-index: -1;
        }

        .oi-card:hover::before {
          opacity: 1;
          transform: translateY(0);
        }

        .oi-card:hover {
          transform: translateY(-8px);
          border-color: #007BFF;
          box-shadow: 0 20px 40px -10px rgba(0, 123, 255, 0.3);
        }

        .oi-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background-color: #E6F0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007BFF;
          margin-bottom: 14px;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .oi-card:hover .oi-icon-wrap {
          background-color: #ffffff;
          color: #007BFF;
          transform: scale(1.1) rotate(-6deg);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
        }

        .oi-value {
          font-size: 24px;
          font-weight: 700;
          color: #0F2044;
          margin: 0 0 4px 0;
          line-height: 1;
          transition: color 0.35s ease;
        }

        .oi-card:hover .oi-value {
          color: #ffffff;
        }

        .oi-card-title {
          font-size: 13px;
          font-weight: 600;
          color: #0F2044;
          margin: 0 0 8px 0;
          line-height: 1.3;
          transition: color 0.35s ease;
        }

        .oi-card:hover .oi-card-title {
          color: #ffffff;
        }

        .oi-card-desc {
          font-size: 12.5px;
          color: #4E5963;
          line-height: 1.5;
          margin: 0;
          transition: color 0.35s ease;
        }

        .oi-card:hover .oi-card-desc {
          color: rgba(255, 255, 255, 0.9);
        }

        @media (min-width: 600px) {
          .oi-section {
            padding: 50px 24px;
          }

          .oi-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }

          .oi-header {
            gap: 20px;
            margin-bottom: 32px;
          }

          .oi-title {
            font-size: 30px;
          }

          .oi-title br {
            display: inline;
          }
        }

        @media (min-width: 1024px) {
          .oi-section {
            padding: 55px 24px;
          }

          .oi-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: flex-start;
            margin-bottom: 34px;
          }

          .oi-title {
            font-size: 38px;
            max-width: 400px;
          }

          .oi-description-wrap {
            justify-content: flex-end;
            padding-top: 8px;
          }

          .oi-description {
            max-width: 450px;
          }

          .oi-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .oi-card {
            align-items: flex-start;
            text-align: left;
            padding: 22px;
          }
        }
      `}</style>

      <section className="oi-section">
        <div className="oi-container">
          
          <div className="oi-header">
            
            <div>
              <div className="oi-subtitle-wrap">
                <span className="oi-subtitle">Our Impact</span>
                <div className="oi-line"></div>
              </div>
              
              <h2 className="oi-title">
                Real Results That Drive  Business Growth
              </h2>
            </div>

            <div className="oi-description-wrap">
              <p className="oi-description">
                Our digital solutions have helped businesses achieve higher 
                visibility, better engagement and measurable growth.
              </p>
            </div>
            
          </div>

          <div className="oi-grid">
            {impacts.map((item, index) => (
              <div key={index} className="oi-card">
                
                <div className="oi-icon-wrap">
                  {item.icon}
                </div>
                
                <h3 className="oi-value">{item.value}</h3>
                <h4 className="oi-card-title">{item.title}</h4>
                <p className="oi-card-desc">{item.description}</p>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default OurImpact;