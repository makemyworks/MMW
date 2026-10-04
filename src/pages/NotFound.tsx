import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="azw-nf">
      <p className="azw-nf-code">404</p>
      <h1>This page could not be found</h1>
      <p className="azw-nf-text">
        The link may be old or mistyped. Let us take you back to something useful.
      </p>
      <div className="azw-nf-actions">
        <Link to="/" className="azw-nf-btn azw-nf-primary">Go to Home</Link>
        <Link to="/contact" className="azw-nf-btn azw-nf-secondary">Contact Us</Link>
      </div>

      <style>{`
        .azw-nf { min-height: 62vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 4rem 1.25rem; background: linear-gradient(180deg, #f6faf8, #fff); }
        .azw-nf-code { margin: 0; font-size: clamp(4rem, 14vw, 8rem); font-weight: 800; line-height: 1; color: #0a4b3f; }
        .azw-nf h1 { margin: 0.5rem 0; font-size: clamp(1.4rem, 4vw, 2rem); color: #0a2f28; }
        .azw-nf-text { max-width: 440px; margin: 0 0 1.5rem; color: #5b706a; line-height: 1.6; }
        .azw-nf-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
        .azw-nf-btn { padding: 0.8rem 1.6rem; border-radius: 999px; font-weight: 700; text-decoration: none; transition: transform .2s ease, background .2s ease; }
        .azw-nf-btn:hover { transform: translateY(-2px); }
        .azw-nf-primary { background: #0a4b3f; color: #fff; }
        .azw-nf-primary:hover { background: #0f5c4a; }
        .azw-nf-secondary { background: #fff; color: #0a4b3f; border: 1px solid #cfe0da; }
      `}</style>
    </section>
  );
}
