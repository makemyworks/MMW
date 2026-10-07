import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Our organic traffic increased 4X in just 6 months. The team's SEO and AI search strategy delivered real business results.",
      name: "Rahul Mehta",
      role: "Founder, RealEstatePro",
    },
    {
      quote: "Highly professional team with deep knowledge of SEO and AI search. We saw a significant improvement in leads and brand visibility.",
      name: "Priya Sharma",
      role: "Marketing Head, HealthPlus",
    },
    {
      quote: "Their AI video content transformed our brand storytelling. Engagement rates jumped and conversions followed.",
      name: "Arjun Reddy",
      role: "CEO, TechNova",
    },
    {
      quote: "From strategy to execution, everything was smooth. Make My Work built us a fast, scalable digital platform.",
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
        .tst-section {
          width: 100%;
          background-color: #F4F7FB;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .tst-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .tst-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .tst-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .tst-nav-buttons {
          display: flex;
          gap: 12px;
        }

        .tst-nav-btn {
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

        .tst-nav-btn:hover {
          background-color: #007BFF;
          color: white;
          border-color: #007BFF;
          transform: translateY(-2px);
        }

        .tst-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .tst-card {
          background-color: white;
          border: 1px solid #E6EEF7;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(15, 32, 68, 0.02);
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          animation: tstCardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }

        .tst-card::before {
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

        .tst-card:hover {
          box-shadow: 0 10px 25px rgba(0, 123, 255, 0.08);
          transform: translateY(-2px);
          border-color: #007BFF;
        }

        @keyframes tstCardIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .tst-quote {
          font-size: 15px;
          color: #4E5963;
          line-height: 1.7;
          margin: 0;
          font-style: normal;
          position: relative;
          z-index: 1;
        }

        .tst-author {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 16px;
          border-top: 1px solid #E6EEF7;
        }

        .tst-author-name {
          font-size: 15px;
          font-weight: 700;
          color: #0F2044;
          margin: 0;
        }

        .tst-author-role {
          font-size: 13px;
          color: #4E5963;
          margin: 0;
        }

        @media (min-width: 1024px) {
          .tst-title {
            font-size: 40px;
          }

          .tst-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section className="tst-section">
        <div className="tst-container">
          
          <div className="tst-header">
            <h2 className="tst-title">What Our Clients Say</h2>
            
            <div className="tst-nav-buttons">
              <button
                className="tst-nav-btn"
                aria-label="Previous testimonial"
                onClick={prevSlide}
                type="button"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>

              <button
                className="tst-nav-btn"
                aria-label="Next testimonial"
                onClick={nextSlide}
                type="button"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div className="tst-grid">
            {visibleTestimonials.map((item, index) => (
              <div
                key={`${startIndex}-${index}`}
                className="tst-card"
              >
                <p className="tst-quote">"{item.quote}"</p>

                <div className="tst-author">
                  <h4 className="tst-author-name">{item.name}</h4>
                  <p className="tst-author-role">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Testimonials;