import React from "react";

const DigitalSolutionsHero: React.FC = () => {
  // Smooth-scroll to the Solutions section
  const handleOurWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("solutions");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .digital-hero {
          width: 100%;
          min-height: 600px;
          background: #ffffff;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .digital-hero-container {
          width: 100%;
          height: 100%;
          max-width: 1500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 48% 52%;
          align-items: center; 
        }

        .digital-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 20px 60px 9%;
          background: #ffffff;
          position: relative;
          z-index: 2;
        }

        .digital-label {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #007BFF;
          margin-bottom: 18px;
        }

        .digital-title {
          margin: 0;
          color: #0F2044;
          font-size: clamp(46px, 4.7vw, 72px);
          line-height: 0.98;
          letter-spacing: -3px;
          font-weight: 700;
        }

        .digital-title span {
          color: #007BFF;
        }

        .digital-description {
          margin: 27px 0 30px;
          color: #4E5963;
          font-size: 16px;
          line-height: 1.55;
          max-width: 560px;
        }

        .digital-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .digital-btn {
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 20px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .digital-btn-primary {
          min-width: 185px;
          background: #007BFF;
          color: #ffffff;
        }

        .digital-btn-primary:hover {
          background: #0F2044;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.2);
        }

        .digital-btn-secondary {
          min-width: 115px;
          background: #ffffff;
          color: #0F2044;
          border: 1px solid #D6E4F0;
        }

        .digital-btn-secondary:hover {
          background: #F4F7FB;
          transform: translateY(-2px);
        }

        .digital-arrow {
          font-size: 17px;
          line-height: 1;
        }

        .digital-right {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 40px 40px 20px; 
        }

        .digital-image-card {
          width: 100%;
          height: 100%;
          max-width: 700px;
          max-height: 520px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(15, 32, 68, 0.08);
          border: 1px solid #E6EEF7;
          background-color: #F4F7FB;
        }

        .digital-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        @media (max-width: 1100px) {
          .digital-left {
            padding: 50px 20px 50px 6%;
          }

          .digital-title {
            font-size: 50px;
          }

          .digital-description {
            font-size: 15px;
          }

          .digital-right {
            padding: 30px 30px 30px 10px;
          }
        }

        @media (max-width: 768px) {
          .digital-hero {
            height: auto;
            min-height: auto;
          }

          .digital-hero-container {
            display: flex;
            flex-direction: column;
          }

          .digital-left {
            width: 100%;
            padding: 45px 22px 20px;
            order: 1;
          }

          .digital-label {
            font-size: 12px;
            letter-spacing: 1.2px;
            margin-bottom: 14px;
          }

          .digital-title {
            font-size: 42px;
            line-height: 1.02;
            letter-spacing: -1.8px;
          }

          .digital-description {
            font-size: 14px;
            line-height: 1.55;
            margin: 20px 0 24px;
          }

          .digital-buttons {
            flex-wrap: wrap;
            gap: 9px;
          }

          .digital-btn {
            height: 44px;
            font-size: 12px;
            padding: 0 16px;
          }

          .digital-btn-primary {
            min-width: 175px;
          }

          .digital-btn-secondary {
            min-width: 105px;
          }

          .digital-right {
            order: 2;
            width: 100%;
            padding: 10px 22px 40px;
          }

          .digital-image-card {
            max-height: 320px;
            border-radius: 12px;
          }
        }

        @media (max-width: 480px) {
          .digital-left {
            padding: 35px 18px 15px;
          }

          .digital-title {
            font-size: 36px;
            letter-spacing: -1.5px;
          }

          .digital-description {
            font-size: 13px;
          }

          .digital-image-card {
            max-height: 260px;
          }
        }
      `}</style>

      <section className="digital-hero">
        <div className="digital-hero-container">

          <div className="digital-left">

            <div className="digital-label">
              DIGITAL SOLUTIONS
            </div>

            <h1 className="digital-title">
              Turn Ideas Into
              <br />
              Measurable{" "}
              <span>
                Growth
              </span>
            </h1>

            <p className="digital-description">
              We create data-driven digital solutions that help
              <br />
              businesses grow, engage customers and stay ahead
              <br />
              in the digital world.
            </p>

            <div className="digital-buttons">

              <a
                href="/contact"
                className="digital-btn digital-btn-primary"
              >
                Get a Free Consultation
                <span className="digital-arrow">
                  →
                </span>
              </a>

              {/* ✅ Our Work → scrolls to Solutions section */}
              <a
                href="#solutions"
                className="digital-btn digital-btn-secondary"
                onClick={handleOurWork}
              >
                Our Work
                <span className="digital-arrow">
                  →
                </span>
              </a>

            </div>

          </div>

          <div className="digital-right">
            <div className="digital-image-card">
              <img
                src="/Images/digitalhero.png"
                alt="Digital solutions dashboard"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DigitalSolutionsHero;