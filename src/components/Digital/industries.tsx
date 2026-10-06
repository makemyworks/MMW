import React from 'react';
import { Heart, Home, ShoppingCart, GraduationCap, Landmark, Rocket } from 'lucide-react';

const IndustriesWeServe: React.FC = () => {
  const industries = [
    {
      icon: <Heart size={22} strokeWidth={2.5} />,
      title: "Healthcare",
      subtitle: "Hospitals, Clinics & Wellness Brands",
      image: "https://i.pinimg.com/736x/be/8b/7e/be8b7ecd97bbf990f52b3883d58f41e2.jpg"
    },
    {
      icon: <Home size={22} strokeWidth={2.5} />,
      title: "Real Estate",
      subtitle: "Builders, Realtors & Property Platforms",
      image: "https://i.pinimg.com/1200x/e1/f6/c0/e1f6c056a4055ff3422ee0d85a89cec1.jpg"
    },
    {
      icon: <ShoppingCart size={22} strokeWidth={2.5} />,
      title: "E-commerce",
      subtitle: "Online Stores & Marketplaces",
      image: "https://i.pinimg.com/736x/25/d7/2f/25d72fd718218d1367c2162054f9cc5d.jpg"
    },
    {
      icon: <GraduationCap size={22} strokeWidth={2.5} />,
      title: "Education",
      subtitle: "Schools, Colleges & EdTech Brands",
      image: "https://i.pinimg.com/736x/a5/71/f5/a571f5225ece8b4bd570a4bad355e0ba.jpg"
    },
    {
      icon: <Landmark size={22} strokeWidth={2.5} />,
      title: "Finance",
      subtitle: "Banks, Fintech & Financial Services",
      image: "https://i.pinimg.com/736x/33/8d/19/338d1967513402cdd7d148a62438d43c.jpg"
    },
    {
      icon: <Rocket size={22} strokeWidth={2.5} />,
      title: "Startups",
      subtitle: "Innovative Ideas to Scalable Brands",
      image: "https://i.pinimg.com/1200x/7f/56/b8/7f56b82d4a30dbbe671442218a2d6fce.jpg"
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .iws-section {
          width: 100%;
          background-color: #F4F7FB;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .iws-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .iws-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        .iws-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #007BFF;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }

        .iws-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .iws-description-wrap {
          display: flex;
          align-items: flex-start;
        }

        .iws-description {
          font-size: 14px;
          color: #4E5963;
          line-height: 1.6;
          max-width: 420px;
          margin: 0;
        }

        /* --- Industries Grid --- */
        .iws-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .iws-card {
          background-color: white;
          border: 1px solid #E6EEF7;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(15, 32, 68, 0.02);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .iws-card:hover {
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.08);
          transform: translateY(-2px);
          border-color: #007BFF;
        }

        /* Image on top — height increased */
        .iws-card-image {
          width: 100%;
          height: 170px;
          object-fit: cover;
          display: block;
        }

        .iws-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #E6F0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007BFF;
          margin-top: 16px;
          margin-bottom: 12px;
        }

        .iws-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0 16px 22px;
        }

        .iws-name {
          font-size: 15px;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          line-height: 1.2;
        }

        .iws-type {
          font-size: 12px;
          color: #4E5963;
          font-weight: 500;
          margin: 0;
          line-height: 1.4;
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 640px) {
          .iws-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .iws-card-image {
            height: 190px;
          }
        }

        @media (min-width: 1024px) {
          .iws-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: flex-start;
          }

          .iws-title {
            font-size: 40px;
          }

          .iws-description-wrap {
            justify-content: flex-end;
            padding-top: 8px;
          }

          .iws-grid {
            grid-template-columns: repeat(6, 1fr);
          }

          .iws-card-image {
            height: 160px;
          }

          .iws-icon-wrap {
            width: 44px;
            height: 44px;
          }

          .iws-name {
            font-size: 14px;
          }

          .iws-type {
            font-size: 11px;
          }
        }
      `}</style>

      <section className="iws-section">
        <div className="iws-container">
          
          {/* --- Header Section --- */}
          <div className="iws-header">
            
            {/* Left: Title */}
            <div>
              <span className="iws-subtitle">Industries We Help</span>
              <h2 className="iws-title">
                Digital Solutions for Every Industry
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="iws-description-wrap">
              <p className="iws-description">
                We work with businesses across different industries, providing 
                customized digital solutions for their unique needs.
              </p>
            </div>
            
          </div>

          {/* --- Industries Grid Section --- */}
          <div className="iws-grid">
            {industries.map((industry, index) => (
              <div key={index} className="iws-card">
                
                {/* Image on top */}
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="iws-card-image"
                />

                {/* Icon Circle */}
                <div className="iws-icon-wrap">
                  {industry.icon}
                </div>
                
                {/* Text Content */}
                <div className="iws-text-wrap">
                  <h3 className="iws-name">{industry.title}</h3>
                  <p className="iws-type">{industry.subtitle}</p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustriesWeServe;