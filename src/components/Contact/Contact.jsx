import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Shield, Target, Zap } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New contact form submission (Homepage Contact section)'
        })
      });

      const contentType = res.headers.get('content-type') || '';
      let payload = null;
      if (contentType.includes('application/json')) {
        payload = await res.json();
      } else {
        const text = await res.text();
        if (!res.ok) throw new Error(text || `Unexpected response (${res.status})`);
        throw new Error('Unexpected non-JSON response from server.');
      }

      if (!res.ok || !payload?.success) {
        const msg = payload?.error || res.statusText || 'Failed to send message';
        throw new Error(msg);
      }

      setStatus({ type: 'success' });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      setStatus({ type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["contact@ferzconsulting.com"],
      link: "mailto:contact@ferzconsulting.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (212) 380-6044"],
      link: "tel:+12123806044"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Northern Virginia / Washington, D.C. Metropolitan Area", "Global engagements available"],
      link: "#"
    }
  ];

  const expertiseAreas = [
    {
      icon: Shield,
      title: "AI Governance",
      description: "Deterministic frameworks for regulated environments"
    },
    {
      icon: Target,
      title: "Precision Strategy",
      description: "Systematic approaches to AI implementation"
    },
    {
      icon: Zap,
      title: "Enterprise Enablement",
      description: "Scalable control systems and infrastructure"
    }
  ];

  const buttonLabel = submitting ? 'Sending…' : (status?.type === 'success' ? 'Sent!' : 'Send Message');

  return (
    <section className="contact" id="contact">
      {/* CSS Animation Background */}
      <div className="contact-animation-bg">
        <div className="animated-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact FERZ</span>
          <h2 className="section-title">Ready to Transform Your AI Governance?</h2>
          <p className="section-subtitle">Connect with our team to discuss your AI governance requirements, strategic planning, and enterprise enablement needs.</p>
        </div>

        <div className="contact-main">
          <div className="contact-left">
            <div className="contact-intro">
              <h3>Expert Consultation</h3>
              <p>FERZ specializes in deterministic AI governance for organizations where precision and reliability are non-negotiable. Our frameworks deliver clarity and control in environments where ambiguity is not an option.</p>
            </div>

      

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <info.icon size={20} />
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.details.map((detail, i) => (
                          <span key={i}>{detail}</span>
                        ))}
                      </a>
                    ) : (
                      <div className="contact-detail">
                        {info.details.map((detail, i) => (
                          <span key={i}>{detail}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h3>Start Your Consultation</h3>
                <p>Share your challenges and let's address them with systematic precision.</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    disabled={submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    disabled={submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describe your AI governance challenges, project needs, or specific questions for our team."
                    disabled={submitting}
                  ></textarea>
                </div>

                <button type="submit" className="submit-button" disabled={submitting}>
                  <Send size={18} />
                  {buttonLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
