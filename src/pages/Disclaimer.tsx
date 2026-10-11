import LegalPageShell from "./LegalPageShell";
import { BRAND, CONTACT } from "../data/site";

export default function Disclaimer() {
  return (
    <LegalPageShell
      title="Website & Services Disclaimer"
      description={`Important information about website content, third-party platforms, AI-assisted work, and the business results that ${BRAND.name} can—and cannot—promise.`}
    >
      <div className="lgl-article">
        <p className="lgl-effective">Effective / last updated: 11 October 2026</p>

        <h2 id="general">1. General information</h2>
        <p>The information on the {BRAND.name} website is provided for general informational purposes. We try to keep it clear and current, but content may be incomplete, out of date, or not suitable for your specific situation. You should confirm important details with us before relying on them for a business decision.</p>

        <h2 id="no-professional-advice">2. Not professional advice</h2>
        <p>Our website content and digital services are not legal, tax, accounting, medical, investment, or other regulated professional advice. Consult a qualified professional who understands your circumstances before making a decision that requires such advice.</p>

        <h2 id="results">3. No guaranteed results</h2>
        <p>We work to deliver thoughtful digital work, but results depend on factors beyond our control. We do not guarantee specific search-engine rankings, advertising approval, website traffic, leads, sales, follower counts, app-store placement, conversion rates, revenue, or return on investment unless a clear, lawful, written guarantee is expressly included in a signed project agreement.</p>

        <h2 id="third-party">4. Third-party platforms and links</h2>
        <p>References or links to third-party tools and websites are provided for convenience. We do not control those providers’ content, availability, prices, policies, security, or decisions. A link or mention does not necessarily mean that we endorse the provider. You should review their terms and privacy notices before using them.</p>

        <h2 id="ai">5. AI-assisted content and automation</h2>
        <p>Some creative or technical workflows may use AI-assisted tools. AI-generated or AI-assisted output can contain errors, similarity to existing material, or content that needs human verification. Unless the project agreement says otherwise, you are responsible for checking the final output for factual accuracy, suitability, permissions, regulatory compliance, and brand requirements before publication or use.</p>

        <h2 id="availability">6. Availability and technical issues</h2>
        <p>We take reasonable steps to keep our website useful and secure, but uninterrupted access cannot be guaranteed. Temporary outages, bugs, maintenance, internet issues, cyber incidents, or third-party service changes may affect availability. Please contact us if you identify an apparent error or accessibility issue.</p>

        <h2 id="liability">7. Limitation of responsibility</h2>
        <p>To the extent permitted by applicable law, {BRAND.name} is not responsible for loss arising from reliance on general website information, third-party content, or factors outside our reasonable control. Nothing in this disclaimer limits a right or liability that cannot legally be limited. A project-specific written agreement may set out additional terms.</p>

        <h2 id="contact">8. Contact</h2>
        <p>Questions about this disclaimer can be sent to <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
      </div>
    </LegalPageShell>
  );
}
