import LegalPageShell from "./LegalPageShell";
import { BRAND, CONTACT } from "../data/site";

export default function PrivacyPolicy() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      description={`Your trust matters. This policy explains what information ${BRAND.name} may collect through our website and project conversations, why we use it, and the choices available to you.`}
    >
      <div className="lgl-article">
        <p className="lgl-effective">Effective / last updated: 11 October 2026</p>

        <h2 id="overview">1. Who we are</h2>
        <p>{BRAND.name} (“we”, “us”, or “our”) provides digital services such as websites and apps, branding, creative production, online marketing, AI-assisted content, automation, and related business support. Our website is <a href={BRAND.url} target="_blank" rel="noreferrer">{BRAND.url.replace(/^https?:\/\//, "")}</a>.</p>
        <p>For privacy questions or requests, contact <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>

        <h2 id="information">2. Information we may collect</h2>
        <p>Depending on how you interact with us, we may collect the following categories of information:</p>
        <ul>
          <li><strong>Contact and enquiry details:</strong> name, email address, phone number, selected service, and the message or project brief you submit through our contact form or send to us.</li>
          <li><strong>Project information:</strong> brand assets, content, instructions, approvals, feedback, and other materials you or your organisation choose to share for a project.</li>
          <li><strong>Website usage data:</strong> pages visited, page titles and paths, and labels of certain buttons or links clicked. The current website code also creates visitor and session identifiers in your browser’s local storage and sends these identifiers with basic usage events to an analytics endpoint.</li>
          <li><strong>Technical information:</strong> information automatically supplied by your browser or systems used to host, protect, or process website requests, which may include device, browser, network, and security logs.</li>
          <li><strong>Business and transaction records:</strong> proposal, invoice, payment-status, support, and communication records where relevant to a business relationship.</li>
        </ul>
        <p>Please do not send passwords, payment-card details, government identification numbers, or other sensitive information through a general enquiry form unless we have specifically requested it through a suitable secure process.</p>

        <h2 id="purposes">3. Why we use information</h2>
        <p>We use information only for legitimate business purposes, such as to:</p>
        <ul>
          <li>reply to enquiries, understand your requirements, prepare proposals, and provide services you request;</li>
          <li>communicate about project scope, deadlines, approvals, support, billing, and changes;</li>
          <li>operate, secure, troubleshoot, measure, and improve our website and services;</li>
          <li>prevent misuse, investigate security issues, maintain business records, and comply with applicable legal obligations; and</li>
          <li>send relevant service updates or marketing communications where permitted. You can ask us to stop non-essential marketing messages.</li>
        </ul>

        <h2 id="legal-basis">4. Permission and other lawful grounds</h2>
        <p>Where required, we will seek permission or consent before using personal information for a stated purpose. Depending on the context and applicable law, we may also process information to take steps you request before entering a contract, perform an agreement, meet a legal duty, protect our services, or pursue another lawful purpose. Where a law grants you specific rights, this policy is not intended to take those rights away.</p>

        <h2 id="sharing">5. When information may be shared</h2>
        <p>We may share relevant information with carefully selected service providers who help us run the website or deliver work, such as hosting, analytics, communications, project-management, cloud-storage, payment, or technical-support providers. They should receive only the information reasonably needed for their role and are subject to the terms or safeguards applicable to that relationship.</p>
        <p>We may also disclose information when required by law, to respond to valid legal process, to protect rights and safety, or in connection with a business restructuring. We do not publish your private project materials or use them as a public case study without an appropriate basis or permission.</p>

        <h2 id="international">6. International processing</h2>
        <p>We serve clients in different locations and may use service providers whose systems are located in other countries. As a result, information may be processed across borders. Where required, we will use applicable safeguards and handle such transfers in accordance with relevant law.</p>

        <h2 id="retention">7. How long we keep information</h2>
        <p>We keep information for as long as reasonably necessary for the purpose it was collected, including to respond to enquiries, complete projects, provide support, resolve disputes, maintain business and tax records, and meet legal requirements. Retention periods vary by record type. When information is no longer needed, we will take reasonable steps to delete it or make it non-identifying, unless retention is required or permitted by law.</p>

        <h2 id="security">8. Security</h2>
        <p>We use reasonable administrative and technical measures appropriate to the information and services involved. No website, storage system, or online transmission is completely secure, so we cannot promise absolute security. Please contact us promptly if you believe information sent to us has been exposed or misused.</p>

        <h2 id="your-rights">9. Your choices and rights</h2>
        <p>Depending on where you live and which laws apply, you may be able to request access to, correction of, or deletion of personal information; withdraw consent for processing based on consent; object to or restrict certain uses; or raise a complaint with a relevant authority. Some records may need to be retained for legal, security, or contractual reasons.</p>
        <p>To make a request, email <a href={`mailto:${CONTACT.email}?subject=Privacy%20request`}>{CONTACT.email}</a> with “Privacy request” in the subject and enough information for us to understand what you need. We may ask for proportionate information to verify the request and protect against unauthorised disclosure.</p>

        <h2 id="children">10. Children’s privacy</h2>
        <p>Our services are intended for businesses and people able to make the relevant enquiry or agreement. We do not knowingly seek to collect personal information directly from children in circumstances where parental permission or another safeguard is required. If you believe a child has provided personal information inappropriately, contact us so we can review it.</p>

        <h2 id="third-party">11. External websites and services</h2>
        <p>Our website may link to third-party platforms, such as social networks, messaging tools, or partner websites. Their own privacy notices and practices apply when you use those services. We do not control their independent systems or policies.</p>

        <h2 id="changes">12. Changes to this policy</h2>
        <p>We may update this policy as our website, services, suppliers, or legal obligations change. The updated version will appear on this page with a revised date. If a change requires a specific notice or permission under applicable law, we will take the steps required by that law.</p>

        <h2 id="contact">13. Contact us</h2>
        <p>For privacy questions, requests, or concerns, contact:</p>
        <ul>
          <li><strong>Business / brand:</strong> {BRAND.name}</li>
          <li><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          <li><strong>Website:</strong> <a href={BRAND.url} target="_blank" rel="noreferrer">{BRAND.url}</a></li>
        </ul>
      </div>
    </LegalPageShell>
  );
}
