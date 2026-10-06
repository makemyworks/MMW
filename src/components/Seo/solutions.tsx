<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  FileText, 
  Link as LinkIcon, 
  Settings, 
  Bot, 
  MapPin, 
  PenTool, 
  PieChart,
  ArrowRight
} from 'lucide-react';

const ComprehensiveServices: React.FC = () => {
  const services = [
    {
      icon: <Search size={22} strokeWidth={2} />,
      title: "Keyword Research & Strategy",
      description: "Find the right keywords that drive real business opportunities."
    },
    {
      icon: <FileText size={22} strokeWidth={2} />,
      title: "On-Page SEO Optimization",
      description: "Optimize content, meta tags, structure and internal linking."
    },
    {
      icon: <LinkIcon size={22} strokeWidth={2} />,
      title: "Off-Page SEO & Link Building",
      description: "Build high-quality backlinks to improve authority."
    },
    {
      icon: <Settings size={22} strokeWidth={2} />,
      title: "Technical SEO",
      description: "Improve site speed, indexing, crawlability and overall performance."
    },
    {
      icon: <Bot size={22} strokeWidth={2} />,
      title: "AI Search Optimization",
      description: "Optimize for ChatGPT, Google SGE, Perplexity and other AI search platforms."
    },
    {
      icon: <MapPin size={22} strokeWidth={2} />,
      title: "Local SEO",
      description: "Help your business rank in local searches and Google Maps."
    },
    {
      icon: <PenTool size={22} strokeWidth={2} />,
      title: "Content Strategy & Creation",
      description: "Create SEO-friendly content that engages and converts."
    },
    {
      icon: <PieChart size={22} strokeWidth={2} />,
      title: "Analytics & Reporting",
      description: "Track rankings, traffic, leads and ROI with detailed reports."
    }
  ];
=======
import React from "react";
>>>>>>> 1fbc728 (theme update)

const SeoServices: React.FC = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .seo-services {
          width: 100%;
          background: #ffffff;
          padding: 80px 0 100px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .seo-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 8%;
        }

        /* --- Header --- */
        .seo-header {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 55px;
        }

        .seo-eyebrow {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #007BFF;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .seo-header h2 {
          margin: 0;
          font-size: clamp(32px, 3.5vw, 48px);
          line-height: 1.08;
          letter-spacing: -1.5px;
          font-weight: 700;
          color: #0F2044;
        }

        .seo-header h2 .blue-text {
          color: #007BFF;
        }

        .seo-header-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #4E5963;
          margin: 0;
        }

        /* --- Grid --- */
        .seo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        /* --- Card --- */
        .seo-card {
          background: #ffffff;
          border: 1px solid #E6EEF7;
          border-radius: 14px;
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .seo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(15, 32, 68, 0.08);
        }

        .seo-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        /* Light blue variant — cards 1 & 3 */
        .seo-icon-box.light-blue {
          background: #EAF3FF;
          color: #007BFF;
          border: 1px solid #D6E4F0;
        }

        /* Dark blue variant — cards 2 & 4 */
        .seo-icon-box.dark-blue {
          background: #0F2044;
          color: #ffffff;
          border: 1px solid #0F2044;
        }

        .seo-icon-box svg {
          width: 20px;
          height: 20px;
        }

        .seo-card h3 {
          margin: 0 0 10px;
          font-size: 17px;
          font-weight: 700;
          color: #0F2044;
          letter-spacing: -0.3px;
        }

        .seo-card p {
          margin: 0 0 22px;
          font-size: 13px;
          line-height: 1.55;
          color: #5A6673;
        }

        /* --- Card Image --- */
        .seo-card-image {
          margin-top: auto;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #E6EEF7;
          background: #F4F7FB;
        }

        .seo-card-image img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .seo-card:hover .seo-card-image img {
          transform: scale(1.03);
        }

        /* --- Responsive --- */
        @media (max-width: 1100px) {
          .seo-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .seo-header {
            grid-template-columns: 1fr;
            gap: 20px;
            align-items: flex-start;
          }

          .seo-header-desc {
            max-width: 560px;
          }
        }

        @media (max-width: 640px) {
          .seo-services {
            padding: 50px 0 70px;
          }

          .seo-container {
            padding: 0 22px;
          }

          .seo-header {
            margin-bottom: 35px;
          }

          .seo-header h2 {
            font-size: 30px;
            letter-spacing: -1px;
          }

          .seo-header-desc {
            font-size: 14px;
          }

          .seo-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .seo-card {
            padding: 22px 18px;
          }
        }
      `}</style>

      <section className="seo-services">
        <div className="seo-container">

          {/* --- Header --- */}
          <div className="seo-header">
            <div>
              <div className="seo-eyebrow">Our SEO Services</div>
              <h2>
                End-to-End SEO Solutions
                <br />
                for <span className="blue-text">Sustainable Growth</span>
              </h2>
            </div>

            <p className="seo-header-desc">
              From technical optimization to AI-powered search
              visibility, we offer complete SEO services tailored
              to your business goals.
            </p>
          </div>

<<<<<<< HEAD
          {/* --- Cards Grid Section --- */}
          <div className="cs-grid">
            {services.map((service, index) => (
              <div key={index} className="cs-card">
                
                {/* Icon Circle */}
                <div className="cs-icon-wrap">
                  {service.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="cs-card-title">{service.title}</h3>
                <p className="cs-card-desc">{service.description}</p>
                
                {/* Learn More Link */}
                <Link to="/contact" className="cs-learn-more">
                  Learn More 
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
                
=======
          {/* --- Cards --- */}
          <div className="seo-grid">

            {/* Card 1: Technical SEO — LIGHT BLUE */}
            <div className="seo-card">
              <div className="seo-icon-box light-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
>>>>>>> 1fbc728 (theme update)
              </div>
              <h3>Technical SEO</h3>
              <p>
                Improve site speed, crawlability,
                indexing and overall performance.
              </p>

              <div className="seo-card-image">
                <img src="/Images/seo1.png" alt="Technical SEO preview" />
              </div>
            </div>

            {/* Card 2: On-Page SEO — DARK BLUE */}
            <div className="seo-card">
              <div className="seo-icon-box dark-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 8h8M8 12h5" />
                  <circle cx="17" cy="15" r="2.5" />
                </svg>
              </div>
              <h3>On-Page SEO</h3>
              <p>
                Optimize content, meta tags,
                structure and internal linking
                for better rankings.
              </p>

              <div className="seo-card-image">
                <img src="/Images/seo2.png" alt="On-Page SEO preview" />
              </div>
            </div>

            {/* Card 3: Local SEO — LIGHT BLUE */}
            <div className="seo-card">
              <div className="seo-icon-box light-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Local SEO</h3>
              <p>
                Help your business rank in
                local searches and Google Maps.
              </p>

              <div className="seo-card-image">
                <img src="/Images/seo3.png" alt="Local SEO preview" />
              </div>
            </div>

            {/* Card 4: AI Search Optimization — DARK BLUE */}
            <div className="seo-card">
              <div className="seo-icon-box dark-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
                </svg>
              </div>
              <h3>AI Search Optimization</h3>
              <p>
                Optimize your brand for
                ChatGPT, Google SGE, Perplexity
                and other AI platforms.
              </p>

              <div className="seo-card-image">
                <img src="/Images/seo4.png" alt="AI Search Optimization preview" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SeoServices;