import { Link } from "react-router-dom";
import "../components/agency.css";
import { teamGroups } from "../data/services";
import { AgencyCTA } from "../components/AgencyBits";

export default function OurTeam() {
  return (
    <div className="az">
      <section className="az-hero">
        <div className="az-wrap">
          <h1>One team. One goal.</h1>
          <p>We bring different skills together so you get the technology, creativity and digital marketing support you need from one place.</p>
          <div className="az-btns">
            <Link to="/about" className="az-btn s">About Alpha Zeta World</Link>
            <Link to="/contact" className="az-btn p">Work With Us</Link>
          </div>
        </div>
      </section>

      <section className="az-sec">
        <div className="az-wrap">
          <h2>Seven specialist teams working together</h2>
          <p className="az-lead">Every project is managed by a coordinator, so you always have one person to talk to.</p>
          <div className="az-grid">
            {teamGroups.map((t) => (
              <div key={t.name} className="az-card">
                <div className="az-ico" aria-hidden="true">{t.icon}</div>
                <h3>{t.name}</h3>
                <p style={{ marginBottom: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgencyCTA title="Meet the team that will build your project" text="Book a free call and tell us what you are planning." />
    </div>
  );
}
