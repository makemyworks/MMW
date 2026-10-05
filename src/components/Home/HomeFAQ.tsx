import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../agency.css";

const faqs = [
  { q: "What does Alpha Zeta World do?", a: "We are a full-service digital agency. We build websites and apps, create AI content and video, design brands, run SEO and marketing, set up online stores and automation, and keep everything running with ongoing support." },
  { q: "Can you work with clients from other countries?", a: "Yes. We work online, so we can help businesses from anywhere. Meetings are held by video call and updates are shared by WhatsApp or email." },
  { q: "How much does a project cost?", a: "It depends on what you need. Tell us your goals and budget and we will send a clear written quote with no hidden costs." },
  { q: "How long will my project take?", a: "A simple website often takes 2 to 4 weeks. Larger apps and campaigns take longer. We agree a timeline with you before we start." },
  { q: "Do you provide support after launch?", a: "Yes. We offer maintenance, bug fixing, updates, hosting help and performance improvements." },
  { q: "Do you buy followers or likes?", a: "No. We only use legitimate growth: organic content, audience building, SEO and paid advertising." },
];

export default function HomeFAQ() {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "faq-jsonld";
    el.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(el);
    return () => {
      document.getElementById("faq-jsonld")?.remove();
    };
  }, []);

  return (
    <div className="az">
      <section className="az-sec az-faq">
        <div className="az-wrap" style={{ maxWidth: 820 }}>
          <h2>Frequently asked questions</h2>
          <p className="az-lead">Quick answers before you get in touch.</p>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
          <div className="az-btns" style={{ marginTop: "1.2rem" }}>
            <Link to="/contact" className="az-btn p">Ask Us Anything</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
