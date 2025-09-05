import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselImages = [
    { 
      src: '1.png',
      alt: 'AI Governance Systems',
      title: 'LASO-(f) is a deterministic governance framework that controls both what AI systems say and what they do.',
      tag: 'Product',
      date: 'JULY 25 2025'
    },
    { 
      src: '2.png',
      alt: 'Industrial Safety Standards',
      title: 'MRCF is a methodology for structuring inquiry, accelerating clarity, and aligning cognitive effort with scalable insight.',
      tag: 'Methodology',
      date: 'JULY 24 2025'
    },
    { 
      src: '3.png',
      alt: 'Business Collaboration',
      title: 'DELIA is a constraint-based governance for language, behavior, and compliance at scale.',
      tag: 'Product',
      date: 'JULY 23 2025'
    },
    { 
      src: '4.png',
      alt: 'High-tech Implementation',
      title: 'STRATA-G is a Recursive, resilient, and regulation-ready governance for artificial general intelligence systems.',
      tag: 'Product',
      date: 'JULY 22 2025'
    },
    { 
      src: '5.png',
      alt: 'Digital Transformation',
      title: 'AI at a Crossroads: Apple’s Findings and the Case for Deterministic Reasoning Systems',
      tag: 'Article',
      date: 'JULY 21 2025'
    },
    { 
      src: '6.png',
      alt: 'Future Innovation',
      title: 'Beyond The Treasury: How To Turn The Semantic Lock',
      tag: 'Article',
      date: 'JULY 20 2025'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    const total = carouselImages.length;
    
    // Normalize the difference to handle wrapping
    let normalizedDiff = diff;
    if (Math.abs(diff) > total / 2) {
      normalizedDiff = diff > 0 ? diff - total : diff + total;
    }
    
    return normalizedDiff;
  };

  return (
    <section className="hp-hero">
  

      <div className="hp-hero-content">
        <div className="hp-hero-text">
          <h1 className="hp-hero-title">
            <span className="hp-title-main">98% Accuracy Is Still</span>
            <span style={{color: '#fa2132', display: 'inline-block'}}> Failure</span>
          </h1>
          <p className="hp-hero-subtitle">Deterministic governance for environments where probabilistic systems create operational risk.</p>
        </div>

        <div 
          className="hp-carousel-container"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="hp-carousel-wrapper">
            {carouselImages.map((image, index) => {
              const position = getSlidePosition(index);
              let className = 'hp-carousel-slide';
              
              if (position === 0) {
                className += ' active';
              } else if (position === -1) {
                className += ' prev';
              } else if (position === 1) {
                className += ' next';
              } else if (position === -2 || position === carouselImages.length - 2) {
                className += ' far-prev';
              } else if (position === 2 || position === -(carouselImages.length - 2)) {
                className += ' far-next';
              } else {
                className += ' hidden';
              }

              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => goToSlide(index)}
                >
                  <div className="hp-carousel-image-container">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="hp-carousel-image"
                    />
                    <div className="hp-image-overlay">
                      <div className="hp-overlay-tag">{image.tag}</div>
                      <div className="hp-overlay-date">ARTICLE: {image.date}</div>
                      <div className="hp-overlay-title">{image.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hp-carousel-navigation">
          <button className="hp-nav-button" onClick={prevSlide}>
            ‹
          </button>
          <button className="hp-nav-button" onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className="hp-carousel-indicators">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`hp-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="hp-carousel-accent-line"></div>
      </div>
    </section>
  );
};

export default Hero;