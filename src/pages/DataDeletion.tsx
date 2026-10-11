import { Link } from "react-router-dom";
import { ArrowRight, Mail, ShieldCheck, Trash2 } from "lucide-react";
import LegalPageShell from "./LegalPageShell";
import { BRAND, CONTACT } from "../data/site";

export default function DataDeletion() {
  return (
    <LegalPageShell
      title="Personal Data & Deletion Requests"
      description={`Use this page to ask ${BRAND.name} about personal information we may hold, or to request correction or deletion where available under applicable law.`}
    >
      <div className="lgl-article">
        <p className="lgl-effective">Effective / last updated: 11 October 2026</p>

        <h2 id="your-options">1. What you can request</h2>
        <p>You can contact us to ask about personal information linked to your enquiry or business relationship. Depending on the circumstances and applicable law, requests may include:</p>
        <div className="lgl-card-grid">
          <div className="lgl-mini-card"><h3><ShieldCheck size={17} /> Access or correction</h3><p>Ask what information we hold about you or request that inaccurate details be corrected.</p></div>
          <div className="lgl-mini-card"><h3><Trash2 size={17} /> Deletion</h3><p>Ask us to delete information that is no longer needed or that you have a legal right to have removed.</p></div>
          <div className="lgl-mini-card"><h3><Mail size={17} /> Consent withdrawal</h3><p>Where processing relies on consent, ask us to stop that processing going forward.</p></div>
          <div className="lgl-mini-card"><h3><ArrowRight size={17} /> Other privacy questions</h3><p>Ask for clarification about a processing activity or raise a privacy concern.</p></div>
        </div>

        <h2 id="how">2. How to submit a request</h2>
        <p>Email us using the link below. For a faster review, include:</p>
        <ul>
          <li>your name and the email address or phone number used to contact us;</li>
          <li>the type of information or interaction your request relates to, such as an enquiry or project;</li>
          <li>the action you are requesting, such as access, correction, deletion, or withdrawal of consent; and</li>
          <li>any reference number that helps us find the relevant record.</li>
        </ul>
        <p>Do not include passwords, payment-card details, or extra sensitive information in your initial email. We may ask for additional details if reasonably necessary to verify your identity and protect someone else’s information.</p>
        <p><a className="lgl-inline-link" href={`mailto:${CONTACT.email}?subject=Personal%20data%20request&body=${encodeURIComponent(`Hello ${BRAND.name},\n\nI would like to make a personal data request.\n\nName:\nContact email/phone used with you:\nRequest type (access/correction/deletion/withdrawal/other):\nRelevant enquiry or project (if known):\nDetails:\n\nThank you.`)}`}>Email a personal data request <ArrowRight size={16} /></a></p>

        <h2 id="what-happens">3. What happens next</h2>
        <p>We will review the request and may contact you to clarify its scope or verify that you are authorised to make it. We will respond in accordance with applicable requirements. We may need to retain certain information for legal, tax, security, dispute-resolution, or contract-administration purposes, even when a deletion request is made.</p>

        <h2 id="third-party">4. Information held by other providers</h2>
        <p>If information was submitted to or collected directly by a separate platform, hosting service, payment provider, or social network, you may also need to make a request to that provider. We will explain what we can about our own role, but we cannot delete records from systems we do not control.</p>

        <h2 id="privacy-policy">5. More information</h2>
        <p>Read our <Link to="/privacy-policy">Privacy Policy</Link> for more information about collection, use, sharing, and retention.</p>

        <h2 id="contact">6. Contact details</h2>
        <p><strong>{BRAND.name}</strong><br />Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />Website: <a href={BRAND.url} target="_blank" rel="noreferrer">{BRAND.url}</a></p>
      </div>
    </LegalPageShell>
  );
}
