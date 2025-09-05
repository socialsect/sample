import React from 'react';
import { Target, Shield, Brain, Zap } from 'lucide-react';
import './Features.css';

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Deterministic frameworks that eliminate probabilistic uncertainty",
      color: "#FF6B6B"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive risk management and ethical AI development",
      color: "#4ECDC4"
    },
    {
      icon: Brain,
      title: "Governance",
      description: "Robust frameworks for AI compliance and oversight",
      color: "#45B7D1"
    },
    {
      icon: Zap,
      title: "Deterministic Systems",
      description: "Convert probabilistic AI into reliable, predictable frameworks",
      color: "#96CEB4"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why FERZ</h2>
          <p className="section-subtitle">Where precision meets expertise</p>
        </div>
        <div className="features-features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="view-solutions-container">
          <button className="view-solutions-btn">
            View All Solutions
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
