import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

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
    return <NotFound />;
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .sd-page {
          font-family: system-ui, -apple-system, sans-serif;
          color: #0B1B3A;
          overflow: hidden;
        }

        .sd-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Animations */
        @keyframes sdFadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes sdFadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes sdFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 1. Hero */
        .sd-hero {
          position: relative;
          padding: 40px 0 100px;
          background: linear-gradient(135deg, #EAF3FF 0%, #F3F8FF 45%, #E7F1FF 100%);
          overflow: hidden;
        }

        .sd-bg-shape {
          position: absolute;
          border-radius: 50%;
          z-index: 0;
        }
        
        /* Left Side Shapes */
        .sd-bg-left-1 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, #D8E9FF 0%, rgba(216,233,255,0) 70%);
          top: -150px; left: -250px;
          opacity: 0.6;
        }
        
        .sd-bg-left-2 {
          width: 500px; height: 500px;
          border: 1px solid #C7DDFF;
          bottom: -150px; left: 10%;
          opacity: 0.5;
        }

        /* Center Connectors */
        .sd-bg-center-1 {
          width: 450px; height: 450px;
          background: radial-gradient(circle, #D8E9FF 0%, rgba(216,233,255,0) 65%);
          top: -50px; left: 35%;
          opacity: 0.4;
        }

        /* Right Side Shapes */
        .sd-bg-right-1 {
          width: 800px; height: 800px;
          background: radial-gradient(circle, #C7DDFF 0%, rgba(199,221,255,0) 70%);
          top: -150px; right: -200px;
          opacity: 0.5;
        }
        
        .sd-bg-right-2 {
          width: 600px; height: 600px;
          border: 1px solid #C7DDFF;
          bottom: -200px; right: 0;
          opacity: 0.6;
        }
        
        .sd-bg-right-3 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, #D8E9FF 0%, rgba(216,233,255,0) 60%);
          top: 30%; right: 25%;
          opacity: 0.4;
        }
        
        .sd-bg-right-4 {
          width: 1000px; height: 1000px;
          border: 1px dashed #C7DDFF;
          bottom: -500px; left: -200px;
          opacity: 0.3;
        }
        
        .sd-bg-glow {
          width: 300px; height: 300px;
          background: #C7DDFF;
          filter: blur(100px);
          top: 35%; right: 5%;
          opacity: 0.5;
        }

        .sd-bg-dots {
          position: absolute;
          width: 200px; height: 200px;
          background-image: radial-gradient(#C7DDFF 2px, transparent 2px);
          background-size: 24px 24px;
          top: 10%; right: 8%;
          opacity: 0.6;
          z-index: 0;
        }

        .sd-bg-plus {
          position: absolute;
          color: #C7DDFF;
          font-size: 28px;
          font-weight: 300;
          z-index: 0;
        }
        .sd-bg-plus-1 { top: 20%; right: 35%; }
        .sd-bg-plus-2 { bottom: 25%; right: 10%; }



        .sd-breadcrumb {
          font-size: 13px;
          color: #8A99AF;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .sd-breadcrumb a {
          color: #8A99AF;
          text-decoration: none;
          transition: color 0.2s;
        }
        .sd-breadcrumb a:hover { color: #147FF5; }
        .sd-breadcrumb span { color: #147FF5; font-weight: 600; }

        .sd-hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .sd-hero-text {
          animation: sdFadeUp 0.7s ease forwards;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sd-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 700;
          color: #147FF5;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .sd-label::before {
          display: none;
        }

        .sd-title {
          font-size: 56px;
          font-weight: 800;
          color: #0B1B3A;
          line-height: 1.1;
          margin: 0 0 24px 0;
          letter-spacing: -1px;
        }

        .sd-desc {
          font-size: 18px;
          color: #50607A;
          line-height: 1.6;
          margin: 0 0 20px 0;
          max-width: 600px;
        }

        /* 3. What We Offer */
        .sd-offer {
          padding: 100px 0;
          background: #F7FAFF;
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
          font-weight: 800;
          color: #0B1B3A;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }
        .sd-section-desc {
          color: #6B7A90;
          font-size: 16px;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .sd-offer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .sd-offer-card {
          background: #FFFFFF;
          border: 1px solid #E4ECF8;
          border-radius: 20px;
          padding: 32px 24px;
          box-shadow: 0 4px 15px rgba(11,27,58,0.02);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .sd-offer-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(20,127,245,0.08);
          border-color: #147FF5;
        }

        .sd-offer-icon {
          width: 52px;
          height: 52px;
          background: #EEF5FF;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #147FF5;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }
        .sd-offer-icon svg { width: 24px; height: 24px; }
        
        .sd-offer-card:hover .sd-offer-icon {
          background: #147FF5;
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(20,127,245,0.3);
        }

        .sd-offer-title {
          font-size: 18px;
          font-weight: 700;
          color: #0B1B3A;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }
        
        .sd-offer-desc {
          font-size: 14px;
          color: #6B7A90;
          margin: 0;
          line-height: 1.6;
          flex-grow: 1;
        }

        /* 5. How We Work */
        .sd-process {
          padding: 100px 0;
          background: #FFFFFF;
        }

        .sd-process-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .sd-process-line {
          position: absolute;
          top: 36px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: #EEF5FF;
          z-index: 1;
        }

        .sd-step {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 30%;
          background: #FFFFFF;
          padding: 0 16px;
        }

        .sd-step-num {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #147FF5;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          box-shadow: 0 10px 25px rgba(20,127,245,0.25);
          margin-bottom: 24px;
          border: 6px solid #FFFFFF;
        }

        .sd-step-title {
          font-size: 22px;
          font-weight: 800;
          color: #0B1B3A;
          margin: 0 0 8px 0;
        }
        
        .sd-step-desc {
          font-size: 15px;
          color: #6B7A90;
          margin: 0;
          line-height: 1.5;
        }

        /* 7. Final CTA */
        .sd-cta {
          padding: 0 0 100px 0;
          background: #FFFFFF;
        }

        .sd-cta-container {
          background: linear-gradient(135deg, #F0F6FF 0%, #E4ECF8 100%);
          border-radius: 24px;
          padding: 70px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .sd-cta-circle {
          position: absolute;
          border-radius: 50%;
          border: 2px dashed rgba(20,127,245,0.15);
          z-index: 1;
        }
        .sd-cta-circle-1 { width: 300px; height: 300px; top: -100px; left: -100px; }
        .sd-cta-circle-2 { width: 200px; height: 200px; bottom: -50px; right: 50px; }

        .sd-cta-content {
          position: relative;
          z-index: 2;
        }

        .sd-cta-title {
          font-size: 40px;
          font-weight: 800;
          color: #0B1B3A;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }

        .sd-cta-desc {
          font-size: 16px;
          color: #50607A;
          max-width: 500px;
          margin: 0 auto 32px auto;
          line-height: 1.5;
        }

        .sd-cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .sd-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #147FF5;
          color: #FFFFFF;
          padding: 0 28px;
          height: 50px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(20, 127, 245, 0.25);
          gap: 10px;
          transition: all 0.2s;
        }
        .sd-btn-primary:hover {
          background: #0B6CE6;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(20, 127, 245, 0.35);
        }

        .sd-btn-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          color: #128C7E;
          padding: 0 28px;
          height: 50px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          gap: 10px;
          transition: all 0.2s;
        }
        .sd-btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .sd-btn-whatsapp svg {
          width: 20px; height: 20px; fill: currentColor;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .sd-title { font-size: 48px; }
          .sd-offer-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .sd-desc { margin: 0 auto 40px auto; }
          
          .sd-process-wrapper { flex-direction: column; gap: 40px; align-items: center; }
          .sd-process-line { width: 2px; height: 80%; top: 10%; left: 50%; right: auto; margin-left: -1px; }
          .sd-step { width: 100%; }
          
          .sd-cta-title { font-size: 32px; }
          .sd-cta-btns { flex-direction: column; }
        }

        @media (max-width: 480px) {
          .sd-title { font-size: 40px; }
          .sd-offer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sd-page">
        {/* HERO */}
        <section className="sd-hero">
          {/* Background Decorations */}
          <div className="sd-bg-shape sd-bg-left-1"></div>
          <div className="sd-bg-shape sd-bg-left-2"></div>
          <div className="sd-bg-shape sd-bg-center-1"></div>
          <div className="sd-bg-shape sd-bg-right-1"></div>
          <div className="sd-bg-shape sd-bg-right-2"></div>
          <div className="sd-bg-shape sd-bg-right-3"></div>
          <div className="sd-bg-shape sd-bg-right-4"></div>
          <div className="sd-bg-shape sd-bg-glow"></div>
          <div className="sd-bg-dots"></div>
          <div className="sd-bg-plus sd-bg-plus-1">+</div>
          <div className="sd-bg-plus sd-bg-plus-2">+</div>

          <div className="sd-container">
            <div className="sd-breadcrumb">
              <Link to="/">Home</Link> &rarr; <Link to="/services">Services</Link> &rarr; <span>{service.title}</span>
            </div>
            
            <div className="sd-hero-content">
              <div className="sd-hero-text">
                <span className="sd-label">OUR SERVICE</span>
                <h1 className="sd-title">{service.title}</h1>
                <p className="sd-desc">{service.description}</p>
              </div>
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

        {/* FINAL CTA */}
        <section className="sd-cta">
          <div className="sd-container">
            <div className="sd-cta-container">
              <div className="sd-cta-circle sd-cta-circle-1"></div>
              <div className="sd-cta-circle sd-cta-circle-2"></div>
              
              <div className="sd-cta-content">
                <h2 className="sd-cta-title">Ready to Build Something Great?</h2>
                <p className="sd-cta-desc">Let's discuss your project and see how our digital solutions can help your business grow.</p>
                <div className="sd-cta-btns">
                  <Link to="/contact" className="sd-btn-primary">Get Free Quote &rarr;</Link>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="sd-btn-whatsapp">
                    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
