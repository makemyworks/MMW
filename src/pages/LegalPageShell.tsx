import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { BRAND, CONTACT } from "../data/site";
import "./legal-pages.css";

type LegalPageShellProps = {
  title: string;
  eyebrow?: string;
  description: string;
  children: ReactNode;
  updatedOn?: string;
};

const quickLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Refund & Cancellation", to: "/refund-cancellation" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Data Requests", to: "/data-deletion" },
  { label: "Accessibility", to: "/accessibility" },
  { label: "Frequently Asked Questions", to: "/faq" },
];

export default function LegalPageShell({
  title,
  eyebrow = "LEGAL & TRANSPARENCY",
  description,
  children,
  updatedOn = "11 October 2026",
}: LegalPageShellProps) {
  return (
    <div className="lgl-page">
      <section className="lgl-hero">
        <div className="lgl-hero-glow lgl-hero-glow-one" aria-hidden="true" />
        <div className="lgl-hero-glow lgl-hero-glow-two" aria-hidden="true" />
        <div className="lgl-container lgl-hero-inner">
          <div className="lgl-breadcrumbs">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{title}</span>
          </div>
          <div className="lgl-hero-copy">
            <span className="lgl-eyebrow"><ShieldCheck size={15} /> {eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="lgl-meta-row">
              <span><FileText size={15} /> Last updated: {updatedOn}</span>
              <span><Sparkles size={15} /> Clear terms. Better trust.</span>
            </div>
          </div>
        </div>
      </section>

      <div className="lgl-container lgl-content-grid">
        <article className="lgl-legal-column">
          <div className="lgl-article-note">
            <ShieldCheck size={19} aria-hidden="true" />
            <p>This page explains how {BRAND.name} approaches this topic in plain language. For a project, your accepted proposal or written agreement may add specific terms.</p>
          </div>
          {children}
          <div className="lgl-article-end">
            <span className="lgl-end-mark" aria-hidden="true"><ShieldCheck size={18} /></span>
            <div>
              <strong>Still have a question?</strong>
              <p>We are happy to explain anything that is unclear before you get started.</p>
              <a href={`mailto:${CONTACT.email}`} className="lgl-inline-link">Email {CONTACT.email} <ArrowRight size={15} /></a>
            </div>
          </div>
        </article>

        <aside className="lgl-sidebar" aria-label="Helpful links">
          <div className="lgl-side-card lgl-side-card-nav">
            <div className="lgl-side-heading"><span className="lgl-side-icon"><FileText size={17} /></span><h2>Helpful pages</h2></div>
            <nav className="lgl-side-links">
              {quickLinks.map((item) => (
                <Link to={item.to} key={item.to}>{item.label}<ArrowRight size={14} /></Link>
              ))}
              <Link to="/sitemap">Full sitemap<ArrowRight size={14} /></Link>
            </nav>
          </div>
          <div className="lgl-side-card lgl-help-card">
            <span className="lgl-help-icon"><Mail size={19} /></span>
            <p className="lgl-help-kicker">WE’RE HERE TO HELP</p>
            <h2>Need a human answer?</h2>
            <p>Talk to our team about a project, a policy, or a data request.</p>
            <Link to="/contact" className="lgl-side-cta">Contact our team <ArrowRight size={16} /></Link>
          </div>
        </aside>
      </div>

      <section className="lgl-bottom-cta">
        <div className="lgl-container lgl-bottom-cta-inner">
          <div>
            <span className="lgl-bottom-kicker">MAKE YOUR NEXT MOVE</span>
            <h2>Build something meaningful with {BRAND.name}.</h2>
            <p>Tell us what your business needs. We’ll help you understand the next step.</p>
          </div>
          <Link to="/contact" className="lgl-primary-btn">Start a conversation <ArrowRight size={17} /></Link>
        </div>
      </section>
    </div>
  );
}
