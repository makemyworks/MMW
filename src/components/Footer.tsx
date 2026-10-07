import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Our Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

const servicesLinks = [
  { label: "App Development", path: "/services" },
  { label: "Website Development", path: "/services" },
  { label: "AI Video Generation", path: "/services" },
  { label: "AI Image Generation", path: "/services" },
  { label: "SEO & Google AI SEO", path: "/services" },
  { label: "Digital & Tech Solutions", path: "/services" },
  { label: "Tech Support & More", path: "/services" },
  { label: "Social Media Setup", path: "/services" },
  { label: "Logo Design & Branding", path: "/services" },
  { label: "WhatsApp Automation", path: "/services" },
];

const socialLinks = [
  {
    id: "instagram",
    href: "https://www.instagram.com/make_my_works",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/makemyworks/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    href: "https://x.com/MakeMyWorks",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    href: "https://wa.me/917703977002",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const Footer: React.FC = () => {
  const logoUrl = "/brand/dark-logo.png";
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .mmw-footer {
          width: 100%;
          background-color: #071126;
          color: #FFFFFF;
          padding: 80px 24px 30px;
          font-family: system-ui, -apple-system, sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Decorative Corner Shapes */
        .ft-shape-left {
          position: absolute;
          bottom: -150px;
          left: -150px;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle at center, rgba(11, 42, 104, 0.4) 0%, rgba(22, 119, 242, 0.15) 50%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: floatShapeLeft 15s ease-in-out infinite;
        }

        .ft-shape-right {
          position: absolute;
          bottom: -200px;
          right: -100px;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle at center, rgba(11, 42, 104, 0.5) 0%, rgba(22, 119, 242, 0.1) 60%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: floatShapeRight 18s ease-in-out infinite reverse;
        }

        @keyframes floatShapeLeft {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }

        @keyframes floatShapeRight {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -20px) scale(1.05); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ft-shape-left, .ft-shape-right {
            animation: none;
          }
        }

        .ft-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .ft-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        /* Column 1: Brand */
        .ft-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ft-logo {
          height: 50px;
          object-fit: contain;
          margin-bottom: 24px;
        }

        .ft-desc {
          color: #B8C3D6;
          font-size: 15px;
          line-height: 1.6;
          margin: 0 0 24px 0;
          max-width: 280px;
        }

        .ft-socials {
          display: flex;
          gap: 12px;
        }

        .ft-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #0B2A68;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .ft-social-btn:hover {
          background: #1677F2;
          transform: translateY(-4px);
        }

        /* Column Styles */
        .ft-col-title {
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 10px 0;
        }

        .ft-col-underline {
          width: 32px;
          height: 2px;
          background-color: #1677F2;
          margin-bottom: 20px;
        }

        .ft-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ft-link {
          color: #B8C3D6;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.25s ease;
          display: inline-block;
        }

        .ft-link:hover {
          color: #1677F2;
          transform: translateX(3px);
        }

        /* Contact Details */
        .ft-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ft-contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ft-contact-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #0B2A68;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ft-contact-text {
          color: #B8C3D6;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s;
        }

        a.ft-contact-text:hover {
          color: #1677F2;
        }

        /* Bottom Bar */
        .ft-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
          margin-bottom: 24px;
        }

        .ft-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .ft-copyright {
          color: #B8C3D6;
          font-size: 14px;
          margin: 0;
        }

        .ft-legal {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .ft-legal-link {
          color: #B8C3D6;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s;
        }

        .ft-legal-link:hover {
          color: #1677F2;
        }

        .ft-sep {
          color: rgba(255, 255, 255, 0.15);
        }

        /* Scroll Animations */
        .animate-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .is-visible .animate-up {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 100ms; }
        .delay-2 { transition-delay: 200ms; }
        .delay-3 { transition-delay: 300ms; }
        .delay-4 { transition-delay: 400ms; }

        @media (prefers-reduced-motion: reduce) {
          .animate-up {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ft-grid {
            grid-template-columns: 1fr 1fr;
            row-gap: 50px;
          }
        }

        @media (max-width: 600px) {
          .mmw-footer {
            padding: 60px 24px 24px;
          }
          
          .ft-grid {
            grid-template-columns: 1fr;
            row-gap: 48px;
          }

          .ft-desc {
            max-width: 100%;
          }

          .ft-bottom {
            flex-direction: column;
            text-align: center;
            justify-content: center;
            gap: 12px;
          }

          .ft-legal {
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
          }
        }
      `}</style>

      <footer className="mmw-footer" ref={sectionRef}>
        {/* Abstract Corner Shapes */}
        <div className="ft-shape-left"></div>
        <div className="ft-shape-right"></div>

        <div className={`ft-container ${isVisible ? "is-visible" : ""}`}>
          <div className="ft-grid">
            
            {/* Column 1: Brand */}
            <div className="ft-brand animate-up">
              <img src={logoUrl} alt="Make My Works" className="ft-logo" />
              <p className="ft-desc">
                We build digital solutions that help businesses grow and create real impact.
              </p>
              <div className="ft-socials">
                {socialLinks.map((social) => (
                  <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="ft-social-btn">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="ft-col animate-up delay-1">
              <h4 className="ft-col-title">Quick Links</h4>
              <div className="ft-col-underline"></div>
              <ul className="ft-links">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="ft-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="ft-col animate-up delay-2">
              <h4 className="ft-col-title">Our Services</h4>
              <div className="ft-col-underline"></div>
              <ul className="ft-links">
                {servicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="ft-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div className="ft-col animate-up delay-3">
              <h4 className="ft-col-title">Get in Touch</h4>
              <div className="ft-col-underline"></div>
              <ul className="ft-contact-list">
                <li className="ft-contact-item">
                  <div className="ft-contact-icon"><EmailIcon /></div>
                  <a href="mailto:info@makemyworks.com" className="ft-contact-text">info@makemyworks.com</a>
                </li>
                <li className="ft-contact-item">
                  <div className="ft-contact-icon"><GlobeIcon /></div>
                  <a href="https://www.makemyworks.com" target="_blank" rel="noopener noreferrer" className="ft-contact-text">www.makemyworks.com</a>
                </li>
                <li className="ft-contact-item">
                  <div className="ft-contact-icon"><PhoneIcon /></div>
                  <a href="https://wa.me/917703977002" target="_blank" rel="noopener noreferrer" className="ft-contact-text">WhatsApp Us</a>
                </li>
              </ul>
            </div>

          </div>

          <div className={`ft-divider animate-up delay-4`}></div>

          <div className={`ft-bottom animate-up delay-4`}>
            <p className="ft-copyright">© 2026 Make My Works. All rights reserved.</p>
            <div className="ft-legal">
              <Link to="/privacy" className="ft-legal-link">Privacy Policy</Link>
              <span className="ft-sep">|</span>
              <Link to="/terms" className="ft-legal-link">Terms &amp; Conditions</Link>
              <span className="ft-sep">|</span>
              <Link to="/sitemap" className="ft-legal-link">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;