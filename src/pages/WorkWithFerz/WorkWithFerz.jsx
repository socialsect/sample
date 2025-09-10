import React from 'react';
import './WorkWithFerz.css';
import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer/Footer";
import { Helmet } from 'react-helmet-async';

const WorkWithFerz = () => {
  return (
    <>
      <Helmet>
        <title>AI Governance Careers | FERZ</title>
        <meta name="description" content="Join FERZ LLC's professional network for deterministic AI governance careers. We're building mathematical foundations that transform AI from probabilistic chaos into deterministic reliability. Express your interest in AI governance jobs, compliance roles, and mathematical AI positions." />
        <meta name="keywords" content="work with FERZ, AI governance jobs, deterministic AI careers, AI compliance jobs, mathematical AI roles, AI governance consulting, formal verification, regulatory compliance, enterprise AI, AI safety careers" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FERZ LLC" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Work with FERZ | Join the Deterministic AI Revolution" />
        <meta property="og:description" content="Join FERZ LLC's professional network for deterministic AI governance careers. We're building mathematical foundations that transform AI from probabilistic chaos into deterministic reliability." />
        <meta property="og:url" content="https://ferzconsulting.com/work-with-ferz" />
        <meta property="og:site_name" content="FERZ LLC" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Work with FERZ | Join the Deterministic AI Revolution" />
        <meta name="twitter:description" content="Join FERZ LLC's professional network for deterministic AI governance careers. We're building mathematical foundations that transform AI from probabilistic chaos into deterministic reliability." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ferzconsulting.com/work-with-ferz" />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#fa2132" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Structured Data for Career/Job Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Work with FERZ",
            "description": "Join FERZ LLC's professional network for deterministic AI governance careers. We're building mathematical foundations that transform AI from probabilistic chaos into deterministic reliability.",
            "url": "https://ferzconsulting.com/work-with-ferz",
            "mainEntity": {
              "@type": "Organization",
              "name": "FERZ LLC",
              "url": "https://ferzconsulting.com",
              "description": "AI governance consulting firm specializing in deterministic AI solutions",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Edward Meyman",
                "jobTitle": "Founder & CEO"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "McLean",
                "addressRegion": "Virginia",
                "addressCountry": "USA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@ferzconsulting.com",
                "contactType": "careers"
              },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "5 Patents Filed",
                  "description": "Deterministic AI Governance"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "name": "4 Publications",
                  "description": "Defensive IP Strategy"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "10+ Papers",
                  "description": "Academic Research"
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://ferzconsulting.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Work with FERZ",
                  "item": "https://ferzconsulting.com/work-with-ferz"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ferzconsulting.com/work-with-ferz?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <div className="work-with-ferz">
        <Navbar />
      <div className="authority-badge">
        Join the Deterministic AI Revolution | Patent-Protected Innovation | Mathematical Certainty Over Statistical Hope
      </div>
      
      {/* Hero Section */}
      <header className="work-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Work with FERZ</h1>
            <p className="mission-tagline">Shape AI's Future Through Deterministic Governance</p>
            <div className="mission-statement">
              <strong>FERZ seeks exceptional professionals who recognize that AI's greatest challenge isn't making it more powerful—it's making it predictable.</strong> We're building the mathematical foundations that transform AI from probabilistic chaos into deterministic reliability. If you believe precision matters more than speed, and certainty trumps statistical confidence, we want to hear from you.
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <h2 className="philosophy-title">The FERZ Professional Philosophy</h2>
            <p className="philosophy-text">
              Most accept AI's inherent unpredictability as inevitable. We challenge this prevailing assumption entirely. FERZ professionals are contrarians who see mathematical certainty where others accept statistical approximation. We don't just build AI systems—we architect the governance frameworks that make AI trustworthy at enterprise scale, creating new career paths in AI governance and deterministic AI roles.
            </p>
            <div className="philosophy-pillars">
              <div className="pillar-card">
                <h4>Mathematical Rigor</h4>
                <p>We believe in formal verification, deterministic outcomes, and mathematical proof over heuristic approaches and best-effort solutions.</p>
              </div>
              <div className="pillar-card">
                <h4>Systems Thinking</h4>
                <p>We architect comprehensive frameworks rather than point solutions, understanding that true governance requires systematic rather than ad-hoc approaches.</p>
              </div>
              <div className="pillar-card">
                <h4>Regulatory Reality</h4>
                <p>We build for the enforcement environment that exists, not the permissive landscape AI companies hope will continue indefinitely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Areas */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Areas of Interest</h2>
          <p className="section-subtitle">We're building a bench of exceptional talent across core disciplines required for deterministic AI governance, AI compliance jobs, and mathematical AI roles</p>
          
          <div className="opportunities-grid">
            {opportunities.map((opp, index) => (
              <div className="opportunity-card" key={index}>
                <h3 className="opportunity-title">{opp.title}</h3>
                <p className="opportunity-subtitle">{opp.subtitle}</p>
                <p className="opportunity-description">{opp.description}</p>
                <div className="opportunity-skills">
                  <h5>Key Expertise Areas:</h5>
                  <p className="skills-list">{opp.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section">
        <div className="container">
          <div className="important-notice">
            <div className="notice-title">Important: Expression of Interest, Not Job Applications</div>
            <div className="notice-content">
              <p><strong>This is not a job posting.</strong> We are building a qualified talent pipeline for future opportunities as funding enables expansion and client engagements create specific project needs.</p>
              <p><strong>Contingent Opportunities:</strong> All potential engagements are contingent upon funding milestones, client contract execution, and successful completion of FERZ's comprehensive evaluation process.</p>
              <p><strong>Selective Process:</strong> FERZ reserves full discretion in candidate evaluation and may decline expressions of interest without explanation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Expression of Interest Process</h2>
          <p className="section-subtitle">A structured approach to building our professional community</p>
          
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="process-number">{index + 1}</div>
                <h3 className="process-title">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="section">
        <div className="container">
          <div className="founders-note">
            <div className="founders-content">
              <div className="founders-avatar">EM</div>
              <div>
                <h3>A Personal Note from Edward Meyman, Founder</h3>
                <p>"FERZ exists because I believe exceptional minds shouldn't accept AI's inherent unpredictability as inevitable. We see something deeper: a system of meaning that can — and must — be governed with mathematical precision."</p>
                <p>"If you're the kind of professional who sees formal structure where others see statistical noise, who values certainty over guesswork, and who understands that true innovation often requires contrarian thinking, then you are exactly who we want to hear from."</p>
                <p className="founders-signature">— <strong>Edward Meyman, Founder & CEO, FERZ</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Express Your Interest</h2>
            <p>Join the professionals shaping the future of deterministic AI governance</p>
            
            <div className="cta-notice">
              <p><strong>This is a talent network, not a job posting.</strong> Submitting your details lets us reach out if aligned opportunities open up.</p>
            </div>

            <div className="credibility-markers">
              {credibilityMarkers.map((marker, index) => (
                <div className="marker" key={index}>
                  <div className="marker-value">{marker.value}</div>
                  <div className="marker-label">{marker.label}</div>
                </div>
              ))}
            </div>

            <form className="interest-form">
              <div className="form-group">
                <label htmlFor="full-name">Full Name *</label>
                <input type="text" id="full-name" required placeholder="Your full name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Professional Email *</label>
                <input type="email" id="email" required placeholder="your.email@domain.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="area-interest">Primary Area of Interest *</label>
                <select id="area-interest" required>
                  <option value="">Select primary area</option>
                  <option value="ai-ml-engineering">AI/ML Systems Engineering</option>
                  <option value="regulatory-compliance">Regulatory Compliance & Policy</option>
                  <option value="enterprise-consulting">Enterprise Consulting & Implementation</option>
                  <option value="product-development">Product Development & Architecture</option>
                  <option value="computational-linguistics">Computational Linguistics & Research</option>
                  <option value="business-development">Strategic Partnerships & Business Development</option>
                  <option value="other">Other (specify in background)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="background">Professional Background & Expertise *</label>
                <textarea 
                  id="background" 
                  rows="5" 
                  required 
                  placeholder="Describe your relevant experience, technical expertise, and why you're interested in deterministic AI governance..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary">Submit Expression of Interest</button>
              
              <p className="form-disclaimer">
                By submitting this form, you acknowledge that this is an expression of interest only and does not create any employment relationship or guarantee of future opportunities. FERZ reserves the right to evaluate and decline applications at its sole discretion.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

// Data
const opportunities = [
  {
    title: "AI/ML Systems Engineering",
    subtitle: "Senior-level roles with project-based and full-time opportunities",
    description: "Build the runtime infrastructure that transforms probabilistic AI outputs into deterministic, compliance-ready systems. Work on formal verification, constraint satisfaction, and mathematical governance frameworks.",
    skills: "Formal verification methods, constraint programming, distributed systems, Python/PyTorch, mathematical modeling, enterprise AI infrastructure"
  },
  {
    title: "Regulatory Compliance & Policy",
    subtitle: "Mid to senior-level consulting and advisory roles",
    description: "Navigate the complex intersection of AI technology and regulatory requirements. Translate legal frameworks into technical specifications and ensure FERZ solutions meet evolving compliance standards.",
    skills: "EU AI Act, FDA AI guidance, SEC algorithmic oversight, GDPR/privacy law, government contracting, risk management, policy analysis"
  },
  {
    title: "Enterprise Consulting & Implementation",
    subtitle: "Senior consulting roles with Fortune 500 client engagement",
    description: "Guide Fortune 500 organizations through AI governance transformation. Lead complex implementations, manage stakeholder alignment, and deliver measurable compliance outcomes for enterprise clients.",
    skills: "Enterprise transformation, change management, AI governance consulting, stakeholder engagement, project management, financial services/healthcare domain expertise"
  },
  {
    title: "Product Development & Architecture",
    subtitle: "Mid to senior-level product and engineering roles",
    description: "Design and build user-facing products that make deterministic AI governance accessible to enterprise teams. Create intuitive interfaces for complex mathematical frameworks and compliance workflows.",
    skills: "Product management, UX design, full-stack development, API design, enterprise software, technical product marketing, user research"
  },
  {
    title: "Computational Linguistics & Research",
    subtitle: "Research and advanced development positions, PhD preferred",
    description: "Push the boundaries of deterministic AI governance through fundamental research in computational linguistics and formal methods. Develop mathematical frameworks for linguistic governance and publish authoritative research.",
    skills: "Computational linguistics, formal semantics, AI safety research, formal methods, natural language processing, academic publication, mathematical modeling, theoretical computer science"
  },
  {
    title: "Strategic Partnerships & Business Development",
    subtitle: "Senior business development and partnership roles",
    description: "Build strategic relationships with cloud providers, systems integrators, and enterprise software companies. Develop licensing partnerships and expand FERZ's market reach through channel strategies.",
    skills: "Enterprise sales, partnership development, IP licensing, strategic alliances, channel management, competitive intelligence, market analysis"
  }
];

const processSteps = [
  {
    title: "Submit Interest",
    description: "Complete the expression of interest form with your background, expertise areas, and philosophical alignment with deterministic AI governance."
  },
  {
    title: "Initial Evaluation",
    description: "FERZ reviews submissions for technical qualification, domain expertise, and cultural fit. Only qualified candidates are added to our professional network."
  },
  {
    title: "Network Engagement",
    description: "Qualified professionals receive periodic updates on FERZ progress, technical insights, and early notification of specific opportunity availability."
  },
  {
    title: "Opportunity Activation",
    description: "When funding or client engagements create specific roles, network members receive priority consideration for formal interview processes."
  }
];

const credibilityMarkers = [
  { value: "5 Patents Filed", label: "Deterministic AI Governance" },
  { value: "4 Publications", label: "Defensive IP Strategy" },
  { value: "10+ Papers", label: "Academic Research" },
  { value: "20+ Years", label: "Federal IT Leadership" }
];

export default WorkWithFerz;
