import React from 'react';
import { FileText, Target, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <FileText size={24} strokeWidth={2} />,
      title: "Audit",
      subtitle: "& Analyze"
    },
    {
      number: "02",
      icon: <Target size={24} strokeWidth={2} />,
      title: "Plan",
      subtitle: "& Strategize"
    },
    {
      number: "03",
      icon: <Settings size={24} strokeWidth={2} />,
      title: "Execute",
      subtitle: "& Optimize"
    },
    {
      number: "04",
      icon: <TrendingUp size={24} strokeWidth={2} />,
      title: "Monitor",
      subtitle: "& Grow"
    }
  ];

  return (
    <>
      <style>{`
        .hww-section {
          width: 100%;
          background-color: #F4F7FB;
          padding: 50px 16px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .hww-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }

        .hww-content {
          max-width: 100%;
        }

        .hww-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .hww-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #007BFF;
          text-transform: uppercase;
        }

        .hww-line {
          width: 32px;
          height: 2px;
          background-color: rgba(0, 123, 255, 0.3);
        }

        .hww-title {
          font-size: 28px;
          line-height: 1.2;
          font-weight: 700;
          color: #0F2044;
          margin: 0 0 14px 0;
          letter-spacing: -0.02em;
        }

        .hww-description {
          font-size: 15px;
          color: #4E5963;
          line-height: 1.6;
          margin: 0;
        }

        .hww-process {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .hww-step-wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .hww-step {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
          position: relative;
          background-color: white;
          border: 1px solid #E6EEF7;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 1px 3px rgba(15, 32, 68, 0.02);
          transition: all 0.3s ease;
        }

        .hww-step:hover {
          transform: translateY(-4px);
          border-color: #007BFF;
          box-shadow: 0 10px 25px -5px rgba(0, 123, 255, 0.15);
        }

        .hww-step-number {
          position: absolute;
          top: 16px;
          right: 20px;
          font-size: 13px;
          font-weight: 600;
          color: #007BFF;
          letter-spacing: 0.05em;
          z-index: 2;
        }

        .hww-icon-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #E6F0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007BFF;
          flex-shrink: 0;
          border: 1px solid #E6EEF7;
          transition: all 0.3s ease;
        }

        .hww-step:hover .hww-icon-circle {
          background-color: #007BFF;
          color: #ffffff;
          transform: scale(1.05);
        }

        .hww-step-text-wrap {
          display: flex;
          flex-direction: column;
          padding-top: 4px;
          padding-right: 30px; 
        }

        .hww-step-title {
          font-size: 15px;
          font-weight: 700;
          color: #0F2044;
          margin: 0 0 4px 0;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .hww-step:hover .hww-step-title {
          color: #007BFF;
        }

        .hww-step-subtitle {
          font-size: 13px;
          font-weight: 500;
          color: #4E5963;
          margin: 0;
          line-height: 1.3;
        }

        .hww-arrow {
          display: none;
        }

        @media (min-width: 600px) {
          .hww-section {
            padding: 60px 24px;
          }

          .hww-title {
            font-size: 32px;
          }
        }

        @media (min-width: 1024px) {
          .hww-section {
            padding: 80px 24px;
          }

          .hww-container {
            grid-template-columns: 1fr 1.8fr;
            gap: 60px;
          }

          .hww-content {
            max-width: 500px;
          }

          .hww-title {
            font-size: 42px;
          }

          .hww-description {
            font-size: 17px;
          }

          .hww-process {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 8px;
          }

          .hww-step-wrapper {
            flex-direction: row;
            align-items: center;
            flex: 1;
          }

          .hww-step {
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: transparent;
            border: none;
            box-shadow: none;
            padding: 0;
            flex: 1;
            gap: 0;
          }

          .hww-step:hover {
            transform: translateY(-4px);
            box-shadow: none;
            border: none;
          }

          .hww-step-number {
            position: relative;
            top: auto;
            right: auto;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 8px;
            z-index: 2;
          }

          .hww-icon-circle {
            width: 80px;
            height: 80px;
            background-color: #E6F0FF;
            margin-bottom: 16px;
            border: 4px solid #F4F7FB;
            box-shadow: 0 0 0 1px rgba(0, 123, 255, 0.15);
          }

          .hww-step-text-wrap {
            padding-top: 0;
            padding-right: 0;
          }

          .hww-step-title {
            font-size: 14px;
          }

          .hww-step-subtitle {
            font-size: 14px;
          }

          .hww-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #007BFF;
            margin-top: -56px;
            padding: 0 4px;
            flex-shrink: 0;
            opacity: 0.7;
          }
        }

        @media (min-width: 1200px) {
          .hww-icon-circle {
            width: 88px;
            height: 88px;
          }

          .hww-arrow {
            margin-top: -60px;
          }
        }
      `}</style>

      <section className="hww-section">
        <div className="hww-container">
          
          <div className="hww-content">
            <div className="hww-subtitle-wrap">
              <span className="hww-subtitle">How We Work</span>
              <div className="hww-line"></div>
            </div>
            
            <h2 className="hww-title">
              A Simple & Transparent Process
            </h2>
            
            <p className="hww-description">
              We follow a data-driven approach to deliver measurable results.
            </p>
          </div>

          <div className="hww-process">
            {steps.map((step, index) => (
              <div key={index} className="hww-step-wrapper">
                <div className="hww-step">
                  
                  <div className="hww-step-number">({step.number})</div>
                  
                  <div className="hww-icon-circle">
                    {step.icon}
                  </div>
                  
                  <div className="hww-step-text-wrap">
                    <h3 className="hww-step-title">{step.title}</h3>
                    <p className="hww-step-subtitle">{step.subtitle}</p>
                  </div>
                  
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hww-arrow">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default HowWeWork;