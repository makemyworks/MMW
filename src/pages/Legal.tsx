import { Link } from "react-router-dom";
import { BRAND, CONTACT } from "../data/site";

type Kind = "privacy" | "terms" | "cookies";
type Block = { heading: string; body: string[] };

const UPDATED = "October 2026";
const EMAIL = CONTACT.email;

const CONTENT: Record<Kind, { title: string; intro: string; blocks: Block[] }> = {
  privacy: {
    title: "Privacy Policy",
    intro: `${BRAND.name} respects your privacy. This page explains in simple words what information we collect, why, and the choices you have.`,
    blocks: [
      {
        heading: "What we collect",
        body: [
          "Details you give us on purpose, such as your name, email, phone or WhatsApp number and project notes when you fill in our contact form or message us.",
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
          "Only our team and the trusted tools we use to run the business, such as email and form delivery services. They may only use your data to provide their service to us.",
          "We may share information if the law requires it.",
        ],
      },
      {
        heading: "Your choices",
        body: [`You can ask to see, correct or delete the information we hold about you at any time by writing to ${EMAIL}.`],
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "By using this website and our services you agree to the simple terms below. Please read them before starting a project with us.",
    blocks: [
      {
        heading: "Our services",
        body: [
          `${BRAND.name} provides websites and apps, branding, video, marketing, AI tools and related digital services. The scope, timeline and price of each project are agreed in writing before work begins.`,
        ],
      },
      {
        heading: "Payments",
        body: ["Payment terms, including any advance amount, are stated in your proposal or invoice. Work may pause if payments are overdue."],
      },
      {
        heading: "Ownership",
        body: ["After full payment, you own the final deliverables made specifically for you. We may show non-confidential work in our portfolio unless you ask us not to."],
      },
      {
        heading: "Results",
        body: ["We work hard to deliver strong results, but we cannot guarantee specific rankings, traffic or sales, because these depend on many factors outside our control, such as search engine changes."],
      },
      {
        heading: "Contact",
        body: [`Questions about these terms? Email us at ${EMAIL}.`],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro: "Cookies are small files saved on your device. This page explains how our website may use them.",
    blocks: [
      {
        heading: "How we use cookies",
        body: [
          "To keep the website working properly and to remember simple choices, such as closing the cookie notice.",
          "If we add analytics, we use them only to understand which pages are useful so we can improve them.",
        ],
      },
      {
        heading: "Managing cookies",
        body: ["You can block or delete cookies in your browser settings at any time. Some parts of the website may work less smoothly if you do."],
      },
      {
        heading: "Contact",
        body: [`Questions? Email us at ${EMAIL}.`],
      },
    ],
  },
};

export default function Legal({ kind }: { kind: Kind }) {
  const page = CONTENT[kind];
  return (
    <section className="mw-legal">
      <div className="mw-legal-card">
        <span className="mw-eyebrow">Legal</span>
        <h1>{page.title}</h1>
        <p className="mw-legal-date">Last updated: {UPDATED}</p>
        <p className="mw-legal-intro">{page.intro}</p>
        {page.blocks.map((b) => (
          <div key={b.heading} className="mw-legal-block">
            <h2>{b.heading}</h2>
            {b.body.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        ))}
        <Link to="/contact" className="mw-btn mw-btn-primary">Contact Us</Link>
      </div>
    </section>
  );
}
