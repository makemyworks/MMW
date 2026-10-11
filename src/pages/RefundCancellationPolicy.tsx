import LegalPageShell from "./LegalPageShell";
import { BRAND, CONTACT } from "../data/site";

export default function RefundCancellationPolicy() {
  return (
    <LegalPageShell
      title="Refund & Cancellation Policy"
      description={`A clear starting point for changing or cancelling a digital project with ${BRAND.name}. The accepted proposal and applicable law always matter.`}
    >
      <div className="lgl-article">
        <p className="lgl-effective">Effective / last updated: 11 October 2026</p>

        <h2 id="scope">1. Scope of this policy</h2>
        <p>{BRAND.name} provides customised digital services, which may include website and app development, branding, creative production, marketing, automation, and online-store setup. This policy explains the general approach to cancellations and refund requests. The proposal, invoice, subscription terms, or signed agreement for your project may contain more specific conditions and should be read carefully.</p>

        <h2 id="before-start">2. Before work begins</h2>
        <p>If you ask to cancel before work has started, contact us as soon as possible in writing. We will review the agreed terms, any payment already made, and any costs already committed on your behalf. Any amount eligible for refund will be determined under the applicable proposal and law.</p>

        <h2 id="after-start">3. After work has started</h2>
        <p>Digital projects often require reserved time, planning, design, development, research, licensing, or other work before a deliverable is complete. If a project is cancelled after work has begun, we may account for work already performed, approved milestones, and reasonable non-recoverable third-party costs, as allowed by the applicable agreement and law. A cancellation does not automatically create a right to a full refund.</p>
        <p>Where practical, we will explain the status of the work and the calculation used for any amount due or eligible for return.</p>

        <h2 id="deliverables">4. Delivered or approved work</h2>
        <p>Once a milestone or deliverable has been supplied and approved, fees for that portion of the work are generally handled according to the agreed proposal. If a deliverable has a defect against the written scope, notify us with reasonable detail so we can assess and, where appropriate, correct it in line with the project agreement.</p>

        <h2 id="subscriptions">5. Recurring services</h2>
        <p>If you purchase a recurring service or retainer, the agreed billing interval, cancellation notice, renewal date, and any minimum term should be set out in the subscription proposal or order. To avoid an unwanted renewal, submit a cancellation request before the notice deadline specified in that agreement. If no recurring plan is offered to you, this section does not create one.</p>

        <h2 id="nonrefundable-costs">6. Third-party fees and expenses</h2>
        <p>Domain registrations, hosting, software subscriptions, paid media spend, stock assets, payment-processing fees, and other third-party charges may be governed by the relevant provider’s terms. We will explain any such costs in the proposal where known. A third-party fee may be non-refundable even if a related project is cancelled, subject to applicable law and the provider’s actual terms.</p>

        <h2 id="request">7. How to request a cancellation or refund review</h2>
        <ol>
          <li>Email <a href={`mailto:${CONTACT.email}?subject=Cancellation%20or%20refund%20request`}>{CONTACT.email}</a> from the address associated with the project.</li>
          <li>Include your name or business name, project reference or invoice number if available, the requested action, and a short explanation.</li>
          <li>We will review the applicable agreement and respond with the next steps or any information needed to assess the request.</li>
        </ol>
        <p>Please do not send payment-card numbers or passwords by email.</p>

        <h2 id="processing">8. Approved refunds</h2>
        <p>If a refund is approved, we will confirm the amount and method. Timing may depend on the payment provider, bank, currency, and any legal requirements. This policy does not remove any mandatory rights you may have under applicable law.</p>

        <h2 id="changes">9. Policy updates and contact</h2>
        <p>We may update this policy as our services or legal obligations change. The version date appears above. For questions, contact <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> before placing an order or accepting a proposal if a cancellation term is important to your decision.</p>
      </div>
    </LegalPageShell>
  );
}
