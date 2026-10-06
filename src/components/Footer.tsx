import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { BRAND, CONTACT, services, whatsappLink } from "../data/site";

export default function Footer() {
  return (
    <footer className="mw-footer">
      <div className="mw-wrap">
        <div className="mw-footer-top">
          <h2>
            Let&apos;s build something <span>that grows.</span>
          </h2>
          <Link to="/contact" className="mw-btn mw-btn-light mw-btn-lg">
            Start your project <Icon name="arrowUR" size={18} />
          </Link>
        </div>

        <div className="mw-footer-grid">
          <div>
            <Logo light />
            <p className="mw-footer-text">
              {BRAND.name} is a digital agency. We build websites and apps, create brands and videos, and bring you
              customers through Google and social media.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/our-work">Our Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4>Talk to us</h4>
            <ul className="mw-footer-contact">
              <li>
                <a href={CONTACT.phoneTel}><Icon name="phone" size={18} /> {CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}><Icon name="mail" size={18} /> {CONTACT.email}</a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={18} /> Chat on WhatsApp
                </a>
              </li>
              <li>
                <span><Icon name="pin" size={18} /> {CONTACT.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mw-footer-bottom">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>{BRAND.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
