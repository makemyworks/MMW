import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Load Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
        rel="stylesheet" 
      />

      <style>
        {`
          /* --- CSS Variables --- */
          :root {
            --bg-white: #FFFFFF;
            --bg-light-blue: #F0F6FF;
            --color-primary: #0055FF;
            --color-primary-hover: #0044CC;
            --text-dark: #111827;
            --text-muted: #6B7280;
            --border-color: #E5E7EB;
            --font-sans: 'Inter', system-ui, sans-serif;
          }

          /* --- Base Layout --- */
          .page-wrapper {
            font-family: var(--font-sans);
            color: var(--text-dark);
            background-color: var(--bg-white);
            min-height: 100vh;
            box-sizing: border-box;
          }

          .page-wrapper * {
            box-sizing: border-box;
          }

          /* ================= HERO SECTION ================= */
          .hero-section {
            background-color: var(--bg-light-blue);
            padding: 3rem 2rem;
            position: relative;
            overflow: hidden;
          }

          /* Decorative background wave shapes */
          .hero-section::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(0,85,255,0.08) 0%, transparent 70%);
            border-radius: 50%;
            z-index: 0;
          }

          .hero-section::after {
            content: '';
            position: absolute;
            bottom: -60%;
            right: -5%;
            width: 600px;
            height: 600px;
            background: rgba(0,85,255,0.06);
            border-radius: 50%;
            z-index: 0;
          }

          .hero-content {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .eyebrow-wrapper {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .eyebrow-text {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--color-primary);
          }

          .eyebrow-line {
            height: 1px;
            width: 2.5rem;
            background-color: var(--color-primary);
          }

          .hero-title {
            font-size: 2.5rem;
            font-weight: 800;
            line-height: 1.1;
            margin: 0;
            color: var(--text-dark);
          }

          .hero-title .highlight {
            color: var(--color-primary);
          }

          .hero-subtext {
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-muted);
            margin: 0;
            max-width: 40rem;
          }

          /* ================= MAIN CONTENT ================= */
          .main-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 3rem 2rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            background-color: var(--bg-white);
          }

          /* --- Left Column: Info --- */
          .info-column {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .info-heading {
            font-size: 1.75rem;
            font-weight: 700;
            margin: 0;
            color: var(--text-dark);
          }

          .info-subtext {
            font-size: 0.9rem;
            line-height: 1.6;
            color: var(--text-muted);
            margin: 0 0 1rem 0;
          }

          .info-card {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            background-color: var(--bg-light-blue);
            padding: 1.25rem;
            border-radius: 8px;
          }

          .info-icon-box {
            width: 3rem;
            height: 3rem;
            background-color: #FFFFFF;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-primary);
            flex-shrink: 0;
          }

          .info-details {
            display: flex;
            flex-direction: column;
            gap: 0.15rem;
          }

          .info-title {
            font-size: 1rem;
            font-weight: 700;
            margin: 0;
            color: var(--text-dark);
          }

          .info-value {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-dark);
            margin: 0;
            text-decoration: none;
          }

          .info-sub {
            font-size: 0.8rem;
            color: var(--text-muted);
            margin: 0;
            margin-top: 0.15rem;
          }

          /* --- Right Column: Form --- */
          .form-card {
            background-color: #FFFFFF;
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 10px 30px -15px rgba(0,0,0,0.05);
          }

          .form-heading {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0 0 0.5rem 0;
            color: var(--text-dark);
          }

          .form-subtext {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin: 0 0 2rem 0;
          }

          .contact-form {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
          }

          .form-label {
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-dark);
          }

          .form-label .required {
            color: var(--color-primary);
            margin-left: 0.15rem;
          }

          .form-input {
            width: 100%;
            padding: 0.85rem 1rem;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            background-color: #FFFFFF;
            font-family: var(--font-sans);
            font-size: 0.85rem;
            color: var(--text-dark);
            outline: none;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .form-input::placeholder {
            color: #9CA3AF;
          }

          .form-input:focus {
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(0, 85, 255, 0.1);
          }

          .form-select {
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1rem;
            cursor: pointer;
          }

          textarea.form-input {
            min-height: 120px;
            resize: vertical;
          }

          .submit-btn {
            background-color: var(--color-primary);
            color: #ffffff;
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
            font-weight: 600;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: background-color 0.3s ease;
            width: 100%;
            margin-top: 0.5rem;
          }

          .submit-btn:hover {
            background-color: var(--color-primary-hover);
          }

          .submit-btn svg {
            transition: transform 0.3s ease;
          }

          .submit-btn:hover svg {
            transform: translateX(4px);
          }

          /* ================= MEDIA QUERIES ================= */
          @media (min-width: 768px) {
            .hero-section {
              padding: 4rem 3rem;
            }
            .hero-title {
              font-size: 3.5rem;
            }
            .main-content {
              padding: 4rem 3rem;
            }
            .contact-form {
              grid-template-columns: 1fr 1fr;
            }
            .form-group.full-width {
              grid-column: span 2;
            }
          }

          @media (min-width: 1024px) {
            .main-content {
              grid-template-columns: 5fr 7fr;
              gap: 4rem;
            }
            .hero-title {
              font-size: 4rem;
            }
            .form-card {
              padding: 2.5rem;
            }
          }
        `}
      </style>

      <div className="page-wrapper">

        {/* ================= HERO SECTION ================= */}
        <section className="hero-section">
          <div className="hero-content">
            
            <div className="eyebrow-wrapper">
              <span className="eyebrow-text">Contact Us</span>
              <div className="eyebrow-line"></div>
            </div>

            <h1 className="hero-title">
              Let's Work <span className="highlight">Together</span>
            </h1>

            <p className="hero-subtext">
              Have a project in mind or want to know more about our services?<br />
              We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="main-content">
          
          {/* --- Left Column: Info --- */}
          <div className="info-column">
            
            <h2 className="info-heading">Get in Touch</h2>
            <p className="info-subtext">
              Reach out to us through any of the following channels. Our team is always ready to help.
            </p>

            {/* Phone Card */}
            <div className="info-card">
              <div className="info-icon-box">
                <Phone size={20} />
              </div>
              <div className="info-details">
                <p className="info-title">Phone</p>
                <a href="tel:+919876543210" className="info-value">+91  77039 77002</a>
                <p className="info-sub">Mon - Sat, 10:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="info-card">
              <div className="info-icon-box">
                <Mail size={20} />
              </div>
              <div className="info-details">
                <p className="info-title">Email</p>
                <a href="mailto:hello@makemyworks.com" className="info-value">hello@makemyworks.com</a>
                <p className="info-sub">We reply within 24 hours</p>
              </div>
            </div>

            {/* Office Card */}
            <div className="info-card">
              <div className="info-icon-box">
                <MapPin size={20} />
              </div>
              <div className="info-details">
                <p className="info-title">Our Office</p>
                <p className="info-value">Ahmedabad, Gujarat, India</p>
              </div>
            </div>

          </div>

          {/* --- Right Column: Form --- */}
          <div className="form-card">
            
            <h2 className="form-heading">Send Us a Message</h2>
            <p className="form-subtext">
              Fill out the form and our team will get back to you soon.
            </p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

              <div className="form-group">
                <label className="form-label">Full Name <span className="required">*</span></label>
                <input type="text" className="form-input" placeholder="Your name" />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address <span className="required">*</span></label>
                <input type="email" className="form-input" placeholder="yourname@example.com" />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+91 98765 43210" />
              </div>

              <div className="form-group">
                <label className="form-label">Subject <span className="required">*</span></label>
                <select className="form-input form-select" defaultValue="">
                  <option value="" disabled>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="project">Project Request</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label className="form-label">Message <span className="required">*</span></label>
                <textarea className="form-input" placeholder="Tell us about your project..."></textarea>
              </div>

              <div className="form-group full-width">
                <button type="submit" className="submit-btn">
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </div>

            </form>
          </div>

        </section>

      </div>
    </>
  );
};

export default ContactPage;