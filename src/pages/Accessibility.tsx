import LegalPageShell from "./LegalPageShell";
import { BRAND, CONTACT } from "../data/site";

export default function Accessibility() {
  return (
    <LegalPageShell
      title="Accessibility Statement"
      description={`${BRAND.name} wants its website and digital experiences to be usable by as many people as possible. Here is our approach and how to report a barrier.`}
    >
      <div className="lgl-article">
        <p className="lgl-effective">Effective / last updated: 11 October 2026</p>

        <h2 id="commitment">1. Our commitment</h2>
        <p>We want visitors to be able to understand our services, navigate our website, and contact us without unnecessary barriers. We aim to improve readability, keyboard access, clear page structure, useful labels, adequate contrast, and responsive layouts as the site evolves.</p>
        <p>This statement describes our goal and approach. It is not a claim that every page or feature has been independently audited or certified against a particular accessibility standard.</p>

        <h2 id="standards">2. Accessibility practices</h2>
        <p>When building or updating pages, we aim to:</p>
        <ul>
          <li>use semantic headings, landmarks, link text, and form labels where practical;</li>
          <li>support keyboard navigation and visible focus indicators;</li>
          <li>provide meaningful alternative text for informative images and avoid unnecessary motion where feasible;</li>
          <li>maintain legible text, responsive layouts, and colour contrast; and</li>
          <li>consider reduced-motion preferences and different devices or assistive technologies.</li>
        </ul>

        <h2 id="limitations">3. Known limitations</h2>
        <p>Some older content, third-party embeds, documents, animations, or interactive features may not yet meet every accessibility need. Third-party platforms may have their own limitations. We welcome specific feedback and will consider reasonable improvements in the context of the issue and available technical options.</p>

        <h2 id="report">4. Tell us about an accessibility barrier</h2>
        <p>Email <a href={`mailto:${CONTACT.email}?subject=Website%20accessibility%20feedback`}>{CONTACT.email}</a> with the page address, a description of the issue, and (if you wish) the device, browser, or assistive technology you were using. Please avoid sending unnecessary sensitive information. We will review your message and follow up where possible.</p>

        <h2 id="updates">5. Updates</h2>
        <p>We may update this statement as our website and practices change. The date shown above indicates the version date. For general enquiries, visit our <a href="/contact">Contact page</a>.</p>
      </div>
    </LegalPageShell>
  );
}
