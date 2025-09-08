import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import './ServicesOverview.css';
import { ShieldCheck, Scale, Wand2, Brain, Layers, Gauge, BookOpen, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const ServicesOverview = () => {
  const structuredData = {
    "@context": "https://schema.org",
        "@type": "CollectionPage",
        "url": "https://ferzconsulting.com/services-overview",
    "name": "Deterministic AI Services | FERZ",
    "description": "Deterministic AI services with mathematical certainty and constitutional compliance."
  };

  return (
    <>
      <Helmet>
        <title>Deterministic AI Services | FERZ - Mathematical Certainty for Enterprise AI</title>
        <meta name="description" content="FERZ transforms enterprise AI from probabilistic risk into mathematically guaranteed advantage. Deterministic services for compliance and transformation." />
        <link rel="canonical" href="https://ferzconsulting.com/services-overview" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="app">
        <Navbar />
        <Breadcrumb items={[
          { label: 'Home', path: '/' },
          { label: 'Services Overview', path: '/services-overview' }
        ]} />
        <div className="breadcrumb-spacer" />
        <main className="so-main">
          <div className="so-authority-badge">
            Patent-Protected AI Governance Authority | 5 Filed Patents + 5 Defensive Publications | Federal Policy Advisory Since 2013
  </div>

          {/* Hero Section */}
          <section className="so-header">
            <div className="so-container">
              <div className="so-header-content">
                <h1 className="so-services-title">Deterministic AI Services</h1>
                <p className="so-authority-tagline">Mathematical Certainty | Enterprise Transformation | Regulatory Compliance</p>
                <div className="so-philosophy-statement">
                  <strong>FERZ transforms enterprise AI from probabilistic risk into mathematically guaranteed competitive advantage.</strong> Our IP-protected methodologies deliver deterministic certainty where traditional consulting provides statistical hope, ensuring your AI systems meet regulatory standards with formal verification guarantees.
                </div>
              </div>
  </div>
</section>

          {/* Services Philosophy */}
          <section className="so-philosophy-section">
            <div className="so-container">
              <div className="so-philosophy-content">
                <h2 className="so-philosophy-title">The FERZ Services Philosophy</h2>
                <p className="so-philosophy-text">
                  Traditional AI consulting offers frameworks and probabilistic improvements. FERZ delivers mathematical transformation through deterministic methodologies. Our services combine 20+ years of federal IT leadership, 5 filed patents in deterministic AI governance, and proven frameworks that convert AI compliance from operational burden into strategic advantage through formal verification and mathematical guarantees.
                </p>

                <div className="so-philosophy-pillars">
                  <div className="so-pillar-card">
                    <ShieldCheck color="#fa2132" />
                    <h4>Mathematical Foundation</h4>
                    <p>Every engagement delivers measurable outcomes through formal verification and deterministic validation, not consulting theories.</p>
                  </div>
                  <div className="so-pillar-card">
                    <Scale color="#fa2132" />
                    <h4>Regulatory Authority</h4>
                    <p>Federal policy advisory experience ensures methodologies align with enforcement realities before compliance deadlines.</p>
                  </div>
                  <div className="so-pillar-card">
                    <Wand2 color="#fa2132" />
                    <h4>Patent-Protected Methods</h4>
                    <p>Proprietary frameworks competitors cannot replicate, delivering sustainable competitive advantages for client organizations.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Authority Foundation */}
          <section className="so-section">
            <div className="so-container">
              <div className="so-authority-foundation">
                <h2 className="so-section-title-alt">Why FERZ Authority Exceeds Traditional AI Consulting</h2>
                <p className="so-section-subtitle-alt">Where others provide frameworks, FERZ delivers transformation through patent-protected methodologies and federal policy expertise</p>

                <div className="so-authority-grid">
                  <div className="so-authority-card"><span className="so-authority-number">5</span><p className="so-authority-metric">Filed Patents in<br/>AI Governance</p></div>
                  <div className="so-authority-card"><span className="so-authority-number">5</span><p className="so-authority-metric">Defensive Publications<br/>Securing IP Territory</p></div>
                  <div className="so-authority-card"><span className="so-authority-number">12+</span><p className="so-authority-metric">Years Developing<br/>Deterministic Methods</p></div>
                  <div className="so-authority-card"><span className="so-authority-number">20+</span><p className="so-authority-metric">Years Federal IT<br/>Transformation Leadership</p></div>
                </div>

                <div className="so-authority-note">
                  <h3>Proven Federal Leadership</h3>
                  <p>Edward Meyman combines 20+ years of federal IT transformation leadership at U.S. Department of Labor and General Services Administration with federal policy advisory experience, ensuring FERZ methodologies align with regulatory enforcement realities before industry-wide compliance deadlines.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Portfolio */}
          <section className="so-section so-section-alt">
            <div className="so-container">
              <h2 className="so-section-title">FERZ Deterministic AI Portfolio</h2>
              <p className="so-section-subtitle">Comprehensive transformation through patent-protected deterministic methodologies</p>

              <div className="so-services-grid">
                <div className="so-service-card">
                  <h3><Brain color="#fa2132" /> AI Consulting Services</h3>
                  <div className="so-service-focus">Trustworthy AI for Regulated Industries</div>
                  <div className="so-service-description">Transform your AI systems from probabilistic risk into regulatory-compliant competitive advantage. Our deterministic methodologies ensure AI outputs meet legal standards with mathematical guarantees, not statistical hope.</div>
                  <div className="so-service-outcomes">
                    <h4>Strategic Outcomes:</h4>
                    <p>• Regulatory compliance with measurable certainty<br/>• Legal liability reduction through deterministic validation<br/>• Competitive advantage via patent-protected AI governance</p>
                  </div>
                  <Link to="/services-overview/ai-consulting" className="so-service-link">Explore AI Consulting Services →</Link>
            </div>

                <div className="so-service-card">
                  <h3><Layers color="#fa2132" /> IT Modernization</h3>
                  <div className="so-service-focus">AI-Ready Infrastructure Transformation</div>
                  <div className="so-service-description">Modernize legacy systems for deterministic AI integration. Our federal IT leadership experience delivers infrastructure transformation that supports advanced AI governance while maintaining security and compliance.</div>
                  <div className="so-service-outcomes">
                    <h4>Strategic Outcomes:</h4>
                    <p>• Infrastructure ready for advanced AI deployment<br/>• Security-first modernization with federal-grade standards<br/>• Scalable architecture supporting deterministic governance</p>
                  </div>
                  <Link to="/services-overview/it-innovation-modernization" className="so-service-link">Explore IT Modernization →</Link>
                </div>

                <div className="so-service-card">
                  <h3><Target color="#fa2132" /> Strategic Advisory</h3>
                  <div className="so-service-focus">Constitutional AI Leadership</div>
                  <div className="so-service-description">Navigate the strategic implications of deterministic AI through constitutional governance frameworks. Our advisory services align AI strategy with organizational values while ensuring regulatory compliance and competitive positioning.</div>
                  <div className="so-service-outcomes">
                    <h4>Strategic Outcomes:</h4>
                    <p>• AI strategy aligned with constitutional principles<br/>• Executive leadership prepared for AI governance challenges<br/>• Organizational readiness for regulatory enforcement</p>
                  </div>
                  <Link to="/services-overview/strategic-advisory-services" className="so-service-link">Explore Strategic Advisory →</Link>
                </div>

                <div className="so-service-card">
                  <h3><BookOpen color="#fa2132" /> AI Enablement Strategy</h3>
                  <div className="so-service-focus">Enterprise Compliance Transformation</div>
                  <div className="so-service-description">Enable organization-wide AI adoption through compliance-first enablement strategies. Our methodologies ensure AI initiatives deliver business value while meeting regulatory requirements from deployment day one.</div>
                  <div className="so-service-outcomes">
                    <h4>Strategic Outcomes:</h4>
                    <p>• Accelerated AI adoption with built-in compliance<br/>• Risk mitigation through deterministic validation<br/>• Scalable enablement across business units</p>
                  </div>
                  <Link to="/services-overview/ai-enablement-strategy" className="so-service-link">Explore AI Enablement Strategy →</Link>
                </div>

                <div className="so-service-card">
                  <h3><Scale color="#fa2132" /> Constitutional AI Governance</h3>
                  <div className="so-service-focus">Democratic AI Oversight Systems</div>
                  <div className="so-service-description">Implement constitutional governance frameworks for AI systems requiring democratic oversight. Our patent-protected Constitutional Blockchain architecture ensures AI decisions align with organizational values and regulatory requirements.</div>
                  <div className="so-service-outcomes">
                    <h4>Strategic Outcomes:</h4>
                    <p>• Democratic oversight of critical AI systems<br/>• Constitutional alignment with organizational values<br/>• Transparent governance for stakeholder confidence</p>
              </div>
                  <Link to="/services-overview/design-of-ai-governance-models" className="so-service-link">Explore Constitutional AI Governance →</Link>
            </div>

                <div className="so-service-card">
                  <h3><Gauge color="#fa2132" /> Systems Optimization</h3>
                  <div className="so-service-focus">Deterministic Performance Enhancement</div>
                  <div className="so-service-description">Optimize existing AI systems for deterministic performance through our behavioral adaptive methodologies. Transform unreliable AI outputs into mathematically validated business intelligence and decision support.</div>
                  <div className="so-service-outcomes">
                    <h4>Strategic Outcomes:</h4>
                    <p>• Optimized AI performance with mathematical validation<br/>• Reduced operational risk through deterministic outputs<br/>• Enhanced decision quality via bias elimination</p>
                  </div>
                  <Link to="/services-overview/within-paradigm-improvements" className="so-service-link">Explore Systems Optimization →</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Integrated Transformation Approach */}
          <section className="so-section">
            <div className="so-container">
              <h2 className="so-section-title">Integrated Transformation Approach</h2>
              <p className="so-section-subtitle">How FERZ services combine to deliver comprehensive AI governance transformation</p>

              <div className="so-approach-grid">
                <div className="so-approach-step">
                  <div className="so-approach-step-number">1</div>
                  <h3>Strategic Foundation</h3>
                  <p>Strategic Advisory establishes AI governance vision aligned with organizational values and regulatory requirements</p>
                </div>
                <div className="so-approach-step">
                  <div className="so-approach-step-number">2</div>
                  <h3>Infrastructure Readiness</h3>
                  <p>IT Modernization creates the technical foundation capable of supporting deterministic AI governance systems</p>
                </div>
                <div className="so-approach-step">
                  <div className="so-approach-step-number">3</div>
                  <h3>AI Implementation</h3>
                  <p>AI Consulting Services deploy deterministic governance systems with mathematical compliance guarantees</p>
              </div>
                <div className="so-approach-step">
                  <div className="so-approach-step-number">4</div>
                  <h3>Optimization & Scale</h3>
                  <p>Systems Optimization and AI Enablement Strategy expand governance across the enterprise with sustained performance</p>
              </div>
              </div>

              <div className="so-approach-note">
                <h3>Constitutional AI Governance Integration</h3>
                <p>Our Constitutional AI Governance service integrates across all phases, ensuring democratic oversight and value alignment throughout your AI transformation journey.</p>
              </div>
            </div>
          </section>

          {/* Client Engagement Framework */}
          <section className="so-section so-section-alt">
            <div className="so-container">
              <h2 className="so-section-title">Client Engagement Framework</h2>
              <p className="so-section-subtitle">Selective partnerships with organizations serious about AI governance transformation</p>

              <div className="so-engagement-grid">
                <div className="so-engagement-card so-border-blue">
                  <h3>Strategic Assessment</h3>
                  <p>Comprehensive evaluation of organizational readiness for deterministic AI governance transformation.</p>
                  <p className="so-emphasis so-blue">• AI risk and compliance audit<br/>• Regulatory timeline analysis<br/>• Technical infrastructure assessment<br/>• Strategic transformation roadmap</p>
                </div>

                <div className="so-engagement-card so-border-green">
                  <h3>Methodology Selection</h3>
                  <p>Tailored combination of FERZ services based on organizational priorities and regulatory requirements.</p>
                  <p className="so-emphasis so-green">• Service portfolio optimization<br/>• Engagement timeline planning<br/>• Resource allocation strategy<br/>• Success metrics definition</p>
              </div>

                <div className="so-engagement-card so-border-purple">
                  <h3>Transformation Execution</h3>
                  <p>Implementation of integrated services with mathematical validation and measurable outcomes.</p>
                  <p className="so-emphasis so-purple">• Patent-protected methodology deployment<br/>• Real-time progress validation<br/>• Regulatory compliance verification<br/>• Sustained transformation support</p>
              </div>
              </div>

              <div className="so-engagement-note">
                <h3>Selective Engagement Criteria</h3>
                <p>FERZ works exclusively with organizations that value systemic excellence and responsible innovation. We maintain selective engagement criteria to ensure mutual success and transformational outcomes.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="so-cta-section">
            <div className="so-container">
              <div className="so-cta-content">
                <h2>Transform Your AI with Mathematical Certainty</h2>
                <p>Join enterprise leaders who choose deterministic transformation over probabilistic hope</p>
                <div className="so-cta-buttons">
                  <Link to="/contact-us" className="so-btn-primary">Schedule Strategic Assessment</Link>
                  <a href="/DELIA-Executive-Brief-AI-Governance.pdf" className="so-btn-secondary" target="_blank" rel="noopener noreferrer">Download Services Overview</a>
                  <Link to="/contact-us" className="so-btn-secondary">Request Methodology Portfolio</Link>
                </div>

                <div className="so-cta-badges">
                  <div><div className="so-badge-title">Patent</div><div className="so-badge-sub">Protected Methods</div></div>
                  <div><div className="so-badge-title">Federal</div><div className="so-badge-sub">Policy Expertise</div></div>
                  <div><div className="so-badge-title">Mathematical</div><div className="so-badge-sub">Guarantees</div></div>
                </div>
              </div>
            </div>
          </section>

          {/* Inline Page Footer Note (keeps global Footer below) */}
          <div className="so-page-footer-note">
            <div className="so-container">
              <p>© 2025 FERZ LLC. All rights reserved.</p>
              <p>Strategic transformation outcomes based on patent-protected methodologies and federal leadership experience. Engagement success depends on organizational readiness and commitment to deterministic AI governance principles.</p>
              <p><strong>Authority Foundation:</strong> FERZ methodologies represent proprietary approaches developed through 12+ years of deterministic AI governance research and 20+ years of federal IT transformation leadership. Results reflect mathematical validation, not statistical projections.</p>
            </div>
          </div>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default ServicesOverview;