import { Link } from "react-router-dom";
import "../components/agency.css";
import { AgencyCTA, ServiceCards, GrowthList, WhyList } from "../components/AgencyBits";

export default function OurServices() {
  return (
    <div className="az">
      <section className="az-hero">
        <div className="az-wrap">
          <h1>A full-service digital agency under one roof</h1>
          <p>
            Build, brand, market, automate and grow online with one coordinated team. Websites, apps, AI,
            branding, content, marketing, SEO and automation.
          </p>
          <div className="az-btns">
            <Link to="/contact" className="az-btn p">Talk to Us</Link>
            <Link to="/solutions" className="az-btn s">Find the Right Solution</Link>
          </div>
        </div>
      </section>

      <section className="az-sec">
        <div className="az-wrap">
          <h2>Our 8 service areas</h2>
          <p className="az-lead">Choose a category to see exactly what is included, who it suits and common questions.</p>
          <ServiceCards />
        </div>
      </section>

      <section className="az-sec soft">
        <div className="az-wrap">
          <h2>Honest, legitimate growth</h2>
          <p className="az-lead">
            We grow your brand the right way. We do not sell fake followers, likes or comments. We focus on
            real audiences and real customers.
          </p>
          <GrowthList />
        </div>
      </section>

      <section className="az-sec">
        <div className="az-wrap">
          <h2>Why Alpha Zeta World?</h2>
          <p className="az-lead">One team, one goal: your growth.</p>
          <WhyList />
        </div>
      </section>

      <AgencyCTA />
    </div>
  );
}
