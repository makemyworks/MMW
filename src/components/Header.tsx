import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services", end: false },
  { to: "/our-work", label: "Our Work", end: false },
  { to: "/about", label: "About", end: false },
  { to: "/contact", label: "Contact", end: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="mw-header">
      <div className="mw-wrap mw-header-inner">
        <Logo />

        <nav className={open ? "mw-nav mw-nav-open" : "mw-nav"} aria-label="Main menu">
          {links.map((l) => (
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
