import React, { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mark Roberts",
    role: "Founder, GreenEarth Eco Store",
    text: "The web app Make My Work built for us is exactly what we envisioned – clean, fast, and scalable. Their AI video ads have been performing exceptionally well across our social channels.",
    image: "/images/testimonial-1.png",
  },
  {
    name: "Lisa Williams",
    role: "Head of Growth, HealthTech Innovations",
    text: "Their SEO and AI search optimization work put us on the first page of Google in under 3 months. We're now visible on ChatGPT and Perplexity too. Incredible results from a genuinely talented team.",
    image: "/images/testimonial-2.png",
  },
  {
    name: "Michael Brown",
    role: "Marketing Director, TechFlow",
    text: "Make My Work transformed our digital presence from the ground up. Their development and content strategy helped us reach a much wider audience.",
    image: "/images/testimonial-3.png",
  },
  {
    name: "Sarah Johnson",
    role: "CEO, Nova Digital",
    text: "The team understood our vision from day one. Their combination of technology, content and SEO made the entire process smooth and effective.",
    image: "/images/testimonial-4.png",
  },
  {
    name: "David Wilson",
    role: "Founder, BrightCommerce",
    text: "Working with Make My Work was a smooth experience from start to finish. The team delivered a fast, modern and scalable digital solution for our business.",
    image: "/images/testimonial-5.png",
  },
  {
    name: "Emma Davis",
    role: "Product Manager, FinTech Labs",
    text: "Their technical understanding and attention to detail really stood out. We were able to launch our new platform with a much stronger digital presence.",
    image: "/images/testimonial-6.png",
  },
  {
    name: "James Anderson",
    role: "CEO, Urban Living",
    text: "The website redesign completely changed how our customers interact with our brand. Everything feels cleaner, faster and much more professional.",
    image: "/images/testimonial-7.png",
  },
  {
    name: "Olivia Martin",
    role: "Marketing Lead, HealthPlus",
    text: "From strategy to execution, the Make My Work team was transparent and responsive. Their work helped us improve visibility and generate better engagement.",
    image: "/images/testimonial-8.png",
  },
  {
    name: "Daniel Thomas",
    role: "Founder, NextGen Solutions",
    text: "We needed one team that could handle development, content and search together. Make My Work gave us exactly that and delivered excellent results.",
    image: "/images/testimonial-9.png",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      const w = window.innerWidth;
      if (w <= 600) setVisibleCards(1);
      else if (w <= 900) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [visibleCards]);

  const translatePercent = activeIndex * (100 / visibleCards);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <h2>
            What Our <span>Clients Say</span>
          </h2>

          <p>
            Real experiences from businesses that trusted Make My Work
            to transform their digital presence.
          </p>
        </div>

        <div className="testimonial-slider-wrapper">
          <div
            className="testimonial-slider"
            style={{
              transform: `translateX(-${translatePercent}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-slide" key={index}>

                <div className="testimonial-card">
                  <p className="testimonial-text">
                    "{testimonial.text}"
                  </p>

                  <div className="testimonial-pointer"></div>
                </div>

                <div className="testimonial-user">
                  <div className="testimonial-image-wrapper">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                    />
                  </div>

                  <div className="testimonial-user-info">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-controls">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="testimonial-arrow"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="testimonial-arrow"
          >
            →
          </button>
        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .testimonials-section {
          width: 100%;
          background: #F4F7FB;
          padding: 32px 3% 35px;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .testimonials-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 0;
        }

        .testimonials-header h2 {
          margin: 0;
          font-size: 38px;
          line-height: 1.1;
          font-weight: 700;
          color: #0F2044;
          letter-spacing: -0.7px;
        }

        .testimonials-header h2 span {
          color: #007BFF;
        }

        .testimonials-header p {
          margin: 10px auto 0;
          max-width: 650px;
          font-size: 14px;
          line-height: 1.6;
          color: #4E5963;
        }

        .testimonial-slider-wrapper {
          width: 100%;
          overflow: hidden;
          margin-top: 25px;
        }

        .testimonial-slider {
          display: flex;
          gap: 16px;
          width: 100%;
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .testimonial-slide {
          flex: 0 0 calc((100% - 32px) / 3);
          min-width: 0;
          padding-bottom: 82px;
        }

        .testimonial-card {
          position: relative;
          width: 100%;
          height: 225px;
          padding: 25px 24px 22px;
          background: #ffffff;
          border: 1px solid #D6E4F0;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(15, 32, 68, 0.04);
          display: flex;
          align-items: flex-start;
          overflow: hidden;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-7px);
          border-color: #007BFF;
          box-shadow:
            0 14px 30px rgba(0, 123, 255, 0.14),
            0 4px 8px rgba(15, 32, 68, 0.06);
        }

        .testimonial-text {
          position: relative;
          z-index: 2;
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: #4E5963;
          font-weight: 400;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .testimonial-card:hover .testimonial-text {
          color: #0F2044;
          transform: translateX(2px);
        }

        .testimonial-pointer {
          position: absolute;
          left: 34px;
          bottom: -9px;
          width: 18px;
          height: 18px;
          background: #ffffff;
          border-right: 1px solid #D6E4F0;
          border-bottom: 1px solid #D6E4F0;
          transform: rotate(45deg);
          transition: border-color 0.3s ease;
        }

        .testimonial-card:hover .testimonial-pointer {
          border-color: #007BFF;
        }

        .testimonial-user {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
          padding-left: 22px;
        }

        .testimonial-image-wrapper {
          width: 62px;
          height: 62px;
          flex-shrink: 0;
          border-radius: 50%;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .testimonial-image {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #007BFF;
          background: #ffffff;
          display: block;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease;
        }

        .testimonial-slide:hover .testimonial-image-wrapper {
          transform: translateY(-4px);
          box-shadow: 0 8px 18px rgba(0, 123, 255, 0.18);
        }

        .testimonial-slide:hover .testimonial-image {
          transform: scale(1.06);
          border-color: #0F2044;
        }

        .testimonial-user-info {
          min-width: 0;
        }

        .testimonial-user-info h3 {
          margin: 0 0 4px;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 700;
          color: #0F2044;
          transition: color 0.3s ease;
        }

        .testimonial-slide:hover .testimonial-user-info h3 {
          color: #007BFF;
        }

        .testimonial-user-info p {
          margin: 0;
          font-size: 12px;
          line-height: 1.4;
          color: #4E5963;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 2px;
        }

        .testimonial-arrow {
          width: 38px;
          height: 38px;
          border: 1px solid #007BFF;
          border-radius: 50%;
          background: #ffffff;
          color: #007BFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .testimonial-arrow:hover {
          background: #007BFF;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 123, 255, 0.20);
        }

        @media (max-width: 900px) {
          .testimonials-section {
            padding: 28px 4% 32px;
          }

          .testimonials-header h2 {
            font-size: 32px;
          }

          .testimonial-slider {
            gap: 16px;
          }

          .testimonial-slide {
            flex: 0 0 calc((100% - 16px) / 2);
          }

          .testimonial-card {
            height: 215px;
          }

          .testimonial-text {
            font-size: 14px;
          }
        }

        @media (max-width: 600px) {
          .testimonials-section {
            padding: 25px 5% 28px;
          }

          .testimonials-header h2 {
            font-size: 29px;
          }

          .testimonials-header p {
            font-size: 13px;
            line-height: 1.55;
            max-width: 500px;
          }

          .testimonial-slider-wrapper {
            margin-top: 20px;
          }

          .testimonial-slider {
            gap: 0;
          }

          .testimonial-slide {
            flex: 0 0 100%;
            padding-bottom: 72px;
          }

          .testimonial-card {
            height: auto;
            min-height: 180px;
            padding: 22px 20px;
            border-radius: 13px;
          }

          .testimonial-text {
            font-size: 14px;
            line-height: 1.65;
          }

          .testimonial-user {
            margin-top: 14px;
            padding-left: 18px;
          }

          .testimonial-image-wrapper,
          .testimonial-image {
            width: 55px;
            height: 55px;
          }

          .testimonial-user-info h3 {
            font-size: 14px;
          }

          .testimonial-user-info p {
            font-size: 11px;
          }

          .testimonial-arrow {
            width: 35px;
            height: 35px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .testimonials-section {
            padding: 22px 4% 25px;
          }

          .testimonials-header h2 {
            font-size: 27px;
          }

          .testimonials-header p {
            font-size: 12px;
          }

          .testimonial-card {
            min-height: 170px;
            padding: 20px 18px;
          }

          .testimonial-text {
            font-size: 13px;
            line-height: 1.6;
          }

          .testimonial-user {
            padding-left: 15px;
          }

          .testimonial-image-wrapper,
          .testimonial-image {
            width: 52px;
            height: 52px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonials-section *,
          .testimonials-section *::before,
          .testimonials-section *::after {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;