import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, LayoutGrid, FileText, Send, ChevronDown } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const styleId = 'contact-section-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .contact-section {
          width: 100%;
          background-color: #f8f9fa;
          padding: 2.5rem 1.5rem;
          font-family: 'Inter', sans-serif;
          color: #111827;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
        }

        .contact-container {
          max-width: 800px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* HEADER SECTION */
        .contact-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .contact-tagline {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #2563eb;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .contact-heading {
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1.15;
          color: #111827;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.02em;
        }

        .contact-heading span {
          color: #2563eb;
        }

        .contact-subtext {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.5;
          max-width: 500px;
          margin: 0 auto;
        }

        /* FORM SECTION */
        .contact-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 0 0.875rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .input-group:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .input-icon {
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.5rem;
          flex-shrink: 0;
        }

        .form-input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          padding: 0.75rem 0;
          font-size: 0.9rem;
          color: #111827;
          font-family: inherit;
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        /* Textarea specific */
        .input-group.textarea-group {
          align-items: flex-start;
          padding-top: 0.75rem;
        }

        .textarea-group .input-icon {
          margin-top: 0.15rem;
        }

        .form-textarea {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          padding: 0 0 0.75rem 0;
          font-size: 0.9rem;
          color: #111827;
          font-family: inherit;
          resize: vertical;
          min-height: 70px;
        }

        .form-textarea::placeholder {
          color: #9ca3af;
        }

        /* =========================================
           CORRECTED SELECT DROPDOWN STYLES
        ========================================= */
        .select-group {
          position: relative;
        }

        .form-select {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          padding: 0.75rem 1.5rem 0.75rem 0; /* Right padding for the arrow */
          font-size: 0.9rem;
          color: #111827;
          font-family: inherit;
          appearance: none; /* Hide default browser arrow */
          -webkit-appearance: none;
          -moz-appearance: none;
          cursor: pointer;
          text-overflow: ellipsis; /* Truncate long text */
          white-space: nowrap;
          overflow: hidden;
        }

        /* Placeholder color logic */
        .form-select:invalid,
        .form-select option[value=""][disabled] {
          color: #9ca3af; /* Light gray for placeholder */
        }

        /* Options styling */
        .form-select option {
          color: #111827;
          background-color: #ffffff;
          padding: 10px;
          font-size: 0.9rem;
        }

        /* Custom Arrow Icon */
        .select-arrow {
          position: absolute;
          right: 0.875rem;
          top: 50%;
          transform: translateY(-50%);
          color: #2563eb;
          pointer-events: none; /* Allows clicking through to the select */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Submit Button */
        .submit-btn {
          width: 100%;
          background-color: #2563eb;
          color: #ffffff;
          border: none;
          padding: 0.875rem;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          margin-top: 0.25rem;
        }

        .submit-btn:hover {
          background-color: #1d4ed8;
        }

        .submit-btn:active {
          transform: scale(0.99);
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .contact-section {
            padding: 2rem 1rem;
          }

          .contact-heading {
            font-size: 1.75rem;
          }

          .contact-subtext {
            font-size: 0.9rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* HEADER */}
        <div className="contact-header">
          <div className="contact-tagline">GET IN TOUCH</div>
          <h2 className="contact-heading">
            Let's Work <span>Together</span>
          </h2>
          <p className="contact-subtext">
            Have a project in mind or want to know more about our services?<br />
            Fill out the form and we'll get back to you shortly.
          </p>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          
          {/* Row 1: Name & Email */}
          <div className="form-row">
            <div className="input-group">
              <div className="input-icon"><User size={18} /></div>
              <input 
                type="text" 
                name="name"
                className="form-input" 
                placeholder="Your Name *" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="input-group">
              <div className="input-icon"><Mail size={18} /></div>
              <input 
                type="email" 
                name="email"
                className="form-input" 
                placeholder="Your Email *" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          {/* Row 2: Phone & Service */}
          <div className="form-row">
            <div className="input-group">
              <div className="input-icon"><Phone size={18} /></div>
              <input 
                type="tel" 
                name="phone"
                className="form-input" 
                placeholder="Phone Number *" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>

            {/* CORRECTED DROPDOWN */}
            <div className="input-group select-group">
              <div className="input-icon"><LayoutGrid size={18} /></div>
              <select 
                name="service"
                className="form-select" 
                value={formData.service}
                onChange={handleChange}
                required
              >
                {/* Disabled placeholder option */}
                <option value="" disabled hidden>Service Interested In *</option>
                
                {/* Actual options */}
                <option value="web">Web Development</option>
                <option value="crm">CRM Development</option>
                <option value="mobile">Mobile App</option>
                <option value="uiux">UI/UX Design</option>
              </select>
              <div className="select-arrow"><ChevronDown size={18} /></div>
            </div>
          </div>

          {/* Row 3: Message (Textarea) */}
          <div className="input-group textarea-group">
            <div className="input-icon"><FileText size={18} /></div>
            <textarea 
              name="message"
              className="form-textarea" 
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Send Message
            <Send size={16} />
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactSection;