import React from 'react';
import { Heart, Home, ShoppingCart, GraduationCap, Landmark, Rocket } from 'lucide-react';

const IndustriesWeHelp: React.FC = () => {
  const industries = [
    {
      icon: <Heart size={22} strokeWidth={2.5} />,
      title: "Healthcare",
      subtitle: "Hospitals & Clinics",
      image: "https://i.pinimg.com/736x/ec/f9/78/ecf978b589be35d7325b7270b55617d7.jpg"
    },
    {
      icon: <Home size={22} strokeWidth={2.5} />,
      title: "Real Estate",
      subtitle: "Builders & Realtors",
      image: "https://i.pinimg.com/736x/94/e8/b1/94e8b171b32348132445028405ccd9cb.jpg"
    },
    {
      icon: <ShoppingCart size={22} strokeWidth={2.5} />,
      title: "E-commerce",
      subtitle: "Online Stores",
      image: "https://i.pinimg.com/736x/17/2f/5a/172f5af28c86ee70d43e20202d8eaa01.jpg"
    },
    {
      icon: <GraduationCap size={22} strokeWidth={2.5} />,
      title: "Education",
      subtitle: "Schools & Colleges",
      image: "https://i.pinimg.com/236x/33/33/e0/3333e0c143037340dd9663ef84418f7c.jpg"
    },
    {
      icon: <Landmark size={22} strokeWidth={2.5} />,
      title: "Finance",
      subtitle: "Banks & Fintech",
      image: "https://i.pinimg.com/1200x/33/bf/df/33bfdf3866d3a37ef6a7e62d76a2d36e.jpg"
    },
    {
      icon: <Rocket size={22} strokeWidth={2.5} />,
      title: "Startups",
      subtitle: "Innovative Brands",
      image: "https://i.pinimg.com/1200x/70/95/9c/70959c03d7fd3d3006fdad6d54dd34cf.jpg"
    }
  ];

  return (
    <>
      <style>{`
        .iwh-section {
          width: 100%;
          background-color: #F4F7FB;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .iwh-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .iwh-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        .iwh-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .iwh-description-wrap {
          display: flex;
          align-items: center;
        }

        .iwh-description {
          font-size: 14px;
          color: #4E5963;
          line-height: 1.6;
          max-width: 420px;
          margin: 0;
        }

        .iwh-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .iwh-card {
          position: relative;
          background-color: #ffffff;
          border: 1px solid #E6EEF7;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(15, 32, 68, 0.02);
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
        }

        .iwh-card:hover {
          box-shadow: 0 15px 30px -8px rgba(0, 123, 255, 0.18);
          transform: translateY(-5px);
          border-color: #007BFF;
        }

        /* Image Section */
        .iwh-image-wrapper {
          position: relative;
          width: 100%;
          height: 140px;
          overflow: hidden;
          background-color: #E6F0FF;
        }

        .iwh-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .iwh-card:hover .iwh-image {
          transform: scale(1.08);
        }

        /* Gradient overlay on image */
        .iwh-image-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 32, 68, 0) 40%,
            rgba(15, 32, 68, 0.35) 100%
          );
          pointer-events: none;
        }

        /* Icon floating on image */
        .iwh-icon-wrap {
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007BFF;
          border: 3px solid #F4F7FB;
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
          transition: all 0.35s ease;
          z-index: 3;
        }

        .iwh-card:hover .iwh-icon-wrap {
          background-color: #007BFF;
          color: #ffffff;
          transform: translateX(-50%) scale(1.1);
        }

        /* Text Content */
        .iwh-text-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4px;
          padding: 34px 16px 22px;
        }

        .iwh-name {
          font-size: 15px;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          line-height: 1.2;
          transition: color 0.3s ease;
        }

        .iwh-card:hover .iwh-name {
          color: #007BFF;
        }

        .iwh-type {
          font-size: 13px;
          color: #4E5963;
          font-weight: 500;
          margin: 0;
          line-height: 1.2;
        }

        @media (min-width: 640px) {
          .iwh-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .iwh-image-wrapper {
            height: 160px;
          }
        }

        @media (min-width: 1024px) {
          .iwh-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          .iwh-title {
            font-size: 40px;
          }

          .iwh-description-wrap {
            justify-content: flex-end;
          }

          .iwh-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 18px;
          }

          .iwh-image-wrapper {
            height: 130px;
          }

          .iwh-icon-wrap {
            width: 44px;
            height: 44px;
          }

          .iwh-name {
            font-size: 14px;
          }

          .iwh-type {
            font-size: 12px;
          }
        }
      `}</style>

      <section className="iwh-section">
        <div className="iwh-container">
          
          <div className="iwh-header">
            
            <div>
              <h2 className="iwh-title">
                Industries We Help
              </h2>
            </div>

            <div className="iwh-description-wrap">
              <p className="iwh-description">
                We work with businesses across different industries, providing 
                customized SEO and AI search solutions for their unique needs.
              </p>
            </div>
            
          </div>

          <div className="iwh-grid">
            {industries.map((industry, index) => (
              <div key={index} className="iwh-card">
                
                <div className="iwh-image-wrapper">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="iwh-image"
                  />

                  <div className="iwh-icon-wrap">
                    {industry.icon}
                  </div>
                </div>
                
                <div className="iwh-text-wrap">
                  <h3 className="iwh-name">{industry.title}</h3>
                  <p className="iwh-type">{industry.subtitle}</p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustriesWeHelp;