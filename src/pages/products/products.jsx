import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target, Brain, Zap, Lock, BarChart, Layers, CheckCircle, GitBranch } from 'lucide-react';
import './products.css';
import '../../styles/shared/layout.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';

const Products = () => {
  const productRoutes = {
    'DELIA': '/products/delia',
    'LASO(f)': '/products/lasof',
    'STRATA-G': '/products/strata-g',
    'Constitutional Blockchain': '/products/constitutional-blockchain-architecture',
    'FERZ Behavioral Engine™': '/products/ferz-behavioral-engine',
    'CausaCore': '/products/causacore',
    'VECTARA(f)': '/products/vectara-f',
    'BiasGuard': '/products/biasguard',
  };

  const getProductPath = (name) => productRoutes[name] || '/products';

  const productsFAQs = [
    {
      question: "What makes FERZ products different from other AI governance tools?",
      answer: "Competing tools rely on probabilistic monitoring and post-hoc reporting. FERZ products are built on the Formula of Fate, a patent-protected deterministic framework. This means outputs are not just scored but formally validated for compliance and consistency, delivering mathematical assurance instead of best-effort predictions."
    },
    {
      question: "Can FERZ products integrate with our existing AI systems?",
      answer: "Yes. Each product connects through standard APIs and operates as an independent governance layer, compatible with major AI platforms and custom models. No retraining or rewrites are required."
    },
    {
      question: "Do we need all seven products?",
      answer: "No. The portfolio is modular by design. Organizations can adopt individual products (e.g., BiasGuard for bias detection or LASO(f) for linguistic governance) and add others like DELIA or STRATA-G as governance needs expand."
    },
    {
      question: "How do the products work together?",
      answer: "All products share the Formula of Fate foundation, enabling seamless interoperability across real-time detection, constitutional compliance, and democratic governance layers. Together, they form the FERZ Technology Fortress."
    },
    {
      question: "What are the main categories?",
      answer: "• Real-Time Detection – BiasGuard, CausaCore, Behavioral Engine\n• Constitutional Compliance – DELIA, LASO(f)\n• Democratic Governance – Constitutional Blockchain, STRATA-G, VECTARA(f)"
    },
    {
      question: "Where do they fit in an AI pipeline?",
      answer: "FERZ products wrap around your AI stack:\n• LASO(f): validates language and action against codified rules\n• DELIA: enforces policies in real time across automation platforms\n• BiasGuard: monitors outputs for bias before they reach users\n• STRATA-G & Constitutional Blockchain: provide multi-layered governance and democratic oversight"
    },
    {
      question: "How long does deployment take?",
      answer: "Typically weeks for a single module and several months for multi-product rollouts, depending on complexity."
    },
    {
      question: "What technical requirements do you have?",
      answer: "Deployments run on enterprise infrastructure with modern orchestration and secure APIs, supporting cloud, on-premises, or hybrid environments."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes. FERZ offers implementation support, documentation, and ongoing governance assistance for qualified enterprise clients."
    },
    {
      question: "What performance should we expect?",
      answer: "FERZ products are engineered for low-latency, high-throughput governance that scales linearly with infrastructure, supporting both pilot deployments and national-level networks."
    },
    {
      question: "How do you ensure reliability?",
      answer: "Products are designed for high availability, with redundant architectures, automated failover, and cryptographic integrity checks. Deterministic execution ensures identical inputs always yield identical, compliant outputs."
    },
    {
      question: "Can we pilot before full deployment?",
      answer: "Yes. We offer structured pilot programs to validate technical feasibility and business value before scaling."
    },
    {
      question: "How do you compare to other AI safety tools?",
      answer: "Major providers focus on probabilistic guardrails. FERZ enforces deterministic, mathematically proven governance, ensuring compliance and auditability that others cannot replicate."
    },
    {
      question: "Why not build similar capabilities internally?",
      answer: "FERZ products are based on 12+ years of R&D and protected by a comprehensive patent fortress. Re-creating these systems internally would require significant time, cost, and navigating IP barriers."
    },
    {
      question: "Why are FERZ products essential for regulated industries?",
      answer: "Sectors like healthcare, finance, and government require provable compliance. FERZ uniquely delivers deterministic validation and constitutional governance aligned with the EU AI Act, FDA, SEC, and federal standards."
    }
  ];
  const products = [
    {
      name: "BiasGuard",
      title: "Real-Time AI Bias Detection & Mitigation",
      description: "Automatically detects and prevents biased AI decisions in real-time. Stops discriminatory hiring, lending, and healthcare recommendations before they reach customers, protecting your organization from regulatory fines and litigation.",
      highlights: [
        "Four-domain cognitive analysis: confirmation bias, groupthink, factual distortion, cultural bias",
        "Objectivity Index™ scoring with transparent source attribution",
        "Intelligent modifier system providing contextual reasoning nudges"
      ],
      metrics: [
        { number: "92%", label: "Detection Precision" },
        { number: "37%", label: "Bias Reduction" },
        { number: "Patent", label: "Protected" }
      ]
    },
    {
      name: "CausaCore",
      title: "Multi-Engine Multi-Tier Causal Framework",
      description: "Reveals hidden cause-and-effect relationships in complex business problems. Integrates multiple analysis approaches to understand why initiatives fail and what actually drives success across different organizational levels.",
      highlights: [
        "4-engine orchestration (CNA, BNIE, GCE, ASE) with intelligent selection",
        "Multi-tier synthesis across molecular→organism, individual→systemic scales",
        "Multi-LLM convergence with high-throughput data processing"
      ],
      metrics: [
        { number: ">90%", label: "Cross-Scale Precision" },
        { number: "4-Engine", label: "Orchestration" },
        { number: "Multi-Tier", label: "Architecture" }
      ]
    },
    {
      name: "FERZ Behavioral Engine™",
      title: "Behavioral Adaptive AI with Mathematical Grounding",
      description: "Makes AI understand human context and motivations. Delivers personalized responses that adapt to individual circumstances, behavioral patterns, and life situations rather than generic one-size-fits-all advice.",
      highlights: [
        "Dual FoF frameworks: canonical and enhanced policy analysis models",
        "Cross-domain constraint propagation modeling spillover effects",
        "Universal LLM compatibility through modifier injection"
      ],
      metrics: [
        { number: "67%", label: "User Retention" },
        { number: "73-81%", label: "Predictive Accuracy" },
        { number: "Universal", label: "LLM Compatible" }
      ]
    },
    {
      name: "DELIA",
      title: "Deterministic Executive Layer for Interpretable Alignment",
      description: "Ensures AI systems follow organizational rules and policies automatically. Acts as a control layer that transforms any AI output to comply with your specific governance requirements without modifying the underlying AI models.",
      highlights: [
        "98% transformation precision with deterministic reproducibility",
        "Universal AI compatibility without model modification",
        "Cryptographic audit trails with SHA-256 integrity"
      ],
      metrics: [
        { number: "98%", label: "Constraint Precision" },
        { number: "95%", label: "Unauthorized Prevention" },
        { number: "Production", label: "Ready Framework" }
      ]
    },
    {
      name: "LASO(f)",
      title: "Deterministic Governance for Language, Action, and Meaning",
      description: "Ensures AI systems comply with organizational rules through deterministic language and action governance. Analyzes the meaning and context of AI outputs to verify they meet compliance requirements before execution or publication.",
      highlights: [
        "98.05-98.44% error reduction with formal mathematical verification",
        "Sub-200ms processing latency with cryptographic audit trails",
        "Theorem 1 (Strong Determinism) verified with Z3 SMT solver"
      ],
      metrics: [
        { number: "98%+", label: "Error Reduction" },
        { number: "Z3", label: "SMT Verified" },
        { number: "Formal", label: "Proof Foundation" }
      ]
    },
    {
      name: "Constitutional Blockchain",
      title: "Democratic AGI Governance Framework",
      description: "Establishes democratic oversight for AGI systems through stakeholder voting and transparent governance. Provides accountability mechanisms for AGI decisions with emergency intervention capabilities when AI systems need human oversight.",
      highlights: [
        "Tripartite oversight: Legislative, Executive, Judicial branch coordination",
        "99% consensus threshold with cryptographic integrity verification",
        "Hardware-integrated emergency protocols with sub-second response"
      ],
      metrics: [
        { number: "99.9%", label: "System Availability" },
        { number: "99%", label: "Consensus Threshold" },
        { number: "BFT", label: "Fault Tolerant" }
      ]
    },
    {
      name: "STRATA-G",
      title: "Strategic Recursive Architecture",
      description: "Reduces complexity in AGI governance systems while maintaining comprehensive oversight. Uses a streamlined six-layer approach that scales efficiently as AGI systems become more sophisticated, preventing governance bottlenecks.",
      highlights: [
        "Complexity reduction from O(2^n) to O(n) through recursive design",
        "Emergency coordination achieving <15-minute stakeholder consensus",
        "Cultural integration with >85% authenticity preservation"
      ],
      metrics: [
        { number: "85-95%", label: "Complexity Reduction" },
        { number: "O(n)", label: "Scalability" },
        { number: "Recursive", label: "Architecture" }
      ]
    },
    {
      name: "VECTARA(f)",
      title: "Comprehensive Multi-Domain AGI Governance",
      description: "Coordinates AGI governance across multiple business domains like healthcare, finance, and operations. Provides unified oversight when AGI systems need to make decisions that affect different parts of your organization simultaneously.",
      highlights: [
        "Cross-domain emergency coordination in <15 minutes",
        "Cultural integration achieving ≥80% authenticity across communities",
        "Quantum-resistant democracy with 52% computational overhead reduction"
      ],
      metrics: [
        { number: "≥80%", label: "Cultural Integration" },
        { number: "Federated", label: "Consensus Ready" },
        { number: "Quantum", label: "Resistant" }
      ]
    }
  ];

  const categories = [
    {
      title: "Real-Time Detection & Mitigation",
      description: "Products that provide immediate bias detection, causal analysis, and behavioral adaptation with sub-second response times for active AI system governance.",
      products: [
        "BiasGuard - Real-Time AI Bias Detection",
        "CausaCore - Multi-Engine Causal Modeling",
        "FERZ Behavioral Engine™ - Behavioral Adaptive AI"
      ]
    },
    {
      title: "Constitutional & Compliance",
      description: "Frameworks that establish deterministic governance through constitutional architectures, ensuring regulatory compliance and mathematical proof of constraint satisfaction.",
      products: [
        "DELIA - Deterministic Executive Layer",
        "LASO(f) - Linguistic Governance Framework"
      ]
    },
    {
      title: "Democratic & Comprehensive",
      description: "Advanced governance architectures that enable democratic oversight, multi-domain coordination, and comprehensive AGI governance through mathematical consensus mechanisms.",
      products: [
        "Constitutional Blockchain Architecture",
        "STRATA-G - Strategic Recursive Architecture",
        "VECTARA(f) - Multi-Domain AGI Governance"
      ]
    }
  ];

  // Structured Data for Products Page - CollectionPage with hasPart
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ferzconsulting.com/products#page",
        "url": "https://ferzconsulting.com/products",
        "name": "FERZ Products: Mathematical AI Governance Solutions",
    "description": "Comprehensive suite of AI governance products including DELIA, LASO(f), STRATA-G, Constitutional Blockchain, FERZ Behavioral Engine, CausaCore, VECTARA(f), and BiasGuard for deterministic AI control.",
        "publisher": {"@id": "https://ferzconsulting.com/#org"},
        "hasPart": [
          {"@id": "https://ferzconsulting.com/products/delia#product"},
          {"@id": "https://ferzconsulting.com/products/lasof#product"},
          {"@id": "https://ferzconsulting.com/products/strata-g#product"},
          {"@id": "https://ferzconsulting.com/products/constitutional-blockchain-architecture#product"},
          {"@id": "https://ferzconsulting.com/products/ferz-behavioral-engine#product"},
          {"@id": "https://ferzconsulting.com/products/causacore#product"},
          {"@id": "https://ferzconsulting.com/products/vectara-f#product"},
          {"@id": "https://ferzconsulting.com/products/biasguard#product"}
        ]
      },
      {
        "@type": ["Product", "SoftwareApplication"],
        "@id": "https://ferzconsulting.com/products/delia#product",
        "name": "DELIA",
        "description": "Deterministic Executive Layer for Interpretable Alignment - Transforms AI-generated language into compliant, domain-specific output",
        "applicationCategory": "AI Governance Software",
        "operatingSystem": "Model-agnostic",
        "brand": {"@id": "https://ferzconsulting.com/#org"},
        "offers": {
          "@type": "Offer",
          "url": "https://ferzconsulting.com/contact-us"
        }
      },
      {
        "@type": ["Product", "SoftwareApplication"],
        "@id": "https://ferzconsulting.com/products/lasof#product",
        "name": "LASO(f)",
        "description": "Deterministic Governance Layer for Language, Action, and Meaning - Enforces linguistic precision and compliance integrity",
        "applicationCategory": "AI Governance Software",
        "operatingSystem": "Model-agnostic",
        "brand": {"@id": "https://ferzconsulting.com/#org"},
        "offers": {
          "@type": "Offer",
          "url": "https://ferzconsulting.com/contact-us"
        }
      },
      {
        "@type": ["Product", "SoftwareApplication"],
        "@id": "https://ferzconsulting.com/products/strata-g#product",
        "name": "STRATA-G",
        "description": "Strategic Recursive Architecture for Real-Time AGI Governance",
        "applicationCategory": "AI Governance Software",
        "operatingSystem": "Model-agnostic",
        "brand": {"@id": "https://ferzconsulting.com/#org"},
        "offers": {
          "@type": "Offer",
          "url": "https://ferzconsulting.com/contact-us"
        }
      },
      {
        "@type": ["Product", "SoftwareApplication"],
        "@id": "https://ferzconsulting.com/products/constitutional-blockchain-architecture#product",
        "name": "Constitutional Blockchain Architecture",
        "description": "Democratic AGI Governance Framework with tripartite oversight and emergency intervention protocols",
        "applicationCategory": "AI Governance Software",
        "operatingSystem": "Blockchain-agnostic",
        "brand": {"@id": "https://ferzconsulting.com/#org"},
        "offers": {
          "@type": "Offer",
          "url": "https://ferzconsulting.com/contact-us"
        }
      },
      {
        "@type": ["Product", "SoftwareApplication"],
        "@id": "https://ferzconsulting.com/products/ferz-behavioral-engine#product",
        "name": "FERZ Behavioral Engine",
        "description": "Behavioral Adaptive AI with Mathematical Grounding - Makes AI understand human context and motivations",
        "applicationCategory": "AI Governance Software",
        "operatingSystem": "Model-agnostic",
        "brand": {"@id": "https://ferzconsulting.com/#org"},
        "offers": {
          "@type": "Offer",
          "url": "https://ferzconsulting.com/contact-us"
        }
      },
      {
        "@type": ["Product", "SoftwareApplication"],
        "@id": "https://ferzconsulting.com/products/causacore#product",
        "name": "CausaCore",
        "description": "Multi-Engine Multi-Tier Causal Framework - Reveals hidden cause-and-effect relationships in complex business problems",
        "applicationCategory": "AI Governance Software",
        "operatingSystem": "Model-agnostic",
        "brand": {"@id": "https://ferzconsulting.com/#org"},
        "offers": {
          "@type": "Offer",
          "url": "https://ferzconsulting.com/contact-us"
        }
      },
      {
        "@type": ["Product", "SoftwareApplication"],
        "@id": "https://ferzconsulting.com/products/vectara-f#product",
        "name": "VECTARA(f)",
        "description": "Comprehensive Multi-Domain AGI Governance Framework - Coordinates AGI governance across multiple business domains with cross-domain emergency coordination and cultural knowledge integration",
        "applicationCategory": "AI Governance Software",
        "operatingSystem": "Model-agnostic",
        "brand": {"@id": "https://ferzconsulting.com/#org"},
        "offers": {
          "@type": "Offer",
          "url": "https://ferzconsulting.com/contact-us"
        }
      },
      {
        "@type": ["Product", "SoftwareApplication"],
        "@id": "https://ferzconsulting.com/products/biasguard#product",
        "name": "BiasGuard",
        "description": "Real-Time AI Bias Detection & Mitigation - Automatically detects and prevents biased AI decisions with Formula of Fate™ framework and Objectivity Index™ scoring",
        "applicationCategory": "AI Governance Software",
        "operatingSystem": "Model-agnostic",
        "brand": {"@id": "https://ferzconsulting.com/#org"},
        "offers": {
          "@type": "Offer",
          "url": "https://ferzconsulting.com/contact-us"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>FERZ Products: Mathematical AI Governance Solutions | FERZ</title>
        <meta name="description" content="Discover FERZ's comprehensive AI governance products for deterministic AI control, linguistic precision, and enterprise compliance." />
        <meta name="keywords" content="AI governance products, DELIA, LASO methodology, STRATA-G, constitutional blockchain, FERZ behavioral engine, AI compliance software, deterministic AI, linguistic precision tools" />
        <link rel="canonical" href="https://ferzconsulting.com/products" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="prod-products-page">
        <Navbar />
        
        {/* Hero Section */}
        <section className="prod-header">
          <div className="prod-container">
            <h1 className="prod-hero-title">FERZ Products</h1>
            <p className="prod-hero-tagline">Mathematical AI Governance Solutions for Enterprise Intelligence</p>
            
            <div className="prod-solution-summary">
              <div className="prod-summary-title">
                <strong>Comprehensive AI Governance Portfolio</strong>
              </div>
              <div className="prod-summary-description">
                FERZ delivers the world's first mathematically-grounded AI governance framework through nine integrated products spanning bias detection, causal modeling, behavioral adaptation, and oversight systems. Each solution provides enterprise-grade control over AI systems, ensuring they follow organizational rules, make transparent decisions, and operate with accountability.
              </div>
              
              <div className="prod-summary-tagline">
                <strong>Nine Products. One Mathematical Foundation. Complete AI Governance.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="prod-category-section">
          <div className="prod-container">
            <h2 className="prod-section-title">Product Categories</h2>
            <p className="prod-section-subtitle">Organized by governance domain with comprehensive coverage across enterprise AI challenges</p>
            
            <div className="prod-category-grid">
              {categories.map((category, index) => (
                <div key={index} className="prod-category-card">
                  <h3 className="prod-category-title">{category.title}</h3>
                  <p className="prod-category-description">{category.description}</p>
                  <ul className="prod-category-products">
                    {category.products.map((product, idx) => (
                      <li key={idx}>{product}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="prod-section">
          <div className="prod-container">
            <h2 className="prod-section-title">Complete Product Portfolio</h2>
            <p className="prod-section-subtitle">Nine mathematically-grounded solutions addressing every dimension of enterprise AI governance</p>
            
            <div className="prod-products-grid">
              {products.map((product, index) => (
                <div key={index} className="prod-product-card">
                  <div className="prod-product-header">
                    <h3 className="prod-product-title">{product.name}</h3>
                    <p className="prod-product-subtitle">{product.title}</p>
                  </div>
                  <div className="prod-product-content">
                    <p className="prod-product-description">{product.description}</p>
                    
                    <div className="prod-product-highlights">
                      {product.highlights.map((highlight, idx) => (
                        <div key={idx} className="prod-highlight-item">{highlight}</div>
                      ))}
                    </div>
                    
                    <div className="prod-product-metrics">
                      {product.metrics.map((metric, idx) => (
                        <div key={idx} className="prod-metric">
                          <span className="prod-metric-number">{metric.number}</span>
                          <div className="prod-metric-label">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="prod-product-actions">
                      <Link to={getProductPath(product.name)} className="prod-btn-primary">Learn More</Link>
                      <Link to={getProductPath(product.name)} className="prod-btn-secondary">Technical Specs</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Statistics */}
        <section className="prod-stats-section">
          <div className="prod-container">
            <h2>Portfolio Impact</h2>
            <p className="prod-stats-subtitle">Comprehensive enterprise AI governance through mathematical precision and regulatory compliance</p>
            
            <div className="prod-stats-grid">
              <div className="prod-stat-item">
                <div className="prod-stat-number">9</div>
                <div className="prod-stat-label">Integrated Products</div>
              </div>
              <div className="prod-stat-item" >
                <div className="prod-stat-number">12+</div>
                <div className="prod-stat-label">Patent Applications</div>
              </div>
              <div className="prod-stat-item" id="below-1">
                <div className="prod-stat-number">Mathematical</div>
                <div className="prod-stat-label">Precision Framework</div>
                <br />
              </div>
              <div className="prod-stat-item">
                <div className="prod-stat-number">Enterprise</div>
                <div className="prod-stat-label">Grade Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Framework */}
        <section className="prod-section prod-integration-section">
          <div className="prod-container">
            <h2 className="prod-section-title">Formula of Fate Foundation</h2>
            <p className="prod-section-subtitle">Unified mathematical framework providing consistency and interoperability across all FERZ products</p>
            
            <div className="prod-integration-card">
              <h3>Mathematical Consistency Across All Products</h3>
              <p className="prod-integration-description">
                Every FERZ product is built on the Formula of Fate mathematical foundation V = [effort, resistance, support], ensuring consistent vector modeling, deterministic behavior, and seamless integration across governance domains. This unified approach enables organizations to deploy multiple FERZ solutions with mathematical guarantees of compatibility and coherent governance behavior.
              </p>
              
              <div className="prod-integration-features">
                <div className="prod-feature-item">
                  <h4>Unified Vector Modeling</h4>
                  <p>All products use Formula of Fate V = [e, r, s] vectors ensuring mathematical consistency across bias detection, causal analysis, and governance validation.</p>
                </div>
                <div className="prod-feature-item">
                  <h4>Seamless Integration</h4>
                  <p>Products can be deployed individually or in combination with guaranteed compatibility through shared mathematical foundations and API consistency.</p>
                </div>
                <div className="prod-feature-item">
                  <h4>Enterprise Scalability</h4>
                  <p>Modular architecture enables organizations to start with specific products and expand to comprehensive governance as requirements evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ title="Products FAQ" faqs={productsFAQs} />

        {/* Call to Action */}
        <section className="prod-cta-section">
          <div className="prod-container">
            <h2>Ready to Transform Enterprise AI Governance?</h2>
            <p className="prod-cta-subtitle">Explore FERZ's complete portfolio of mathematically-grounded AI governance solutions</p>
            
            <div className="prod-cta-buttons">
              <a href="#" className="prod-cta-btn-primary">Schedule Portfolio Demo</a>
              <a href="#" className="prod-cta-btn-secondary">Download Product Comparison</a>
              <a href="#" className="prod-cta-btn-secondary">Request Custom Consultation</a>
            </div>
            
            <div className="prod-cta-footer">
              <p>Ready to discuss specific products or custom enterprise solutions?</p>
             </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Products;
