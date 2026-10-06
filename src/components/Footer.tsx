import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  services: [
    { label: "Web & App Development", path: "/web-app-development" },
    { label: "AI Video & Content", path: "/ai-video" },
    { label: "Google SEO & AI Search", path: "/seo-ai" },
    { label: "Digital Solution", path: "/services" },
  ],
};

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/makemyworks/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://x.com/MakeMyWorks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/make_my_works?stkn=YjE2MnR5M2VyZWRw",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/917703977002",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const logoUrl = "/Images/logo.png";
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="ft-sticky-social">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="ft-social-btn"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <footer
        ref={sectionRef}
        className={`ft-footer${isVisible ? " ft-visible" : ""}`}
      >
        <div className="ft-container">

          <div className="ft-top-section">

            <div className="ft-brand-column">

              <img
                src={logoUrl}
                alt="Alpha Zeta Logo"
                className="ft-logo"
              />

              <p className="ft-description">
                Alpha Zeta World is a hybrid technology company and digital
                product studio. We build, launch, and monetize proprietary
                digital products.
              </p>

            </div>

            <div className="ft-links-grid">

              <div className="ft-link-column">
                <h4 className="ft-column-title">Company</h4>
                <div className="ft-title-underline"></div>
                <ul className="ft-link-list">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link to={link.path} className="ft-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ft-link-column">
                <h4 className="ft-column-title">Services</h4>
                <div className="ft-title-underline"></div>
                <ul className="ft-link-list">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link to={link.path} className="ft-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ Contact Column — Address / Email / WhatsApp */}
              <div className="ft-link-column">
                <h4 className="ft-column-title">Contact</h4>
                <div className="ft-title-underline"></div>
                <ul className="ft-link-list">

                  <li className="ft-contact-item">
                    <span className="ft-contact-label">Address:</span>
                    <span className="ft-contact-value">
                      Hitech City, Madhapur, Hyderabad, Telangana 500081
                    </span>
                  </li>

                  <li className="ft-contact-item">
                    <span className="ft-contact-label">Email:</span>
                    <a
                      href="mailto:info@makemyworks.com"
                      className="ft-contact-link"
                    >
                      info@makemyworks.com
                    </a>
                  </li>

                  <li className="ft-contact-item">
                    <span className="ft-contact-label">WhatsApp:</span>
                    <a
                      href="https://wa.me/917703977002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ft-contact-link"
                    >
                      +91 77039 77002
                    </a>
                  </li>

                </ul>
              </div>

            </div>
          </div>

          <div className="ft-divider"></div>

          <div className="ft-bottom-section">

            <p className="ft-copyright">
              @2026 Make My Work. All Rights Reserved.
            </p>

            <div className="ft-legal-links">
              <a href="#" className="ft-legal-link">Privacy Policy</a>
              <span className="ft-separator">|</span>
              <a href="#" className="ft-legal-link">Terms &amp; Conditions</a>
              <span className="ft-separator">|</span>
              <a href="#" className="ft-legal-link">Cookie Policy</a>
            </div>

          </div>

        </div>

        <style>{`
          * {
            box-sizing: border-box;
          }

          .ft-sticky-social {
            position: fixed;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 12px;
            z-index: 9999;
          }

          .ft-sticky-social .ft-social-btn {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #ffffff;
            border: 1px solid rgba(0, 123, 255, 0.35);
            color: #007BFF;
            text-decoration: none;
            box-shadow:
              0 6px 14px rgba(15, 32, 68, 0.18),
              0 2px 6px rgba(0, 123, 255, 0.12);
            transition:
              background 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .ft-sticky-social .ft-social-btn:hover {
            background: #007BFF;
            color: #ffffff;
            border-color: #007BFF;
            transform: translateX(-6px) scale(1.1);
            box-shadow:
              0 10px 22px -4px rgba(0, 123, 255, 0.55),
              0 4px 10px -2px rgba(0, 123, 255, 0.35);
          }

          .ft-sticky-social .ft-social-btn:hover svg {
            animation: ftIconBounce 0.6s ease;
          }

          @keyframes ftIconBounce {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-4px); }
          }

          .ft-footer {
            width: 100%;
            background: #0F2044;
            color: #ffffff;
            padding: 5rem 2rem 2.5rem;
            font-family:
              system-ui,
              -apple-system,
              Arial,
              Helvetica,
              sans-serif;
            position: relative;
            overflow: hidden;
          }

          .ft-footer::before {
            content: "";
            position: absolute;
            top: -50%;
            right: -10%;
            width: 60%;
            height: 200%;
            background:
              radial-gradient(
                circle,
                rgba(0, 123, 255, 0.10) 0%,
                rgba(0, 123, 255, 0.04) 40%,
                transparent 70%
              );
            pointer-events: none;
            animation: ftGlowFloat 12s ease-in-out infinite;
          }

          .ft-container {
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
            position: relative;
            z-index: 2;
          }

          .ft-top-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 4rem;
            margin-bottom: 3.5rem;
          }

          .ft-brand-column {
            flex: 1 1 280px;
            max-width: 370px;
            display: flex;
            flex-direction: column;
            gap: 1.4rem;
            align-items: center;
            text-align: center;
          }

          .ft-logo {
            height: 70px;
            width: auto;
            max-width: 100%;
            object-fit: contain;
            display: block;
            opacity: 0;
            filter: drop-shadow(0 4px 12px rgba(0, 123, 255, 0.25));
            transition: transform 0.4s ease, filter 0.4s ease;
          }

          .ft-logo:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 8px 20px rgba(0, 123, 255, 0.45));
          }

          .ft-description {
            font-size: 0.92rem;
            line-height: 1.65;
            color: #B8C4D6;
            margin: 0;
            opacity: 0;
          }

          .ft-email-link {
            font-size: 0.98rem;
            font-weight: 600;
            color: #007BFF;
            text-decoration: none;
            position: relative;
            opacity: 0;
            transition: color 0.3s ease;
          }

          .ft-email-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 0;
            height: 1.5px;
            background: #007BFF;
            transition: width 0.3s ease;
          }

          .ft-email-link:hover {
            color: #4DA3FF;
          }

          .ft-email-link:hover::after {
            width: 100%;
          }

          .ft-links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 3rem;
            flex: 2 1 460px;
          }

          .ft-link-column {
            display: flex;
            flex-direction: column;
          }

          .ft-column-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 0.5rem 0;
            opacity: 0;
          }

          .ft-title-underline {
            width: 1.9rem;
            height: 2px;
            background: linear-gradient(90deg, #007BFF, #66B2FF);
            margin-bottom: 1.1rem;
            transform-origin: left center;
            transform: scaleX(0);
            opacity: 0;
          }

          .ft-link-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
          }

          .ft-link {
            font-size: 0.9rem;
            color: #B8C4D6;
            text-decoration: none;
            position: relative;
            opacity: 0;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .ft-link::before {
            content: "";
            position: absolute;
            left: -12px;
            top: 50%;
            width: 0;
            height: 1.5px;
            background: #007BFF;
            transform: translateY(-50%);
            transition: width 0.3s ease;
          }

          .ft-link:hover {
            color: #007BFF;
            transform: translateX(6px);
          }

          .ft-link:hover::before {
            width: 8px;
          }

          .ft-contact-item {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            line-height: 1.55;
            opacity: 0;
          }

          .ft-contact-label {
            color: #ffffff;
            font-weight: 700;
            font-size: 0.9rem;
          }

          .ft-contact-value {
            color: #B8C4D6;
            font-size: 0.9rem;
          }

          .ft-contact-link {
            color: #B8C4D6;
            font-size: 0.9rem;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .ft-contact-link:hover {
            color: #007BFF;
            text-decoration: underline;
          }

          .ft-divider {
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.12);
            margin-bottom: 2rem;
            transform-origin: center;
            transform: scaleX(0);
            opacity: 0;
          }

          .ft-bottom-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .ft-copyright {
            font-size: 0.85rem;
            color: #8895A8;
            margin: 0;
            opacity: 0;
          }

          .ft-legal-links {
            display: flex;
            align-items: center;
            gap: 1rem;
            opacity: 0;
          }

          .ft-legal-link {
            font-size: 0.85rem;
            color: #B8C4D6;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .ft-legal-link:hover {
            color: #007BFF;
          }

          .ft-separator {
            color: #4A5C7A;
            font-size: 0.85rem;
          }

          /* Animations */
          .ft-footer.ft-visible .ft-logo {
            animation: ftLogoIn 0.9s cubic-bezier(0.34, 1.4, 0.64, 1) 0s forwards;
          }

          .ft-footer.ft-visible .ft-description {
            animation: ftBlurIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
          }

          .ft-footer.ft-visible .ft-email-link {
            animation: ftFadeUp 0.7s ease 0.4s forwards;
          }

          .ft-footer.ft-visible .ft-column-title {
            animation: ftSlideDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .ft-footer.ft-visible .ft-link-column:nth-child(1) .ft-column-title { animation-delay: 0.4s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(2) .ft-column-title { animation-delay: 0.5s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(3) .ft-column-title { animation-delay: 0.6s; }

          .ft-footer.ft-visible .ft-title-underline {
            animation: ftLineGrow 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .ft-footer.ft-visible .ft-link-column:nth-child(1) .ft-title-underline { animation-delay: 0.5s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(2) .ft-title-underline { animation-delay: 0.6s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(3) .ft-title-underline { animation-delay: 0.7s; }

          .ft-footer.ft-visible .ft-link,
          .ft-footer.ft-visible .ft-contact-item {
            animation: ftFadeUp 0.6s ease forwards;
          }

          .ft-footer.ft-visible .ft-link-column:nth-child(1) .ft-link-list li:nth-child(1) .ft-link { animation-delay: 0.6s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(1) .ft-link-list li:nth-child(2) .ft-link { animation-delay: 0.66s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(1) .ft-link-list li:nth-child(3) .ft-link { animation-delay: 0.72s; }

          .ft-footer.ft-visible .ft-link-column:nth-child(2) .ft-link-list li:nth-child(1) .ft-link { animation-delay: 0.7s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(2) .ft-link-list li:nth-child(2) .ft-link { animation-delay: 0.76s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(2) .ft-link-list li:nth-child(3) .ft-link { animation-delay: 0.82s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(2) .ft-link-list li:nth-child(4) .ft-link { animation-delay: 0.88s; }

          .ft-footer.ft-visible .ft-link-column:nth-child(3) .ft-link-list li:nth-child(1) .ft-contact-item { animation-delay: 0.8s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(3) .ft-link-list li:nth-child(2) .ft-contact-item { animation-delay: 0.88s; }
          .ft-footer.ft-visible .ft-link-column:nth-child(3) .ft-link-list li:nth-child(3) .ft-contact-item { animation-delay: 0.96s; }

          .ft-footer.ft-visible .ft-divider {
            animation: ftDividerGrow 1s cubic-bezier(0.22, 1, 0.36, 1) 1s forwards;
          }

          .ft-footer.ft-visible .ft-copyright {
            animation: ftFadeUp 0.7s ease 1.15s forwards;
          }

          .ft-footer.ft-visible .ft-legal-links {
            animation: ftFadeUp 0.7s ease 1.25s forwards;
          }

          @keyframes ftLogoIn {
            0% { opacity: 0; transform: scale(0.6) translateY(-15px); }
            70% { opacity: 1; transform: scale(1.08) translateY(0); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }

          @keyframes ftBlurIn {
            from { opacity: 0; transform: translateY(18px); filter: blur(5px); }
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
          }

          @keyframes ftSlideDown {
            from { opacity: 0; transform: translateY(-14px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes ftLineGrow {
            from { transform: scaleX(0); opacity: 0; }
            to { transform: scaleX(1); opacity: 1; }
          }

          @keyframes ftFadeUp {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes ftDividerGrow {
            from { transform: scaleX(0); opacity: 0; }
            to { transform: scaleX(1); opacity: 1; }
          }

          @keyframes ftGlowFloat {
            0%, 100% { transform: translate(0, 0); opacity: 0.9; }
            50% { transform: translate(-25px, 25px); opacity: 1; }
          }

          /* Tablet */
          @media (max-width: 900px) {
            .ft-footer {
              padding: 4rem 1.5rem 2rem;
            }

            .ft-top-section {
              gap: 3rem;
              margin-bottom: 2.75rem;
            }

            .ft-links-grid {
              gap: 2.5rem;
            }

            .ft-sticky-social {
              right: 12px;
              gap: 10px;
            }

            .ft-sticky-social .ft-social-btn {
              width: 40px;
              height: 40px;
            }
          }

          /* Mobile */
          @media (max-width: 700px) {
            .ft-footer {
              padding: 3rem 1.25rem 1.75rem;
              background: #0F2044 !important;
            }

            .ft-footer::before {
              display: none !important;
            }

            .ft-sticky-social {
              right: 8px;
              gap: 8px;
            }

            .ft-sticky-social .ft-social-btn {
              width: 36px;
              height: 36px;
              box-shadow: 0 4px 10px rgba(15, 32, 68, 0.2);
            }

            .ft-sticky-social .ft-social-btn svg {
              width: 16px;
              height: 16px;
            }

            .ft-top-section {
              flex-direction: column;
              gap: 0;
              margin-bottom: 1.75rem;
              align-items: center;
            }

            .ft-brand-column {
              flex: none;
              max-width: 100%;
              width: 100%;
              gap: 0.7rem;
              margin: 0;
              padding: 0;
            }

            .ft-logo {
              height: 52px;
            }

            .ft-description {
              font-size: 0.85rem;
              line-height: 1.55;
              margin: 0;
            }

            .ft-links-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
              width: 100%;
              max-width: 100%;
              margin-top: 1.5rem;
              flex: none;
            }

            .ft-link-column {
              align-items: center;
              text-align: center;
            }

            .ft-title-underline {
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 0.65rem;
            }

            .ft-link-list {
              gap: 0.55rem;
            }

            .ft-link,
            .ft-contact-label,
            .ft-contact-value,
            .ft-contact-link {
              font-size: 0.85rem;
            }

            .ft-contact-item {
              justify-content: center;
              text-align: center;
            }

            .ft-divider {
              margin-bottom: 1.25rem;
              margin-top: 1.25rem;
            }

            .ft-bottom-section {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 0.7rem;
            }

            .ft-legal-links {
              flex-wrap: wrap;
              justify-content: center;
              gap: 0.5rem;
            }
          }

          /* Small Mobile */
          @media (max-width: 420px) {
            .ft-footer {
              padding: 2.25rem 1rem 1.25rem;
              background: #0F2044 !important;
            }

            .ft-logo {
              height: 46px;
            }

            .ft-description {
              font-size: 0.78rem;
              line-height: 1.5;
            }

            .ft-links-grid {
              margin-top: 1.25rem;
              gap: 1.25rem;
            }

            .ft-link-list {
              gap: 0.5rem;
            }

            .ft-sticky-social {
              right: 6px;
              gap: 6px;
            }

            .ft-sticky-social .ft-social-btn {
              width: 32px;
              height: 32px;
            }

            .ft-sticky-social .ft-social-btn svg {
              width: 14px;
              height: 14px;
            }

            .ft-column-title {
              font-size: 0.95rem;
            }

            .ft-copyright,
            .ft-legal-link,
            .ft-separator {
              font-size: 0.75rem;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .ft-footer *,
            .ft-footer *::before,
            .ft-footer *::after {
              animation: none !important;
              transition: none !important;
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;