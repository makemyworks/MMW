import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// -- Data Definition --
type ServiceData = {
  id: string;
  category: string;
  title: string;
  description: string;
  visualType: "laptop-mobile" | "mobile-only" | "video-ui" | "image-ui" | "dashboard" | "support" | "social" | "branding" | "whatsapp";
  features: string[];
};

const servicesData: Record<string, ServiceData> = {
  "app-development": {
    id: "app-development",
    category: "BUILD",
    title: "App Development",
    description: "Modern mobile applications designed around your business and users.",
    visualType: "mobile-only",
    features: ["Custom App Development", "Android & iOS Solutions", "Business Applications", "App Maintenance"],
  },
  "website-development": {
    id: "website-development",
    category: "BUILD",
    title: "Website Development",
    description: "Fast, responsive and professional websites built for a strong digital presence.",
    visualType: "laptop-mobile",
    features: ["Custom Website Development", "Responsive Design", "E-commerce Solutions", "Web Applications"],
  },
  "ai-video-generation": {
    id: "ai-video-generation",
    category: "CREATE",
    title: "AI Video Generation",
    description: "Create engaging AI-powered videos for marketing, social media and business content.",
    visualType: "video-ui",
    features: ["AI Video Creation", "Product & Service Videos", "Social Media Videos", "Script & Voice Generation"],
  },
  "ai-image-generation": {
    id: "ai-image-generation",
    category: "CREATE",
    title: "AI Image Generation",
    description: "Generate high-quality creative visuals for brands, products, campaigns and social media.",
    visualType: "image-ui",
    features: ["Brand Visuals", "Product Images", "Social Media Creatives", "Campaign Visuals"],
  },
  "seo-ai-seo": {
    id: "seo-ai-seo",
    category: "GROW",
    title: "SEO & Google AI SEO",
    description: "Improve search visibility and optimize your business for traditional and AI-powered search.",
    visualType: "dashboard",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "AI Search Optimization"],
  },
  "digital-tech-solutions": {
    id: "digital-tech-solutions",
    category: "AUTOMATE",
    title: "Digital & Tech Solutions",
    description: "Custom digital solutions that solve business problems and improve everyday workflows.",
    visualType: "dashboard",
    features: ["Business Solutions", "Process Automation", "Custom Tools", "Digital Strategy"],
  },
  "tech-support": {
    id: "tech-support",
    category: "SUPPORT",
    title: "Tech Support & More",
    description: "Reliable technical support to keep your digital products and systems running smoothly.",
    visualType: "support",
    features: ["Technical Support", "Bug Fixes", "Website Support", "Maintenance"],
  },
  "social-media-setup": {
    id: "social-media-setup",
    category: "GROW",
    title: "Social Media Setup",
    description: "Set up and optimize your social media presence with a consistent professional identity.",
    visualType: "social",
    features: ["Profile Setup", "Brand Optimization", "Social Media Design", "Content Setup"],
  },
  "logo-branding": {
    id: "logo-branding",
    category: "BRAND",
    title: "Logo Design & Branding",
    description: "Create a memorable logo and visual identity that represents your business professionally.",
    visualType: "branding",
    features: ["Logo Design", "Brand Identity", "Visual Guidelines", "Social Media Branding"],
  },
  "whatsapp-automation": {
    id: "whatsapp-automation",
    category: "AUTOMATE",
    title: "WhatsApp Automation",
    description: "Automate customer communication, enquiries and workflows through WhatsApp.",
    visualType: "whatsapp",
    features: ["Automated Replies", "Customer Enquiries", "Lead Management", "Business Workflows"],
  },
};

const featureIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
];

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <div style={{ padding: "100px", textAlign: "center", fontFamily: "system-ui" }}>
        <h2>Service not found</h2>
        <Link to="/services" style={{ color: "#147FF5" }}>Back to Services</Link>
      </div>
    );
  }

  // Helper to render mockup visuals based on visualType
  const renderVisual = (type: string) => {
    return (
      <div className="sd-visual-container">
        {/* Placeholder mockups acting as premium visuals */}
        <div className={`sd-mockup sd-mockup-${type}`}>
          <div className="sd-mockup-main">
            <span className="sd-mockup-logo">MW</span>
            <div className="sd-mockup-content"></div>
          </div>
          <div className="sd-mockup-secondary"></div>
          <div className="sd-floating-badge sd-badge-1"></div>
          <div className="sd-floating-badge sd-badge-2"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .sd-page {
          font-family: system-ui, -apple-system, sans-serif;
          color: #0B1B3A;
          background: #FFFFFF;
          overflow: hidden;
        }

        .sd-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero */
        .sd-hero {
          position: relative;
          padding: 60px 0 100px;
          background: radial-gradient(circle at 80% 30%, rgba(238,245,255,0.7) 0%, rgba(255,255,255,0) 60%);
        }

        .sd-breadcrumb {
          font-size: 13px;
          color: #6B7A90;
          margin-bottom: 40px;
        }
        
        .sd-breadcrumb a {
          color: #147FF5;
          text-decoration: none;
        }

        .sd-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .sd-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: #147FF5;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
          position: relative;
          padding-left: 36px;
        }
        .sd-label::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 2px;
          background: #147FF5;
        }

        .sd-title {
          font-size: 56px;
          font-weight: 800;
          color: #0B1B3A;
          line-height: 1.1;
          margin: 0 0 24px 0;
          letter-spacing: -1px;
          animation: sdFadeUp 0.6s ease forwards;
        }

        .sd-desc {
          font-size: 18px;
          color: #50607A;
          line-height: 1.6;
          margin: 0 0 40px 0;
          max-width: 480px;
          animation: sdFadeUp 0.6s ease 0.1s forwards;
          opacity: 0;
        }

        .sd-hero-btns {
          display: flex;
          gap: 16px;
          align-items: center;
          animation: sdFadeUp 0.6s ease 0.2s forwards;
          opacity: 0;
        }

        .sd-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #0B1B3A;
          color: #fff;
          padding: 0 28px;
          height: 50px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .sd-btn-primary:hover {
          background: #147FF5;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(20,127,245,0.25);
        }

        .sd-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          color: #0B1B3A;
          padding: 0 24px;
          height: 50px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          border: 1px solid #E2E8F0;
          transition: all 0.2s;
        }
        .sd-btn-secondary:hover {
          border-color: #0B1B3A;
          background: #F8FAFC;
        }

        /* Mockup area */
        .sd-visual-container {
          position: relative;
          width: 100%;
          height: 500px;
          animation: sdFloat 8s ease-in-out infinite;
        }

        .sd-mockup {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sd-mockup-main {
          width: 80%;
          height: 70%;
          background: #FFFFFF;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(11,27,58,0.1);
          border: 1px solid #EEF5FF;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .sd-mockup-logo {
          padding: 16px 20px;
          font-weight: 800;
          color: #147FF5;
          border-bottom: 1px solid #EEF5FF;
          background: #F8FBFF;
        }
        
        .sd-mockup-content {
          flex: 1;
          background: linear-gradient(135deg, #F8FBFF 0%, #FFFFFF 100%);
          padding: 20px;
        }

        .sd-mockup-secondary {
          position: absolute;
          right: 5%;
          bottom: 10%;
          width: 25%;
          height: 45%;
          background: #FFFFFF;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(11,27,58,0.12);
          border: 1px solid #EEF5FF;
          z-index: 3;
        }

        .sd-floating-badge {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: #FFFFFF;
          box-shadow: 0 10px 25px rgba(11,27,58,0.08);
          z-index: 4;
        }
        .sd-badge-1 { top: 15%; left: 10%; animation: sdFloat 6s ease-in-out infinite reverse; }
        .sd-badge-2 { bottom: 25%; left: 0; animation: sdFloat 7s ease-in-out infinite 1s; }

        /* What We Offer */
        .sd-offer {
          padding: 100px 0;
          background: #FAFCFF;
          border-top: 1px solid #EEF5FF;
          border-bottom: 1px solid #EEF5FF;
        }

        .sd-section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .sd-section-header .sd-label {
          padding-left: 0;
        }
        .sd-section-header .sd-label::before {
          display: none;
        }

        .sd-section-title {
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 16px 0;
        }

        .sd-section-desc {
          color: #50607A;
          font-size: 16px;
          max-width: 500px;
          margin: 0 auto;
        }

        .sd-offer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .sd-offer-card {
          background: #FFFFFF;
          border: 1px solid #EEF5FF;
          border-radius: 20px;
          padding: 32px 24px;
          box-shadow: 0 10px 30px rgba(11,27,58,0.03);
          transition: all 0.3s ease;
        }

        .sd-offer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(11,27,58,0.06);
          border-color: #147FF5;
        }

        .sd-offer-icon {
          width: 48px;
          height: 48px;
          background: #F0F6FF;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #147FF5;
          margin-bottom: 20px;
        }
        .sd-offer-icon svg { width: 24px; height: 24px; }

        .sd-offer-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }
        
        .sd-offer-desc {
          font-size: 14px;
          color: #6B7A90;
          margin: 0;
          line-height: 1.5;
        }

        /* How We Work */
        .sd-process {
          padding: 100px 0;
          background: #FFFFFF;
        }

        .sd-process-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .sd-process-line {
          position: absolute;
          top: 30px;
          left: 50px;
          right: 50px;
          height: 2px;
          background: #EEF5FF;
          z-index: 1;
        }

        .sd-step {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 16px;
          background: #FFFFFF;
          padding: 0 20px;
        }

        .sd-step-num {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #147FF5;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(20,127,245,0.3);
        }

        .sd-step-content {
          display: flex;
          flex-direction: column;
        }
        .sd-step-title {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 4px 0;
        }
        .sd-step-desc {
          font-size: 14px;
          color: #6B7A90;
          margin: 0;
          max-width: 150px;
          line-height: 1.4;
        }

        /* Final CTA */
        .sd-cta {
          padding: 100px 0;
          background: #FFFFFF;
        }

        .sd-cta-box {
          background: #EEF5FF;
          border-radius: 30px;
          padding: 80px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .sd-cta-box::before, .sd-cta-box::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(20,127,245,0.1) 0%, rgba(20,127,245,0) 70%);
          pointer-events: none;
        }
        .sd-cta-box::before { top: -100px; left: -100px; }
        .sd-cta-box::after { bottom: -100px; right: -100px; }

        .sd-cta-label {
          font-size: 12px;
          font-weight: 700;
          color: #147FF5;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }

        .sd-cta-title {
          font-size: 40px;
          font-weight: 800;
          margin: 0 0 20px 0;
        }

        .sd-cta-desc {
          font-size: 16px;
          color: #50607A;
          max-width: 500px;
          margin: 0 auto 40px auto;
        }

        .sd-cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .sd-btn-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          color: #128C7E;
          padding: 0 24px;
          height: 50px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          gap: 8px;
          transition: all 0.2s;
        }
        .sd-btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .sd-btn-whatsapp svg {
          width: 20px; height: 20px; fill: currentColor;
        }

        /* Animations */
        @keyframes sdFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sdFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .sd-hero-content { grid-template-columns: 1fr; text-align: center; }
          .sd-label::before { display: none; }
          .sd-label { padding-left: 0; }
          .sd-desc { margin: 0 auto 40px auto; }
          .sd-hero-btns { justify-content: center; }
          .sd-offer-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .sd-title { font-size: 40px; }
          .sd-offer-grid { grid-template-columns: 1fr; }
          .sd-process-wrapper { flex-direction: column; gap: 40px; align-items: center; }
          .sd-process-line { width: 2px; height: 100%; top: 0; left: 50%; right: auto; margin-left: -1px; }
          .sd-step { flex-direction: column; text-align: center; padding: 20px 0; }
          .sd-cta-title { font-size: 32px; }
          .sd-cta-btns { flex-direction: column; }
        }
      `}</style>

      <div className="sd-page">
        {/* HERO */}
        <section className="sd-hero">
          <div className="sd-container">
            <div className="sd-breadcrumb">
              <Link to="/">Home</Link> &rarr; <Link to="/services">Services</Link> &rarr; {service.title}
            </div>
            
            <div className="sd-hero-content">
              <div>
                <span className="sd-label">OUR SERVICE</span>
                <h1 className="sd-title">{service.title}</h1>
                <p className="sd-desc">{service.description}</p>
                <div className="sd-hero-btns">
                  <Link to="/contact" className="sd-btn-primary">Get Free Quote &rarr;</Link>
                  <Link to="/services" className="sd-btn-secondary">&larr; All Services</Link>
                </div>
              </div>
              
              {renderVisual(service.visualType)}
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="sd-offer">
          <div className="sd-container">
            <div className="sd-section-header">
              <span className="sd-label">WHAT WE OFFER</span>
              <h2 className="sd-section-title">Everything You Need</h2>
              <p className="sd-section-desc">We create modern, responsive and high-performing solutions tailored to your business needs.</p>
            </div>
            
            <div className="sd-offer-grid">
              {service.features.map((feature, idx) => (
                <div key={idx} className="sd-offer-card">
                  <div className="sd-offer-icon">
                    {featureIcons[idx % featureIcons.length]}
                  </div>
                  <h3 className="sd-offer-title">{feature}</h3>
                  <p className="sd-offer-desc">Modern and scalable solutions designed to help your business operate more efficiently and grow faster.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="sd-process">
          <div className="sd-container">
            <div className="sd-section-header">
              <span className="sd-label">HOW WE WORK</span>
              <h2 className="sd-section-title">From Idea to Launch</h2>
              <p className="sd-section-desc">A simple and clear process to bring your project to life.</p>
            </div>
            
            <div className="sd-process-wrapper">
              <div className="sd-process-line"></div>
              
              <div className="sd-step">
                <div className="sd-step-num">01</div>
                <div className="sd-step-content">
                  <h4 className="sd-step-title">Plan</h4>
                  <p className="sd-step-desc">Understand your needs and goals.</p>
                </div>
              </div>
              
              <div className="sd-step">
                <div className="sd-step-num">02</div>
                <div className="sd-step-content">
                  <h4 className="sd-step-title">Build</h4>
                  <p className="sd-step-desc">Design and develop the solution.</p>
                </div>
              </div>
              
              <div className="sd-step">
                <div className="sd-step-num">03</div>
                <div className="sd-step-content">
                  <h4 className="sd-step-title">Launch</h4>
                  <p className="sd-step-desc">Test, launch and support your product.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
