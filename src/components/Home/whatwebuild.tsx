import React from 'react';

const styles = `
  .build-deliver-section {
    width: 100%;
    background-color: #F4F7FB;
    padding: 60px 20px 80px 20px;
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
    margin-bottom: 40px;
    position: relative;
  }

  .build-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 12px;
  }

  .build-label span {
    color: #007BFF;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 12px;
  }

  .label-line {
    height: 1px;
    width: 40px;
    background-color: #007BFF;
  }

  .build-title {
    font-size: 34px;
    font-weight: 800;
    color: #0F2044;
    margin: 0 0 12px 0;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    .build-title { font-size: 42px; }
  }

  .highlight-blue {
    color: #007BFF;
  }

  .build-subtitle {
    color: #4E5963;
    font-size: 16px;
    max-width: 650px;
    margin: 0 auto;
    line-height: 1.5;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    .cards-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 1024px) {
    .cards-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }
  }

  .service-card {
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 15px -3px rgba(15, 32, 68, 0.05), 0 2px 6px -2px rgba(15, 32, 68, 0.03);
    border: 1px solid #E6EEF7;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px -5px rgba(15, 32, 68, 0.1), 0 8px 10px -6px rgba(15, 32, 68, 0.05);
  }

  .card-image-wrapper {
    position: relative;
    width: 100%;
    height: 140px;
  }

  .card-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-icon-badge {
    position: absolute;
    bottom: -16px;
    left: 16px;
    background-color: #007BFF;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(15, 32, 68, 0.15);
    z-index: 2;
  }

  .card-content {
    padding: 24px 16px 16px 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .card-title {
    font-size: 18px;
    font-weight: 700;
    color: #0F2044;
    margin: 0 0 8px 0;
  }

  .card-desc {
    font-size: 13px;
    color: #4E5963;
    line-height: 1.4;
    margin: 0 0 16px 0;
  }

  .card-desc a {
    color: #007BFF;
    text-decoration: underline;
    font-weight: 500;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
  }

  .feature-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 12.5px;
    color: #374151;
    font-weight: 500;
  }

  .check-icon {
    flex-shrink: 0;
    margin-top: 2px;
  }

  .learn-more {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 700;
    color: #0F2044;
    text-decoration: none;
    margin-top: auto;
    transition: color 0.2s;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  .learn-more:hover {
    color: #007BFF;
  }

  .explore-btn-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 10;
  }

  .explore-btn {
    background-color: #007BFF;
    color: white;
    padding: 14px 28px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0 10px 15px -3px rgba(0, 123, 255, 0.3);
  }

  .explore-btn:hover {
    background-color: #0F2044;
    transform: translateY(-2px);
  }
`;

const ArrowRightIcon = ({ color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#007BFF">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const servicesData = [
  {
    title: 'SEO',
    icon: <SearchIcon />,
    desc: 'Improve your online visibility and attract the right audience with data-driven SEO strategies.',
    features: ['Keyword Research', 'On-Page & Off-Page SEO', 'Technical SEO', 'Monthly Reporting'],
    img: '/Images/homeseo.svg'
  },
  {
    title: 'AI Videos',
    icon: <VideoIcon />,
    desc: 'Create high-quality, engaging videos using AI for marketing, branding and storytelling.',
    features: ['AI Video Creation', 'Product & Service Videos', 'Social Media Content', 'Script & Voice Generation'],
    img: '/Images/homemo.webp'
  },
  {
    title: 'Web Development',
    icon: <CodeIcon />,
    desc: 'Build modern, scalable and high-performing websites and web applications.',
    features: ['Custom Website Development', 'E-commerce Solutions', 'Web Applications', 'Maintenance & Support'],
    img: '/Images/homeweb.svg'
  },
  {
    title: 'Digital Solutions',
    icon: <ChartIcon />,
    desc: 'End-to-end digital strategies to help your business grow faster and smarter.',
    features: ['Digital Marketing Strategy', 'Social Media Management', 'Branding & Design Support', 'Lead Generation & Analytics'],
    img: '/Images/homedigi.webp'
  }
];

const WhatWeBuildSection = () => {
  return (
    <>
      <style>{styles}</style>
      
      <section className="build-deliver-section">
        <div className="build-container">
          
          <div className="build-header">
            <div className="build-label">
              <div className="label-line"></div>
              <span>What We Build & Deliver</span>
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
              <div className="service-card" key={index}>
                
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

                  <button className="learn-more">
                    Learn More
                    <ArrowRightIcon />
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="explore-btn-wrapper">
            <button className="explore-btn">
              Explore All Services
              <ArrowRightIcon />
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhatWeBuildSection;