import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Compass, House, Search } from "lucide-react";
import "./legal-pages.css";

export default function NotFound() {
  return (
    <main className="lgl-standalone" aria-labelledby="not-found-title">
      <section className="lgl-standalone-card">
        <span className="lgl-standalone-icon"><Compass size={31} /></span>
        <span className="lgl-standalone-kicker">OOPS — WRONG TURN</span>
        <h1 id="not-found-title">404</h1>
        <h2>This page has gone off the map.</h2>
        <p>The link may be old, the address may be mistyped, or the page may have moved. Let’s get you back to something useful.</p>
        <div className="lgl-btn-row">
          <Link to="/" className="lgl-primary-btn"><House size={17} /> Back to homepage <ArrowRight size={16} /></Link>
          <Link to="/services" className="lgl-secondary-btn"><Search size={16} /> Explore services</Link>
          <button type="button" className="lgl-secondary-btn" onClick={() => window.history.back()}><ArrowLeft size={16} /> Go back</button>
        </div>
      </section>
    </main>
  );
}
