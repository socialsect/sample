import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import Threads from '../../components/threads/threads';
import './ContactUs.css';
import { Linkedin, Twitter, Youtube, Github } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
          subject: 'New contact form submission (ContactUs page)'
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

  // Structured Data for Contact Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact FERZ - Mathematical AI Governance Authority",
    "description": "Contact FERZ for deterministic AI governance consultation. Patent-protected frameworks, federal-proven methodologies, and mathematical certainty for regulated industries.",
    "url": "https://ferzconsulting.com/contact-us",
    "mainEntity": {
      "@id": "https://ferzconsulting.com/#org",
      "@type": "Organization",
      "name": "FERZ Consulting",
      "url": "https://ferzconsulting.com/",
      "logo": "https://ferzconsulting.com/logo.png",
      "description": "Mathematical AI governance authority specializing in deterministic frameworks for regulated industries",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Washington",
        "addressRegion": "DC",
        "addressCountry": "US"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-212-380-6044",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "email": "contact@ferzconsulting.com",
          "contactType": "customer service",
          "areaServed": "Worldwide"
        }
      ],
      "sameAs": [
        "https://twitter.com/ferz_ai"
      ]
    }
  };

  const buttonLabel = submitting ? 'Sending…' : (status?.type === 'success' ? 'Sent!' : 'Send Message');

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact FERZ: Mathematical AI Governance Authority | FERZ</title>
        <meta name="title" content="Contact FERZ: Mathematical AI Governance Authority | FERZ" />
        <meta name="description" content="Contact FERZ for deterministic AI governance consultation. Patent-protected frameworks, federal-proven methodologies, and mathematical certainty for regulated industries. Schedule assessment." />
        <meta name="keywords" content="contact FERZ, mathematical AI governance, deterministic AI consultation, patent-protected AI, federal AI authority, regulatory AI compliance" />
        <meta name="author" content="FERZ Consulting" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ferzconsulting.com/contact-us" />
        <meta property="og:title" content="Contact FERZ - AI Governance & Strategic Consulting" />
        <meta property="og:description" content="Get expert consultation on AI governance, precision strategy, and enterprise enablement. Contact our team for AI strategy assessment and governance framework design." />
        <meta property="og:image" content="https://ferzconsulting.com/Logo.svg" />
        <meta property="og:site_name" content="FERZ Consulting" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ferzconsulting.com/contact-us" />
        <meta property="twitter:title" content="Contact FERZ - AI Governance & Strategic Consulting" />
        <meta property="twitter:description" content="Get expert consultation on AI governance, precision strategy, and enterprise enablement. Contact our team for AI strategy assessment and governance framework design." />
        <meta property="twitter:image" content="https://ferzconsulting.com/Logo.svg" />
        <meta property="twitter:site" content="@ferz_ai" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ferzconsulting.com/contact-us" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />
      <main className="contact-page">
        <div className="contact-container">
          <header className="contact-header">
            <h1 className="contact-title">Contact FERZ</h1>
            <h2 className="contact-subtitle">
              Expert Consultation on AI Governance,<br />
              Precision Strategy, and Enterprise Enablement
            </h2>
            <p className="contact-description">
              At FERZ, we help organizations achieve deterministic control in environments where ambiguity is not an option. 
              Whether you seek to assess your AI strategy, modernize infrastructure, implement linguistic governance, or design 
              enterprise-scale control systems, our team is ready to collaborate.
            </p>
          </header>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email address</h3>
                <p>contact@ferzconsulting.com</p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>+1 (212) 380-6044</p>
              </div>
              <div className="contact-item">
                <h3>Location</h3>
                <p>
                  Headquartered in the Northern Virginia / Washington, D.C. Metropolitan Area<br />
                  (Engagements available globally; consultations by appointment)
                </p>
              </div>
              <div className="contact-cta">
                <p>If precision, reliability, and foresight define your mission, let's begin the conversation.</p>
              </div>

              <div className="contact-social" aria-label="FERZ social media links">
                <a href="https://www.linkedin.com/company/ferz-ai" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com/ferz_ai" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X (Twitter)">
                  <Twitter size={18} />
                </a>
                <a href="https://github.com/ferz-ai" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                  <Github size={18} />
                </a>
              </div>
            </div>

            <form className="contact-form-section" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Please enter your full name"
                  required
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
                  onChange={handleInputChange}
                  placeholder="Please enter your email address"
                  required
                  disabled={submitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Include details about your AI project, ethical concerns, or specific challenges you'd like to discuss."
                  required
                  disabled={submitting}
                ></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={submitting}>
                {buttonLabel}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
