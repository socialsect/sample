import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import DarkVeil from '../DarkVeil/darkveil';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
     
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* About Company */}
          <div className="footer-section company-info">
            <h3 className="footer-title">About Company</h3>
            <p className="company-description">
              FERZ—Formalizing Emergent Reasoning Zones—advances the frontier of AI precision through deterministic governance. In an era defined by probabilistic systems, we deliver frameworks that enforce clarity, consistency, and control where others accept uncertainty. Our work spans linguistic formalization, AI output validation, and cross-domain compliance—empowering organizations to govern intelligent systems with the rigor high-stakes environments demand.
            </p>
          </div>

          {/* Company Menu */}
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about-us" className="footer-link">About Us</a></li>
              <li><a href="/services-overview" className="footer-link">Services</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/methodologies" className="footer-link">Methodologies</a></li>
              <li><a href="/articles" className="footer-link">Articles</a></li>
              <li><a href="/contact-us" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links" aria-label="Services footer menu">
              <li><a href="/services-overview/ai-consulting" className="footer-link">AI Consulting</a></li>
              <li><a href="/services-overview/ai-enablement-strategy" className="footer-link">AI-Enablement Strategy</a></li>
              <li><a href="/services-overview/design-of-ai-governance-models" className="footer-link">Design of AI Governance Models</a></li>
              <li><a href="/services-overview/it-innovation-modernization" className="footer-link">IT Innovation and Modernization</a></li>
              <li><a href="/services-overview/strategic-advisory-services" className="footer-link">Strategic Advisory services</a></li>
              <li><a href="/services-overview/within-paradigm-improvements" className="footer-link">Within-Paradigm Improvements</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3 className="footer-title">Products</h3>
            <ul className="footer-links">
              <li><a href="/products/lasof" className="footer-link">LASO(f)</a></li>
              <li><a href="/products/delia" className="footer-link">DELIA</a></li>
              <li><a href="/products/constitutional-blockchain-architecture" className="footer-link">Blockchain Architecture</a></li>
              <li><a href="/products/strata-g" className="footer-link">Strata-G</a></li>
              <li><a href="/products/ferz-behavioral-engine" className="footer-link">Ferz Behavioral Engine</a></li>
              <li><a href="/products/causacore" className="footer-link">Causa Core</a></li>
            </ul>
          </div>

          {/* Address */}
          <div className="footer-section">
            <h3 className="footer-title">Address</h3>
            <address className="footer-address">
              <p>Headquartered in the Northern Virginia / Washington, D.C. Metropolitan Area (Engagements available globally; consultations by appointment)</p>
              <div className="footer-contact-row">
                <a href="tel:+12123806044" aria-label="Call Ferz Consulting at +1 212 380 6044" className="footer-contact">
                  <Phone size={16} className="footer-inline-icon" />
                  <span>+1 212 380 6044</span>
                </a>
                <a href="mailto:contact@ferzconsulting.com" className="footer-contact">
                  <span>contact@ferzconsulting.com</span>
                </a>
                <a href="https://www.linkedin.com/company/ferzllc/" target="_blank" rel="noopener noreferrer" className="footer-contact">
                  <Linkedin size={16} className="footer-inline-icon" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://x.com/FERZ_AI" target="_blank" rel="noopener noreferrer" className="footer-contact">
                  <Twitter size={16} className="footer-inline-icon" />
                  <span>X</span>
                </a>
                <a href="https://www.facebook.com/FERZConsulting" target="_blank" rel="noopener noreferrer" className="footer-contact">
                  <Facebook size={16} className="footer-inline-icon" />
                  <span>Facebook</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
        <div className="footer-brand">
              <a href="/">
                <img src="/FERZWHITELETTERS.svg" alt="footer logo" width="150" />
              </a>
            </div>
          <div className="footer-bottom-content">
           
            <div className="legal-links">
              <a href="/disclaimer" className="legal-link">Disclaimer</a>
              <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
              <a href="/ai-integrity-statement" className="legal-link">AI Integrity Statement</a>
              <a href="/work-with-ferz" className="legal-link">Work With FERZ</a>
              <a href="/licensing-and-partnerships" className="legal-link">Licensing & Partnerships</a>
            </div>
            <div className="footer-legal">
              <p>FERZ — Formalizing Emergent Reasoning Zones © {currentYear} FERZ LLC</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
