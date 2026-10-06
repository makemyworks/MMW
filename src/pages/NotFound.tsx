import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mw-center-page">
      <p className="mw-404">404</p>
      <h1>This page could not be found</h1>
      <p>The link may be old or mistyped. Let us take you somewhere useful.</p>
      <div className="mw-btn-row mw-btn-row-center">
        <Link to="/" className="mw-btn mw-btn-primary">Go to Home</Link>
        <Link to="/contact" className="mw-btn mw-btn-ghost">Contact Us</Link>
      </div>
    </section>
  );
}
