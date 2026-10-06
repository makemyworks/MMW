import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ClientFeedback: React.FC = () => {
  const testimonials = [
    {
      quote: "The team helped us improve our online presence significantly. We saw a 3X increase in website traffic and better quality leads.",
      name: "Rahul Mehta",
      role: "Founder, RealEstatePro",
    },
    {
      quote: "Professional, creative and result-oriented. Their digital marketing strategies have helped our brand grow consistently.",
      name: "Priya Sharma",
      role: "Marketing Head, HealthPlus",
    },
    {
      quote: "Their SEO and AI search work brought us to the first page of Google in under 3 months. Incredible results from a talented team.",
      name: "Arjun Reddy",
      role: "CEO, TechNova",
    },
    {
      quote: "Working with Alpha Zeta World was smooth from day one. They delivered a fast, scalable digital platform for our business.",
      name: "Sneha Kapoor",
      role: "Product Lead, FinEdge",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) => {
    return testimonials[(startIndex + i) % testimonials.length];
  });

  return (
    <>
      <style>{`
        .cf-section {
          width: 100%;
          background-color: #F4F7FB;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .cf-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .cf-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cf-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cf-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #007BFF;
          text-transform: uppercase;
        }

        .cf-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .cf-nav-buttons {
          display: flex;
          gap: 12px;
        }

        .cf-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #D6E4F0;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #007BFF;
          transition: all 0.2s ease;
        }

        .cf-nav-btn:hover {
          background-color: #007BFF;
          color: white;
          border-color: #007BFF;
          transform: translateY(-2px);
        }

        .cf-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .cf-card {
          background-color: white;
          border: 1px solid #E6EEF7;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(15, 32, 68, 0.02);
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          animation: cfCardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }

        .cf-card::before {
          content: "“";
          position: absolute;
          top: -30px;
          right: 10px;
          font-size: 140px;
          line-height: 1;
          font-family: Georgia, serif;
          color: rgba(0, 123, 255, 0.08);
          pointer-events: none;
        }

        .cf-card:hover {
          box-shadow: 0 10px 25px rgba(0, 123, 255, 0.08);
          transform: translateY(-2px);
          border-color: #007BFF;
        }

        @keyframes cfCardIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .cf-quote {
          font-size: 15px;
          color: #4E5963;
          line-height: 1.7;
          margin: 0;
          font-style: normal;
          position: relative;
          z-index: 1;
        }

        .cf-author {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 16px;
          border-top: 1px solid #E6EEF7;
        }

        .cf-author-name {
          font-size: 15px;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
        }

        .cf-author-role {
          font-size: 13px;
          color: #4E5963;
          margin: 0;
        }

        @media (min-width: 1024px) {
          .cf-title {
            font-size: 40px;
          }

          .cf-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section className="cf-section">
        <div className="cf-container">
          
          <div className="cf-header">
            <div className="cf-title-wrap">
              <span className="cf-subtitle">Client Feedback</span>
              <h2 className="cf-title">What Our Clients Say</h2>
            </div>
            
            <div className="cf-nav-buttons">
              <button
                className="cf-nav-btn"
                aria-label="Previous testimonial"
                onClick={prevSlide}
                type="button"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>

              <button
                className="cf-nav-btn"
                aria-label="Next testimonial"
                onClick={nextSlide}
                type="button"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div className="cf-grid">
            {visibleTestimonials.map((item, index) => (
              <div
                key={`${startIndex}-${index}`}
                className="cf-card"
              >
                <p className="cf-quote">"{item.quote}"</p>

                <div className="cf-author">
                  <h4 className="cf-author-name">{item.name}</h4>
                  <p className="cf-author-role">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ClientFeedback;