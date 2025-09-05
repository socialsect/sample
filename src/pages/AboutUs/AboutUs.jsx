import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, BookOpen, Building2, Zap, Microscope, Settings, Brain } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
const FerzAbout = () => {
  // Structured Data for About Us Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About FERZ Consulting - Mathematical AI Governance Authority",
    "description": "FERZ Consulting specializes in deterministic AI governance for regulated industries. Patent-protected frameworks delivering mathematical certainty since 2013.",
    "url": "https://ferzconsulting.com/about-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "FERZ Consulting",
      "url": "https://ferzconsulting.com/",
      "logo": "https://ferzconsulting.com/logo.png",
      "description": "Mathematical AI governance authority specializing in deterministic frameworks for regulated industries",
      "foundingDate": "2013",
      "founder": {
        "@type": "Person",
        "name": "Edward Meyman"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Washington",
        "addressRegion": "DC",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 212 380 6044",
        "email": "contact@ferzconsulting.com"
      },
      "areaServed": ["US", "UK", "Europe"],
      "knowsAbout": [
        "Deterministic AI Governance",
        "Mathematical AI Certainty",
        "Constitutional AI Frameworks",
        "Regulatory Compliance",
        "Patent-Protected Innovation"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>About FERZ: Mathematical AI Governance Authority | FERZ</title>
        <meta name="description" content="FERZ Consulting: Patent-protected deterministic AI governance authority since 2013. Federal-proven frameworks for regulated industries. Mathematical certainty over statistical hope." />
        <meta name="keywords" content="FERZ consulting, mathematical AI governance, deterministic AI authority, patent-protected AI, federal AI expertise, Edward Meyman" />
        <link rel="canonical" href="https://ferzconsulting.com/about-us" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className='about-page'>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background: #000000;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-authority-badge {
          background: linear-gradient(135deg, #fa2132, #d11d2b);
          color: white;
          text-align: center;
          padding: 12px 0;
          font-size: 0.9em;
          font-weight: 600;
        }

        /* Header */
        .about-header {
          background: #000000;
          color: white;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .about-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, #fa213233 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, #fa213222 0%, transparent 50%);
          pointer-events: none;
        }

        .about-header-content {
          position: relative;
          z-index: 1;
        }

        .about-title {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: 4em;
          margin-bottom: 30px;
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
          line-height: 1.2;
          text-align: center;
        }

        .about-mission-tagline {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 1.5em;
          margin-bottom: 40px;
          opacity: 0.95;
          text-align: center;
        }

        .about-mission-statement {
          background: rgba(250, 33, 50, 0.15);
          padding: 40px;
          border-radius: 20px;
          border: 1px solid rgba(250, 33, 50, 0.3);
          margin-bottom: 40px;
          font-size: 1.2em;
          backdrop-filter: blur(10px);
          text-align: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Section Styling */
        .about-section-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 2.8em;
          text-align: center;
          back
          margin: 80px 0 30px;
          color: #ffffff;
        }

        .about-section-subtitle {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 1.2em;
          text-align: center;
          margin-bottom: 50px;
          color: #e5e7eb;
          max-width: 800px;
          margin-left: auto;
          // background:#000;
          margin-right: auto;
        }

        .about-section {
          padding: 50px 0;
          background: #000000;
          color: white;
        }

        /* Origin Story */
        .about-origin-story {
          background: rgba(30, 30, 30, 0.8);
          padding: 60px;
          border-radius: 25px;
          position: relative;
          color: #ffffff;
          border: 1px solid rgba(250, 33, 50, 0.3);
        }

        .about-origin-story::before {
          content: 'ORIGIN STORY';
          position: absolute;
          top: -15px;
          left: 40px;
          background: #000000;
          color: #fa2132;
          padding: 8px 20px;
          border-radius: 8px;
          font-size: 0.9em;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          letter-spacing: 1px;
        }

        /* Fundamental Difference */
        .about-difference-section {
          background: #000;
          padding: 60px 0;
          color: white;
        }

        .about-difference-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 40px;
        }

        .about-industry-approach {
          background: rgba(30, 30, 30, 0.8);
          padding: 35px;
          border-radius: 15px;
          border: 2px solid #fa2132;
          color: #ffffff;
        }

        .about-ferz-approach {
          background: rgba(30, 30, 30, 0.8);
          padding: 35px;
          border-radius: 15px;
          border: 2px solid #fa2132;
          color: #ffffff;
        }

        .about-industry-approach h3 {
          color: #fa2132;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 1.4em;
          font-family: 'Inter', sans-serif;
        }

        .about-ferz-approach h3 {
          color: #fa2132;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 1.4em;
          font-family: 'Inter', sans-serif;
        }

        /* Leadership */
        .about-leadership-section {
          background: #000;
          padding: 60px;
          border-radius: 25px;
          margin: 60px 0;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          border-top: 6px solid #dc2626;
        }

        .about-leader-profile {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 40px;
          align-items: start;
        }

        .about-leader-image {
          width: 200px;
          height: 200px;
          border-radius: 15px;
          background: linear-gradient(135deg, #000000, #3f3f3f);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3em;
          font-weight: 900;
          font-family: 'Inter', sans-serif;
        }

        .about-leader-content h3 {
          color: #ffffff;
          font-size: 1.8em;
          margin-bottom: 15px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
        }

        .about-leader-credentials {
          background: rgba(30, 30, 30, 0.8);
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #fa2132;
          color: #ffffff;
          margin: 20px 0;
        }

        /* Competitive Moat */
        .about-moat-section {
          background: linear-gradient(135deg, #000000, #1f1f1f);
          color: white;
          padding: 80px 0;
        }

        .about-moat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .about-moat-card {
          background: rgba(30, 30, 30, 0.8);
          padding: 30px;
          border-radius: 15px;
          color: #ffffff;
          border: 1px solid rgba(250, 33, 50, 0.3);
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .about-moat-icon {
          font-size: 2.5em;
          margin-bottom: 15px;
          color: #fa2132;
        }

        .about-moat-title {
          font-size: 1.3em;
          margin-bottom: 15px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
        }

        /* Values & Philosophy */
        .about-values-section {
          background: #000;
          padding: 60px 0;}

        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .about-value-card {
          background: rgba(30, 30, 30, 0.8);
          padding: 35px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border-left: 6px solid #fa2132;
          color: #ffffff;
        }

        .about-value-card h4 {
          color: #ffffff;
          margin-bottom: 15px;
          font-weight: 700;
          font-size: 1.2em;
          font-family: 'Inter', sans-serif;
        }

        /* Call to Action */
        .about-cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #000000, #1f1f1f, #3f3f3f);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .about-cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(220, 38, 38, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(220, 38, 38, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        .about-cta-content {
          position: relative;
          z-index: 1;
        }

        .about-cta-buttons {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .about-btn-primary {
          background: #fa2132;
          color: white;
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Inter', sans-serif;
        }

        .about-btn-secondary {
          background: transparent;
          color: white;
          padding: 18px 35px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          border: 2px solid white;
          transition: all 0.3s ease;
          font-size: 1.1em;
          font-family: 'Inter', sans-serif;
        }

        .about-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(250, 33, 50, 0.4);
          background: #d11d2b;
        }

        .about-btn-secondary:hover {
          background: #333333;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Footer */
        .about-footer {
          padding: 60px 0;
          background: #000000;
          text-align: center;
          font-size: 0.9em;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-title {
            font-size: 2.8em;
          }

          .about-difference-grid {
            grid-template-columns: 1fr;
          }

          .about-leader-profile {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .about-leader-image {
            margin: 0 auto;
          }

          .about-origin-story, .about-leadership-section {
            padding: 40px 20px;
          }

          .about-cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .about-container {
            padding: 0 15px;
          }
        }
      `}</style>

      {/* Authority Badge */}
      < Navbar/>
      <div className="about-authority-badge">
        Deterministic AI Governance Authority | 12+ Years Innovation Leadership | Patent-Protected Frameworks/Solutions
      </div>

      {/* Hero Section */}
      <section className="about-header">
        <div className="about-container">
          <div className="about-header-content">
            <h1 className="about-title">About FERZ</h1>
            <p className="about-mission-tagline">Formalizing Emergent Reasoning Zones</p>
            
            <div className="about-mission-statement">
              <strong>Where visionaries shape AI's future instead of accepting its limitations.</strong><br /><br />
              Artificial intelligence consistently falters where precision matters most. Most accept this as inevitable—we do not. FERZ exists to establish deterministic order where probabilistic chaos has become the norm. Not by following AI's natural drift, but by deliberately redirecting it toward exactness through mathematical governance.
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-origin-story">
            <h2 style={{color: '#ffffff', fontSize: '2.2em', marginBottom: '25px', textAlign: 'center', fontFamily: 'Inter', fontWeight: '700'}}>The FERZ Origin: 2013-2025</h2>
            <p style={{textAlign: 'center', marginBottom: '35px', fontSize: '1.1em', fontFamily: 'Inter', color: '#e5e7eb'}}>Twelve years of contrarian development while the industry embraced statistical approximation</p>
            
            <div style={{fontSize: '1.1em', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '30px', fontFamily: 'Inter'}}>
              Since 2013, we've refined a fundamentally different approach to AI reliability. While the industry pivoted from linguistics to statistics—trading meaning for probability, precision for scale—we recognized the profound flaw in this shift: unprecedented power without principled control.
            </div>
            
            <div style={{fontSize: '1.1em', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '30px', fontFamily: 'Inter'}}>
              Our work addresses this imbalance at its core. Through methodologies like LASO(f), our proprietary linguistic governance framework, we bring deterministic validation to AI outputs where statistical approaches inevitably falter. We apply these frameworks across law, healthcare, financial services, and government agencies—domains where ambiguity carries real consequences and reliability isn't merely preferred but essential.
            </div>
            
            <div style={{background: 'rgba(30, 30, 30, 0.8)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #fa2132', textAlign: 'center', color: '#ffffff'}}>
              <strong style={{color: '#fa2132', fontSize: '1.2em', fontFamily: 'Inter', fontWeight: '700'}}>Our Mission Transcends Conventional AI Consulting</strong><br /><br />
              We establish AI as a reliable, deterministic tool, consistent across borders, industries, and future developments. Where others see acceptable variance, we see unacceptable risk. Where others apply superficial corrections, we implement systematic governance.
            </div>
          </div>
        </div>
      </section>

      {/* Fundamental Difference */}
      <section className="about-difference-section">
        <div className="about-container">
          <h2 className="about-section-title">The Fundamental Difference</h2>
          <p className="about-section-subtitle">Why FERZ approaches AI governance from mathematical foundations while others rely on statistical approximation</p>
          
          <div className="about-difference-grid">
            <div className="about-industry-approach">
              <h3>Industry Standard Approach</h3>
              <div style={{marginBottom: '20px', lineHeight: '1.7', fontFamily: 'Inter'}}>
                <strong>Statistical Confidence:</strong> Post-hoc filtering and alignment training create probabilistic improvements in AI behavior without mathematical guarantees.
              </div>
              <ul style={{marginLeft: '20px', marginTop: '15px', lineHeight: '1.8', fontFamily: 'Inter'}}>
                <li>Constitutional AI through reinforcement learning</li>
                <li>Content filtering and safety guidelines</li>
                <li>Statistical bias detection and mitigation</li>
                <li>Best-effort compliance through heuristic rules</li>
              </ul>
              <p style={{marginTop: '20px', fontWeight: '700', color: '#dc2626', fontFamily: 'Inter'}}><strong>Limitation:</strong> Statistical hope cannot provide mathematical proof required for regulated industries</p>
            </div>
            
            <div className="about-industry-approach">
              <h3>FERZ Deterministic Approach</h3>
              <div style={{marginBottom: '20px', lineHeight: '1.7', fontFamily: 'Inter'}}>
                <strong>Mathematical Certainty:</strong> Formal verification and deterministic governance provide mathematical proof of compliance through validated frameworks with measurable guarantees.
              </div>
              <ul style={{marginLeft: '20px', marginTop: '15px', lineHeight: '1.8', fontFamily: 'Inter'}}>
                <li>LASO(f) linguistic governance with 98% error reduction</li>
                <li>DELIA real-time constraint validation</li>
                <li>Constitutional Blockchain with cryptographic integrity</li>
                <li>Formula of Fate mathematical behavioral modeling</li>
              </ul>
              <p style={{marginTop: '20px', fontWeight: '700', color: '#dc2626', fontFamily: 'Inter'}}><strong>Innovation:</strong> Deterministic frameworks enabling mathematical compliance proof for regulatory requirements</p>
            </div>
          </div>
          
          <div style={{marginTop: '50px', textAlign: 'center', background: '#fffbeb', padding: '30px', borderRadius: '15px', borderLeft: '6px solid #dc2626'}}>
            <h3 style={{color: '#000000', marginBottom: '15px', fontFamily: 'Inter', fontWeight: '700'}}>The Critical Distinction</h3>
            <p style={{fontSize: '1.1em', color: '#92400e', lineHeight: '1.7', fontFamily: 'Inter'}}>Trust at scale demands rigor. We provide it—because when AI makes consequential decisions, predictability isn't optional, it's imperative.</p>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-leadership-section">
            <h2 style={{color: '#000000', fontSize: '2.2em', marginBottom: '40px', textAlign: 'center', fontFamily: 'Inter', fontWeight: '700'}}>Leadership: Edward Meyman</h2>
            
            <div className="about-leader-profile">
              <div className="about-leader-image">EM</div>
              <div className="about-leader-content">
                <h3>Architect of Linguistic Precision</h3>
                <p style={{fontSize: '1.1em', marginBottom: '20px', lineHeight: '1.7', color: '#374151', fontFamily: 'Inter'}}>
                  When a well-designed chatbot misinterpreted a straightforward financial query—where syntax was technically correct but meaning was fundamentally lost—most accepted it as an acceptable limitation. Edward Meyman did not.
                </p>
                
                <div className="about-leader-credentials">
                  <strong style={{fontFamily: 'Inter'}}>Enterprise Governance Background:</strong><br />
                  Extensive experience in large-scale IT transformation and policy development, bringing deep understanding of regulatory compliance requirements to AI governance challenges
                </div>
                
                <p style={{fontSize: '1.05em', lineHeight: '1.7', color: '#374151', marginTop: '20px', fontFamily: 'Inter'}}>
                  FERZ began in 2013, forged at the intersection of two disciplines rarely combined: theoretical linguistics (the formal science of meaning) and enterprise IT governance (systematic control at scale). This unique convergence enables us to address what others miss: the unbridged gap between AI's capabilities and its reliability.
                </p>
                
                <p style={{fontSize: '1.05em', lineHeight: '1.7', color: '#374151', marginTop: '15px', fontFamily: 'Inter'}}>
                  While others focus on making AI more powerful, we focus on making it more precise. While others celebrate what AI can do, we ensure it does what it should.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Moat */}
      <section className="about-moat-section">
        <div className="about-container">
          <h2 style={{fontSize: '2.5em', marginBottom: '30px', textAlign: 'center', fontFamily: 'Inter', fontWeight: '700'}}>The FERZ Competitive Moat</h2>
          <p style={{fontSize: '1.2em', textAlign: 'center', marginBottom: '40px', opacity: '0.9', fontFamily: 'Inter'}}>Patent-protected innovations creating sustainable competitive advantages in deterministic AI governance</p>
          
          <div className="about-moat-grid">
            <div className="about-moat-card">
              <div className="about-moat-icon">
                <Shield size={40} />
              </div>
              <h4 className="about-moat-title">Patent Portfolio Protection</h4>
              <p style={{fontFamily: 'Inter'}}>5 filed patents controlling every legitimate pathway to deterministic AI governance, creating insurmountable competitive barriers</p>
            </div>
            <div className="about-moat-card">
              <div className="about-moat-icon">
                <BookOpen size={40} />
              </div>
              <h4 className="about-moat-title">Defensive Publication Strategy</h4>
              <p style={{fontFamily: 'Inter'}}>5 defensive publications establishing prior art and preventing competitor patent claims in deterministic governance territory</p>
            </div>
            <div className="about-moat-card">
              <div className="about-moat-icon">
                <Building2 size={40} />
              </div>
              <h4 className="about-moat-title">Federal Expertise Authority</h4>
              <p style={{fontFamily: 'Inter'}}>20+ years of federal IT transformation experience providing unmatched understanding of regulatory enforcement realities</p>
            </div>
            <div className="about-moat-card">
              <div className="about-moat-icon">
                <Zap size={40} />
              </div>
              <h4 className="about-moat-title">Mathematical Foundation</h4>
              <p style={{fontFamily: 'Inter'}}>12+ years developing formal verification frameworks while competitors pursued probabilistic approaches</p>
            </div>
          </div>
          
          <div style={{marginTop: '50px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.1)', padding: '30px', borderRadius: '15px', backdropFilter: 'blur(10px)'}}>
            <h3 style={{marginBottom: '15px', fontSize: '1.4em', fontFamily: 'Inter', fontWeight: '700'}}>Strategic Reality</h3>
            <p style={{fontSize: '1.1em', opacity: '0.9', fontFamily: 'Inter'}}>FERZ controls the deterministic governance category through comprehensive IP protection. Competitors must either license FERZ methodologies or develop inferior probabilistic alternatives that cannot meet regulatory mathematical requirements.</p>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="about-values-section">
        <div className="about-container">
          <h2 className="about-section-title">Core Values & Philosophy</h2>
          <p className="about-section-subtitle">Principles guiding FERZ innovation and commitment to deterministic AI governance excellence</p>
          
          <div className="about-values-grid">
            <div className="about-value-card">
              <h4>Mathematical Precision Over Statistical Hope</h4>
              <p style={{fontFamily: 'Inter'}}>We reject probabilistic approximations in favor of formal verification and mathematical guarantees. When precision matters, statistical confidence is insufficient.</p>
            </div>
            <div className="about-value-card">
              <h4>Systematic Governance Over Ad-Hoc Solutions</h4>
              <p style={{fontFamily: 'Inter'}}>We build comprehensive frameworks rather than point solutions, ensuring consistent governance across diverse AI applications and regulatory requirements.</p>
            </div>
            <div className="about-value-card">
              <h4>Regulatory Reality Over Academic Theory</h4>
              <p style={{fontFamily: 'Inter'}}>Our methodologies address actual enforcement requirements rather than theoretical compliance concepts, ensuring practical regulatory adherence.</p>
            </div>
            <div className="about-value-card">
              <h4>Intellectual Property Leadership</h4>
              <p style={{fontFamily: 'Inter'}}>We protect our innovations through comprehensive patent strategy, ensuring sustainable competitive advantages for FERZ and our partners.</p>
            </div>
            <div className="about-value-card">
              <h4>Enterprise-Grade Standards</h4>
              <p style={{fontFamily: 'Inter'}}>Our solutions meet the highest security and compliance standards, designed for demanding regulatory environments and mission-critical applications.</p>
            </div>
            <div className="about-value-card">
              <h4>Client Success Through Competitive Advantage</h4>
              <p style={{fontFamily: 'Inter'}}>We deliver measurable competitive advantages through patent-protected methodologies that competitors cannot replicate or license elsewhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="about-section">
        <div className="about-container">
          <div style={{background: 'rgba(30, 30, 30, 0.9)', padding: '50px', borderRadius: '20px', margin: '50px 0', borderLeft: '8px solid #fa2132', border: '1px solid rgba(250, 33, 50, 0.3)'}}>
            <h2 style={{color: '#ffffff', fontSize: '2em', marginBottom: '20px', textAlign: 'center', fontFamily: 'Inter', fontWeight: '700'}}>Why FERZ Exists: The Market Need</h2>
            <p style={{textAlign: 'center', marginBottom: '30px', fontSize: '1.1em', fontFamily: 'Inter', color: '#e5e7eb'}}>The regulatory enforcement reality creating mandatory demand for deterministic AI governance</p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px'}}>
              <div style={{background: 'rgba(40, 40, 40, 0.8)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #fa2132', color: '#ffffff'}}>
                <h4 style={{color: '#fa2132', marginBottom: '10px', fontWeight: '700', fontSize: '1.1em', fontFamily: 'Inter'}}>Regulatory Enforcement Acceleration</h4>
                <p style={{fontFamily: 'Inter', color: '#e5e7eb'}}>EU AI Act, FDA AI guidelines, and SEC disclosure requirements create mandatory demand for mathematical compliance verification starting January 2025.</p>
              </div>
              <div style={{background: 'rgba(40, 40, 40, 0.8)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #fa2132', color: '#ffffff'}}>
                <h4 style={{color: '#fa2132', marginBottom: '10px', fontWeight: '700', fontSize: '1.1em', fontFamily: 'Inter'}}>Enterprise Liability Exposure</h4>
                <p style={{fontFamily: 'Inter', color: '#e5e7eb'}}>Organizations deploying AI without deterministic governance face exponentially increasing liability exposure as enforcement intensifies across regulated industries.</p>
              </div>
              <div style={{background: 'rgba(40, 40, 40, 0.8)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #fa2132', color: '#ffffff'}}>
                <h4 style={{color: '#fa2132', marginBottom: '10px', fontWeight: '700', fontSize: '1.1em', fontFamily: 'Inter'}}>Competitive Solution Gap</h4>
                <p style={{fontFamily: 'Inter', color: '#e5e7eb'}}>No existing solutions provide mathematical proof of AI compliance—creating market opportunity for deterministic governance methodologies.</p>
              </div>
            </div>
            
            <div style={{marginTop: '40px', textAlign: 'center', background: 'rgba(40, 40, 40, 0.9)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(250, 33, 50, 0.3)'}}>
              <h3 style={{color: '#ffffff', marginBottom: '15px', fontSize: '1.4em', fontFamily: 'Inter', fontWeight: '700'}}>FERZ Market Position</h3>
              <p style={{fontSize: '1.1em', color: '#fa2132', fontWeight: '700', fontFamily: 'Inter'}}>First and only provider of mathematical AI governance solutions designed for regulatory compliance requirements in high-stakes industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="about-section" style={{background: '#000000'}}>
        <div className="about-container">
          <h2 className="about-section-title" style={{color: '#ffffff'}}>Team & Expertise</h2>
          <p className="about-section-subtitle" style={{color: '#e5e7eb'}}>Exceptional thinkers who recognize both AI's vast potential and its critical limitations</p>
          
          <div style={{background: 'rgba(30, 30, 30, 0.9)', padding: '50px', borderRadius: '20px', border: '1px solid rgba(250, 33, 50, 0.3)', marginTop: '40px'}}>
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
              <h3 style={{color: '#ffffff', marginBottom: '20px', fontSize: '1.6em', fontFamily: 'Inter', fontWeight: '700'}}>Multidisciplinary Expertise</h3>
              <p style={{fontSize: '1.1em', color: '#e5e7eb', lineHeight: '1.7', fontFamily: 'Inter'}}>Our team comprises technologists, linguists, and governance specialists determined to shape AI systems that deliver not just power, but precision.</p>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center', padding: '25px', background: 'rgba(40, 40, 40, 0.8)', borderRadius: '12px', border: '1px solid rgba(250, 33, 50, 0.2)'}}>
                <div style={{background: 'linear-gradient(135deg, #fa2132, #d11d2b)', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4em', fontWeight: 'bold', margin: '0 auto 15px'}}>
                  <Microscope size={24} />
                </div>
                <h4 style={{color: '#ffffff', marginBottom: '10px', fontFamily: 'Inter', fontWeight: '700'}}>Theoretical Linguistics</h4>
                <p style={{color: '#e5e7eb', fontFamily: 'Inter'}}>Formal science of meaning providing mathematical foundations for linguistic governance</p>
              </div>
              <div style={{textAlign: 'center', padding: '25px', background: 'rgba(40, 40, 40, 0.8)', borderRadius: '12px', border: '1px solid rgba(250, 33, 50, 0.2)'}}>
                <div style={{background: 'linear-gradient(135deg, #fa2132, #d11d2b)', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4em', fontWeight: 'bold', margin: '0 auto 15px'}}>
                  <Settings size={24} />
                </div>
                <h4 style={{color: '#ffffff', marginBottom: '10px', fontFamily: 'Inter', fontWeight: '700'}}>Enterprise IT Governance</h4>
                <p style={{color: '#e5e7eb', fontFamily: 'Inter'}}>Systematic control at scale through federal transformation experience</p>
              </div>
              <div style={{textAlign: 'center', padding: '25px', background: 'rgba(40, 40, 40, 0.8)', borderRadius: '12px', border: '1px solid rgba(250, 33, 50, 0.2)'}}>
                <div style={{background: 'linear-gradient(135deg, #fa2132, #d11d2b)', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4em', fontWeight: 'bold', margin: '0 auto 15px'}}>
                  <Brain size={24} />
                </div>
                <h4 style={{color: '#ffffff', marginBottom: '10px', fontFamily: 'Inter', fontWeight: '700'}}>AI Research Innovation</h4>
                <p style={{color: '#e5e7eb', fontFamily: 'Inter'}}>12+ years developing deterministic frameworks while industry pursued statistical approaches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Innovation Timeline: 2013-2025</h2>
          <p className="about-section-subtitle">Twelve years of systematic development creating comprehensive deterministic AI governance capabilities</p>
          
          <div style={{background: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)', marginTop: '40px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px'}}>
              <div style={{borderLeft: '4px solid #dc2626', paddingLeft: '20px'}}>
                <h4 style={{color: '#000000', marginBottom: '10px', fontWeight: '700', fontFamily: 'Inter'}}>2013-2018: Foundation</h4>
                <p style={{color: '#374151', fontFamily: 'Inter'}}>Theoretical linguistics research and enterprise governance convergence while industry embraced statistical approaches</p>
              </div>
              <div style={{borderLeft: '4px solid #dc2626', paddingLeft: '20px'}}>
                <h4 style={{color: '#000000', marginBottom: '10px', fontWeight: '700', fontFamily: 'Inter'}}>2019-2022: Methodology Development</h4>
                <p style={{color: '#374151', fontFamily: 'Inter'}}>LASO(f) linguistic governance framework and Formula of Fate mathematical modeling development</p>
              </div>
              <div style={{borderLeft: '4px solid #dc2626', paddingLeft: '20px'}}>
                <h4 style={{color: '#000000', marginBottom: '10px', fontWeight: '700', fontFamily: 'Inter'}}>2023-2024: Framework Integration</h4>
                <p style={{color: '#374151', fontFamily: 'Inter'}}>Constitutional Blockchain, DELIA, and comprehensive governance framework integration</p>
              </div>
              <div style={{borderLeft: '4px solid #dc2626', paddingLeft: '20px'}}>
                <h4 style={{color: '#000000', marginBottom: '10px', fontWeight: '700', fontFamily: 'Inter'}}>2025: IP Protection & Market Entry</h4>
                <p style={{color: '#374151', fontFamily: 'Inter'}}>Patent portfolio completion and market positioning ahead of regulatory enforcement deadlines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-content">
            <h2 style={{fontSize: '2.8em', marginBottom: '25px', fontFamily: 'Inter', fontWeight: '900'}}>Ready to Move Beyond Probabilistic Hope?</h2>
            <p style={{fontSize: '1.3em', marginTop: '20px', opacity: '0.9', fontFamily: 'Inter', fontWeight: '500'}}>Discover how FERZ transforms AI governance from statistical approximation to mathematical certainty</p>
            
            <div className="about-cta-buttons">
              <a href="#" className="about-btn-primary">Explore Our Solutions</a>
              <a href="#" className="about-btn-secondary">Schedule Strategic Discussion</a>
            </div>
            
            <div style={{marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', opacity: '0.9'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '1.8em', fontWeight: '900', marginBottom: '8px', fontFamily: 'Inter'}}>Deterministic</div>
                <div style={{fontSize: '1.1em', fontFamily: 'Inter'}}>Mathematical Validation</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '1.8em', fontWeight: '900', marginBottom: '8px', fontFamily: 'Inter'}}>Patent</div>
                <div style={{fontSize: '1.1em', fontFamily: 'Inter'}}>Protected Innovation</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '1.8em', fontWeight: '900', marginBottom: '8px', fontFamily: 'Inter'}}>Federal</div>
                <div style={{fontSize: '1.1em', fontFamily: 'Inter'}}>Compliance Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="about-footer">
        <div className="about-container">
          <p>&copy; 2025 FERZ LLC. All rights reserved.</p>
          <p style={{marginTop: '10px'}}>FERZ—Formalizing Emergent Reasoning Zones—advances the frontier of AI precision through deterministic governance frameworks. Our methodologies address fundamental limitations in AI reliability through mathematical validation and formal verification.</p>
          <p style={{marginTop: '8px'}}><strong>Innovation Authority:</strong> FERZ represents breakthrough innovation in deterministic AI governance protected through comprehensive patent strategy and defensive publications. Our approaches solve problems that statistical methods cannot address.</p>
        </div>
      </div>
      < Footer />
      </div>
    </>
  );
};

export default FerzAbout;