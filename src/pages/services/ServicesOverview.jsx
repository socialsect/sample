import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import './ServicesOverview.css';
import Threads from '../../components/threads/threads';

const ServicesOverview = () => {
  // Structured Data for Services Overview
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FERZ AI Governance Services",
    "description": "Constitutional AI governance and deterministic compliance services for organizations deploying artificial intelligence in regulated and mission-critical environments.",
    "url": "https://ferzconsulting.com/services-overview",
    "provider": {
      "@type": "Organization",
      "name": "FERZ Consulting",
      "url": "https://ferzconsulting.com/",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 212 380 6044",
        "email": "contact@ferzconsulting.com"
      }
    },
    "areaServed": ["US", "UK", "Europe"],
    "serviceType": "AI Governance Consulting",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Constitutional AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Governance Readiness Assessment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Constitutional AI Strategy Workshops"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deterministic AI System Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Governance Policy Development"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Governance Services: Constitutional Compliance | FERZ</title>
        <meta name="description" content="Constitutional AI governance services for regulated industries. Deterministic compliance frameworks, audit-ready documentation, and federal-proven methodologies. Schedule assessment." />
        <meta name="keywords" content="AI governance services, constitutional AI compliance, deterministic AI frameworks, regulatory AI readiness, federal AI advisory" />
        <link rel="canonical" href="https://ferzconsulting.com/services-overview" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="app">
        <Navbar />
      <main className="overview-main">
        <div className="overview-container">
        <section className="overview-hero-section">
  <div className="threads-bg">
    <Threads className="threads-canvas" amplitude={1.4}/>
  </div>

  <div className="overview-hero-content">
    <h1 className="overview-hero-title">Services</h1>
    <p className="overview-hero-description">
      AI governance and constitutional compliance services for organizations deploying artificial intelligence in regulated and mission-critical environments.
    </p>
    <p className="overview-hero-subtitle">
      As AI systems approach and exceed human cognitive capabilities, the fundamental question shifts from optimizing performance to ensuring constitutional governance—the difference between AI that serves democratic societies and AI that supplants them.
    </p>
  </div>
</section>



          <section className="overview-service-portfolio-section">
            <h2 className="overview-section-title">Our Service Portfolio</h2>
            
            <div className="overview-service-category">
              <h3 className="overview-category-title">Constitutional AI Advisory</h3>
              <div className="overview-service-grid">
                <div className="overview-service-card">
                  <h4 className="overview-service-title">AI Governance Readiness Assessment</h4>
                  <p className="overview-service-description">
                    Strategic analysis of your current AI governance posture and alignment with constitutional principles.
                  </p>
                </div>
                <div className="overview-service-card">
                  <h4 className="overview-service-title">Constitutional AI Strategy Workshops</h4>
                  <p className="overview-service-description">
                    Collaborative sessions to build your organization's unique constitutional AI governance roadmap.
                  </p>
                </div>
                <div className="overview-service-card">
                  <h4 className="overview-service-title">Policy and Standards Advisory</h4>
                  <p className="overview-service-description">
                    Guidance on aligning with and shaping emerging AI regulations and interpretive risk reviews.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-service-category">
              <h3 className="overview-category-title">Governance Blueprinting & Licensing Advisory</h3>
              <div className="overview-service-grid">
                <div className="overview-service-card">
                  <h4 className="overview-service-title">Deterministic AI System Design</h4>
                  <p className="overview-service-description">
                    Architecting systems with proprietary frameworks for guaranteed compliance and auditable results.
                  </p>
                </div>
                <div className="overview-service-card">
                  <h4 className="overview-service-title">AI Governance Policy Development</h4>
                  <p className="overview-service-description">
                    Creating robust, enforceable policies for ethical and constitutionally-sound AI deployment.
                  </p>
                </div>
                <div className="overview-service-card">
                  <h4 className="overview-service-title">Linguistic Risk & Civil Liberties Audit</h4>
                  <p className="overview-service-description">
                    Analyzing and mitigating interpretive risks and civil liberties implications in your AI systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-service-category">
              <h3 className="overview-category-title">Specialized Services</h3>
              <div className="overview-service-grid single-card">
                <div className="overview-service-card">
                  <h4 className="overview-service-title">Board & Federal Advisory</h4>
                  <p className="overview-service-description">
                    Strategic guidance for mission-critical startups and expert navigation of government AI procurement, ensuring constitutional compliance from inception through scale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="overview-strategic-value-section">
            <h2 className="overview-section-title">The Strategic Value of FERZ</h2>
            <div className="overview-value-grid">
              <div className="overview-value-card">
                <h3 className="overview-value-title">Regulatory Readiness</h3>
                <p className="overview-value-description">
                  Future-proof AI investments against emerging regulatory requirements with constitutional governance frameworks.
                </p>
              </div>
              <div className="overview-value-card">
                <h3 className="overview-value-title">Complete Auditability</h3>
                <p className="overview-value-description">
                  Transform opaque AI decision-making into transparent, traceable processes that stakeholders and regulators can trust.
                </p>
              </div>
              <div className="overview-value-card">
                <h3 className="overview-value-title">Constitutional Compliance</h3>
                <p className="overview-value-description">
                  Ensure AI systems respect civil liberties, privacy rights, and democratic principles while maintaining effectiveness.
                </p>
              </div>
              <div className="overview-value-card">
                <h3 className="overview-value-title">Competitive Positioning</h3>
                <p className="overview-value-description">
                  Establish thought leadership in constitutional AI while creating sustainable competitive advantages.
                </p>
              </div>
            </div>
          </section>

          <section className="overview-why-ferz-section">
            <h2 className="overview-section-title">Why Organizations Choose FERZ</h2>
            <div className="overview-reasons-grid">
              <div className="overview-reason-card">
                <h3 className="overview-reason-title">Deterministic Governance</h3>
                <p className="overview-reason-description">
                  While others rely on training-based alignment methods that provide probabilistic outcomes, FERZ delivers deterministic constitutional governance. Our systems guarantee identical outputs for identical inputs under identical constraints.
                </p>
              </div>
              <div className="overview-reason-card">
                <h3 className="overview-reason-title">Universal AI Enhancement</h3>
                <p className="overview-reason-description">
                  Rather than requiring expensive system replacements, FERZ's governance frameworks enhance any existing AI deployment. Your LLMs and ML systems become constitutionally compliant without architectural changes.
                </p>
              </div>
              <div className="overview-reason-card">
                <h3 className="overview-reason-title">Regulatory Leadership</h3>
                <p className="overview-reason-description">
                  FERZ doesn't just help organizations comply with AI regulations—we help define what constitutional AI compliance means. Our frameworks establish the standards that regulators and industry bodies will require.
                </p>
              </div>
              <div className="overview-reason-card">
                <h3 className="overview-reason-title">AGI-Ready Infrastructure</h3>
                <p className="overview-reason-description">
                  As AI systems acquire autonomy, traditional oversight becomes inadequate. FERZ's recursive governance architecture scales from current AI deployments to future AGI systems requiring constitutional bounds.
                </p>
              </div>
            </div>
          </section>

          <section className="overview-cta-section">
            <h2 className="overview-section-title">Begin Your Constitutional AI Journey</h2>
            <p className="overview-cta-description">
              Every AI system will require constitutional governance. The question is whether your organization leads this transformation or adapts to standards others define.
            </p>
            <div className="overview-cta-buttons">
              <button className="overview-cta-button primary">Explore Constitutional AI Services</button>
              <button className="overview-cta-button secondary">Contact Us</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
};
export default ServicesOverview;