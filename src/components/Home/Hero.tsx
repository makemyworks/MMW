import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span>MAKE MY WORKS</span>
              <i></i>
            </div>

            <h2 className="hero-tagline">
              <span className="tagline-dark">We Make.</span>{" "}
              <span className="tagline-light">You Grow.</span>
            </h2>

            <h1>
              Ideas Today.
              <br />
              <span className="heading-dark">Greater</span>{" "}
              <span className="heading-light">Possibilities</span>
              <br />
              Tomorrow.
            </h1>

            <p className="hero-description">
              At Make My Works, we help businesses grow with innovative digital solutions across websites, apps, AI, SEO, branding and automation.
            </p>

            <div className="hero-buttons">
              <a
                href="/contact"
                className="primary-button"
              >
                <span>Get Started</span>
                <span className="button-arrow">
                  →
                </span>
              </a>

              <a
                href="/services"
                className="secondary-button"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-marquee-section">
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="marquee-list">
              <span className="marquee-item">✦ App Development</span>
              <span className="marquee-item">✦ Website Development</span>
              <span className="marquee-item">✦ AI Video Generation</span>
              <span className="marquee-item">✦ AI Image Generation</span>
              <span className="marquee-item">✦ SEO & Google AI SEO</span>
              <span className="marquee-item">✦ Digital & Tech Solutions</span>
              <span className="marquee-item">✦ Tech Support & More</span>
              <span className="marquee-item">✦ Social Media Setup</span>
              <span className="marquee-item">✦ Logo Design & Branding</span>
              <span className="marquee-item">✦ WhatsApp Automation</span>
            </div>
            <div className="marquee-list" aria-hidden="true">
              <span className="marquee-item">✦ App Development</span>
              <span className="marquee-item">✦ Website Development</span>
              <span className="marquee-item">✦ AI Video Generation</span>
              <span className="marquee-item">✦ AI Image Generation</span>
              <span className="marquee-item">✦ SEO & Google AI SEO</span>
              <span className="marquee-item">✦ Digital & Tech Solutions</span>
              <span className="marquee-item">✦ Tech Support & More</span>
              <span className="marquee-item">✦ Social Media Setup</span>
              <span className="marquee-item">✦ Logo Design & Branding</span>
              <span className="marquee-item">✦ WhatsApp Automation</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`

        .hero-section {
          position: relative;
          width: 100%;
          min-height: 615px;
          overflow: hidden;
          background: #f4f7fb;
          margin: 0;
          padding: 0;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-image: url("/Images/hero.webp");
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 0.99) 20%,
              rgba(255, 255, 255, 0.96) 31%,
              rgba(255, 255, 255, 0.82) 43%,
              rgba(255, 255, 255, 0.48) 55%,
              rgba(255, 255, 255, 0.10) 72%,
              rgba(255, 255, 255, 0) 100%
            );
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: min(1280px, calc(100% - 64px));
          min-height: 600px;
          margin: 0 auto;
          padding: 0;
          display: flex;
          align-items: flex-start;
        }

        .hero-content {
          width: 650px;
          padding-top: 48px;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 18px 0;
          color: #007bff;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2.5px;
          line-height: 1.4;
          white-space: nowrap;
        }

        .hero-eyebrow i {
          display: block;
          width: 42px;
          height: 2px;
          flex-shrink: 0;
          background: #007bff;
        }

        .hero-tagline {
          margin: 0 0 10px 0;
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 700;
          letter-spacing: 0.5px;
          line-height: 1.2;
        }

        .tagline-dark {
          color: #071126;
        }

        .tagline-light {
          color: #1677F2;
        }

        .hero-content h1 {
          margin: 0;
          padding: 0;
          color: #0f2044;
          font-size: clamp(50px, 4.4vw, 68px);
          line-height: 1.04;
          font-weight: 700;
          letter-spacing: -2.8px;
        }

        .heading-dark {
          color: #0f2044;
        }

        .heading-light {
          color: #007bff;
        }

        .hero-description {
          width: 100%;
          max-width: 580px;
          margin: 20px 0 0 0;
          padding: 0;
          color: #4e5963;
          font-size: 17px;
          line-height: 1.55;
          font-weight: 400;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 23px;
        }

        .primary-button,
        .secondary-button {
          height: 50px;
          padding: 0 27px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
        }

        .primary-button {
          gap: 15px;
          background: #007bff;
          color: #ffffff;
        }

        .button-arrow {
          font-size: 20px;
          line-height: 1;
        }

        .primary-button:hover {
          background: #0f2044;
          transform: translateY(-2px);
        }

        .secondary-button {
          border: 1px solid #0f2044;
          background: rgba(255, 255, 255, 0.78);
          color: #0f2044;
        }

        .secondary-button:hover {
          background: #007bff;
          color: #ffffff;
          border-color: #007bff;
          transform: translateY(-2px);
        }

        @media (max-width: 1000px) {
          .hero-section {
            min-height: 570px;
          }

          .hero-container {
            width: calc(100% - 48px);
            min-height: 570px;
          }

          .hero-content {
            width: 570px;
            padding-top: 42px;
          }

          .hero-content h1 {
            font-size: 54px;
            letter-spacing: -2.3px;
          }

          .hero-tagline {
            font-size: 28px;
            margin-bottom: 8px;
          }

          .hero-description {
            font-size: 16px;
          }
        }

        @media (max-width: 760px) {
          .hero-section {
            min-height: 0;
            height: auto;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: #ffffff;
          }

          .hero-container {
            width: calc(100% - 28px);
            min-height: 0;
            height: auto;
            margin: 0 auto;
            padding: 0 0 26px;
            display: flex;
            flex-direction: column;
          }

          .hero-content {
            order: 1;
            width: 100%;
            padding-top: 26px;
            position: relative;
            z-index: 3;
          }

          .hero-image {
            position: relative;
            inset: auto;
            order: 2;
            display: block;
            width: 100%;
            height: 250px;
            margin: 8px 0 0;
            background-image: url("/Images/hero.webp");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 0;
            z-index: 1;
          }

          .hero-overlay {
            display: none;
          }

          .hero-eyebrow {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 7px;
            margin: 0 0 13px 0;
            font-size: 7.5px;
            line-height: 1.4;
            letter-spacing: 1.25px;
            white-space: normal;
          }

          .hero-eyebrow span {
            max-width: calc(100% - 30px);
          }

          .hero-eyebrow i {
            width: 22px;
            height: 1.5px;
            flex-shrink: 0;
          }

          .hero-content h1 {
            max-width: 100%;
            margin: 0;
            font-size: clamp(32px, 9.5vw, 39px);
            line-height: 1.04;
            letter-spacing: -1.4px;
          }

          .hero-tagline {
            font-size: 24px;
            margin-bottom: 8px;
          }

          .hero-description {
            width: 100%;
            max-width: 100%;
            margin: 15px 0 0 0;
            font-size: 13.5px;
            line-height: 1.52;
          }

          .hero-buttons {
            width: 100%;
            display: flex;
            align-items: stretch;
            gap: 8px;
            margin-top: 19px;
          }

          .primary-button,
          .secondary-button {
            min-width: 0;
            height: 44px;
            padding: 0 13px;
            border-radius: 7px;
            font-size: 11px;
            white-space: nowrap;
          }

          .primary-button {
            flex: 1;
            gap: 8px;
          }

          .secondary-button {
            flex: 1;
          }

          .button-arrow {
            font-size: 16px;
          }
        }

        @media (max-width: 420px) {
          .hero-container {
            width: calc(100% - 26px);
            min-height: 0;
            height: auto;
            padding-bottom: 30px;
          }

          .hero-content {
            padding-top: 24px;
          }

          .hero-content h1 {
            font-size: 34px;
            line-height: 1.05;
            letter-spacing: -1.2px;
          }

          .hero-tagline {
            font-size: 20px;
          }

          .hero-description {
            font-size: 13px;
            line-height: 1.5;
          }

          .hero-buttons {
            gap: 7px;
            margin-top: 18px;
          }

          .primary-button,
          .secondary-button {
            height: 43px;
            padding: 0 10px;
            font-size: 10.5px;
          }

          .hero-stats {
            gap: 15px 8px;
            margin-top: 23px;
          }

          .stat h3 {
            font-size: 21px;
          }

          .stat p {
            font-size: 10px;
          }

          .hero-image {
            height: 220px;
            margin-top: 8px;
            background-position: center;
          }
        }
      
        .services-marquee-section {
          width: 100%;
          height: 65px;
          background-color: #1677F2;
          overflow: hidden;
          display: flex;
          align-items: center;
          position: relative;
        }

        .services-marquee-section,
        .services-marquee-section * {
          box-sizing: border-box;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
        }

        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: scroll-marquee 20s linear infinite;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        .marquee-list {
          display: flex;
          align-items: center;
          padding-right: 40px;
        }

        .marquee-item {
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 600;
          margin-right: 40px;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        @keyframes scroll-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 1000px) {
          .marquee-item {
            font-size: 16px;
            margin-right: 30px;
          }
          .marquee-list {
            padding-right: 30px;
          }
        }

        @media (max-width: 760px) {
          .services-marquee-section {
            height: 60px;
            margin-top: 0;
          }
          .marquee-item {
            font-size: 15px;
            margin-right: 25px;
          }
          .marquee-list {
            padding-right: 25px;
          }
        }
    `}</style>
    </>
  );
};

export default Hero;