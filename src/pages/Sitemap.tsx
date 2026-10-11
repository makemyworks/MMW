import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import LegalPageShell from "./LegalPageShell";

const pageGroups = [
  {
    title: "Explore Make My Works",
    links: [
      { label: "Home", to: "/" },
      { label: "About us", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Our work", to: "/ourwork" },
      { label: "Products", to: "/products" },
      { label: "SEO AI", to: "/seo-ai" },
      { label: "Links", to: "/links" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Help & policies",
    links: [
      { label: "Frequently Asked Questions", to: "/faq" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms-conditions" },
      { label: "Cookie & Browser Storage Policy", to: "/cookie-policy" },
      { label: "Refund & Cancellation Policy", to: "/refund-cancellation" },
      { label: "Website & Services Disclaimer", to: "/disclaimer" },
      { label: "Personal Data & Deletion Requests", to: "/data-deletion" },
      { label: "Accessibility Statement", to: "/accessibility" },
      { label: "Sitemap", to: "/sitemap" },
    ],
  },
];

export default function Sitemap() {
  return (
    <LegalPageShell
      title="Sitemap"
      eyebrow="FIND YOUR WAY"
      description="Browse the main sections of our website and find the service, contact, or policy page you need."
    >
      <div className="lgl-article">
        {pageGroups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            <div className="lgl-sitemap-grid">
              {group.links.map((item) => (
                <Link className="lgl-sitemap-link" to={item.to} key={item.to}>
                  <span>{item.label}</span><ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </LegalPageShell>
  );
}
