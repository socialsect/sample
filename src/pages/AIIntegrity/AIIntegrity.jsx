import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import './AIIntegrity.css';

const AIIntegrity = () => {
  return (
    <div className="aiint-app">
      <Helmet>
        <title>AI-Augmented Creative Integrity | FERZ</title>
        <meta name="description" content="FERZ LLC AI-Augmented Creative Integrity Declaration" />
        <link rel="canonical" href="https://ferzconsulting.com/ai-integrity-statement" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="aiint-hero" aria-label="AI Integrity hero">
          <div className="aiint-hero-inner">
            <h1 className="aiint-hero-title">AI-Augmented Creative Integrity</h1>
            <p className="aiint-hero-sub">FERZ LLC Declaration</p>
            <p className="aiint-updated">Last Updated: July 12, 2025 • Applies to Works Produced from January 2024 Onward</p>
          </div>
        </section>

        <div className="aiint-container">
          <header className="aiint-header">
            <h2>Statement</h2>
          </header>

        <section className="aiint-section">
          <p>
            FERZ LLC affirms its commitment to advancing responsible AI by harnessing artificial intelligence as a linguistic amplifier—not as a creative originator. All essays, white papers, and technical documents—including those involving the Meyman Recursive Cognition Framework (MRCF) and Meta-Recursive Validation Protocol (MRVP)—are produced through a human-led methodology governed by the Cognitive Authority Retention Protocol (CARP).
          </p>
          <p>
            Under this model, AI systems may contribute linguistic variations, formatting alternatives, or paraphrastic suggestions, but never dictate conceptual direction, argumentative structure, or final wording. All content is critically shaped, refined, and validated by human authors to ensure intellectual integrity and regulatory alignment.
          </p>
          <p>
            FERZ asserts full legal and intellectual authorship over these works, in accordance with global standards for ethical AI use, including ISO/IEC 42001 and NIST AI 100-4 (2025). This declaration reflects our operational ethics and commitment to human agency in AI-augmented creativity.
          </p>
          <p>
            This statement does not constitute a legal contract but articulates FERZ’s public commitment to ethical innovation.
          </p>
          <p>
            For formal inquiries, contact: <a href="mailto:contact@ferzconsulting.com">contact@ferzconsulting.com</a>
          </p>
        </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIIntegrity;


