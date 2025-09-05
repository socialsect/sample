import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import './ServiceTemplate.css';

const ServiceTemplate = ({
  // SEO Data
  seo = {},
  // Hero Section
  hero = {},
  // Challenge-Solution Analysis
  challengeSolution = {},
  // FERZ Methodology
  methodology = {},
  // Engagement Model
  engagement = {},
  // Expected Outcomes & Metrics
  outcomes = {},
  // Investment Framework
  investment = {},
  // Organizational Readiness
  readiness = {},
  // CTA Section
  cta = {}
}) => {
  return (
    <>
      <Helmet>
        <title>{seo.title || "FERZ Service"}</title>
        <meta name="description" content={seo.description || "FERZ professional service"} />
        <meta name="canonical" content={seo.canonical || window.location.href} />
      </Helmet>

      <Navbar />

      <div className="stemp-page">
        {/* Breadcrumb Navigation */}
        <nav className="stemp-breadcrumb">
          <div className="stemp-container">
            <Link to="/">FERZ</Link> / <Link to="/services">Services</Link> / <span className="stemp-current">{hero.serviceName || "Service"}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="stemp-header">
          <div className="stemp-container">
            <div className="stemp-header-content">
              <h1 className="stemp-title">{hero.title || "Service Title"}</h1>
              <p className="stemp-focus">{hero.focus || "Strategic Focus Statement"}</p>
              
              <div className="stemp-challenge-statement">
                <strong>{hero.challengeTitle || "Critical Enterprise Challenge"}:</strong> {hero.challengeDescription || "Challenge description"}
              </div>

              <div className="stemp-solution-statement">
                <div className="stemp-solution-header">
                  <strong>{hero.solutionHeader || "FERZ Service transforms business domain through methodology approach"}</strong>
                </div>
                <div className="stemp-solution-description">
                  {hero.solutionDescription || "Service definition and scope"}
                </div>
                <div className="stemp-solution-audience">
                  {hero.targetAudience || "Designed for CIOs, CISOs, Chief Risk Officers, compliance leaders, and program managers"}
                </div>
                
                <div className="stemp-strategic-outcomes">
                  {hero.strategicOutcomes?.map((outcome, index) => (
                    <div key={index}>• {outcome}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge-Solution Analysis */}
        <section className="stemp-section">
          <div className="stemp-container">
            <h2 className="stemp-section-title">{challengeSolution.title || "Enterprise Challenge Analysis"}</h2>
            <p className="stemp-section-subtitle">{challengeSolution.subtitle || "Why traditional approaches fail where FERZ Service delivers transformation"}</p>
            
            <div className="stemp-challenge-solution-grid">
              <div className="stemp-challenge-card">
                <h3>{challengeSolution.challenge?.title || "Primary Challenge Category"}</h3>
                <p><strong>Business Impact:</strong> {challengeSolution.challenge?.businessImpact || "Business impact description"}</p>
                <p><strong>Traditional Consulting Gap:</strong> {challengeSolution.challenge?.consultingGap || "Why conventional approaches are insufficient"}</p>
                <p><strong>Regulatory Context:</strong> {challengeSolution.challenge?.regulatoryContext || "How compliance requirements make this challenge more urgent"}</p>
              </div>
              
              <div className="stemp-solution-card">
                <h3>FERZ {hero.serviceName || "Service"} Approach</h3>
                <p><strong>Methodology:</strong> {challengeSolution.solution?.methodology || "How FERZ's approach addresses the challenge differently"}</p>
                <p><strong>Mathematical Foundation:</strong> {challengeSolution.solution?.mathematicalFoundation || "The deterministic/formal verification aspect"}</p>
                <p><strong>Expected Outcomes:</strong> {challengeSolution.solution?.expectedOutcomes || "Specific, measurable results organizations can expect"}</p>
              </div>
            </div>

            <div className="stemp-patent-advantage">
              <h3>Patent-Protected Competitive Advantage</h3>
              <p>{challengeSolution.patentAdvantage || "Service leverages specific patent applications ensuring clients receive methodologies competitors cannot replicate"}</p>
            </div>
          </div>
        </section>

        {/* FERZ Methodology */}
        <section className="stemp-section">
          <div className="stemp-container">
            <div className="stemp-methodology-section">
              <h2 className="stemp-methodology-title">{methodology.title || "Service Methodology Framework"}</h2>
              <p className="stemp-methodology-subtitle">
                <strong>{methodology.coreInnovation || "Core methodological innovation"}:</strong> {methodology.description || "How this service's approach differs fundamentally from traditional consulting"}
              </p>
              
              <div className="stemp-methodology-grid">
                {methodology.steps?.map((step, index) => (
                  <div key={index} className="stemp-methodology-step" data-step={index + 1}>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Model */}
        <section className="stemp-section stemp-section-alt">
          <div className="stemp-container">
            <div className="stemp-engagement-model">
              <h2 className="stemp-engagement-title">{engagement.title || "Engagement Structure & Timeline"}</h2>
              <p className="stemp-engagement-subtitle">{engagement.subtitle || "Strategic engagement delivering transformation outcomes"}</p>
              
              <div className="stemp-engagement-phases">
                {engagement.phases?.map((phase, index) => (
                  <div key={index} className="stemp-phase-card">
                    <div className="stemp-phase-header">
                      <div className="stemp-phase-number">{index + 1}</div>
                      <div className="stemp-phase-title">{phase.title}</div>
                    </div>
                    <p><strong>Duration:</strong> {phase.duration}</p>
                    <p><strong>Focus:</strong> {phase.focus}</p>
                    <p><strong>Deliverables:</strong> {phase.deliverables}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expected Outcomes & Metrics */}
        <section className="stemp-section">
          <div className="stemp-container">
            <div className="stemp-outcomes-section">
              <h2 className="stemp-outcomes-title">{outcomes.title || "Expected Transformation Outcomes"}</h2>
              <p className="stemp-outcomes-subtitle">{outcomes.subtitle || "Measurable results based on service methodology and organizational readiness factors"}</p>
              
              <div className="stemp-metrics-grid">
                {outcomes.metrics?.map((metric, index) => (
                  <div key={index} className="stemp-metric-card">
                    <span className="stemp-metric-value">{metric.value}</span>
                    <p className="stemp-metric-description">{metric.description}</p>
                  </div>
                ))}
              </div>

              <div className="stemp-disclaimer">
                <strong>Outcome Methodology:</strong> {outcomes.disclaimer || "Metrics reflect mathematical modeling, comparative analysis, and client case validation"}
              </div>
            </div>
          </div>
        </section>

        {/* Investment Framework */}
        <section className="stemp-section stemp-section-alt">
          <div className="stemp-container">
            <div className="stemp-investment-section">
              <h2 className="stemp-investment-title">{investment.title || "Strategic Investment Framework"}</h2>
              <p className="stemp-investment-subtitle">{investment.subtitle || "Investment structure aligned with transformation outcomes and organizational scale"}</p>
              
              <div className="stemp-investment-grid">
                {investment.items?.map((item, index) => (
                  <div key={index} className="stemp-investment-item">
                    <div className="stemp-investment-value">{item.value}</div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="stemp-value-realization">
                <h3>Value Realization Framework</h3>
                <p>{investment.valueRealization || "Investment returns through specific value drivers with validation methods"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Organizational Readiness */}
        <section className="stemp-section">
          <div className="stemp-container">
            <div className="stemp-readiness-section">
              <h2 className="stemp-readiness-title">{readiness.title || "Organizational Readiness Assessment"}</h2>
              <p className="stemp-readiness-subtitle">{readiness.subtitle || "FERZ Service delivers optimal results for organizations meeting these strategic readiness criteria"}</p>
              
              <div className="stemp-readiness-grid">
                {readiness.factors?.map((factor, index) => (
                  <div key={index} className="stemp-readiness-item">
                    <h4>{factor.title}</h4>
                    <p>{factor.description}</p>
                  </div>
                ))}
              </div>

              <p className="stemp-readiness-summary">{readiness.summary || "Organizations meeting readiness criteria achieve faster transformation outcomes and higher success rates"}</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="stemp-cta-section">
          <div className="stemp-container">
            <div className="stemp-cta-content">
              <h2 className="stemp-cta-title">{cta.title || "Ready to Transform Business Domain with Service?"}</h2>
              <p className="stemp-cta-subtitle">{cta.subtitle || "Join organizations investing in mathematical transformation over probabilistic consulting"}</p>
              
              <div className="stemp-cta-buttons">
                <Link to={cta.primaryButton?.link || "#"} className="stemp-btn-primary">
                  {cta.primaryButton?.text || "Schedule Service Assessment"}
                </Link>
                {cta.secondaryButtons?.map((button, index) => (
                  <Link key={index} to={button.link || "#"} className="stemp-btn-secondary">
                    {button.text}
                  </Link>
                ))}
              </div>
              
              <div className="stemp-cta-metrics">
                {cta.metrics?.map((metric, index) => (
                  <div key={index} className="stemp-cta-metric">
                    <div className="stemp-cta-metric-value">{metric.value}</div>
                    <div className="stemp-cta-metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ServiceTemplate;