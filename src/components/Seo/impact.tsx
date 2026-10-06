import React from 'react';
import { TrendingUp, Users, Filter, Trophy } from 'lucide-react';

const RealResults: React.FC = () => {
  const stats = [
    {
      icon: <TrendingUp size={24} strokeWidth={2} />,
      value: "3X",
      label: "Average Traffic Growth"
    },
    {
      icon: <Users size={24} strokeWidth={2} />,
      value: "200+",
      label: "Keywords Ranked"
    },
    {
      icon: <Filter size={24} strokeWidth={2} />,
      value: "70%",
      label: "Increase in Leads"
    },
    {
      icon: <Trophy size={24} strokeWidth={2} />,
      value: "95%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <>
      <style>{`
        .rr-section {
          width: 100%;
          background-color: #F4F7FB;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .rr-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .rr-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        .rr-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .rr-description-wrap {
          display: flex;
          align-items: center;
        }

        .rr-description {
          font-size: 14px;
          color: #4E5963;
          line-height: 1.6;
          max-width: 400px;
          margin: 0;
        }

        .rr-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .rr-card {
          background-color: white;
          border: 1px solid #E6EEF7;
          border-radius: 10px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(15, 32, 68, 0.02);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .rr-card:hover {
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.08);
          transform: translateY(-2px);
          border-color: #007BFF;
        }

        .rr-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: #E6F0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007BFF;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .rr-card:hover .rr-icon-wrap {
          background-color: #007BFF;
          color: #ffffff;
          transform: scale(1.08);
        }

        .rr-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .rr-value {
          font-size: 24px;
          font-weight: 700;
          color: #0F2044;
          margin: 0 0 2px 0;
          line-height: 1;
          transition: color 0.3s ease;
        }

        .rr-card:hover .rr-value {
          color: #007BFF;
        }

        .rr-label {
          font-size: 13px;
          color: #4E5963;
          font-weight: 500;
          margin: 0;
          line-height: 1.3;
        }

        @media (min-width: 768px) {
          .rr-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .rr-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          .rr-title {
            font-size: 40px;
          }

          .rr-description-wrap {
            justify-content: flex-end;
          }

          .rr-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <section className="rr-section">
        <div className="rr-container">
          
          <div className="rr-header">
            
            <div>
              <h2 className="rr-title">
                Real Results, Measurable Growth
              </h2>
            </div>

            <div className="rr-description-wrap">
              <p className="rr-description">
                Our SEO and AI search strategies have helped businesses 
                increase visibility, attract more traffic and generate quality leads.
              </p>
            </div>
            
          </div>

          <div className="rr-grid">
            {stats.map((stat, index) => (
              <div key={index} className="rr-card">
                
                <div className="rr-icon-wrap">
                  {stat.icon}
                </div>
                
                <div className="rr-text-wrap">
                  <h3 className="rr-value">{stat.value}</h3>
                  <p className="rr-label">{stat.label}</p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default RealResults;