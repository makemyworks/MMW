import { Link } from "react-router-dom";
import { ArrowRight, CircleHelp } from "lucide-react";
import LegalPageShell from "./LegalPageShell";
import { BRAND, CONTACT } from "../data/site";

const questions = [
  {
    q: "What services does Make My Works provide?",
    a: "We work across websites and apps, logo and brand identity, video and social content, SEO and online marketing, AI-assisted creative work, automation, online stores, and related digital tasks. The Services page lists the main categories.",
  },
  {
    q: "How much does a project cost?",
    a: "Pricing depends on the scope, features, timeline, and support required. Tell us what you need and we can discuss a clear proposal before chargeable work begins.",
  },
  {
    q: "How long does a website take?",
    a: "A straightforward business website may take around two to four weeks once scope and content are agreed. Larger websites, integrations, apps, and projects with delayed feedback can take longer. Your proposal should confirm the project timeline.",
  },
  {
    q: "Can you update an existing website?",
    a: "Yes. Depending on the technology and access available, we can discuss redesigns, performance improvements, bug fixes, new pages, integrations, and other changes to an existing website.",
  },
  {
    q: "How do revisions work?",
    a: "The number of included revision rounds should be listed in your proposal. We agree additional work or changes that move beyond the original scope before proceeding.",
  },
  {
    q: "Do you guarantee first place on Google or a specific number of leads?",
    a: "No. Search rankings, advertising results, leads, and sales depend on many factors beyond an agency’s control. We focus on sound practices, clear reporting, and realistic expectations rather than guaranteed rankings or revenue.",
  },
  {
    q: "Can you work with clients outside India?",
    a: "We can discuss projects with clients in different locations. The proposal will confirm the currency, communication plan, payment terms, time zone expectations, and any country-specific requirements relevant to the project.",
  },
  {
    q: "Who owns the final deliverables?",
    a: "Ownership, licences, source files, and third-party assets depend on the project agreement. Unless agreed otherwise, transfer of eligible custom deliverables is generally linked to payment of the amounts due. Always check your proposal for the exact terms.",
  },
  {
    q: "Can you use AI tools for a project?",
    a: "Some workflows may use AI-assisted tools for creative or technical work. We should agree on the intended workflow and deliverables, and you should review final material for factual accuracy, permissions, compliance, and brand fit before publication.",
  },
  {
    q: "How do I cancel a project or request a refund?",
    a: "Send us a written request and include your project or invoice reference if available. We review the accepted proposal, completed work, committed third-party costs, and applicable law. See the Refund & Cancellation Policy for the general process.",
  },
  {
    q: "How do I request access to or deletion of my personal data?",
    a: "Email us with the request type and enough context to locate the relevant enquiry or project. We may need to verify your identity, and some information may need to be retained where law requires it. See the Personal Data & Deletion Requests page.",
  },
  {
    q: "How can I get started?",
    a: "Visit our Contact page, explain your goal in everyday language, and share the best way to reach you. We can then discuss the fit, scope, price, and next steps.",
  },
];

export default function FAQ() {
  return (
    <LegalPageShell
      title="Frequently Asked Questions"
      eyebrow="HELP CENTRE"
      description={`Clear answers to common questions about working with ${BRAND.name}, from pricing and timelines to ownership, marketing results, and privacy.`}
    >
      <div className="lgl-article">
        <p>Can't find your answer here? Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or <Link to="/contact">send us a project enquiry</Link>.</p>
        <div className="lgl-faq-list">
          {questions.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <div className="lgl-faq-answer"><p>{item.a}</p></div>
            </details>
          ))}
        </div>
        <div className="lgl-article-end">
          <span className="lgl-end-mark"><CircleHelp size={18} /></span>
          <div>
            <strong>Have a question specific to your business?</strong>
            <p>Every project is different. We can clarify scope, timeline, price, and delivery before you commit.</p>
            <Link to="/contact" className="lgl-inline-link">Talk to our team <ArrowRight size={15} /></Link>
          </div>
        </div>
      </div>
    </LegalPageShell>
  );
}
