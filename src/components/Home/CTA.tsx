import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .cta-section {
          width: 100%;
          background: linear-gradient(135deg, #F7FAFF 0%, #EEF5FF 45%, #E7F0FF 100%);
          border-top: 1px solid rgba(22,119,242,0.06);
          padding: 100px 24px;
          overflow: hidden;
          font-family: system-ui, -apple-system, sans-serif;
          position: relative;
        }

        /* Decorative Elements */
        .decor-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 45%, rgba(22,119,242,0.07) 0%, rgba(22,119,242,0) 55%);
          z-index: 0;
          pointer-events: none;
        }

        .cta-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .cta-label {
          display: inline-block;
          color: #1677F2;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .cta-title {
          margin: 0;
          color: #071126;
          font-size: clamp(36px, 4.5vw, 52px);
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .cta-title span {
          color: #1677F2;
        }

        .cta-description {
          margin: 24px auto 40px;
          color: #667085;
          font-size: 18px;
          line-height: 1.6;
          font-weight: 400;
          max-width: 540px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .cta-primary,
        .cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 56px;
          padding: 0 36px;
          border-radius: 8px;
          font-family: inherit;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
          text-decoration: none;
        }

        .cta-primary {
          background: #1677F2;
          color: #FFFFFF;
          border: none;
          box-shadow: 0 4px 12px rgba(22, 119, 242, 0.2);
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(22, 119, 242, 0.3);
          background: #0B4FC4;
        }

        .cta-secondary {
          background: #FFFFFF;
          color: #1677F2;
          border: 1.5px solid #1677F2;
        }

        .cta-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(22, 119, 242, 0.12);
          background: #F8FAFF;
        }

        /* Animations */
        .animate-on-scroll {
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .anim-label { transform: translateY(10px); }
        .anim-heading { transform: translateY(15px); }
        .anim-desc { transform: translateY(15px); }
        .anim-btns { transform: translateY(15px); }

        .is-visible .animate-on-scroll {
          opacity: 1;
          transform: translateY(0);
        }

        .is-visible .delay-0 { transition-delay: 0ms; }
        .is-visible .delay-1 { transition-delay: 100ms; }
        .is-visible .delay-2 { transition-delay: 200ms; }
        .is-visible .delay-3 { transition-delay: 300ms; }

        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }

        @media (max-width: 600px) {
          .cta-section {
            padding: 80px 20px;
          }

          .cta-title {
            font-size: 32px;
          }

          .cta-description {
            font-size: 16px;
            margin: 20px auto 36px;
          }

          .cta-buttons {
            flex-direction: column;
            gap: 16px;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
          }
        }
      `}</style>
      
      <section className="cta-section" ref={sectionRef}>
        {/* Subtle Decorative Elements */}
        <div className="decor-glow"></div>

        <div className={`cta-container ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="cta-label animate-on-scroll anim-label delay-0">
            LET'S BUILD TOGETHER
          </div>

          <h2 className="cta-title animate-on-scroll anim-heading delay-1">
            Ready to Build Something <span>Great?</span>
          </h2>

          <p className="cta-description animate-on-scroll anim-desc delay-2">
            Tell us what you need and we'll help you turn your idea into a practical digital solution.
          </p>

          <div className="cta-buttons animate-on-scroll anim-btns delay-3">
            <Link to="/contact" className="cta-primary">
              Get Free Quote &rarr;
            </Link>
            
            <a href="https://wa.me/917703977002?text=Hi%20Make%20My%20Works,%20I%20would%20like%20to%20talk%20about%20my%20business." target="_blank" rel="noopener noreferrer" className="cta-secondary">
              WhatsApp Us
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default CTASection;