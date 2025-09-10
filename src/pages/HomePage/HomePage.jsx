import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, Microscope, Shield, Brain, Layers, CircuitBoard, ShieldCheck, GitBranch, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ArticlesCarousel from '../../components/reusables/ArticleCarousel/ArticlesCarousel';
import './homePage.css';

const HomePage = () => {
  // Structured Data for Homepage - Global Organization + WebSite with @id anchors
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ferzconsulting.com/#org",
        "name": "FERZ Consulting",
        "url": "https://ferzconsulting.com/",
        "logo": "https://ferzconsulting.com/Logo.svg",
        "description": "Mathematical AI governance authority specializing in deterministic frameworks for regulated industries",
        "foundingDate": "2013",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "contact@ferzconsulting.com",
            "telephone": "+1-212-380-6044",
            "areaServed": ["US", "UK", "Europe"],
            "availableLanguage": ["en"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ferzconsulting.com/#website",
        "url": "https://ferzconsulting.com/",
        "name": "FERZ Consulting - Mathematical AI Governance Authority",
        "description": "Patent-protected deterministic AI governance frameworks delivering mathematical certainty for regulated industries. Federal-proven solutions for EU AI Act compliance.",
        "publisher": {"@id": "https://ferzconsulting.com/#org"},
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ferzconsulting.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return(
    <>
      <Helmet>
        <title>Precision in AI | FERZ</title>
        <meta name="description" content="Precision-driven AI for law, healthcare &amp; finance. FERZ builds deterministic systems with linguistic control—no guesswork, just compliance." />
        <meta name="keywords" content="deterministic AI governance, mathematical AI certainty, EU AI Act compliance, patent-protected AI frameworks, federal AI authority" />
        <link rel="canonical" href="https://ferzconsulting.com/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="app homepage-app">
        {/* Authority Ribbon */}
        <div className="homepage-ribbon">Patent-Protected AI Governance Authority • Mathematical Certainty for Regulated Industries • Federal Policy Advisory Since 2013</div>

        <Navbar />
        <main>
          {/* Hero Section */}
          <section className="homepage-hero">
            <div className="homepage-container">
              <div className="homepage-hero-badge">Formalizing Emergent Reasoning Zones</div>
              <h1 className="homepage-hero-title">
                Where Visionaries Shape AI's Future<br />
                Instead of Accepting Its Limitations
              </h1>
              <p className="homepage-hero-statement">
                Artificial intelligence consistently falters where precision matters most.<br />
                Most accept this as inevitable—we do not.
              </p>
              <p className="homepage-hero-narrative">
                FERZ exists to establish deterministic order where probabilistic chaos has become the norm. Not by following AI's natural drift, but by deliberately redirecting it toward exactness through mathematical governance.
              </p>
              <div className="homepage-hero-actions">
                <a href="/contact-us" className="homepage-btn-primary">Begin Your Transformation <span>→</span></a>
                <a href="/ip-portfolio" className="homepage-btn-secondary">Discover Our Authority</a>
              </div>
            </div>
          </section>

          {/* The Problem Section */}
          <section className="homepage-problem">
            <div className="homepage-container homepage-center">
              <h2 className="homepage-section-title">
                The Trust Crisis<br />
                in Enterprise AI
              </h2>
              <p className="homepage-narrative">
                When AI makes consequential decisions, predictability isn't optional—it's imperative. Yet enterprise AI consistently produces outputs that are syntactically correct but semantically dangerous.
              </p>
              <div className="homepage-problem-story">
                <div className="homepage-story-label">Consequential Case Study</div>
                <p className="homepage-story-text">
                  "A sophisticated AI chatbot misinterpreted a straightforward financial instruction, transferring significant funds to an unintended account. The syntax was technically correct, but the intent was fundamentally missed. Trust wasn't merely damaged—it was broken in real time."
                </p>
              </div>
              <p className="homepage-narrative">
                This isn't an edge case—it's the inevitable result of deploying probabilistic systems in deterministic environments. Where precision defines success, statistical confidence becomes statistical liability.
              </p>
            </div>
          </section>

          {/* The FERZ Difference */}
          <section className="homepage-difference">
            <div className="homepage-container homepage-center">
              <h2 className="homepage-diff-title">
                We Reject Probabilistic Approximations<br />
                Where Mathematical Certainty Is Achievable
              </h2>
              <p className="homepage-diff-philosophy">
                Since 2013, we've refined a fundamentally different approach to AI reliability. While the industry pivoted from linguistics to statistics—trading meaning for probability, precision for scale—we recognized the profound flaw in this shift: unprecedented power without principled control.
              </p>
              <div className="homepage-transform-grid">
                <div className="homepage-transform-before">
                  <div className="homepage-transform-label homepage-color-warm">Statistical Confidence</div>
                  <p className="homepage-transform-description">Post-hoc filtering and alignment training create probabilistic improvements without mathematical guarantees</p>
                </div>
                <div className="homepage-transform-arrow">→</div>
                <div className="homepage-transform-after">
                  <div className="homepage-transform-label homepage-color-cool">Mathematical Certainty</div>
                  <p className="homepage-transform-description">Formal verification and deterministic governance provide mathematical proof of compliance through validated frameworks</p>
                </div>
              </div>
              <div className="homepage-pillars">
                <div className="homepage-pillar">
                  <div className="homepage-pillar-icon"><Scale size={48} color="#fa2132" /></div>
                  <h3 className="homepage-pillar-title">Linguistic Precision</h3>
                  <p className="homepage-pillar-text">LASO(f) brings deterministic validation to AI outputs where statistical approaches inevitably falter</p>
                </div>
                <div className="homepage-pillar">
                  <div className="homepage-pillar-icon"><Microscope size={48} color="#fa2132" /></div>
                  <h3 className="homepage-pillar-title">Mathematical Foundation</h3>
                  <p className="homepage-pillar-text">Formula of Fate provides consistent vector modeling across all governance domains</p>
                </div>
                <div className="homepage-pillar">
                  <div className="homepage-pillar-icon"><Shield size={48} color="#fa2132" /></div>
                  <h3 className="homepage-pillar-title">Patent Protection</h3>
                  <p className="homepage-pillar-text">Comprehensive IP portfolio controls every legitimate pathway to deterministic AI governance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Articles Carousel */}
          <section className="homepage-articles">
            <ArticlesCarousel maxArticles={6} />
          </section>

          {/* Solutions Section */}
          <section className="homepage-solutions">
            <div className="homepage-container homepage-center">
              <h2 className="homepage-section-title">Solutions</h2>
              <p className="homepage-solutions-subtitle">Explore our products delivering deterministic AI governance</p>

              <div className="homepage-solutions-grid">
                <a className="homepage-solution-card" href="/products/delia">
                  <div className="homepage-solution-icon"><ShieldCheck size={24} /></div>
                  <div className="homepage-solution-head">
                    <h3 className="homepage-solution-title">DELIA</h3>
                    <span className="homepage-solution-tag">Deterministic Alignment</span>
                  </div>
                  <div className="homepage-solution-badges">
                    <span className="homepage-badge is-patented">Patented</span>
                  </div>
                  <p className="homepage-solution-desc">Executive control layer that transforms AI outputs to comply with policy—without touching base models.</p>
                  <span className="homepage-solution-link">Learn more</span>
                </a>

                <a className="homepage-solution-card" href="/products/lasof">
                  <div className="homepage-solution-icon"><Scale size={24} /></div>
                  <div className="homepage-solution-head">
                    <h3 className="homepage-solution-title">LASO(f)</h3>
                    <span className="homepage-solution-tag">Linguistic Governance</span>
                  </div>
                  <div className="homepage-solution-badges">
                    <span className="homepage-badge is-patented">Patented</span>

                  </div>
                  <p className="homepage-solution-desc">Deterministic linguistic validation ensuring precision in meaning, action, and compliance.</p>
                  <span className="homepage-solution-link">Learn more</span>
                </a>

                <a className="homepage-solution-card" href="/products/strata-g">
                  <div className="homepage-solution-icon"><Layers size={24} /></div>
                  <div className="homepage-solution-head">
                    <h3 className="homepage-solution-title">STRATA-G</h3>
                    <span className="homepage-solution-tag">AGI Governance</span>
                  </div>
                  <div className="homepage-solution-badges">
                    <span className="homepage-badge is-patented">Patented</span>
                  </div>
                  <p className="homepage-solution-desc">Real-time, recursive architecture delivering scalable oversight with sub-50ms governance.</p>
                  <span className="homepage-solution-link">Learn more</span>
                </a>

                <a className="homepage-solution-card" href="/products/constitutional-blockchain-architecture">
                  <div className="homepage-solution-icon"><CircuitBoard size={24} /></div>
                  <div className="homepage-solution-head">
                    <h3 className="homepage-solution-title">Constitutional Blockchain</h3>
                    <span className="homepage-solution-tag">Democratic Oversight</span>
                  </div>
                  <div className="homepage-solution-badges">
                    <span className="homepage-badge is-patented">Patented</span>
                  </div>
                  <p className="homepage-solution-desc">Tripartite governance with tamper-proof auditability and emergency intervention protocols.</p>
                  <span className="homepage-solution-link">Learn more</span>
                </a>

                <a className="homepage-solution-card" href="/products/ferz-behavioral-engine">
                  <div className="homepage-solution-icon"><Brain size={24} /></div>
                  <div className="homepage-solution-head">
                    <h3 className="homepage-solution-title">FERZ Behavioral Engine</h3>
                    <span className="homepage-solution-tag">Behavioral Adaptation</span>
                  </div>
                  <div className="homepage-solution-badges">
                  </div>
                  <p className="homepage-solution-desc">Mathematically grounded behavioral adaptation that responds to real context—not just words.</p>
                  <span className="homepage-solution-link">Learn more</span>
                </a>

                <a className="homepage-solution-card" href="/products/causacore">
                  <div className="homepage-solution-icon"><GitBranch size={24} /></div>
                  <div className="homepage-solution-head">
                    <h3 className="homepage-solution-title">CausaCore</h3>
                    <span className="homepage-solution-tag">Causal Intelligence</span>
                  </div>
                  <div className="homepage-solution-badges">
                    <span className="homepage-badge is-patented">Patented</span>
                  </div>
                  <p className="homepage-solution-desc">Multi-engine, multi-tier causal modeling revealing true drivers across systems and scales.</p>
                  <span className="homepage-solution-link">Learn more</span>
                </a>
              </div>

              <div className="homepage-solutions-cta">
                <a href="/products" className="homepage-btn-secondary">
                  View all products <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="homepage-final-cta">
            <div className="homepage-container homepage-center narrow">
              <h2 className="homepage-cta-title">Ready to Move Beyond<br />Probabilistic Hope?</h2>
              <p className="homepage-cta-text">Where does your AI fall short of deterministic precision? We've developed solutions others haven't yet conceptualized. Transform your enterprise AI from statistical approximation to mathematical certainty.</p>
              <div className="homepage-cta-actions">
                <a href="/contact-us" className="homepage-btn-primary">Schedule Strategic Assessment <span>→</span></a>
                <a href="/ip-portfolio" className="homepage-btn-secondary">Explore FERZ IP Portfolio</a>
              </div>
              <div className="homepage-cta-promise">"Share your challenges—let's address them with systematic precision."</div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default HomePage;
