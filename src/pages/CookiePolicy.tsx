import LegalPageShell from "./LegalPageShell";
import { BRAND, CONTACT } from "../data/site";

export default function CookiePolicy() {
  return (
    <LegalPageShell
      title="Cookie & Browser Storage Policy"
      description={`Learn how ${BRAND.name} may use cookies and similar browser technologies, including local storage used by the current website analytics code.`}
    >
      <div className="lgl-article">
        <p className="lgl-effective">Effective / last updated: 11 October 2026</p>

        <h2 id="what">1. What are cookies and browser storage?</h2>
        <p>Cookies are small files saved by a website in your browser. Similar technologies—including local storage, session storage, pixels, and tags—can remember a browser or help understand how a site is used. They are not all technically the same, but they can serve related purposes.</p>

        <h2 id="current">2. What the current website uses</h2>
        <p>The current {BRAND.name} website code stores visitor and session identifiers in your browser’s local storage and sends them with basic page-view and button-click events to an analytics endpoint. The event information can include the page path, page title, and label of the clicked link or button. This helps us understand which parts of the site are being used and improve the experience.</p>
        <p>This description reflects the website code we reviewed when drafting this policy. Hosting, analytics, embedded content, or other integrations may add their own technologies. Before launch or after making changes, the actual production configuration and the analytics provider’s retention and access practices should be verified.</p>

        <h2 id="purposes">3. Why these technologies may be used</h2>
        <ul>
          <li><strong>Essential operation and security:</strong> to support core site functions, protect the site, and detect technical errors.</li>
          <li><strong>Preferences:</strong> to remember a setting where such a feature is available.</li>
          <li><strong>Analytics:</strong> to understand page visits and interactions in aggregate or through browser identifiers.</li>
          <li><strong>Third-party content:</strong> embedded tools, maps, videos, social widgets, or similar content may use their own technologies if added.</li>
        </ul>
        <p>We do not describe an advertising-cookie programme as active unless one is actually configured. If advertising pixels or additional analytics tools are introduced, this policy and any required consent controls should be updated before activation.</p>

        <h2 id="choices">4. Your choices</h2>
        <p>You can review or clear cookies and local storage through your browser settings. Blocking or clearing storage may change how some site features behave and may not stop every form of server-side technical logging. Where applicable law requires consent for a non-essential technology, the site operator should obtain and record that consent before using it.</p>
        <p>Where applicable law requires consent for non-essential technologies, we will provide an appropriate notice or preference mechanism before activating them.</p>

        <h2 id="third-party">5. Third-party technologies</h2>
        <p>Third-party providers may set or read their own cookies or identifiers when their tools are used. Their policies apply to their processing. Review the provider’s privacy and cookie documentation for details about their retention, controls, and any international data transfers.</p>

        <h2 id="updates">6. Changes to this policy</h2>
        <p>We may update this page when the site’s technologies, integrations, or legal requirements change. The date above indicates the version date; the policy should be reviewed again whenever new analytics, advertising, or embedded services are connected.</p>

        <h2 id="contact">7. Contact</h2>
        <p>For questions about cookies or browser storage, email <a href={`mailto:${CONTACT.email}?subject=Cookie%20policy%20question`}>{CONTACT.email}</a>.</p>
      </div>
    </LegalPageShell>
  );
}
