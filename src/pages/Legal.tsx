import { Link } from "react-router-dom";

type LegalKind = "privacy" | "terms" | "cookies";

type Section = { heading: string; body: string[] };

const EMAIL = "alphazetaworld@gmail.com";
const UPDATED = "October 2026";

const CONTENT: Record<LegalKind, { title: string; intro: string; sections: Section[] }> = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "Alpha Zeta World respects your privacy. This page explains in simple words what information we collect, why we collect it, and the choices you have.",
    sections: [
      {
        heading: "What we collect",
        body: [
          "Details you give us on purpose, such as your name, email, phone or WhatsApp number, company name, budget and project notes when you fill in our contact form or message us.",
          "Basic technical data such as browser type and pages visited, which helps us keep the website working well.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "To reply to your enquiry, prepare proposals and deliver the services you ask for.",
          "To improve our website and services. We do not sell your personal information.",
        ],
      },
      {
        heading: "Who can see it",
        body: [
          "Only our team and trusted tools we use to run the business (for example email and form delivery services). They may only use your data to provide their service to us.",
          "We may share information if the law requires it.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          `You can ask us to see, correct or delete the information we hold about you at any time by writing to ${EMAIL}.`,
        ],
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro:
      "By using this website and our services you agree to the simple terms below. Please read them before starting a project with us.",
    sections: [
      {
        heading: "Our services",
        body: [
          "Alpha Zeta World provides web and app development, AI video content, SEO and AI search optimization, and related digital services. The exact scope, timeline and price of each project are agreed in writing before work begins.",
        ],
      },
      {
        heading: "Payments",
        body: [
          "Payment terms, including any advance amount, are stated in your proposal or invoice. Work may pause if payments are overdue.",
        ],
      },
      {
        heading: "Ownership",
        body: [
          "After full payment, you own the final deliverables made specifically for you. We may show non-confidential work in our portfolio unless you ask us not to.",
        ],
      },
      {
        heading: "Results",
        body: [
          "We work hard to deliver strong results, but we cannot guarantee specific rankings, traffic or sales, because these depend on many factors outside our control, such as search engine changes.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about these terms? Email us at ${EMAIL}.`],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro:
      "Cookies are small files saved on your device. This page explains how our website may use them.",
    sections: [
      {
        heading: "How we use cookies",
        body: [
          "To keep the website working properly and remember simple preferences.",
          "If we add analytics, we use them only to understand which pages are useful so we can improve them.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can block or delete cookies in your browser settings at any time. Some parts of the website may work less smoothly if you do.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions? Email us at ${EMAIL}.`],
      },
    ],
  },
};

export default function Legal({ kind }: { kind: LegalKind }) {
  const page = CONTENT[kind];

  return (
    <section className="azw-legal">
      <div className="azw-legal-inner">
        <p className="azw-legal-eyebrow">Legal</p>
        <h1>{page.title}</h1>
        <p className="azw-legal-updated">Last updated: {UPDATED}</p>
        <p className="azw-legal-intro">{page.intro}</p>

        {page.sections.map((s) => (
          <div key={s.heading} className="azw-legal-block">
            <h2>{s.heading}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}

        <Link to="/contact" className="azw-legal-btn">
          Contact Us
        </Link>
      </div>

      <style>{`
        .azw-legal { background: #f6faf8; padding: 4.5rem 1.25rem 5rem; }
        .azw-legal-inner { max-width: 820px; margin: 0 auto; background: #fff; border: 1px solid #e0ebe7; border-radius: 18px; padding: 2.5rem 2.25rem; box-shadow: 0 10px 30px rgba(10,75,63,0.06); }
        .azw-legal-eyebrow { margin: 0; font-size: 0.75rem; letter-spacing: 2px; font-weight: 800; text-transform: uppercase; color: #0a4b3f; }
        .azw-legal h1 { margin: 0.5rem 0 0.25rem; font-size: clamp(1.9rem, 4vw, 2.6rem); color: #0a2f28; line-height: 1.15; }
        .azw-legal-updated { margin: 0 0 1.25rem; font-size: 0.85rem; color: #6b7f79; }
        .azw-legal-intro { font-size: 1.05rem; line-height: 1.7; color: #3d514b; }
        .azw-legal-block h2 { margin: 1.75rem 0 0.4rem; font-size: 1.2rem; color: #0a4b3f; }
        .azw-legal-block p { margin: 0 0 0.6rem; font-size: 1rem; line-height: 1.7; color: #4a5f58; }
        .azw-legal-btn { display: inline-flex; margin-top: 1.75rem; padding: 0.8rem 1.5rem; border-radius: 999px; background: #0a4b3f; color: #fff; font-weight: 700; text-decoration: none; transition: background .2s ease, transform .2s ease; }
        .azw-legal-btn:hover { background: #0f5c4a; transform: translateY(-2px); }
        @media (max-width: 560px) { .azw-legal { padding: 2.5rem 0.9rem 3.5rem; } .azw-legal-inner { padding: 1.6rem 1.25rem; } }
      `}</style>
    </section>
  );
}
