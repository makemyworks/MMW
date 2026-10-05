import { Link } from "react-router-dom";
import "../components/agency.css";
import { AgencyCTA } from "../components/AgencyBits";

const work = [
  { img: "/Images/eco.webp", title: "Furniture E-commerce Website", type: "Website & E-commerce", slug: "ecommerce-business-solutions", text: "A clean online store layout with category browsing, product highlights and a clear path to purchase." },
  { img: "/Images/hospital.webp", title: "Healthcare Website", type: "Website Development", slug: "website-app-development", text: "A trustworthy hospital site with doctor information, departments and easy appointment booking." },
  { img: "/Images/dash.webp", title: "Business Dashboard", type: "Web Application", slug: "website-app-development", text: "A lead and sales dashboard that turns numbers into clear charts and simple tables." },
  { img: "/Images/homemo.webp", title: "AI Video Ads & Social Content", type: "AI & Video", slug: "video-creative-content", text: "Short ads and reels for Instagram, YouTube and TikTok, created with a mix of AI and expert editing." },
  { img: "/Images/homedigi.webp", title: "Property App Design", type: "UI/UX & App Design", slug: "branding-graphic-design", text: "Mobile and web screens for a real-estate browsing experience." },
  { img: "/Images/servicecard.webp", title: "Brand Poster & Social Creative", type: "Branding & Graphic Design", slug: "branding-graphic-design", text: "Consistent branded creatives for social media and print." },
];

export default function OurWork() {
  return (
    <div className="az">
      <section className="az-hero">
        <div className="az-wrap">
          <h1>Our work</h1>
          <p>A look at the kinds of projects we create across websites, apps, AI content, branding and marketing. These are sample and concept projects that show our style and standard.</p>
          <div className="az-btns">
            <Link to="/products-lab" className="az-btn s">See Our Product Lab</Link>
            <Link to="/contact" className="az-btn p">Start Yours</Link>
          </div>
        </div>
      </section>

      <section className="az-sec">
        <div className="az-wrap">
          <div className="az-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
            {work.map((w) => (
              <Link key={w.title} to={`/services/${w.slug}`} className="az-card" style={{ padding: "1rem" }}>
                <img className="az-img" src={w.img} alt={w.title} loading="lazy" />
                <span className="az-tag">{w.type}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <span className="az-more">See this service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AgencyCTA title="Want results like these?" text="Tell us about your idea and we will suggest the best way to build it." />
    </div>
  );
}
