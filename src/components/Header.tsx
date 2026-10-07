import { NavLink } from "react-router-dom";
import { useState, type MouseEvent, type KeyboardEvent } from "react";

type ServiceItem = {
  icon: string;
  label: string;
  path: string;
};

const servicesColumn1: ServiceItem[] = [
  { icon: "📱", label: "App Development", path: "/services/app-development" },
  { icon: "🌐", label: "Website Development", path: "/services/website-development" },
  { icon: "🎬", label: "AI Video Generation", path: "/services/ai-video-generation" },
  { icon: "🖼️", label: "AI Image Generation", path: "/services/ai-image-generation" },
  { icon: "📈", label: "SEO & Google AI SEO", path: "/services/seo" },
];

const servicesColumn2: ServiceItem[] = [
  { icon: "⚙️", label: "Digital & Tech Solutions", path: "/services/digital-solutions" },
  { icon: "🛠️", label: "Tech Support & More", path: "/services/tech-support" },
  { icon: "📱", label: "Social Media Setup", path: "/services/social-media" },
  { icon: "🎨", label: "Logo Design & Branding", path: "/services/branding" },
  { icon: "💬", label: "WhatsApp Automation", path: "/services/whatsapp-automation" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = (
    e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>
  ) => {
    e.preventDefault();
    setServicesOpen((prev) => !prev);
  };

  const isTouchDevice = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: none)").matches;
  };

  const handleMouseEnter = () => {
    if (isTouchDevice()) return;
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice()) return;
    setServicesOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <NavLink
            to="/"
            className="header-brand"
            onClick={closeMenu}
          >
            <img
              src="/Images/logo.png"
              alt="Alpha Zeta World"
              className="header-logo"
            />
          </NavLink>

          <button
            type="button"
            className="header-menu-btn"
            onClick={() => {
              setOpen((prev) => !prev);
              setServicesOpen(false);
            }}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>

          <nav
            className={
              open
                ? "header-nav header-nav-open"
                : "header-nav"
            }
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "header-link header-link-active"
                  : "header-link"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "header-link header-link-active"
                  : "header-link"
              }
              onClick={closeMenu}
            >
              About
            </NavLink>

            <div
              className="header-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span
                role="button"
                tabIndex={0}
                className={
                  servicesOpen
                    ? "header-link header-services-link header-link-active"
                    : "header-link header-services-link"
                }
                onClick={toggleServices}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" ||
                    e.key === " "
                  ) {
                    e.preventDefault();
                    toggleServices(e);
                  }
                }}
              >
                <span>Services</span>
                <span
                  className={
                    servicesOpen
                      ? "header-arrow header-arrow-open"
                      : "header-arrow"
                  }
                >
                  ▾
                </span>
              </span>

              <div
                className={
                  servicesOpen
                    ? "header-mega-menu header-dropdown-open"
                    : "header-mega-menu"
                }
              >
                <div className="mega-menu-column">
                  {servicesColumn1.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "mega-dropdown-item mega-dropdown-item-active"
                          : "mega-dropdown-item"
                      }
                      onClick={closeMenu}
                    >
                      <span className="mega-icon">{item.icon}</span>
                      <span className="mega-label">{item.label}</span>
                    </NavLink>
                  ))}
                </div>
                <div className="mega-menu-column">
                  {servicesColumn2.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "mega-dropdown-item mega-dropdown-item-active"
                          : "mega-dropdown-item"
                      }
                      onClick={closeMenu}
                    >
                      <span className="mega-icon">{item.icon}</span>
                      <span className="mega-label">{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/*
            <NavLink
              to="/products-lab"
              className={({ isActive }) =>
                isActive
                  ? "header-link header-link-active"
                  : "header-link"
              }
              onClick={closeMenu}
            >
              Products
            </NavLink>
            */}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "header-link header-link-active"
                  : "header-link"
              }
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/contact"
              className="header-cta"
              onClick={closeMenu}
            >
              Get Started
            </NavLink>
          </nav>
        </div>
      </header>

      <style>{`
        .site-header,
        .site-header *,
        .site-header *::before,
        .site-header *::after {
          box-sizing: border-box;
        }

        .site-header {
          position: sticky;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          height: 64px;
          min-height: 64px;
          max-height: 64px;
          margin: 0;
          padding: 0;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: none;
          outline: none;
          box-shadow: none;
          font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Arial,
            Helvetica,
            sans-serif;
        }

        .header-container {
          width: 100%;
          max-width: 1280px;
          height: 64px;
          min-height: 64px;
          max-height: 64px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          border: none;
          outline: none;
          box-shadow: none;
        }

        .site-header .header-brand {
          width: auto;
          height: 64px;
          min-width: 190px;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-shrink: 0;
          text-decoration: none;
          border: none;
          outline: none;
          box-shadow: none;
        }

        .site-header .header-logo {
          display: block;
          width: auto;
          height: 66px;
          max-width: 190px;
          margin: 0;
          padding: 0;
          object-fit: contain;
          object-position: left center;
          border: none;
          outline: none;
          transition: transform 0.2s ease;
        }

        .site-header .header-logo:hover {
          transform: scale(1.02);
        }

        .site-header .header-nav {
          height: 64px;
          min-height: 64px;
          margin-left: auto;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 2rem;
          border: none;
          outline: none;
          box-shadow: none;
        }

        .site-header .header-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 64px;
          margin: 0;
          padding: 0;
          color: #1f2a3d;
          background: transparent;
          border: none;
          outline: none;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          transition: color 0.25s ease;
        }

        .site-header .header-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 8px;
          width: 0;
          height: 2px;
          background: #0f2044;
          transition: width 0.25s ease;
        }

        .site-header .header-link:hover {
          color: #0f2044;
        }

        .site-header .header-link:hover::after {
          width: 100%;
        }

        .site-header .header-link-active {
          color: #0f2044;
          font-weight: 600;
        }

        .site-header .header-link-active::after {
          width: 100%;
        }

        .site-header .header-dropdown {
          position: relative;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
          border: none;
        }

        .site-header .header-services-link {
          gap: 5px;
        }

        .site-header .header-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
          font-size: 9px;
          line-height: 1;
          transition: transform 0.25s ease;
        }

        .site-header .header-arrow-open {
          transform: rotate(180deg);
        }

        
        .site-header .header-mega-menu {
          position: absolute;
          top: calc(100% + 2px);
          left: 50%;
          width: max-content;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 20px;
          background: #ffffff;
          border: 1px solid #e5ece9;
          border-radius: 16px;
          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.05);
          transform: translateX(-50%) translateY(8px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition:
            opacity 0.25s ease,
            transform 0.25s ease,
            visibility 0.25s ease;
          z-index: 100;
        }
        .site-header .mega-menu-column {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
    

        
        .site-header .header-dropdown-open {
          transform: translateX(-50%) translateY(3px);
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
    

        

        
        .site-header .mega-dropdown-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 8px 12px;
          margin: 0;
          color: #071126;
          background: transparent;
          border: none;
          border-radius: 8px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .site-header .mega-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          margin-right: 12px;
          font-size: 16px;
          color: #1677F2;
        }
        .site-header .mega-label {
          color: #071126;
        }
    

        
        .site-header .mega-dropdown-item:hover {
          background: #E8F2FF;
          transform: translateX(2px);
        }
    

        
        .site-header .mega-dropdown-item-active {
          background: #E8F2FF;
          font-weight: 600;
        }
    

        .site-header .header-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          padding: 0 1.1rem;
          margin: 0;
          color: #ffffff;
          background: #0f2044;
          border: none;
          outline: none;
          border-radius: 20px;
          font-family: inherit;
          font-size: 0.83rem;
          font-weight: 600;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 5px 14px rgba(15, 32, 68, 0.15);
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .site-header .header-cta:hover {
          transform: translateY(-1px);
          background: #1a3a6b;
          box-shadow: 0 8px 18px rgba(15, 32, 68, 0.20);
        }

        .site-header .header-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          min-width: 36px;
          min-height: 36px;
          margin: 0 0 0 auto;
          padding: 0;
          color: #0f2044;
          background: #ffffff;
          border: 1px solid #dce8e3;
          outline: none;
          border-radius: 8px;
          font-family: inherit;
          font-size: 16px;
          line-height: 1;
          cursor: pointer;
        }

        @media (max-width: 1000px) {
          .site-header {
            height: 60px;
            min-height: 60px;
            max-height: 60px;
          }

          .header-container {
            height: 60px;
            min-height: 60px;
            max-height: 60px;
            padding: 0 1.5rem;
          }

          .site-header .header-brand {
            height: 60px;
            min-width: 180px;
          }

          .site-header .header-logo {
            height: 44px;
            max-width: 180px;
          }

          .site-header .header-nav {
            height: 60px;
            min-height: 60px;
            gap: 1.5rem;
          }

          .site-header .header-link {
            height: 60px;
            font-size: 0.86rem;
          }

          .site-header .header-dropdown {
            height: 60px;
          }

          .site-header .header-cta {
            height: 34px;
            padding: 0 0.95rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 760px) {
          .site-header {
            height: 56px;
            min-height: 56px;
            max-height: 56px;
            overflow: visible;
          }

          .header-container {
            height: 56px;
            min-height: 56px;
            max-height: 56px;
            padding: 0 1rem;
          }

          .site-header .header-brand {
            height: 56px;
            min-height: 56px;
            max-height: 56px;
            min-width: 0;
          }

          .site-header .header-logo {
            height: 38px;
            max-width: 140px;
          }

          .site-header .header-menu-btn {
            display: flex;
          }

          .site-header .header-nav {
            position: absolute;
            top: 56px;
            left: 0;
            right: 0;
            width: 100%;
            height: auto;
            max-height: calc(100vh - 56px);
            overflow-y: auto;
            margin: 0;
            padding: 0.35rem 1rem 0.8rem;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: none;
            outline: none;
            box-shadow: 0 10px 20px rgba(15, 32, 68, 0.07);
            transform: translateY(-8px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition:
              transform 0.2s ease,
              opacity 0.2s ease,
              visibility 0.2s ease;
            z-index: 999;
          }

          .site-header .header-nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }

          .site-header .header-nav > .header-link {
            width: 100%;
            height: 42px;
            min-height: 42px;
            max-height: 42px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #eef3f1;
          }

          .site-header .header-nav > .header-link::after {
            display: none;
          }

          .site-header .header-dropdown {
            position: static;
            width: 100%;
            height: auto;
            display: block;
            margin: 0;
            padding: 0;
            border-bottom: 1px solid #eef3f1;
          }

          .site-header .header-services-link {
            width: 100%;
            height: 42px;
            min-height: 42px;
            max-height: 42px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .site-header .header-services-link::after {
            display: none;
          }

          
          .site-header .header-mega-menu {
            position: static;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0;
            padding: 0;
            margin: 0;
            transform: none;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            background: #ffffff;
            border: none;
            border-left: 2px solid #1677F2;
            border-radius: 0;
            box-shadow: none;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
          }

          .site-header .header-dropdown-open {
            max-height: 600px;
            padding: 0.5rem 0;
          }

          .site-header .mega-menu-column {
            gap: 0;
          }

          .site-header .mega-dropdown-item {
            width: 100%;
            padding: 10px 1rem;
            border-radius: 0;
            font-size: 0.85rem;
          }

          .site-header .mega-dropdown-item:hover {
            background: #E8F2FF;
            transform: none;
          }
/* 
            width: 100%;
            min-width: 0;
            max-width: 100%;
            max-height: 0;
            overflow: hidden;
            margin: 0;
            padding: 0;
            transform: none;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            background: #f7faf9;
            border: none;
            border-left: 2px solid #0f2044;
            border-radius: 0;
            box-shadow: none;
            transition:
              max-height 0.25s ease,
              padding 0.2s ease;
          }

          */
/*
            padding: 0.15rem 0;
          }

          */

          /*
            height: 38px;
            min-height: 38px;
            padding: 0 0.9rem;
            border: none;
            border-radius: 0;
            font-size: 0.84rem;
          }

          */

          .site-header .header-cta {
            width: 100%;
            height: 38px;
            min-height: 38px;
            margin-top: 0.6rem;
            padding: 0 1rem;
            border-radius: 20px;
            font-size: 0.86rem;
          }
        }

        @media (max-width: 420px) {
          .site-header {
            height: 54px;
            min-height: 54px;
            max-height: 54px;
          }

          .header-container {
            height: 54px;
            min-height: 54px;
            max-height: 54px;
            padding: 0 0.8rem;
          }

          .site-header .header-brand {
            height: 54px;
            min-height: 54px;
            max-height: 54px;
          }

          .site-header .header-logo {
            height: 36px;
            max-width: 132px;
          }

          .site-header .header-menu-btn {
            width: 33px;
            height: 33px;
            min-width: 33px;
            min-height: 33px;
            max-width: 33px;
            max-height: 33px;
          }

          .site-header .header-nav {
            top: 54px;
            max-height: calc(100vh - 54px);
          }
        }
      `}</style>
    </>
  );
}