import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { services } from "../data/site";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/our-work", label: "Our Work", end: false },
  { to: "/about", label: "About", end: false },
  { to: "/contact", label: "Contact", end: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeDropdown = () => {
    const el = document.activeElement;
    if (el instanceof HTMLElement) el.blur();
  };

  return (
    <header className={scrolled ? "mw-header is-scrolled" : "mw-header"}>
      <div className="mw-wrap mw-header-inner">
        <Logo />

        <nav className={open ? "mw-nav mw-nav-open" : "mw-nav"} aria-label="Main menu">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "mw-nav-link active" : "mw-nav-link")}>
            Home
          </NavLink>

          <div className="mw-dd">
            <NavLink to="/services" className={({ isActive }) => (isActive ? "mw-nav-link active" : "mw-nav-link")}>
              Services <Icon name="chevron" size={14} />
            </NavLink>
            <div className="mw-dd-menu">
              {services.map((s) => (
                <Link key={s.id} to={`/services#${s.id}`} className="mw-dd-item" onClick={closeDropdown}>
                  <span className="mw-dd-icon"><Icon name={s.icon} size={18} /></span>
                  <span>{s.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {links.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? "mw-nav-link active" : "mw-nav-link")}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="mw-btn mw-btn-primary mw-nav-cta">
            Get Free Quote
          </NavLink>
        </nav>

        <button
          type="button"
          className="mw-menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </div>
    </header>
  );
}
