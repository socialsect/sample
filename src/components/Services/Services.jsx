import React, { useState } from 'react';
import { 
  Shield, 
  Target, 
  Zap, 
  ArrowRight
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "AI Governance",
      description: "Deterministic frameworks for regulated environments where precision is non-negotiable."
    },
    {
      icon: Target,
      title: "Precision Strategy", 
      description: "Systematic approaches to AI implementation and organizational transformation."
    },
    {
      icon: Zap,
      title: "Enterprise Enablement",
      description: "Scalable infrastructure and control systems for AI-enabled organizations."
    }
  ];

  return (
    <section className="services" id="services">
      {/* CSS Animation Background */}
      <div className="services-animation-bg">
        <div className="animated-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Enterprise AI Solutions</h2>
          <p className="section-subtitle">Comprehensive AI governance, strategic planning, and enterprise enablement for organizations where precision and reliability are non-negotiable.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <service.icon size={24} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-cta">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
