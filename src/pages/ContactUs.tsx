import { useState, type ChangeEvent, type FormEvent } from "react";
import Icon from "../components/Icon";
import { PageHero } from "../components/Bits";
import { CONTACT, services, whatsappLink } from "../data/site";

type Status = "idle" | "sending" | "ok" | "error";

const EMPTY = { name: "", email: "", phone: "", service: "", message: "", honey: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    if (form.honey) {
      setStatus("ok"); // a bot filled the hidden field: pretend success, send nothing
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New enquiry from ${form.name} (Make My Works website)`,
          _template: "table",
          _captcha: "false",
          Name: form.name,
          Email: form.email,
          Phone: form.phone || "Not given",
          Service: form.service || "Not sure yet",
          Message: form.message,
        }),
      });
      const data: { success?: boolean | string } | null = await res.json().catch(() => null);
      const sent = res.ok && data !== null && (data.success === true || data.success === "true");
      if (sent) {
        setStatus("ok");
        setForm(EMPTY);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const waText =
    `Hi Make My Works, my name is ${form.name || "(your name)"}. ` +
    `I need help with: ${form.service || "growing my business"}. ${form.message}`.trim();

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let us talk about your business"
        text="Fill in the short form or message us on WhatsApp. We reply within 24 hours with a clear plan and price."
      />

      <section className="mw-section">
        <div className="mw-wrap mw-contact">
          <div className="mw-contact-info">
            <a className="mw-info-card" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <span className="mw-icon mw-icon-wa"><Icon name="whatsapp" size={24} /></span>
              <span><b>WhatsApp</b><small>Fastest way to reach us</small></span>
            </a>
            <a className="mw-info-card" href={CONTACT.phoneTel}>
              <span className="mw-icon"><Icon name="phone" size={24} /></span>
              <span><b>Call us</b><small>{CONTACT.phoneDisplay}</small></span>
            </a>
            <a className="mw-info-card" href={`mailto:${CONTACT.email}`}>
              <span className="mw-icon"><Icon name="mail" size={24} /></span>
              <span><b>Email</b><small>{CONTACT.email}</small></span>
            </a>
            <div className="mw-info-card">
              <span className="mw-icon"><Icon name="clock" size={24} /></span>
              <span><b>{CONTACT.reply}</b><small>{CONTACT.location}</small></span>
            </div>
          </div>

          <form className="mw-form" onSubmit={onSubmit}>
            <h2>Tell us what you need</h2>

            <div className="mw-field">
              <label htmlFor="name">Your name *</label>
              <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={onChange} />
            </div>

            <div className="mw-row">
              <div className="mw-field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={onChange} />
              </div>
              <div className="mw-field">
                <label htmlFor="phone">Phone or WhatsApp</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={onChange} />
              </div>
            </div>

            <div className="mw-field">
              <label htmlFor="service">What do you need help with?</label>
              <select id="service" name="service" value={form.service} onChange={onChange}>
                <option value="">Not sure yet, I need advice</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            <div className="mw-field">
              <label htmlFor="message">Tell us about your business *</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} placeholder="What do you sell, and what would you like to achieve?" />
            </div>

            {/* hidden trap field for spam bots */}
            <div className="mw-honey" aria-hidden="true">
              <label htmlFor="honey">Leave this empty</label>
              <input id="honey" name="honey" type="text" tabIndex={-1} autoComplete="off" value={form.honey} onChange={onChange} />
            </div>

            <button type="submit" className="mw-btn mw-btn-primary mw-btn-lg" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"} <Icon name="arrow" size={18} />
            </button>

            {status === "ok" && (
              <p className="mw-alert mw-alert-ok" role="status">
                Thank you! Your message has been sent. We will reply within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="mw-alert mw-alert-err" role="alert">
                Sorry, your message could not be sent right now. Please message us on{" "}
                <a href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer">WhatsApp</a> or email{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> and we will help you straight away.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
