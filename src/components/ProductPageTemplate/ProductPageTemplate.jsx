import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import './ProductPageTemplate.css';

const ProductPageTemplate = ({ 
  // SEO & Meta
  title,
  description,
  
  // Hero Section
  heroTitle,
  heroTagline,
  problemStatement,
  solutionSummary,
  
  // Business Case
  businessCaseTitle,
  businessCaseSubtitle,
  businessCaseCards,
  
  // Technical Foundation
  technicalTitle,
  technicalSubtitle,
  architectureTitle,
  architectureDescription,
  innovationHighlights,
  
  // Competitive Analysis
  competitiveTitle,
  competitiveTable,
  competitiveInsight,
  
  // Business Impact
  impactTitle,
  impactSubtitle,
  impactMetrics,
  
  // Execution Readiness
  executionTitle,
  executionSubtitle,
  executionCards,
  
  // IP Protection
  ipTitle,
  ipContent,
  
  // CTA Section
  ctaTitle,
  ctaSubtitle,
  ctaButtons,
  ctaMetrics,
  
  // Secondary CTA
  secondaryCtaTitle,
  secondaryCtaButton
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navbar />

      <main className="product-main">
        {/* Hero Section */}
        <section className="product-header">
          <div className="product-container">
            <h1 className="product-hero-title">{heroTitle}</h1>
            <p className="product-hero-tagline">{heroTagline}</p>
            
            {problemStatement && (
              <div className="product-problem-statement">
                {problemStatement}
              </div>
            )}

            {solutionSummary && (
              <div className="product-solution-summary">
                {solutionSummary}
              </div>
            )}
          </div>
        </section>

        {/* The Business Case */}
        {businessCaseTitle && (
          <section className="product-section">
            <div className="product-container">
              <h2 className="product-section-title">{businessCaseTitle}</h2>
              {businessCaseSubtitle && (
                <p className="product-section-subtitle">{businessCaseSubtitle}</p>
              )}
              
              <div className="product-grid">
                {businessCaseCards.map((card, index) => (
                  <div key={index} className={`product-card ${card.type || 'risk'}`}>
                    <h3>{card.title}</h3>
                    {card.content}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technical Foundation */}
        {technicalTitle && (
          <section className="product-section">
            <div className="product-container">
              <h2 className="product-section-title">{technicalTitle}</h2>
              {technicalSubtitle && (
                <p className="product-section-subtitle">{technicalSubtitle}</p>
              )}
              
              {architectureTitle && (
                <div className="product-architecture-container">
                  <h3 className="product-architecture-title">{architectureTitle}</h3>
                  
                  <div className="product-architecture-placeholder">
                    <div className="product-diagram-placeholder">
                      <p className="product-diagram-text">[Architecture Diagram]</p>
                      <p className="product-diagram-subtext">{architectureDescription}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {innovationHighlights && (
                <div className="product-tech-foundation">
                  <div className="product-innovation-grid">
                    {innovationHighlights.map((highlight, index) => (
                      <div key={index} className="product-innovation-highlight">
                        <h4>{highlight.title}</h4>
                        <p>{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Competitive Differentiation */}
        {competitiveTitle && (
          <section className="product-section product-competitive-section">
            <div className="product-container">
              <h2 className="product-section-title">{competitiveTitle}</h2>
              
              {competitiveTable && (
                <div className="product-comparison-table">
                  <table>
                    <thead>
                      <tr>
                        {competitiveTable.headers.map((header, index) => (
                          <th key={index}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {competitiveTable.rows.map((row, index) => (
                        <tr key={index} className={row.isHighlighted ? 'product-ferz-row' : ''}>
                          {row.cells.map((cell, cellIndex) => (
                            <td key={cellIndex}>
                              {cell.type === 'checkmark' && (
                                <span className="product-checkmark">{cell.content}</span>
                              )}
                              {cell.type === 'x-mark' && (
                                <span className="product-x-mark">{cell.content}</span>
                              )}
                              {!cell.type && cell.content}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {competitiveInsight && (
                <p className="product-competitive-insight">{competitiveInsight}</p>
              )}
            </div>
          </section>
        )}

        {/* Projected Business Impact */}
        {impactTitle && (
          <section className="product-section">
            <div className="product-container">
              <h2 className="product-section-title">{impactTitle}</h2>
              {impactSubtitle && (
                <p className="product-section-subtitle">{impactSubtitle}</p>
              )}
              
              <div className="product-metric-grid">
                {impactMetrics.map((metric, index) => (
                  <div key={index} className="product-metric-card">
                    <span className="product-metric-number">{metric.number}</span>
                    <p>{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Execution Readiness */}
        {executionTitle && (
          <section className="product-section product-execution-section">
            <div className="product-container">
              <h2 className="product-section-title">{executionTitle}</h2>
              {executionSubtitle && (
                <p className="product-section-subtitle">{executionSubtitle}</p>
              )}
              
              <div className="product-grid">
                {executionCards.map((card, index) => (
                  <div key={index} className="product-solution-card">
                    <h3>{card.title}</h3>
                    <ul className="product-solution-list">
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* IP Protection */}
        {ipTitle && (
          <section className="product-section">
            <div className="product-container">
              <h2 className="product-section-title">{ipTitle}</h2>
              
              <div className="product-patent-section">
                {ipContent}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        {ctaTitle && (
          <section className="product-cta-section">
            <div className="product-container">
              <h2>{ctaTitle}</h2>
              {ctaSubtitle && (
                <p className="product-cta-subtitle">{ctaSubtitle}</p>
              )}
              
              <div className="product-cta-buttons">
                {ctaButtons.map((button, index) => (
                  <a 
                    key={index} 
                    href={button.link} 
                    className={`product-btn-${button.type || 'secondary'}`}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
              
              {ctaMetrics && (
                <div className="product-cta-metrics">
                  {ctaMetrics.map((metric, index) => (
                    <div key={index} className="product-cta-metric">
                      <div className="product-cta-metric-number">{metric.number}</div>
                      <div className="product-cta-metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Secondary CTA */}
        {secondaryCtaTitle && (
          <section className="product-secondary-cta">
            <div className="product-container">
              <h3 className="product-secondary-cta-title">{secondaryCtaTitle}</h3>
              <a href="/contact-us" className="engine-cta-button">{secondaryCtaButton}</a>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ProductPageTemplate;
