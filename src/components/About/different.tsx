import React, { useEffect, useRef, useState } from 'react';

// Icons
const TargetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const ChatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
  </svg>
);

const RocketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

const GrowthChartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const diffData = [
  {
    icon: <TargetIcon />,
    number: '01',
    title: 'Business-First Thinking',
    desc: 'We focus on your business goals and create solutions that deliver real, measurable results.'
  },
  {
    icon: <ChatIcon />,
    number: '02',
    title: 'Transparent Communication',
    desc: 'We keep you informed at every step with clear updates, honest feedback and open collaboration.'
  },
  {
    icon: <RocketIcon />,
    number: '03',
    title: 'Fast Execution',
    desc: 'We follow a streamlined process to deliver high-quality solutions on time without compromising on quality.'
  },
  {
    icon: <GrowthChartIcon />,
    number: '04',
    title: 'Scalable Solutions',
    desc: 'We build flexible and future-ready solutions that grow with your business needs.'
  }
];

const WhatMakesUsDifferentSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .diff-premium-section {
          width: 100%;
          background: #FFFFFF;
          border-top: 1px solid #E8EEF7;
          padding: 120px 24px 100px;
          font-family: system-ui, -apple-system, sans-serif;
          overflow: hidden;
        }

        .diff-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .diff-header {
          text-align: center;
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .diff-label {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .diff-label span {
          color: #1677F2;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          font-size: 13px;
        }

        .diff-line {
          height: 1px;
          width: 40px;
          background: #1677F2;
        }

        .diff-heading {
          font-size: 42px;
          font-weight: 700;
          color: #07152F;
          margin: 0 0 20px 0;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        @media (min-width: 768px) {
          .diff-heading { font-size: 52px; }
        }

        .diff-highlight {
          color: #1677F2;
        }

        .diff-desc {
          color: #5A6978;
          font-size: 18px;
          line-height: 1.6;
          max-width: 700px;
          margin: 0;
        }

        /* 4-Step Layout Wrapper */
        .diff-steps-wrapper {
          position: relative;
        }

        /* The Connecting Line Desktop */
        .diff-connector-line {
          position: absolute;
          top: 60px; /* Center of icon wrapper (padding 32px + half icon 28px) */
          left: 10%;
          right: 10%;
          height: 2px;
          background: rgba(22, 119, 242, 0.15);
          z-index: 1;
        }

        .diff-connector-progress {
          height: 100%;
          background: #1677F2;
          width: 0%;
          transition: width 1.5s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: 0.3s;
        }
        
        .is-visible .diff-connector-progress {
          width: 100%;
        }

        /* Grid */
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        /* Step Card */
        .diff-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 32px 28px;
          border: 1px solid #E3EAF5;
          box-shadow: 0 8px 24px rgba(7, 21, 47, 0.04);
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .diff-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(7, 21, 47, 0.08);
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F9FF 100%);
          border-color: rgba(22, 119, 242, 0.2);
        }

        /* Icon & Number Row */
        .diff-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .diff-icon-wrapper {
          width: 56px;
          height: 56px;
          background: #EEF5FF;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1677F2;
          transition: transform 0.4s ease, background 0.4s ease;
        }

        .diff-card:hover .diff-icon-wrapper {
          transform: scale(1.08) rotate(-5deg);
          background: #1677F2;
          color: #FFFFFF;
        }

        .diff-number {
          font-size: 54px;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(22, 119, 242, 0.15);
          line-height: 0.8;
          user-select: none;
          transition: all 0.4s ease;
        }

        .diff-card:hover .diff-number {
          -webkit-text-stroke: 1.5px rgba(22, 119, 242, 0.3);
          color: rgba(22, 119, 242, 0.05);
        }

        .diff-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #07152F;
          margin: 0 0 14px 0;
          line-height: 1.3;
        }

        .diff-card-desc {
          font-size: 15px;
          color: #5A6978;
          line-height: 1.6;
          margin: 0;
        }

        /* Animations */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .is-visible .fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 100ms; }
        .delay-2 { transition-delay: 200ms; }
        .delay-3 { transition-delay: 300ms; }
        .delay-4 { transition-delay: 400ms; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up { transition: none; opacity: 1; transform: none; }
          .diff-connector-progress { transition: none; width: 100%; }
        }

        /* Responsive Tablet (2x2 Grid) */
        @media (max-width: 1024px) {
          .diff-premium-section { padding: 80px 20px; }
          .diff-header { margin-bottom: 60px; }
          .diff-connector-line { display: none; }
          
          .diff-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }

        /* Responsive Mobile (1 Col Stack) */
        @media (max-width: 640px) {
          .diff-premium-section { padding: 60px 16px; }
          .diff-heading { font-size: 34px; }
          .diff-desc { font-size: 16px; }
          .diff-header { margin-bottom: 48px; }

          .diff-steps-wrapper::before {
            content: '';
            position: absolute;
            left: 52px; /* 24px padding + 28px center of icon */
            top: 20px;
            bottom: 20px;
            width: 2px;
            background: rgba(22, 119, 242, 0.15);
            z-index: 1;
          }

          .diff-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .diff-card {
            padding: 28px 24px;
          }
        }
      `}</style>
      
      <section className="diff-premium-section" ref={sectionRef}>
        <div className={`diff-container ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="diff-header fade-up">
            <div className="diff-label">
              <div className="diff-line"></div>
              <span>WHAT MAKES US DIFFERENT</span>
              <div className="diff-line"></div>
            </div>
            <h2 className="diff-heading">
              A Smarter Approach to <span className="diff-highlight">Real Results</span>
            </h2>
            <p className="diff-desc">
              We combine business understanding, clear communication and technical expertise to deliver solutions that create long-term value.
            </p>
          </div>

          <div className="diff-steps-wrapper">
            <div className="diff-connector-line">
              <div className="diff-connector-progress"></div>
            </div>

            <div className="diff-grid">
              {diffData.map((item, index) => (
                <div className={`diff-card fade-up delay-${index + 1}`} key={index}>
                  
                  <div className="diff-card-top">
                    <div className="diff-icon-wrapper">
                      {item.icon}
                    </div>
                    <div className="diff-number">
                      {item.number}
                    </div>
                  </div>

                  <h3 className="diff-card-title">{item.title}</h3>
                  <p className="diff-card-desc">{item.desc}</p>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhatMakesUsDifferentSection;