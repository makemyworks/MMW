import LegalPageShell from "./LegalPageShell";
import { BRAND, CONTACT } from "../data/site";

export default function TermsConditions() {
  return (
    <LegalPageShell
      title="Terms & Conditions"
      description={`These terms set the ground rules for using the ${BRAND.name} website and explain how project-specific proposals, approvals, payments, and deliverables work.`}
    >
      <div className="lgl-article">
        <p className="lgl-effective">Effective / last updated: 11 October 2026</p>

        <h2 id="acceptance">1. Acceptance of these terms</h2>
        <p>These Terms & Conditions (“Terms”) apply to your use of the {BRAND.name} website and, where not replaced or supplemented by a separate written agreement, describe the general terms for enquiries and digital services supplied by us. By using this website, you agree to use it lawfully and respect these Terms. If you do not agree, please stop using the website.</p>

        <h2 id="services">2. Our services</h2>
        <p>Our services may include website and app development, design and branding, video and social content, search and online marketing, AI-assisted creative work, automation, online-store setup, and related digital services. The exact deliverables, timeline, price, revision allowance, responsibilities, support period, and acceptance criteria will be set out in a proposal, quotation, statement of work, invoice, or other written agreement for each project.</p>
        <p>We do not begin chargeable work until the agreed scope and commercial terms have been accepted, except where both sides expressly agree otherwise in writing.</p>

        <h2 id="client-responsibilities">3. Your responsibilities</h2>
        <p>You agree to provide accurate instructions, timely feedback, approvals, access, and materials reasonably required for your project. You are responsible for ensuring that you have the rights and permissions needed for text, images, logos, footage, customer lists, software, and other material you supply.</p>
        <p>You must not use our website or services to violate law, infringe another person’s rights, distribute malicious code, mislead consumers, or interfere with the security or operation of systems.</p>

        <h2 id="quotes-payments">4. Quotes, payment, and taxes</h2>
        <p>Prices, currency, deposits, milestone payments, recurring fees, taxes, and due dates will be stated in the applicable proposal or invoice. Unless the written agreement says otherwise, additional work outside the approved scope may require a separate quote and approval. You are responsible for any taxes that the law requires you to pay, other than taxes imposed on our income.</p>
        <p>If an invoice becomes overdue, we may pause work or withhold delivery after giving any notice required by the applicable agreement or law. We will aim to communicate clearly about any delay or proposed change.</p>

        <h2 id="changes-approvals">5. Revisions, delays, and approvals</h2>
        <p>The number of included revision rounds and the method for approving deliverables should be stated in your project proposal. Requests that materially change the agreed brief, add new features, or arrive after approval may be treated as additional work. Timelines can be affected by late feedback, missing content, third-party outages, or scope changes; where this happens, we will work with you to agree a practical next step.</p>

        <h2 id="intellectual-property">6. Intellectual property and project materials</h2>
        <p>Each party keeps ownership of material it owned before a project. Any transfer or licence of final deliverables, source files, editable files, code, or other project-specific work will be described in the applicable written agreement. Unless that agreement says otherwise, transfer of ownership in custom final deliverables that are eligible for transfer is conditional on payment of the amounts due for those deliverables.</p>
        <p>Third-party assets, open-source software, fonts, stock media, platform features, and AI tools may be subject to separate licence terms. Those third-party terms continue to apply. We may use general skills, ideas, methods, and know-how retained in the ordinary course of working, provided we do not disclose your confidential information.</p>

        <h2 id="confidentiality">7. Confidentiality</h2>
        <p>Each party should handle the other party’s non-public business information with reasonable care and use it only for the relevant project or another agreed purpose. If your project requires stronger confidentiality, non-disclosure obligations, data-processing terms, or security commitments, please arrange a separate written agreement before sharing the relevant information.</p>

        <h2 id="third-party">8. Third-party platforms and AI-assisted work</h2>
        <p>Some projects depend on services we do not control, including search engines, advertising platforms, app stores, hosting providers, social networks, payment services, and external APIs. Their availability, pricing, policies, approval decisions, or features may change without our control. We are not responsible for independent changes or outages by those providers, although we will help with agreed support where practical.</p>
        <p>Where AI-assisted tools are used, the agreed workflow and deliverables should be confirmed in the project scope. You remain responsible for reviewing content that requires your industry expertise, factual confirmation, permissions, or approval before publication.</p>

        <h2 id="results">9. No guaranteed business results</h2>
        <p>We aim to provide professional work and communicate progress honestly. However, we cannot guarantee a particular search ranking, advertising approval, number of leads, sales volume, audience growth, revenue, or business result. These depend on many factors outside our control, including competition, platform algorithms, your offer, budget, market conditions, and how deliverables are used.</p>

        <h2 id="suspension">10. Suspension and termination</h2>
        <p>Either party may request to stop or end a project in accordance with the accepted proposal or separate agreement. Fees for work completed, approved milestones, and reasonable non-recoverable costs may remain payable, subject to the written agreement and applicable law. We may restrict access to the website or pause services where reasonably necessary for security, unlawful use, non-payment, or a material breach of agreed terms.</p>

        <h2 id="disclaimers-liability">11. Disclaimers and liability</h2>
        <p>The website is provided for general information and may be updated from time to time. To the extent permitted by law, we exclude implied warranties that cannot properly be relied on for a particular project without an express written commitment. Nothing in these Terms excludes rights or liability that cannot lawfully be excluded, including any non-waivable consumer rights.</p>
        <p>To the extent permitted by applicable law and subject to any project agreement, neither party will be liable for indirect or consequential loss arising from website use or a project. Any more specific limitation of liability must be agreed in the relevant written agreement and cannot override mandatory law.</p>

        <h2 id="privacy">12. Privacy</h2>
        <p>Our <a href="/privacy-policy">Privacy Policy</a> explains how website and enquiry information is handled. Please review it before submitting personal information.</p>

        <h2 id="changes">13. Changes to these Terms</h2>
        <p>We may revise these Terms by publishing an updated version on this page. Changes apply from the stated update date to future website use, subject to applicable law. A signed or otherwise accepted project agreement will continue to govern that project if it expressly states different terms.</p>

        <h2 id="law">14. Governing law and contact</h2>
        <p>These website Terms are intended to be interpreted under the laws applicable in India, subject to mandatory laws and protections that apply to you. The parties should first try to resolve a dispute in good faith. Nothing in this clause removes the jurisdiction of a court or authority that must remain available under applicable law.</p>
        <p>Questions about these Terms can be sent to <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
      </div>
    </LegalPageShell>
  );
}
