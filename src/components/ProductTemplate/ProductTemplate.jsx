import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './ProductTemplate.css';

const ProductTemplate = ({
  // SEO & Meta
  seo,
  productName,
  coreValueProposition,
  keyDifferentiators,
  primaryBenefit,
  mathematicalTechnicalFoundation,
  
  // Hero Section
  coreInnovation,
  quantifiedBusinessProblem,
  specificCostImpact,
  regulatoryContext,
  productDefinition,
  coreCapability,
  mathematicalApproach,
  keyInnovations,
  
  // Business Case
  riskCategories,
  
  // Technical Foundation
  coreTechnicalInnovation,
  breakthroughApproach,
  technicalFoundation,
  technicalComponents,
  architectureSteps,
  architectureTitle,
  
  // Competitive Analysis
  keyDifferentiatorsTable,
  competitors,
  competitiveInsight,
  
  // Business Impact
  projectedMetrics,
  projectionMethodology,
  
  // Execution Readiness
  mathematicalFoundations,
  developmentRoadmap,
  marketValidation,
  
  // IP Protection
  patentApplications,
  competitiveMoat,
  domain,
  
  // CTA Section
  ctaMetrics
}) => {
  // Generate structured data for individual product pages
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Product", "SoftwareApplication"],
    "@id": `https://ferzconsulting.com/products/${productName.toLowerCase().replace(/[^a-z0-9]/g, '-')}#product`,
    "name": productName,
    "description": productDefinition,
    "applicationCategory": "AI Governance Software",
    "operatingSystem": "Model-agnostic",
    "brand": {"@id": "https://ferzconsulting.com/#org"},
    "keywords": seo?.keywords || "AI governance, deterministic AI, mathematical AI frameworks",
    "additionalProperty": keyInnovations?.map(innovation => ({
      "@type": "PropertyValue",
      "name": "Key Innovation",
      "value": innovation
    })) || [],
    "offers": {
      "@type": "Offer",
      "url": "https://ferzconsulting.com/contact-us"
    }
  };
  return (
    <>
      <Helmet>
        <title>{seo?.title || `${productName}: ${coreValueProposition} | FERZ`}</title>
        <meta name="description" content={seo?.description || `${keyDifferentiators} | ${primaryBenefit} | ${mathematicalTechnicalFoundation}`} />
        {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
        {seo?.canonical && <link rel="canonical" href={seo.canonical} />}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
       </Helmet>
      <Navbar />
      
      {/* Breadcrumb Navigation */}
      <div className="product-breadcrumb">
        <div className="product-container">
          <Breadcrumb 
            items={[
              { path: "/", label: "Home" },
              { path: "/products", label: "Products" },
              { path: "", label: productName }
            ]} 
          />
        </div>
      </div>

      <main className="product-main">
        {/* Hero Section */}
        <section className="product-header">
          <div className="product-container">
            <h1 className="product-hero-title">
              {seo?.h1 || `${productName}: ${coreInnovation}`}
            </h1>
            <p className="product-hero-tagline">
              {keyDifferentiators} | {primaryBenefit} | {mathematicalTechnicalFoundation}
            </p>
            
            <div className="product-problem-statement">
              <strong>{quantifiedBusinessProblem}:</strong> {specificCostImpact} {regulatoryContext}
            </div>

            <div className="product-solution-summary">
              <div className="product-what-is">
                <strong>What is {productName}?</strong>
              </div>
              <div className="product-description">
                {productDefinition}
              </div>
              
              <div className="product-capability">
                <strong>{productName} delivers {coreCapability} through {mathematicalApproach}</strong>
              </div>
              {keyInnovations.map((innovation, index) => (
                <div key={index} className="product-benefit-item">
                  • {innovation}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Business Case */}
        <section className="product-section">
          <div className="product-container">
            <h2 className="product-section-title">The Business Case</h2>
            <p className="product-section-subtitle">
              Three critical enterprise risks that {productName} addresses with measurable impact
            </p>
            
            <div className="product-grid">
              {riskCategories.map((risk, index) => (
                <div key={index} className="product-risk-card">
                  <h3>{risk.category}</h3>
                  <p><strong>Business Impact:</strong> {risk.businessImpact}</p>
                  <p><strong>Current Solutions:</strong> {risk.currentSolutions}</p>
                  <p><strong>FERZ Solution:</strong> {risk.ferzSolution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Foundation */}
        <section className="product-section">
          <div className="product-container">
            <h2 className="product-section-title">Technical Foundation</h2>
            <p className="product-section-subtitle">
              Mathematical innovations enabling {coreCapability} with enterprise reliability
            </p>
            
            {/* Architecture Visualization */}
            <div className="product-architecture-container">
              <h3 className="product-architecture-title">{architectureTitle || "Conceptual Architecture"}</h3>
              
              <div className="product-architecture-placeholder">
                <div className="product-diagram-placeholder">
                  <p className="product-diagram-text">{architectureTitle || "Conceptual Architecture"} Diagram</p>
                  <p className="product-diagram-subtext">
                    Conceptual flow showing {productName} integration and data processing pipeline
                  </p>
                </div>
                
                {/* Architecture Flow Steps */}
                <div className="product-architecture-flow">
                  {architectureSteps.map((step, index) => (
                    <div key={index} className={`product-flow-step product-step-${index + 1}`}>
                      <strong>{step.title}</strong><br />
                      {step.process}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="product-tech-foundation">
              <h3 className="product-tech-title">{coreTechnicalInnovation}</h3>
              <p className="product-tech-description">
                <strong>{breakthroughApproach}:</strong> {technicalFoundation}
              </p>
              
              <div className="product-innovation-grid">
                {technicalComponents.map((component, index) => (
                  <div key={index} className="product-innovation-highlight">
                    <h4>{component.title}</h4>
                    <p>{component.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-disclaimer">
              <strong>Performance Note:</strong> Metrics shown reflect mathematical modeling and controlled validation environments. Real-world performance depends on implementation quality, data characteristics, integration complexity, and organizational readiness factors.
            </div>
          </div>
        </section>

        {/* Competitive Differentiation */}
        <section className="product-section product-competitive-section">
          <div className="product-container">
            <h2 className="product-section-title">
              Why Competitors Cannot Match {productName}'s Approach
            </h2>
            
            <div className="product-comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Approach</th>
                    {keyDifferentiatorsTable.map((differentiator, index) => (
                      <th key={index}>{differentiator}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="product-ferz-row">
                    <td><strong>FERZ {productName}</strong></td>
                    <td>{competitors[0]?.ferzApproach || "FERZ Approach Description"}</td>
                    {keyDifferentiatorsTable.map((differentiator, index) => (
                      <td key={index}>
                        <span className="product-checkmark">✓ {competitors[0]?.ferzAdvantages?.[index] || `FERZ Advantage ${index + 1}`}</span>
                      </td>
                    ))}
                  </tr>
                  {competitors.slice(1).map((competitor, index) => (
                    <tr key={index}>
                      <td>{competitor.name}</td>
                      <td>{competitor.approach}</td>
                      {competitor.limitations.map((limitation, limIndex) => (
                        <td key={limIndex}>
                          <span className={limitation.type === 'checkmark' ? 'product-checkmark' : 'product-x-mark'}>
                            {limitation.type === 'checkmark' ? '✓' : '✗'} {limitation.content}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="product-competitive-insight">
              <strong>Key Insight:</strong> {competitiveInsight}
            </p>
          </div>
        </section>

        {/* Projected Business Impact */}
        <section className="product-section">
          <div className="product-container">
            <h2 className="product-section-title">Projected Business Impact</h2>
            <p className="product-section-subtitle">
              Expected outcomes based on mathematical modeling and market analysis
            </p>
            
            <div className="product-metric-grid">
              {projectedMetrics.map((metric, index) => (
                <div key={index} className="product-metric-card">
                  <span className="product-metric-number">{metric.value}</span>
                  <p>{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="product-disclaimer">
              <strong>Projection Methodology:</strong> {projectionMethodology}
            </div>
          </div>
        </section>

        {/* Execution Readiness */}
        <section className="product-section product-execution-section">
          <div className="product-container">
            <h2 className="product-section-title">Execution Readiness</h2>
            <p className="product-section-subtitle">
              Technical foundations and development pathway for enterprise deployment
            </p>
            
            <div className="product-grid">
              <div className="product-solution-card">
                <h3>Mathematical Foundations</h3>
                <ul className="product-solution-list">
                  {mathematicalFoundations.map((foundation, index) => (
                    <li key={index}>{foundation}</li>
                  ))}
                </ul>
              </div>
              
              <div className="product-solution-card">
                <h3>Development Roadmap</h3>
                <ul className="product-solution-list">
                  {developmentRoadmap.map((phase, index) => (
                    <li key={index}>{phase}</li>
                  ))}
                </ul>
              </div>
              
              <div className="product-solution-card">
                <h3>Market Validation</h3>
                <ul className="product-solution-list">
                  {marketValidation.map((validation, index) => (
                    <li key={index}>{validation}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IP Protection */}
        <section className="product-section">
          <div className="product-container">
            <h2 className="product-section-title">Intellectual Property Protection</h2>
            
            <div className="product-patent-section">
              <h3>Patent Portfolio Status</h3>
              <p>
                <strong>{productName} innovations are protected through comprehensive intellectual property filings establishing FERZ's market leadership in {domain}.</strong>
              </p>
              
              <p className="product-patent-coverage">
                <strong>Primary Patent Coverage:</strong>
              </p>
              <ul className="product-patent-list">
                {patentApplications.map((patent, index) => (
                  <li key={index}>
                    <strong>{patent.number}</strong> - "{patent.title}" (Filed {patent.date}) - Covers {patent.coverage}
                  </li>
                ))}
              </ul>
              
              <p className="product-competitive-moat">
                <strong>Competitive Moat:</strong> {competitiveMoat}
              </p>
              
              <p className="product-ip-link">
                <a href="#" className="product-patent-link">Explore FERZ IP Portfolio →</a>
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="product-cta-section">
          <div className="product-container">
            <h2>Ready to Transform {domain} with {productName}?</h2>
            <p className="product-cta-subtitle">
              Join forward-thinking enterprises investing in mathematically-grounded AI governance
            </p>
            
            <div className="product-cta-buttons">
              <a href="#" className="product-btn-primary">Request Technical Briefing</a>
              <a href="#" className="product-btn-secondary">Download Executive Whitepaper</a>
              <a href="#" className="product-btn-secondary">Download Technical Specifications</a>
              <a href="#" className="product-btn-secondary">Explore Partnership Opportunities</a>
            </div>
            
            <div className="product-cta-metrics">
              {ctaMetrics.map((metric, index) => (
                <div key={index} className="product-cta-metric">
                  <div className="product-cta-metric-number">{metric.value}</div>
                  <div className="product-cta-metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary CTA */}
        <section className="product-secondary-cta">
          <div className="product-container">
            <h3 className="product-secondary-cta-title">Ready to Learn More?</h3>
            <a href="#" className="engine-cta-button">Get in Touch</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductTemplate;
