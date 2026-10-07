import React, { useEffect, useRef, useState } from 'react';

const styles = `
  .why-choose-section {
    width: 100%;
    background: linear-gradient(135deg, #F7FAFF 0%, #EEF5FF 45%, #E7F0FF 100%);
    padding: 100px 24px;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  .why-container {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 1024px) {
    .why-container {
      grid-template-columns: 1fr 1.2fr;
      gap: 60px;
      align-items: center;
    }
  }

  .left-content {
    display: flex;
    flex-direction: column;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px; 
  }

  .section-label span {
    color: #1677F2;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 12px;
  }

  .label-line {
    height: 1px;
    width: 40px;
    background-color: #1677F2;
  }

  .main-heading {
    font-size: 32px; 
    font-weight: 800;
    color: #071126;
    line-height: 1.15;
    margin: 0 0 16px 0; 
  }

  @media (min-width: 768px) {
    .main-heading { font-size: 42px; } 
  }

  .highlight-blue {
    color: #1677F2;
  }

  .description {
    color: #4E5963;
    font-size: 15.5px; 
    line-height: 1.6;
    margin-bottom: 40px; 
    max-width: 480px;
  }

  .image-block-wrapper {
    position: relative;
    width: 100%;
    max-width: 440px;
    margin-top: 10px;
  }

  .image-bg-patch {
    position: absolute;
    top: -12px;
    right: -12px;
    width: 140px;
    height: 180px;
    background-color: #1677F2;
    border-radius: 20px;
    z-index: 1;
  }

  .main-image {
    position: relative;
    width: 100%;
    height: 260px; 
    object-fit: cover;
    border-radius: 20px;
    z-index: 2;
    box-shadow: 0 20px 30px -5px rgba(7, 17, 38, 0.12);
  }

  .growth-badge {
    position: absolute;
    bottom: -15px;
    right: -15px;
    background-color: #FFFFFF;
    padding: 12px 18px; 
    border-radius: 12px;
    box-shadow: 0 15px 30px -5px rgba(7, 17, 38, 0.15);
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 3;
    border: 1px solid #E8F2FF;
  }

  .growth-badge .icon-box {
    background-color: #071126;
    border-radius: 6px;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .growth-badge p {
    font-size: 12px;
    font-weight: 700;
    color: #071126;
    line-height: 1.25;
    margin: 0;
  }

  .dots-left {
    position: absolute;
    bottom: -12px;
    left: -12px;
    width: 70px;
    height: 70px;
    background-image: radial-gradient(#1677F2 2px, transparent 2px);
    background-size: 10px 10px;
    opacity: 0.3;
    z-index: 0;
  }

  .dots-right {
    position: absolute;
    bottom: -12px;
    right: -24px;
    width: 70px;
    height: 70px;
    background-image: radial-gradient(#1677F2 2px, transparent 2px);
    background-size: 10px 10px;
    opacity: 0.3;
    z-index: 0;
    display: none;
  }

  @media (min-width: 1024px) {
    .dots-right { display: block; }
  }

  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }

  .feature-card {
    background-color: #FFFFFF;
    border-radius: 16px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0 4px 10px rgba(7, 17, 38, 0.03);
    border: 1px solid #E8F2FF;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -5px rgba(7, 17, 38, 0.08), 0 6px 12px -3px rgba(7, 17, 38, 0.04);
  }

  .feature-icon {
    width: 44px;
    height: 44px;
    background-color: #E8F2FF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .feature-card:hover .feature-icon {
    transform: scale(1.08);
  }

  .feature-text h3 {
    font-size: 16px;
    font-weight: 700;
    color: #071126;
    margin: 0 0 6px 0;
  }

  .feature-text p {
    font-size: 13.5px;
    color: #4E5963;
    line-height: 1.5;
    margin: 0;
  }

  /* Animations */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  .is-visible .animate-on-scroll {
    opacity: 1;
    transform: translateY(0);
  }

  .is-visible .delay-0 { transition-delay: 0ms; }
  .is-visible .delay-1 { transition-delay: 80ms; }
  .is-visible .delay-2 { transition-delay: 160ms; }
  .is-visible .delay-3 { transition-delay: 240ms; }
  .is-visible .delay-4 { transition-delay: 320ms; }
  .is-visible .delay-5 { transition-delay: 400ms; }
`;

const UsersGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1677F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1677F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1677F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1677F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1677F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1677F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2z"/>
    <path d="M7 11H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4"/>
    <path d="M17 11h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4"/>
    <path d="M11 7V3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4"/>
    <path d="M11 17v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4"/>
  </svg>
);

const GrowthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);


const featuresData = [
  {
    icon: <UsersGroupIcon />,
    title: 'Experienced Team',
    desc: 'A skilled team of developers, designers and marketers with industry expertise.'
  },
  {
    icon: <LightbulbIcon />,
    title: 'Strategic Approach',
    desc: 'We focus on understanding your goals and create tailored strategies for real results.'
  },
  {
    icon: <GearIcon />,
    title: 'End-to-End Solutions',
    desc: 'From strategy and design to development and marketing, we handle everything.'
  },
  {
    icon: <BarChartIcon />,
    title: 'Result-Oriented',
    desc: 'Our solutions are built to deliver measurable growth and long-term value.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Transparent Process',
    desc: 'Clear communication, regular updates and complete project transparency.'
  },
  {
    icon: <HandshakeIcon />,
    title: 'Long-Term Partnership',
    desc: 'We believe in building lasting relationships and supporting your growth journey.'
  }
];

const WhyChooseSection = () => {
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
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      
      <section className="why-choose-section" ref={sectionRef}>
        <div className={`why-container ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="left-content animate-on-scroll delay-0">
            <div className="section-label">
              <span>WHY WE ARE</span>
              <div className="label-line"></div>
            </div>

            <h2 className="main-heading">
              Why Choose <br />
              <span className="highlight-blue">Make My Works?</span>
            </h2>

            <p className="description">
              We go beyond just delivering services. We become your growth partner, combining strategy, creativity and technology to build solutions that create real impact.
            </p>

            <div className="image-block-wrapper">
              <div className="image-bg-patch"></div>
              <img 
                src="/Images/why.webp" 
                alt="Team working together" 
                className="main-image"
              />
              
              <div className="growth-badge">
                <div className="icon-box">
                  <GrowthIcon />
                </div>
                <p>Your Growth<br/>Our Priority</p>
              </div>

              <div className="dots-left"></div>
              <div className="dots-right"></div>
            </div>
          </div>

          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <div className={`feature-card animate-on-scroll delay-${index}`} key={index}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChooseSection;