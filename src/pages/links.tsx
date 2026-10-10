import React from 'react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaBloggerB, 
  FaLinkedinIn, 
  FaWhatsapp 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ArrowRight } from 'lucide-react';

// --- Types ---
interface SocialPlatform {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  position: 'left' | 'right';
  url: string;
}

// --- Data ---
const socialPlatforms: SocialPlatform[] = [
  {
    id: 1,
    name: "Instagram",
    description: "Behind the scenes",
    icon: <FaInstagram />,
    iconBg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    position: "left",
    url: "https://www.instagram.com/make_my_works",
  },
  {
    id: 2,
    name: "LinkedIn",
    description: "Professional Updates",
    icon: <FaLinkedinIn />,
    iconBg: "#0077b5",
    position: "right",
    url: "https://www.linkedin.com/company/makemyworks/",
  },
  {
    id: 3,
    name: "Facebook",
    description: "Updates & Announcements",
    icon: <FaFacebookF />,
    iconBg: "#1877f2",
    position: "left",
    url: "https://www.facebook.com/profile.php?id=61594974970890",
  },
  {
    id: 4,
    name: "X (Twitter)",
    description: "Latest News & Thoughts",
    icon: <FaXTwitter />,
    iconBg: "#000000",
    position: "right",
    url: "https://x.com/MakeMyWorks",
  },
  {
    id: 5,
    name: "Blog",
    description: "Articles & Stories",
    icon: <FaBloggerB />,
    iconBg: "#ff5722",
    position: "left",
    url: "https://blog.makemyworks.com/",
  },
  {
    id: 6,
    name: "WhatsApp Channel",
    description: "Direct Connect",
    icon: <FaWhatsapp />,
    iconBg: "#25d366",
    position: "right",
    url: "https://wa.me/917703977002",   // 👈 SPACES THESESAANU (Fix)
  },
];

// --- Main Component ---
export default function SocialConnect() {
  return (
    <div className="social-section">
      <style>{`
        /* --- General Reset --- */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .social-section {
          position: relative;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 50%, #f0f7ff 100%);
          padding: 30px 24px 60px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* --- Header --- */
        .social-header {
          text-align: center;
          margin-top: 0;
          margin-bottom: 40px;
          z-index: 10;
          position: relative;
        }

        .social-tagline {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #2563eb;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .social-tagline::before,
        .social-tagline::after {
          content: '';
          width: 40px;
          height: 1.5px;
          background: #93c5fd;
        }

        .social-title {
          font-size: 38px;
          font-weight: 800;
          color: #0f172a;
          margin-top: 0;
          margin-bottom: 10px;
          line-height: 1.1;
        }

        .social-title span {
          color: #2563eb;
        }

        .social-subtitle {
          font-size: 16px;
          color: #64748b;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* --- Main Layout --- */
        .social-layout {
          position: relative;
          width: 100%;
          max-width: 1300px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 60px;
          align-items: center;
          z-index: 5;
        }

        /* --- Left & Right Columns --- */
        .social-column {
          display: flex;
          flex-direction: column;
          gap: 22px;
          max-width: 340px;
        }

        /* --- Social Card (Link) --- */
        .social-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 25px -10px rgba(37, 99, 235, 0.15);
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.8);
          text-decoration: none;
          color: inherit;
        }

        .social-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px -10px rgba(37, 99, 235, 0.25);
        }

        .social-card.left {
          transform: rotate(-1.5deg);
        }
        .social-card.left:hover {
          transform: rotate(-1.5deg) translateY(-4px);
        }

        .social-card.right {
          transform: rotate(1.5deg);
        }
        .social-card.right:hover {
          transform: rotate(1.5deg) translateY(-4px);
        }

        /* Icon */
        .card-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Text */
        .card-text {
          flex: 1;
        }

        .card-text h4 {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .card-text p {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        /* Arrow Button */
        .card-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          font-size: 14px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .social-card:hover .card-arrow {
          background: #2563eb;
          color: #ffffff;
          transform: translateX(4px);
        }

        /* --- Center Circle --- */
        .center-circle-wrapper {
          position: relative;
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Dashed Rings */
        .dashed-ring {
          position: absolute;
          border: 2px dashed #93c5fd;
          border-radius: 50%;
          opacity: 0.6;
        }

        .dashed-ring.outer {
          width: 100%;
          height: 100%;
          animation: rotateRing 30s linear infinite;
        }

        .dashed-ring.middle {
          width: 85%;
          height: 85%;
          opacity: 0.4;
          animation: rotateRing 25s linear infinite reverse;
        }

        /* Dots */
        .ring-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #2563eb;
          border-radius: 50%;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
        }

        .dot-1 { top: -6px; left: 50%; transform: translateX(-50%); }
        .dot-2 { bottom: -6px; left: 50%; transform: translateX(-50%); }
        .dot-3 { left: -6px; top: 50%; transform: translateY(-50%); }
        .dot-4 { right: -6px; top: 50%; transform: translateY(-50%); }

        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Inner White Circle */
        .center-circle {
          position: relative;
          width: 78%;
          height: 78%;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 60px -15px rgba(37, 99, 235, 0.25);
          padding: 30px;
          text-align: center;
          z-index: 5;
        }

        /* Logo */
        .circle-logo {
          font-size: 52px;
          font-weight: 900;
          color: #2563eb;
          letter-spacing: -2px;
          line-height: 1;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .circle-logo span {
          color: #0f172a;
        }

        .circle-logo .arrow-up {
          color: #2563eb;
          font-size: 42px;
          margin-left: -8px;
        }

        .circle-brand {
          font-size: 21px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .circle-brand span {
          color: #2563eb;
        }

        .circle-tagline {
          font-size: 11px;
          color: #64748b;
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        /* Avatars */
        .avatar-row {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 3px solid #ffffff;
          background: #e2e8f0;
          overflow: hidden;
          margin-left: -10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .avatar:first-child {
          margin-left: 0;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-count {
          width: 46px;
          height: 38px;
          border-radius: 19px;
          background: #2563eb;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -8px;
          border: 3px solid #ffffff;
        }

        /* Follow Button */
        .follow-btn {
          background: #2563eb;
          color: #ffffff;
          border: none;
          padding: 11px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px -5px rgba(37, 99, 235, 0.4);
          text-decoration: none;
        }

        .follow-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 12px 25px -5px rgba(37, 99, 235, 0.5);
        }

        /* --- Responsive Design --- */
        @media (max-width: 1100px) {
          .social-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .social-column {
            max-width: 460px;
            width: 100%;
            margin: 0 auto;
          }
          .center-circle-wrapper {
            order: -1;
            margin: 0 auto;
          }
          .social-title {
            font-size: 34px;
          }
          .center-circle-wrapper {
            width: 340px;
            height: 340px;
          }
          .circle-logo {
            font-size: 44px;
          }
          .circle-brand {
            font-size: 19px;
          }
        }

        @media (max-width: 500px) {
          .social-section {
            padding: 20px 16px 50px;
          }
          .social-header {
            margin-bottom: 30px;
          }
          .social-title {
            font-size: 26px;
          }
          .social-subtitle {
            font-size: 14px;
          }
          .social-layout {
            gap: 40px;
          }
          .social-column {
            max-width: 100%;
            gap: 16px;
          }
          .social-card {
            padding: 12px 14px;
            gap: 12px;
          }
          .card-icon-box {
            width: 42px;
            height: 42px;
            font-size: 19px;
          }
          .card-text h4 {
            font-size: 14px;
          }
          .card-text p {
            font-size: 11px;
          }
          .card-arrow {
            width: 30px;
            height: 30px;
          }
          .center-circle-wrapper {
            width: 290px;
            height: 290px;
          }
          .circle-logo {
            font-size: 38px;
          }
          .circle-brand {
            font-size: 16px;
          }
          .circle-tagline {
            font-size: 10px;
          }
          .avatar {
            width: 32px;
            height: 32px;
          }
          .avatar-count {
            height: 32px;
            width: 40px;
            font-size: 10px;
          }
          .follow-btn {
            padding: 9px 18px;
            font-size: 12px;
          }
        }
      `}</style>

      {/* --- Header --- */}
      <div className="social-header">
        <div className="social-tagline">Stay Connected</div>
        <h2 className="social-title">
          Follow Our <span>Journey</span>
        </h2>
        <p className="social-subtitle">
          Stay updated with our latest work, insights, tips and behind-the-scenes moments across all social platforms.
        </p>
      </div>

      {/* --- Main Layout --- */}
      <div className="social-layout">
        
        {/* Left Column */}
        <div className="social-column">
          {socialPlatforms.filter(p => p.position === 'left').map((platform) => (
            <SocialCard key={platform.id} platform={platform} />
          ))}
        </div>

        {/* Center Circle */}
        <div className="center-circle-wrapper">
          <div className="dashed-ring outer">
            <div className="ring-dot dot-1"></div>
            <div className="ring-dot dot-2"></div>
            <div className="ring-dot dot-3"></div>
            <div className="ring-dot dot-4"></div>
          </div>
          <div className="dashed-ring middle"></div>
          
          <div className="center-circle">
            <div className="circle-logo">
              M<span>W</span>
              <span className="arrow-up">↗</span>
            </div>
            <div className="circle-brand">
              Make My <span>Work</span>
            </div>
            <div className="circle-tagline">
              Ideas | Strategy | Growth
            </div>
            <div className="avatar-row">
              <div className="avatar">
                <img src="https://i.pravatar.cc/100?img=12" alt="User" />
              </div>
              <div className="avatar">
                <img src="https://i.pravatar.cc/100?img=32" alt="User" />
              </div>
              <div className="avatar">
                <img src="https://i.pravatar.cc/100?img=45" alt="User" />
              </div>
              <div className="avatar">
                <img src="https://i.pravatar.cc/100?img=68" alt="User" />
              </div>
              <div className="avatar-count">10K+</div>
            </div>
            <a 
              href="https://www.instagram.com/make_my_works" 
              target="_blank" 
              rel="noopener noreferrer"
              className="follow-btn"
            >
              Follow Us <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="social-column">
          {socialPlatforms.filter(p => p.position === 'right').map((platform) => (
            <SocialCard key={platform.id} platform={platform} />
          ))}
        </div>

      </div>
    </div>
  );
}

// --- Social Card Sub-Component ---
function SocialCard({ platform }: { platform: SocialPlatform }) {
  return (
    <a 
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-card ${platform.position}`}
    >
      <div 
        className="card-icon-box" 
        style={{ background: platform.iconBg }}
      >
        {platform.icon}
      </div>

      <div className="card-text">
        <h4>{platform.name}</h4>
        <p>{platform.description}</p>
      </div>

      <div className="card-arrow">
        <ArrowRight size={14} />
      </div>
    </a>
  );
}
