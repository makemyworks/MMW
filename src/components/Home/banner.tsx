import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-label">
            <span>ABOUT US</span>
            <span className="about-line"></span>
          </div>

          <h2 className="about-title">
            Your Growth Partner
            <br />
            in the <span>Digital Era</span>
          </h2>

          <p className="about-description">
            At AlphaZetaWorld, we are a team of passionate creators,
            developers and marketers dedicated to building digital
            solutions that help businesses grow, engage and stay ahead
            in a rapidly changing world.
          </p>

          <p className="about-description second">
            We combine strategy, creativity and technology to deliver
            solutions that solve real business challenges and create
            measurable impact.
          </p>

          <a href="/about" className="about-button">
            <span>Learn More About Us</span>
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="about-image-wrapper">
          <div className="about-main-image">
            <img
              src="/Images/about.webp"
              alt="AlphaZetaWorld Team"
            />
          </div>
        </div>
      </div>

      <style>{`
        .about-section,
        .about-section * {
          box-sizing: border-box;
        }

        .about-section {
          width: 100%;
          background: #ffffff;
          padding: 70px 0 80px;
          overflow: hidden;
          font-family:
            Inter,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .about-container {
          width: min(
            1500px,
            calc(100% - 120px)
          );
          margin: 0 auto;
          display: grid;
          grid-template-columns:
            46% 54%;
          align-items: center;
          column-gap: 45px;
        }

        .about-content {
          width: 100%;
          max-width: 650px;
          position: relative;
          z-index: 2;
        }

        .about-label {
          display: flex;
          align-items: center;
          gap: 27px;
          margin-bottom: 28px;
          color: #007bff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 4px;
        }

        .about-line {
          display: block;
          width: 77px;
          height: 2px;
          background: #007bff;
        }

        .about-title {
          margin: 0;
          color: #0f2044;
          font-size: clamp(
            36px,
            3.2vw,
            48px
          );
          line-height: 1.06;
          letter-spacing: -1.8px;
          font-weight: 700;
        }

        .about-title span {
          color: #007bff;
        }

        .about-description {
          max-width: 650px;
          margin: 28px 0 0;
          color: #4e5963;
          font-size: 18px;
          line-height: 1.55;
          font-weight: 400;
        }

        .about-description.second {
          margin-top: 18px;
        }

        .about-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          height: 60px;
          margin-top: 28px;
          padding: 0 38px;
          color: #ffffff;
          background: #007bff;
          border-radius: 9px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .about-button:hover {
          background: #0f2044;
          transform: translateY(-2px);
        }

        .about-image-wrapper {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .about-main-image {
          width: 90%;
          max-width: 600px;
          height: 415px;
          overflow: hidden;
          border-radius: 23px;
        }

        .about-main-image img {
          width: 90%;
          height: 90%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        @media (min-width: 1600px) {
          .about-section {
            padding-top: 75px;
            padding-bottom: 85px;
          }

          .about-container {
            width: min(
              1660px,
              calc(100% - 140px)
            );
            grid-template-columns:
              45% 55%;
            column-gap: 60px;
          }

          .about-title {
            font-size: 52px;
          }

          .about-main-image {
            max-width: 800px;
            height: 535px;
          }
        }

        @media (max-width: 1250px) {
          .about-section {
            padding: 60px 0 70px;
          }

          .about-container {
            width: calc(100% - 80px);
            grid-template-columns:
              47% 53%;
            column-gap: 35px;
          }

          .about-title {
            font-size: 38px;
            letter-spacing: -1.4px;
          }

          .about-description {
            font-size: 16px;
          }

          .about-main-image {
            height: 470px;
            border-radius: 20px;
          }

          .about-button {
            height: 56px;
            padding: 0 32px;
            font-size: 15px;
          }
        }

        @media (max-width: 900px) {
          .about-section {
            padding: 55px 0 65px;
          }

          .about-container {
            width: calc(100% - 50px);
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 45px;
          }

          .about-content {
            max-width: 760px;
          }

          .about-title {
            font-size: 40px;
            line-height: 1.06;
          }

          .about-description {
            max-width: 720px;
            font-size: 17px;
          }

          .about-image-wrapper {
            justify-content: center;
          }

          .about-main-image {
            width: 100%;
            max-width: 850px;
            height: 480px;
          }
        }

        @media (max-width: 600px) {
          .about-section {
            padding: 45px 0 55px;
          }

          .about-container {
            width: calc(100% - 30px);
            display: flex;
            flex-direction: column;
            gap: 32px;
          }

          .about-label {
            gap: 14px;
            margin-bottom: 19px;
            font-size: 10px;
            letter-spacing: 2.8px;
          }

          .about-line {
            width: 45px;
            height: 1.5px;
          }

          .about-title {
            font-size: 30px;
            line-height: 1.08;
            letter-spacing: -1.1px;
          }

          .about-description {
            margin-top: 18px;
            font-size: 14px;
            line-height: 1.55;
          }

          .about-description.second {
            margin-top: 13px;
          }

          .about-button {
            height: 49px;
            margin-top: 21px;
            padding: 0 21px;
            gap: 10px;
            border-radius: 8px;
            font-size: 13px;
          }

          .about-button svg {
            width: 16px;
            height: 16px;
          }

          .about-image-wrapper {
            width: 100%;
            justify-content: center;
          }

          .about-main-image {
            width: 100%;
            height: 310px;
            border-radius: 16px;
          }
        }

        @media (max-width: 420px) {
          .about-section {
            padding: 38px 0 48px;
          }

          .about-container {
            width: calc(100% - 24px);
            gap: 27px;
          }

          .about-label {
            font-size: 9px;
            letter-spacing: 2.4px;
          }

          .about-line {
            width: 38px;
          }

          .about-title {
            font-size: 27px;
            letter-spacing: -0.9px;
          }

          .about-description {
            font-size: 13px;
            line-height: 1.55;
          }

          .about-description.second {
            margin-top: 12px;
          }

          .about-button {
            height: 46px;
            padding: 0 19px;
            font-size: 12px;
          }

          .about-main-image {
            height: 270px;
            border-radius: 14px;
          }
        }

        @media (max-width: 360px) {
          .about-title {
            font-size: 24px;
          }

          .about-description {
            font-size: 12px;
          }

          .about-main-image {
            height: 245px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;