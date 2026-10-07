import React, { useEffect } from "react";
import { Link } from "react-router-dom";

type ServiceData = {
  id: string;
  category: string;
  title: string;
  description: string;
};

const servicesList: ServiceData[] = [
  {
    id: "app-development",
    category: "BUILD",
    title: "App Development",
    description: "Modern mobile applications designed around your business and users.",
  },
  {
    id: "website-development",
    category: "BUILD",
    title: "Website Development",
    description: "Fast, responsive and professional websites built for a strong digital presence.",
  },
  {
    id: "ai-video-generation",
    category: "CREATE",
    title: "AI Video Generation",
    description: "Create engaging AI-powered videos for marketing, social media and business content.",
  },
  {
    id: "ai-image-generation",
    category: "CREATE",
    title: "AI Image Generation",
    description: "Generate high-quality creative visuals for brands, products, campaigns and social media.",
  },
  {
    id: "seo-ai-seo",
    category: "GROW",
    title: "SEO & Google AI SEO",
    description: "Improve search visibility and optimize your business for traditional and AI-powered search.",
  },
  {
    id: "digital-tech-solutions",
    category: "AUTOMATE",
    title: "Digital & Tech Solutions",
    description: "Custom digital solutions that solve business problems and improve everyday workflows.",
  },
  {
    id: "tech-support",
    category: "SUPPORT",
    title: "Tech Support & More",
    description: "Reliable technical support to keep your digital products and systems running smoothly.",
  },
  {
    id: "social-media-setup",
    category: "GROW",
    title: "Social Media Setup",
    description: "Set up and optimize your social media presence with a consistent professional identity.",
  },
  {
    id: "logo-branding",
    category: "BRAND",
    title: "Logo Design & Branding",
    description: "Create a memorable logo and visual identity that represents your business professionally.",
  },
  {
    id: "whatsapp-automation",
    category: "AUTOMATE",
    title: "WhatsApp Automation",
    description: "Automate customer communication, enquiries and workflows through WhatsApp.",
  },
];

const serviceIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .srv-page {
          font-family: system-ui, -apple-system, sans-serif;
          color: #0B1B3A;
          background: #FAFCFF;
          overflow: hidden;
        }

        .srv-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero */
        .srv-hero {
          position: relative;
          padding: 80px 0 120px;
          background: radial-gradient(circle at 70% 30%, rgba(238,245,255,0.8) 0%, rgba(255,255,255,0) 60%);
        }

        .srv-hero-content {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          align-items: center;
        }

        .srv-label {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-size: 13px;
          font-weight: 700;
          color: #147FF5;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .srv-label::before, .srv-label::after {
          content: "";
          width: 32px;
          height: 2px;
          background: #147FF5;
          border-radius: 2px;
        }

        .srv-title {
          font-size: 58px;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; /* Match serif style from screenshot */
          font-weight: 800;
          color: #0B1B3A;
          line-height: 1.15;
          margin: 0 0 24px 0;
          letter-spacing: -1px;
          animation: srvFadeUp 0.6s ease forwards;
        }

        .srv-title span {
          color: #147FF5;
        }

        .srv-desc {
          font-size: 18px;
          color: #50607A;
          line-height: 1.6;
          margin: 0 0 40px 0;
          max-width: 480px;
          animation: srvFadeUp 0.6s ease 0.1s forwards;
          opacity: 0;
        }

        /* Hero Visual */
        .srv-visual-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          animation: srvFloat 8s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .srv-visual-image {
          max-width: 110%;
          height: auto;
          object-fit: contain;
          z-index: 2;
          transform: translateX(5%);
        }

        /* Intro */
        .srv-intro {
          text-align: center;
          padding: 40px 0 80px;
        }
        .srv-intro .srv-label { padding-left: 0; }
        .srv-intro .srv-label::before { display: none; }
        .srv-intro-title { font-size: 36px; font-weight: 700; margin: 0 0 16px 0; }
        .srv-intro-desc { font-size: 16px; color: #50607A; max-width: 600px; margin: 0 auto; }

        /* Grid */
        .srv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding-bottom: 100px;
        }

        .srv-card {
          background: #FFFFFF;
          border: 1px solid #EEF5FF;
          border-radius: 20px;
          padding: 32px 28px;
          box-shadow: 0 10px 30px rgba(11,27,58,0.03);
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(20px);
          animation: srvFadeUp 0.6s ease forwards;
        }

        .srv-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(11,27,58,0.06);
          border-color: #147FF5;
        }

        .srv-card-num {
          position: absolute;
          top: 28px;
          right: 28px;
          font-size: 56px;
          font-family: var(--font-sans), sans-serif;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 2px #CBE0FF;
          line-height: 1;
          transition: -webkit-text-stroke 0.3s ease;
        }
        .srv-card:hover .srv-card-num {
          -webkit-text-stroke: 2px #147FF5;
        }

        .srv-card-icon {
          width: 64px;
          height: 64px;
          background: #EEF5FF;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #147FF5;
          margin-bottom: 32px;
          transition: all 0.3s ease;
        }
        .srv-card:hover .srv-card-icon {
          background: #147FF5;
          color: #FFFFFF;
          transform: scale(1.1);
        }
        .srv-card-icon svg { width: 28px; height: 28px; }

        .srv-card-cat {
          font-size: 10px;
          font-weight: 700;
          color: #147FF5;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .srv-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #0B1B3A;
          margin: 0 0 12px 0;
        }

        .srv-card-desc {
          font-size: 14px;
          color: #6B7A90;
          line-height: 1.5;
          margin: 0 0 24px 0;
          flex: 1;
        }

        .srv-card-link {
          font-size: 14px;
          font-weight: 600;
          color: #147FF5;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .srv-card-link span { transition: transform 0.3s ease; }
        .srv-card:hover .srv-card-link span { transform: translateX(4px); }

        @media (min-width: 1025px) {
          .srv-card-centered {
            grid-column: 2;
          }
        }

        /* Final CTA */
        .srv-cta {
          padding: 60px 0 100px;
        }

        .srv-cta-box {
          background: #EEF5FF;
          border-radius: 30px;
          padding: 80px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .srv-cta-box::before, .srv-cta-box::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(20,127,245,0.1) 0%, rgba(20,127,245,0) 70%);
          pointer-events: none;
        }
        .srv-cta-box::before { top: -100px; left: -100px; }
        .srv-cta-box::after { bottom: -100px; right: -100px; }

        .srv-cta-label {
          font-size: 12px;
          font-weight: 700;
          color: #147FF5;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }

        .srv-cta-title {
          font-size: 40px;
          font-weight: 800;
          margin: 0 0 20px 0;
        }

        .srv-cta-desc {
          font-size: 16px;
          color: #50607A;
          max-width: 500px;
          margin: 0 auto 40px auto;
        }

        .srv-cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .srv-btn-primary {
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
        .srv-btn-primary:hover {
          background: #147FF5;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(20,127,245,0.25);
        }

        .srv-btn-whatsapp {
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
        .srv-btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .srv-btn-whatsapp svg {
          width: 20px; height: 20px; fill: currentColor;
        }

        /* Animations */
        @keyframes srvFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes srvFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .srv-hero-content { grid-template-columns: 1fr; text-align: center; }
          .srv-label::before, .srv-label::after { display: none; }
          .srv-label { padding-left: 0; }
          .srv-desc { margin: 0 auto 40px auto; }
          .srv-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .srv-title { font-size: 40px; }
          .srv-grid { grid-template-columns: 1fr; }
          .srv-cta-title { font-size: 32px; }
          .srv-cta-btns { flex-direction: column; }
        }
      `}</style>

      <div className="srv-page">
        {/* HERO */}
        <section className="srv-hero">
          <div className="srv-container">
            <div className="srv-hero-content">
              <div>
                <span className="srv-label">OUR SERVICES</span>
                <h1 className="srv-title">
                  Digital Solutions Built<br />
                  for Your <span>Growth</span>
                </h1>
                <p className="srv-desc">We build practical digital solutions that help businesses<br/>grow, connect and stand out.</p>
              </div>
              <div className="srv-visual-wrapper">
                <img 
                  src="/Images/hero section.webp" 
                  alt="Digital Solutions Built for Your Growth" 
                  className="srv-visual-image"
                  onError={(e) => {
                    // Fallback to digitalhero.png if hero section.webp doesn't work
                    (e.target as HTMLImageElement).src = '/Images/digitalhero.png';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="srv-intro">
          <div className="srv-container">
            <span className="srv-label">WHAT WE DO</span>
            <h2 className="srv-intro-title">Everything You Need to Grow Digitally</h2>
            <p className="srv-intro-desc">From development to AI, SEO and automation, we help businesses build, improve and grow.</p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="srv-container">
          <div className="srv-grid">
            {servicesList.map((service, idx) => {
              const isCentered = idx === 9;
              return (
                <div 
                  key={service.id} 
                  className={`srv-card ${isCentered ? 'srv-card-centered' : ''}`}
                  style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
                >
                  <div className="srv-card-num">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="srv-card-icon">
                    {serviceIcons[idx % serviceIcons.length]}
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div className="srv-card-cat">{service.category}</div>
                    <h3 className="srv-card-title">{service.title}</h3>
                    <p className="srv-card-desc">{service.description}</p>
                    <div>
                      <Link to={`/services/${service.id}`} className="srv-card-link">
                        Learn More <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


      </div>
    </>
  );
}