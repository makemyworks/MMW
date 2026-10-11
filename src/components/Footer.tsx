import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const logoUrl = "/brand/dark-logo.png";
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );



    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .premium-footer {
          width: 100%;
          background-color: #071126;
          color: #FFFFFF;
          padding: 80px 24px 30px;
          font-family: system-ui, -apple-system, sans-serif;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        /* Decorative Shapes */
        .footer-shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22,119,242,0.15) 0%, rgba(22,119,242,0) 70%);
          z-index: -1;
          pointer-events: none;
          transition: transform 3s ease-out;
        }

        .premium-footer.is-visible .shape-left {
          animation: floatShapeLeft 15s ease-in-out infinite alternate;
        }
        
        .premium-footer.is-visible .shape-right {
          animation: floatShapeRight 18s ease-in-out infinite alternate;
        }

        .shape-left {
          width: 600px;
          height: 600px;
          bottom: -300px;
          left: -200px;
        }

        .shape-right {
          width: 700px;
          height: 700px;
          bottom: -400px;
          right: -250px;
          background: radial-gradient(circle, rgba(11,42,104,0.4) 0%, rgba(11,42,104,0) 70%);
        }

        @keyframes floatShapeLeft {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -30px) scale(1.05); }
        }

        @keyframes floatShapeRight {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-40px, -20px) scale(1.1); }
        }

        /* Container & Grid */
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr 1.2fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        /* Column 1: Brand */
        .footer-brand-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .footer-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
          opacity: 0;
          transform: translateY(20px);
        }

        .premium-footer.is-visible .footer-logo {
          animation: fadeUp 0.8s ease forwards;
        }

        .footer-desc {
          color: #B8C3D6;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
          max-width: 320px;
          opacity: 0;
          transform: translateY(20px);
        }

        .premium-footer.is-visible .footer-desc {
          animation: fadeUp 0.8s ease 0.1s forwards;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 10px;
          opacity: 0;
          transform: translateY(20px);
        }

        .premium-footer.is-visible .footer-socials {
          animation: fadeUp 0.8s ease 0.2s forwards;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #0B2A68;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .social-btn:hover {
          background: #1677F2;
          transform: translateY(-4px);
        }

        .social-btn svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        /* Shared Column Styles */
        .footer-col {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(20px);
        }

        .premium-footer.is-visible .footer-col:nth-child(2) { animation: fadeUp 0.8s ease 0.2s forwards; }
        .premium-footer.is-visible .footer-col:nth-child(3) { animation: fadeUp 0.8s ease 0.3s forwards; }
        .premium-footer.is-visible .footer-col:nth-child(4) { animation: fadeUp 0.8s ease 0.4s forwards; }

        .col-heading {
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 8px 0;
        }

        .heading-underline {
          width: 24px;
          height: 2px;
          background: #1677F2;
          margin-bottom: 24px;
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: #B8C3D6;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.25s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #1677F2;
          transform: translateX(3px);
        }

        /* Column 4: Contact */
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #0B2A68;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1677F2;
          flex-shrink: 0;
        }
        
        .contact-icon-wrapper svg {
          width: 14px;
          height: 14px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          font-size: 12px;
          color: #8895A8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .contact-value {
          color: #B8C3D6;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        a.contact-value:hover {
          color: #1677F2;
        }

        /* Divider & Bottom */
        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
          margin-bottom: 24px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
        }

        .premium-footer.is-visible .footer-divider {
          animation: scaleXIn 0.8s ease 0.5s forwards;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          opacity: 0;
        }

        .premium-footer.is-visible .footer-bottom {
          animation: fadeIn 0.8s ease 0.7s forwards;
        }

        .footer-copy {
          color: #8895A8;
          font-size: 14px;
          margin: 0;
        }

        .footer-legal {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 10px 16px;
        }

        .legal-link {
          color: #8895A8;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .legal-link:hover {
          color: #1677F2;
        }

        .legal-sep {
          color: #4A5C7A;
          font-size: 14px;
        }

        /* Keyframes */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleXIn {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-footer.is-visible .footer-shape { animation: none; }
          .premium-footer.is-visible .footer-logo,
          .premium-footer.is-visible .footer-desc,
          .premium-footer.is-visible .footer-socials,
          .premium-footer.is-visible .footer-col,
          .premium-footer.is-visible .footer-divider,
          .premium-footer.is-visible .footer-bottom {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .social-btn:hover, .footer-link:hover { transform: none; }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
            max-width: 100%;
            align-items: center;
            text-align: center;
          }
          .footer-desc {
            max-width: 500px;
          }
        }

        @media (max-width: 640px) {
          .premium-footer {
            padding: 60px 20px 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-brand-col {
            align-items: flex-start;
            text-align: left;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .footer-legal {
            flex-wrap: wrap;
            gap: 12px;
          }
        }
      `}</style>

      <footer className={`premium-footer ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
        <div className="footer-shape shape-left"></div>
        <div className="footer-shape shape-right"></div>

        <div className="footer-container">
          <div className="footer-grid">

            {/* Column 1: Brand */}
            <div className="footer-brand-col">
              <Link to="/">
                <img src={logoUrl} alt="Make My Works" className="footer-logo" />
              </Link>
              <p className="footer-desc">
                We build digital solutions that help businesses grow and create real impact.
              </p>
              <div className="footer-socials">
                <a href="https://www.instagram.com/make_my_works" className="social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61594974970890" className="social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/alphazetaworld/" className="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://x.com/MakeMyWorks" className="social-btn" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="https://wa.me/917703977002" className="social-btn" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="col-heading">Quick Links</h4>
              <div className="heading-underline"></div>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/services" className="footer-link">Services</Link></li>
                <li><Link to="/ourwork" className="footer-link">Our Work</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                <li><a href="https://www.makemyworks.com/links" className="footer-link" target="_blank" rel="noopener noreferrer">Social Links</a></li>
                <li><a href="https://blog.makemyworks.com" className="footer-link" target="_blank" rel="noopener noreferrer">Blog</a></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col">
              <h4 className="col-heading">Our Services</h4>
              <div className="heading-underline"></div>
              <ul className="footer-links">
                <li><Link to="/services/app-development" className="footer-link">App Development</Link></li>
                <li><Link to="/services/website-development" className="footer-link">Website Development</Link></li>
                <li><Link to="/services/ai-video-generation" className="footer-link">AI Video Generation</Link></li>
                <li><Link to="/services/ai-image-generation" className="footer-link">AI Image Generation</Link></li>
                <li><Link to="/services/seo-ai-seo" className="footer-link">SEO & Google AI SEO</Link></li>
                <li><Link to="/services/digital-tech-solutions" className="footer-link">Digital & Tech Solutions</Link></li>
                <li><Link to="/services/tech-support" className="footer-link">Tech Support & More</Link></li>
                <li><Link to="/services/social-media-setup" className="footer-link">Social Media Setup</Link></li>
                <li><Link to="/services/logo-branding" className="footer-link">Logo Design & Branding</Link></li>
                <li><Link to="/services/whatsapp-automation" className="footer-link">WhatsApp Automation</Link></li>
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div className="footer-col">
              <h4 className="col-heading">Get in Touch</h4>
              <div className="heading-underline"></div>

              <ul className="contact-list">
                <li className="contact-item">
                  <div className="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M2 4l10 8 10-8"></path></svg>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <a href="mailto:info@makemyworks.com" className="contact-value">info@makemyworks.com</a>
                  </div>
                </li>

                <li className="contact-item">
                  <div className="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Website</span>
                    <a href="https://www.makemyworks.com" target="_blank" rel="noopener noreferrer" className="contact-value">www.makemyworks.com</a>
                  </div>
                </li>

                <li className="contact-item">
                  <div className="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">WhatsApp</span>
                    <a href="https://wa.me/917703977002" target="_blank" rel="noopener noreferrer" className="contact-value">WhatsApp Us</a>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copy">© 2026 Make My Works. All rights reserved.</p>
            <nav className="footer-legal" aria-label="Legal and help links">
              <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
              <Link to="/terms-conditions" className="legal-link">Terms & Conditions</Link>
              <Link to="/cookie-policy" className="legal-link">Cookie Policy</Link>
              <Link to="/refund-cancellation" className="legal-link">Refunds & Cancellations</Link>
              <Link to="/disclaimer" className="legal-link">Disclaimer</Link>
              <Link to="/data-deletion" className="legal-link">Data Requests</Link>
              <Link to="/accessibility" className="legal-link">Accessibility</Link>
              <Link to="/faq" className="legal-link">FAQs</Link>
              <Link to="/sitemap" className="legal-link">Sitemap</Link>
            </nav>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;