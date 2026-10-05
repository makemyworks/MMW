import { Link } from "react-router-dom";
import "../components/agency.css";
import { services, PHONE_DISPLAY } from "../data/services";
import { AgencyCTA } from "../components/AgencyBits";

const bySlug = (slug: string) => services.find((s) => s.slug === slug)!;

const packs = [
  { icon: "🚀", title: "Startup Launch", text: "Everything to look professional and go live fast: brand identity, a clean website and a launch-ready social presence.", slugs: ["branding-graphic-design", "website-app-development", "video-creative-content"] },
  { icon: "🏪", title: "Local Business Growth", text: "Get found in your area and turn searches into calls and visits with local SEO, Google Business Profile and WhatsApp enquiries.", slugs: ["seo-digital-marketing", "ecommerce-business-solutions", "website-app-development"] },
  { icon: "🛍️", title: "Online Store", text: "Launch and run an online shop with great product images, secure payments and ads that bring buyers.", slugs: ["ecommerce-business-solutions", "product-image-fashion-visuals", "seo-digital-marketing"] },
  { icon: "👗", title: "Fashion & Product Brands", text: "Catalogue-ready visuals, AI fashion imagery and reels that make your products stand out.", slugs: ["product-image-fashion-visuals", "ai-solutions-automation", "video-creative-content"] },
  { icon: "⚙️", title: "Automate & Save Time", text: "Chatbots, automated follow-ups and simple CRM tools so enquiries never slip through.", slugs: ["ai-solutions-automation", "ecommerce-business-solutions", "maintenance-technical-support"] },
  { icon: "📣", title: "Brand Awareness Campaign", text: "Content, creatives and paid ads working together to build an audience that actually buys.", slugs: ["video-creative-content", "seo-digital-marketing", "branding-graphic-design"] },
];

const journey = [
  { t: "Build", d: "Website, app or store designed around your goals." },
  { t: "Brand", d: "A consistent identity that earns trust." },
  { t: "Market", d: "SEO, content and ads that reach the right people." },
  { t: "Automate", d: "AI and tools that save time and answer customers." },
  { t: "Grow", d: "Reports, support and improvements month after month." },
];

export default function Solutions() {
  return (
    <div className="az">
      <section className="az-hero">
        <div className="az-wrap">
          <h1>Solutions made for your kind of business</h1>
          <p>Not sure what you need? Pick the situation closest to yours. Each solution combines the right services into one simple plan, and every plan is customised for you.</p>
          <div className="az-btns"><Link to="/contact" className="az-btn p">Get a Custom Plan</Link></div>
        </div>
      </section>

      <section className="az-sec">
        <div className="az-wrap">
          <h2>Popular solutions</h2>
          <p className="az-lead">Starting points, not fixed packages. We adjust scope and budget to fit you.</p>
          <div className="az-grid">
            {packs.map((p) => (
              <div key={p.title} className="az-card">
                <div className="az-ico" aria-hidden="true">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="az-tags">
                  {p.slugs.map((s) => <Link key={s} to={`/services/${s}`}>{bySlug(s).title}</Link>)}
                </div>
                <Link to="/contact" className="az-more">Ask about this →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="az-sec soft">
        <div className="az-wrap">
          <h2>Your complete digital journey</h2>
          <p className="az-lead">From the first logo to long-term growth, one team stays with you at every step.</p>
          <div className="az-steps">
            {journey.map((j) => <div key={j.t} className="az-step"><h3>{j.t}</h3><p>{j.d}</p></div>)}
          </div>
        </div>
      </section>

      <AgencyCTA title="Not sure where to start?" text={`Call or WhatsApp us on ${PHONE_DISPLAY} for a free, no-pressure chat.`} />
    </div>
  );
}
