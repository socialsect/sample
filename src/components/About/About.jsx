import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, BookOpen, Target, BarChart, Layers, Lock, MessageSquare, Mail, Send, ChevronLeft, ChevronRight, Sparkles, Zap, Shield, Brain } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiFileText, FiShield, FiCode, FiClock } from 'react-icons/fi';
import './About.css';
import './WhyFerez.css';

const About = () => {
  const sliderRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow next-arrow"
        onClick={onClick}
      >
        <ChevronRight size={24} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow prev-arrow"
        onClick={onClick}
      >
        <ChevronLeft size={24} />
      </div>
    );
  }
  const features = [
    {
      icon: <Target size={24} />,
      title: "Specialized Focus",
      description: "FERZ isn't the broadest consultancy—our specialized focus on deterministic linguistic governance defines where we engage and excel. We serve organizations where precision isn't merely preferred but essential to operations, compliance, and trust.",
      color: "#00B4D8",
      gradient: "linear-gradient(135deg, #00B4D8, #48CAE4)"
    },
    {
      icon: <BarChart size={24} />,
      title: "Measurable Impact",
      description: "Our results are verifiable and consequential—regulated domains see consistent, deterministic outcomes from our governance frameworks. Precision isn't merely our aspiration; it's our demonstrable record in environments where approximation creates unacceptable risk.",
      color: "#48CAE4",
      gradient: "linear-gradient(135deg, #48CAE4, #90E0EF)"
    },
    {
      icon: <Layers size={24} />,
      title: "Unmatched Depth",
      description: "Years observing, analyzing, testing, and refining—we've developed unmatched expertise at the intersection of theoretical linguistics and enterprise governance. Our approach is systematically deterministic where others remain reactively probabilistic.",
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4, #44a08d)"
    },
    {
      icon: <Lock size={24} />,
      title: "Proven Methodology",
      description: "Our proprietary LASO(f) framework addresses what others miss: the critical need for multi-dimensional linguistic governance in high-stakes AI applications. We don't improvise solutions; we implement proven methodologies refined through years of specialized research.",
      color: "#9c27b0",
      gradient: "linear-gradient(135deg, #9c27b0, #ba68c8)"
    }
  ];

  const articles = [
    {
      title: "The Runtime Revolution: Why Static AI Governance Is Already Obsolete",
      type: "Article",
      link: "#",
      date: "May 15, 2024",
      readTime: "5 min read",
      excerpt: "Discover why traditional static governance models are failing in the age of dynamic AI systems and how runtime enforcement is becoming essential.",
      icon: <FiFileText />
    },
    {
      title: "Runtime Enforcement vs. Governance Theater",
      type: "Article",
      link: "#",
      date: "April 28, 2024",
      readTime: "4 min read",
      excerpt: "Exploring the critical differences between real-time enforcement mechanisms and superficial compliance measures in AI governance.",
      icon: <FiShield />
    },
    {
      title: "Using AI to Write versus Having AI Write",
      type: "Article",
      link: "#",
      date: "April 10, 2024",
      readTime: "6 min read",
      excerpt: "A deep dive into the philosophical and practical distinctions between AI-assisted writing and fully autonomous content generation.",
      icon: <FiCode />
    }
  ];

  const solutions = [
    { 
      name: "LASO(f)", 
      description: "AI linguistic governance for regulatory compliance.",
      icon: <Layers size={24} />,
      features: ["Regulatory compliance", "Linguistic precision", "Deterministic outputs"]
    },
    { 
      name: "LASO(f)-AG", 
      description: "Constitutional control over AI system actions.",
      icon: <Lock size={24} />,
      features: ["Action governance", "Constitutional AI", "Behavioral control"]
    },
    { 
      name: "MRCF", 
      description: "Recursive cognitive enhancement for human-AI partnership.",
         icon: <BarChart size={24} />,
      features: ["Cognitive enhancement", "Human-AI collaboration", "Recursive improvement"]
    },
    { 
      name: "SCM", 
      description: "Deterministic semantic compression for AI.",
      icon: <Target size={24} />,
      features: ["Semantic analysis", "Data compression", "Deterministic processing"]
    },
    { 
      name: "DELIA", 
      description: "Constraint-based enforcement for AI language and behavior.",
      icon: <CheckCircle size={24} />,
      features: ["Behavioral constraints", "Language enforcement", "Policy compliance"]
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Why FERZ Section */}
        <section className="ferz-why-section">
          <div className="ferz-why-container">
            <div className="ferz-why-header">
              <h2 className="ferz-why-title">Why FERZ</h2>
              <p className="ferz-why-subtitle">Where precision meets expertise</p>
            </div>

            <div className="ferz-why-content">
              <div className="ferz-feature-card">
                <div className="ferz-badge">
                  <Shield size={18} />
                  <span>Enterprise Grade</span>
                </div>
                <h3 className="ferz-feature-title">{features[activeFeature].title}</h3>
                <p className="ferz-feature-description">{features[activeFeature].description}</p>
                
                <div className="ferz-feature-highlight">
                  <div className="ferz-feature-icon">
                    {features[activeFeature].icon}
                  </div>
                  <div className="ferz-feature-details">
                    <h4>Core Capability</h4>
                    <p>Proven methodology with measurable outcomes</p>
                  </div>
                </div>
              </div>
              
              <div className="ferz-tabs-container">
                <div className="ferz-tabs">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      className={`ferz-tab ${index === activeFeature ? 'active' : ''}`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="ferz-tab-icon">
                        {feature.icon}
                      </div>
                      <div className="ferz-tab-content">
                        <span className="ferz-tab-title">{feature.title}</span>
                        {/* <span className="ferz-tab-subtitle">Strategic Advantage</span> */}
                      </div>
                      <div className="ferz-tab-indicator"></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <div className="resources-section">
          <div className="section-header">
            <h2 className="section-title" >Check out our most popular resources</h2>
            <p className="section-subtitle">Insights and analysis on AI governance and linguistic precision</p>
          </div>
          
          <div className="resources-carousel">
            <Slider
              ref={sliderRef}
              {...settings}
              className="slick-slider-resources"
            >
              {articles.map((article, index) => (
                <div key={index} className="px-2">
                  <article className="resource-card group h-full">
                    <div className="resource-content">
                      <div className="resource-icon">
                        {article.icon || <FiFileText />}
                      </div>
                      <div className="resource-meta">
                        <span className="resource-type">{article.type}</span>
                        <span className="resource-date">{article.date}</span>
                      </div>
                      <h3 className="resource-title">
                        <a href={article.link} className="hover:text-white transition-colors duration-300">
                          {article.title}
                        </a>
                      </h3>
                      <p className="resource-excerpt">
                        {article.excerpt}
                      </p>
                      <div className="resource-footer">
                        <a href={article.link} className="resource-link">
                          Read Article
                        </a>
                        <span className="read-time">
                          <FiClock size={14} className="inline mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </Slider>
          </div>
          
          <div className="resources-button-container">
            <a href="#" className="view-all-resources">
              View All Resources
              <ArrowRight size={16} className="arrow-icon" />
            </a>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="solutions-section">
          <div className="container">
            <div className="section-header text-center mb-16">
              <h2 className="section-title" style={{fontFamily:"Satoshi",fontWeight:"700"}}>Explore Our Solutions</h2>
              <p className="section-subtitle">Specialized frameworks for deterministic AI governance</p>
            </div>
            
            <div className="solutions-grid">
              {solutions.map((solution, index) => (
                <div key={index} className="solution-card group">
                  <div className="solution-icon">
                    {solution.icon}
                  </div>
                  <h3>{solution.name}</h3>
                  <p className="solution-description">{solution.description}</p>
                  <div className="solution-features">
                    {solution.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        <CheckCircle size={14} className="inline mr-1.5" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="solution-cta">
                    Learn More <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="view-solutions-wrapper">
              <button className="view-solutions-btn">
                View All Solutions
                <ArrowRight size={18} className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
