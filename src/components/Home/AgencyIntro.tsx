import { Link } from "react-router-dom";
import "../agency.css";
import { ServiceCards, WhyList } from "../AgencyBits";

export default function AgencyIntro() {
  return (
    <div className="az">
      <section className="az-sec">
        <div className="az-wrap">
          <h2>Your Business. Our Digital Solutions.</h2>
          <p className="az-lead">
            Everything your business needs to build, launch, market and grow online, under one digital
            agency. We combine technology, AI, creative design and digital marketing to help you create a
            strong online presence, reach the right audience and turn ideas into real results.
          </p>
          <ServiceCards />
          <div className="az-btns" style={{ marginTop: "1.6rem" }}>
            <Link to="/our-services" className="az-btn p">View All Services</Link>
            <Link to="/contact" className="az-btn s">Get a Free Consultation</Link>
          </div>
        </div>
      </section>

      <section className="az-sec soft">
        <div className="az-wrap az-two">
          <div>
            <h2>One Agency. Multiple Digital Solutions.</h2>
            <p className="az-lead" style={{ marginBottom: 0 }}>
              From the first logo and website to marketing, AI content, SEO and business automation, our
              team manages your complete digital journey. Build better. Look professional. Reach more
              customers. Grow online.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.3rem" }}>Why Alpha Zeta World?</h2>
            <WhyList />
          </div>
        </div>
      </section>
    </div>
  );
}
