import React from 'react';
import ProductPageTemplate from '../../components/ProductPageTemplate/ProductPageTemplate';

const ExampleProduct = () => {
  const productData = {
    // SEO & Meta
    title: "Example Product: Revolutionary AI Solution | FERZ",
    description: "Next-generation AI technology with breakthrough capabilities",
    
    // Hero Section
    heroTitle: "Example Product:\nRevolutionary AI Solution",
    heroTagline: "Next-generation technology with breakthrough capabilities",
    problemStatement: (
      <strong>Critical business challenge:</strong> Current solutions cannot address the fundamental limitations of existing AI systems
    ),
    solutionSummary: (
      <>
        <div className="product-what-is-lasof">
          <strong>What is Example Product?</strong>
        </div>
        <div className="product-solution-description">
          A revolutionary AI solution that transforms how businesses approach artificial intelligence challenges.
        </div>
        <div className="product-solution-highlight">
          <strong>Key benefits and capabilities</strong>
        </div>
        <div className="product-benefit-item">• 95% improvement in performance</div>
        <div className="product-benefit-item">• Real-time processing capabilities</div>
        <div className="product-benefit-item">• Enterprise-grade security</div>
      </>
    ),
    
    // Business Case
    businessCaseTitle: "The Business Case",
    businessCaseSubtitle: "Three critical challenges that Example Product solves",
    businessCaseCards: [
      {
        type: "risk",
        title: "Performance Issues",
        content: (
          <>
            <p><strong>Business Impact:</strong> Slow processing times affecting productivity</p>
            <p><strong>Current Solutions:</strong> Inadequate performance optimization</p>
            <p><strong>Example Product Solution:</strong> Revolutionary performance improvements</p>
          </>
        )
      },
      {
        type: "risk",
        title: "Security Concerns",
        content: (
          <>
            <p><strong>Business Impact:</strong> Data breaches and security vulnerabilities</p>
            <p><strong>Current Solutions:</strong> Basic security measures</p>
            <p><strong>Example Product Solution:</strong> Advanced security protocols</p>
          </>
        )
      },
      {
        type: "risk",
        title: "Scalability Problems",
        content: (
          <>
            <p><strong>Business Impact:</strong> Limited growth potential</p>
            <p><strong>Current Solutions:</strong> Fixed capacity systems</p>
            <p><strong>Example Product Solution:</strong> Infinite scalability</p>
          </>
        )
      }
    ],
    
    // Technical Foundation
    technicalTitle: "Technical Foundation",
    technicalSubtitle: "Innovative technology enabling breakthrough capabilities",
    architectureTitle: "Advanced Architecture",
    architectureDescription: "Next-generation system design with cutting-edge features",
    innovationHighlights: [
      {
        title: "Advanced AI",
        description: "State-of-the-art artificial intelligence with unprecedented capabilities"
      },
      {
        title: "Real-time Processing",
        description: "Instant processing and response times for critical applications"
      },
      {
        title: "Enterprise Security",
        description: "Military-grade security protocols protecting sensitive data"
      }
    ],
    
    // Competitive Analysis
    competitiveTitle: "Why Competitors Cannot Match Example Product",
    competitiveTable: {
      headers: ["Provider", "Approach", "Performance?", "Security?", "Scalability?"],
      rows: [
        {
          isHighlighted: true,
          cells: [
            { content: "FERZ Example Product" },
            { content: "Revolutionary approach" },
            { type: "checkmark", content: "✓ 95% improvement" },
            { type: "checkmark", content: "✓ Military-grade" },
            { type: "checkmark", content: "✓ Infinite scale" }
          ]
        },
        {
          cells: [
            { content: "Competitor A" },
            { content: "Traditional approach" },
            { type: "x-mark", content: "✗ Limited performance" },
            { type: "x-mark", content: "✗ Basic security" },
            { type: "x-mark", content: "✗ Fixed capacity" }
          ]
        }
      ]
    },
    competitiveInsight: "Key Insight: Example Product offers revolutionary capabilities that competitors simply cannot match.",
    
    // Business Impact
    impactTitle: "Projected Business Impact",
    impactSubtitle: "Expected outcomes based on comprehensive analysis",
    impactMetrics: [
      {
        number: "95%",
        description: "Performance improvement over existing solutions"
      },
      {
        number: "$5M",
        description: "Annual cost savings for enterprise customers"
      },
      {
        number: "10x",
        description: "Faster processing speeds"
      },
      {
        number: "3 months",
        description: "Typical implementation timeline"
      }
    ],
    
    // Execution Readiness
    executionTitle: "Execution Readiness",
    executionSubtitle: "Ready for immediate deployment",
    executionCards: [
      {
        title: "Technical Readiness",
        items: [
          "Fully developed and tested",
          "Production-ready deployment",
          "Comprehensive documentation",
          "Expert support team"
        ]
      },
      {
        title: "Market Readiness",
        items: [
          "Proven market demand",
          "Customer validation complete",
          "Competitive analysis done",
          "Partnership opportunities identified"
        ]
      }
    ],
    
    // IP Protection
    ipTitle: "Intellectual Property Protection",
    ipContent: (
      <>
        <h3>Patent Portfolio</h3>
        <p><strong>Example Product innovations are protected through comprehensive intellectual property filings.</strong></p>
        <p className="product-patent-coverage"><strong>Patent Coverage:</strong></p>
        <ul className="product-patent-list">
          <li><strong>Patent Application 123456</strong> - "Revolutionary AI Technology" (Filed 2025)</li>
        </ul>
        <p className="product-ip-link"><a href="#" className="product-patent-link">Learn More →</a></p>
      </>
    ),
    
    // CTA Section
    ctaTitle: "Ready to Experience Example Product?",
    ctaSubtitle: "Join the revolution in AI technology",
    ctaButtons: [
      { type: "primary", text: "Request Demo", link: "#" },
      { type: "secondary", text: "Download Brochure", link: "#" },
      { type: "secondary", text: "Contact Sales", link: "#" }
    ],
    ctaMetrics: [
      { number: "95%", label: "Performance Gain" },
      { number: "10x", label: "Faster Speed" },
      { number: "Patent", label: "Protected Tech" }
    ],
    
    // Secondary CTA
    secondaryCtaTitle: "Want to Learn More?",
    secondaryCtaButton: "Get in Touch"
  };

  return <ProductPageTemplate {...productData} />;
};

export default ExampleProduct;
