import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, House } from "lucide-react";
import "./legal-pages.css";

/** Optional post-submission landing page. Connect it to a real success state before using it in a form flow. */
export default function ThankYou() {
  return (
    <main className="lgl-standalone" aria-labelledby="thank-you-title">
      <section className="lgl-standalone-card">
        <span className="lgl-standalone-icon lgl-thankyou-mark"><CheckCircle2 size={32} /></span>
        <span className="lgl-standalone-kicker">MESSAGE RECEIVED</span>
        <h2 id="thank-you-title">Thanks for reaching out.</h2>
        <p>Your next step is simple: our team will review the information submitted and follow up using the contact details provided. This page should only be shown after your form or backend confirms successful submission.</p>
        <div className="lgl-btn-row">
          <Link to="/" className="lgl-primary-btn"><House size={17} /> Back to homepage <ArrowRight size={16} /></Link>
          <Link to="/services" className="lgl-secondary-btn">Explore our services</Link>
        </div>
      </section>
    </main>
  );
}
