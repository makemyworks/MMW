import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const styles = `
  .build-deliver-section {
    width: 100%;
    background-color: #FFFFFF;
    padding: 80px 24px;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  .build-container {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }

  .build-header {
    text-align: center;
    margin-bottom: 48px;
    position: relative;
  }

  .build-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .build-label span {
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

  .build-title {
    font-size: 34px;
    font-weight: 800;
    color: #071126;
    margin: 0 0 16px 0;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    .build-title { font-size: 42px; }
  }

  .highlight-blue {
    color: #1677F2;
  }

  .build-subtitle {
    color: #667085;
    font-size: 16px;
    max-width: 680px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    .cards-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 1024px) {
    .cards-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
  }

  .service-card {
    background-color: #FFFFFF;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(7, 17, 38, 0.04), 0 2px 4px rgba(7, 17, 38, 0.02);
    border: 1px solid #DCE3EE;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px -6px rgba(7, 17, 38, 0.1), 0 8px 16px -6px rgba(7, 17, 38, 0.06);
  }

  .card-image-wrapper {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
  }

  .card-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .service-card:hover .card-image-wrapper img {
    transform: scale(1.02);
  }

  .card-icon-badge {
    position: absolute;
    bottom: -18px;
    left: 20px;
    background-color: #1677F2;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(7, 17, 38, 0.15);
    z-index: 2;
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .service-card:hover .card-icon-badge {
    transform: scale(1.08);
  }

  .card-content {
    padding: 32px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .card-title {
    font-size: 18px;
    font-weight: 700;
    color: #071126;
    margin: 0 0 10px 0;
  }

  .card-desc {
    font-size: 14px;
    color: #667085;
    line-height: 1.5;
    margin: 0 0 20px 0;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1;
  }

  .feature-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: #071126;
    font-weight: 500;
    line-height: 1.4;
  }

  .check-icon {
    flex-shrink: 0;
    margin-top: 2px;
  }

  .learn-more {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 700;
    color: #071126;
    text-decoration: none;
    margin-top: auto;
    transition: color 0.3s;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .learn-more svg {
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .service-card:hover .learn-more {
    color: #1677F2;
  }

  .service-card:hover .learn-more svg {
    transform: translateX(4px);
  }

  .explore-btn-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 10;
  }

  .explore-btn {
    background-color: #1677F2;
    color: #FFFFFF;
    padding: 14px 32px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 10px 20px -5px rgba(22, 119, 242, 0.25);
    text-decoration: none;
  }

  .explore-btn:hover {
    background-color: #0B4FC4;
    transform: translateY(-2px);
    box-shadow: 0 14px 24px -5px rgba(22, 119, 242, 0.35);
  }

  /* Animations */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  @media (prefers-reduced-motion: reduce) {
    .animate-on-scroll {
      transition: none;
      opacity: 1;
      transform: none;
    }
    .service-card {
      transition: box-shadow 0.3s;
    }
    .service-card:hover {
      transform: none;
    }
    .card-image-wrapper img, .card-icon-badge, .learn-more svg {
      transition: none;
    }
    .service-card:hover .card-image-wrapper img, .service-card:hover .card-icon-badge, .service-card:hover .learn-more svg {
      transform: none;
    }
  }
  
  .is-visible .animate-on-scroll {
    opacity: 1;
    transform: translateY(0);
  }

  .is-visible .delay-0 { transition-delay: 0ms; }
  .is-visible .delay-1 { transition-delay: 100ms; }
  .is-visible .delay-2 { transition-delay: 200ms; }
  .is-visible .delay-3 { transition-delay: 300ms; }
`;

const ArrowRightIcon = ({ color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1677F2">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const servicesData = [
  {
    title: 'SEO & Google AI SEO',
    icon: <SearchIcon />,
    desc: 'Improve your online visibility and attract the right audience with data-driven SEO strategies.',
    features: ['Keyword Research', 'Technical & On-Page SEO', 'AI Search Optimization'],
    img: '/Images/homeseo.svg'
  },
  {
    title: 'AI Video Generation',
    icon: <VideoIcon />,
    desc: 'Create engaging AI-powered videos for marketing, branding and social media.',
    features: ['AI Video Creation', 'Product & Service Videos', 'Social Media Content'],
    img: '/Images/homemo.webp'
  },
  {
    title: 'Website Development',
    icon: <CodeIcon />,
    desc: 'Build modern, responsive websites and web applications designed around your business.',
    features: ['Custom Website Development', 'E-commerce Solutions', 'Web Applications'],
    img: '/Images/homeweb.svg'
  },
  {
    title: 'Digital & Tech Solutions',
    icon: <ChartIcon />,
    desc: 'Build practical digital solutions that help your business work smarter and grow faster.',
    features: ['Custom Digital Solutions', 'Workflow & Automation', 'Technology Integration'],
    img: '/Images/homedigi.webp'
  }
];

const WhatWeBuildSection = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      
      <section className="build-deliver-section" ref={sectionRef}>
        <div className={`build-container ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="build-header">
            <div className="build-label">
              <div className="label-line"></div>
              <span>FEATURED SERVICES</span>
              <div className="label-line"></div>
            </div>
            
            <h2 className="build-title">
              What We <span className="highlight-blue">Build & Deliver</span>
            </h2>
            
            <p className="build-subtitle">
              We combine creativity, technology and strategy to deliver digital solutions that create real business value.
            </p>
          </div>

          <div className="cards-grid">
            {servicesData.map((service, index) => (
              <Link to="/services" className={`service-card animate-on-scroll delay-${index}`} key={index}>
                
                <div className="card-image-wrapper">
                  <img src={service.img} alt={service.title} />
                  <div className="card-icon-badge">
                    {service.icon}
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-desc">{service.desc}</p>

                  <ul className="feature-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="learn-more">
                    Learn More
                    <ArrowRightIcon />
                  </div>
                </div>

              </Link>
            ))}
          </div>

          <div className="explore-btn-wrapper">
            <Link to="/services" className="explore-btn">
              Explore All Services
              <ArrowRightIcon />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhatWeBuildSection;