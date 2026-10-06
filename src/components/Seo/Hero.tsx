import React from "react";

const DigitalSolutionsHero: React.FC = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .digital-hero {
          width: 100%;
          background: #ffffff;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .digital-hero-container {
          width: 100%;
          max-width: 1440px;
          min-height: 520px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 48% 52%;
          align-items: center;
          position: relative;
        }

        .digital-hero-content {
          padding: 50px 30px 50px 8%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 5;
          background: #ffffff;
        }

        .eyebrow {
          font-size: 15px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #007BFF;
          margin-bottom: 18px;
        }

        .digital-hero h1 {
          margin: 0;
          font-size: clamp(44px, 4.3vw, 64px);
          line-height: 1;
          letter-spacing: -2.5px;
          font-weight: 700;
          color: #0F2044;
        }

        .digital-hero h1 .blue-text {
          color: #007BFF;
        }

        .hero-description {
          margin: 24px 0 28px;
          font-size: 15px;
          line-height: 1.55;
          color: #4E5963;
          font-weight: 400;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 2px;
        }

        .primary-btn,
        .secondary-btn {
          height: 46px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          border-radius: 5px;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .primary-btn {
          min-width: 185px;
          background: #007BFF;
          color: #ffffff;
        }

        .primary-btn:hover {
          background: #0F2044;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 123, 255, 0.18);
        }

        .secondary-btn {
          min-width: 115px;
          background: #ffffff;
          color: #0F2044;
          border: 1px solid #D6E4F0;
        }

        .secondary-btn:hover {
          background: #F4F7FB;
          transform: translateY(-2px);
        }

        .btn-arrow {
          font-size: 17px;
          line-height: 1;
        }

        .digital-hero-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 40px 40px 20px;
        }

        .digital-hero-image-card {
          width: 100%;
          height: 100%;
          max-width: 680px;
          max-height: 440px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(15, 32, 68, 0.10);
          border: 1px solid #E6EEF7;
          background-color: #F4F7FB;
        }

        .digital-hero-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* --- Trusted Partners Section --- */
        .trusted-partners {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid #E6EEF7;
          padding: 14px 0 16px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .trusted-partners-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 8%;
        }

        .trusted-label {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.6px;
          color: #007BFF;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .trusted-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px 85px;
        }

        .trusted-logo-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 15px;
          font-weight: 700;
          color: #0F2044;
          opacity: 0.85;
          transition: opacity 0.25s ease, transform 0.25s ease;
          cursor: default;
          flex-shrink: 0;
        }

        .trusted-logo-item:hover {
          opacity: 1;
          transform: translateY(-1px);
        }

        .trusted-logo-item svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .trusted-logo-item .logo-text {
          font-size: 14px;
          letter-spacing: -0.2px;
        }

        @media (max-width: 1100px) {
          .digital-hero-container {
            grid-template-columns: 50% 50%;
            min-height: 480px;
          }

          .digital-hero-content {
            padding-left: 6%;
            padding-top: 45px;
            padding-bottom: 45px;
          }

          .digital-hero h1 {
            font-size: 46px;
          }

          .hero-description {
            font-size: 14px;
          }

          .digital-hero-image-wrap {
            padding: 30px 30px 30px 15px;
          }

          .digital-hero-image-card {
            max-height: 400px;
          }

          .trusted-logos {
            gap: 16px 50px;
          }

          .trusted-logo-item {
            font-size: 14px;
          }

          .trusted-logo-item .logo-text {
            font-size: 13px;
          }

          .trusted-logo-item svg {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 768px) {
          .digital-hero-container {
            display: flex;
            flex-direction: column;
            min-height: auto;
          }

          .digital-hero-content {
            width: 100%;
            padding: 40px 22px 25px;
            order: 1;
          }

          .eyebrow {
            font-size: 12px;
            letter-spacing: 1.2px;
            margin-bottom: 14px;
          }

          .digital-hero h1 {
            font-size: 38px;
            line-height: 1.05;
            letter-spacing: -1.5px;
          }

          .hero-description {
            font-size: 14px;
            line-height: 1.55;
            margin: 18px 0 22px;
          }

          .desktop-break {
            display: none;
          }

          .hero-buttons {
            gap: 9px;
            flex-wrap: wrap;
          }

          .primary-btn,
          .secondary-btn {
            height: 44px;
            font-size: 12px;
            padding: 0 16px;
          }

          .primary-btn {
            min-width: 175px;
          }

          .secondary-btn {
            min-width: 105px;
          }

          .digital-hero-image-wrap {
            order: 2;
            width: 100%;
            padding: 5px 22px 40px;
          }

          .digital-hero-image-card {
            max-height: 300px;
            border-radius: 12px;
          }

          /* --- Trusted Partners as Slider on Mobile --- */
          .trusted-partners {
            padding: 12px 0 14px;
          }

          .trusted-partners-container {
            padding: 0;
          }

          .trusted-label {
            font-size: 10px;
            letter-spacing: 1.2px;
            margin-bottom: 10px;
            padding: 0 22px;
          }

          .trusted-logos {
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
            gap: 30px;

            overflow-x: auto;
            overflow-y: hidden;

            padding: 4px 22px 10px;

            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .trusted-logos::-webkit-scrollbar {
            display: none;
          }

          .trusted-logo-item {
            scroll-snap-align: center;
            flex: 0 0 auto;
            font-size: 13px;
            gap: 6px;
          }

          .trusted-logo-item .logo-text {
            font-size: 12px;
          }

          .trusted-logo-item svg {
            width: 17px;
            height: 17px;
          }
        }

        @media (max-width: 480px) {
          .digital-hero-content {
            padding: 32px 18px 20px;
          }

          .digital-hero h1 {
            font-size: 32px;
            letter-spacing: -1.2px;
          }

          .hero-description {
            font-size: 13px;
          }

          .hero-buttons {
            gap: 8px;
          }

          .primary-btn {
            min-width: 170px;
          }

          .secondary-btn {
            min-width: 100px;
          }

          .digital-hero-image-wrap {
            padding: 5px 18px 32px;
          }

          .digital-hero-image-card {
            max-height: 240px;
          }

          .trusted-partners {
            padding: 10px 0 12px;
          }

          .trusted-label {
            font-size: 10px;
            padding: 0 18px;
          }

          .trusted-logos {
            gap: 24px;
            padding: 4px 18px 10px;
          }

          .trusted-logo-item {
            font-size: 12px;
            gap: 5px;
          }

          .trusted-logo-item .logo-text {
            font-size: 11px;
          }

          .trusted-logo-item svg {
            width: 15px;
            height: 15px;
          }
        }
      `}</style>

      <section className="digital-hero">
        <div className="digital-hero-container">
          <div className="digital-hero-content">
            <div className="eyebrow">DIGITAL SOLUTIONS</div>

            <h1>
              Turn Ideas Into
              <br />
              Measurable{" "}
              <span className="blue-text">Growth</span>
            </h1>

            <p className="hero-description">
              We create data-driven digital solutions that help
              <br className="desktop-break" />
              businesses grow, engage customers and stay ahead
              <br className="desktop-break" />
              in the digital world.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="primary-btn">
                Get a Free Consultation
                <span className="btn-arrow">→</span>
              </a>

              <a href="#work" className="secondary-btn">
                Our Work
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="digital-hero-image-wrap">
            <div className="digital-hero-image-card">
              <img
                src="/Images/seohero.png"
                alt="Digital solutions dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Trusted Partners Section --- */}
      <section className="trusted-partners">
        <div className="trusted-partners-container">
          <div className="trusted-label">Trusted Across Platforms</div>

          <div className="trusted-logos">
            {/* Google */}
            <div className="trusted-logo-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="logo-text">Google</span>
            </div>

            {/* ChatGPT */}
            <div className="trusted-logo-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .75 7.09 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A6.07 6.07 0 0 0 19.02 19.8a5.98 5.98 0 0 0 4-2.9 6.05 6.05 0 0 0-.74-7.08zm-9.18 12.1a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68V10.7l2.02 1.17a.07.07 0 0 1 .04.05v5.62a4.5 4.5 0 0 1-4.49 4.48zm-9.66-4.12a4.48 4.48 0 0 1-.54-3.01l.14.09 4.78 2.76a.79.79 0 0 0 .79 0l5.83-3.37v2.34a.07.07 0 0 1-.03.06l-4.87 2.81a4.5 4.5 0 0 1-6.1-1.68zM1.85 7.38A4.48 4.48 0 0 1 4.17 5.23v5.69a.79.79 0 0 0 .4.68l5.83 3.37-2.02 1.17a.07.07 0 0 1-.07 0L3.44 13.33a4.5 4.5 0 0 1-1.59-5.95zm16.56 3.85l-5.83-3.37 2.02-1.17a.07.07 0 0 1 .07 0l4.87 2.81a4.5 4.5 0 0 1-.68 8.11v-5.69a.79.79 0 0 0-.4-.69zm2.01-3.02l-.14-.09-4.78-2.76a.79.79 0 0 0-.79 0L8.88 8.73V6.39a.07.07 0 0 1 .03-.06l4.87-2.81a4.5 4.5 0 0 1 6.68 4.67zM7.58 12.87L5.56 11.7a.07.07 0 0 1-.04-.05V6.03a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68v6.77zm1.1-2.36L11.26 9l2.58 1.49v2.98l-2.58 1.49-2.58-1.49v-2.98z"
                  fill="#10A37F"
                />
              </svg>
              <span className="logo-text">ChatGPT</span>
            </div>

            {/* Perplexity */}
            <div className="trusted-logo-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.785 0v7.272H22.5V17.62h-2.715V24h-7.222v-6.345L12 17.293l-.563.362V24H4.215v-6.38H1.5V7.272h2.715V0H12v6.346l.563-.362.563.362V0h6.659zm-1.356 1.356h-3.947v5.478l3.947-2.538V1.356zM9.517 6.834V1.356H5.571v2.94l3.946 2.538zM2.856 8.628v7.636h1.359v-4.32l-.001-.001 3.947 2.538v4.163h4.483v-5.478L5.571 9.877v-.001l-2.715-1.748v.5zm18.288 0l-2.715 1.748-7.073 4.548v5.478h4.483v-4.163l3.947-2.538v4.32h1.358V8.628z"
                  fill="#20808D"
                />
              </svg>
              <span className="logo-text">Perplexity</span>
            </div>

            {/* Bing */}
            <div className="trusted-logo-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.5 1.5v13.83l4.27 2.52 7.73-4.47v-2.63l-7.73 4.47-1.77-1.04V1.5H5.5zm7.73 16.23l-4.63 2.68v3.09l8.9-5.14v-3.09l-4.27 2.46z"
                  fill="#258FFA"
                />
              </svg>
              <span className="logo-text">Bing</span>
            </div>

            {/* Meta */}
            <div className="trusted-logo-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  fill="#0081FB"
                />
              </svg>
              <span className="logo-text">Meta</span>
            </div>

            {/* YouTube */}
            <div className="trusted-logo-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"
                  fill="#FF0000"
                />
              </svg>
              <span className="logo-text">YouTube</span>
            </div>

            {/* LinkedIn */}
            <div className="trusted-logo-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"
                  fill="#0A66C2"
                />
              </svg>
              <span className="logo-text">LinkedIn</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalSolutionsHero;