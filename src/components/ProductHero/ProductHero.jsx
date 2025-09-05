import React, { useState, useEffect } from 'react';
import './ProductHero.css';

const ProductHero = ({ 
  title, 
  subtitle, 
  description, 
  carouselItems = [], 
  backgroundColor = '#000000',
  textColor = '#ffffff',
  highlightColor = '#fa2132'
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying || carouselItems.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    const total = carouselItems.length;
    
    // Normalize the difference to handle wrapping
    let normalizedDiff = diff;
    if (Math.abs(diff) > total / 2) {
      normalizedDiff = diff > 0 ? diff - total : diff + total;
    }
    
    return normalizedDiff;
  };

  return (
    <section 
      className="product-hero"
      style={{ 
        backgroundColor,
        color: textColor
      }}
    >
      <div className="product-hero-content">
        <div className="product-hero-text">
          <h1 className="product-hero-title">
            <span className="product-title-main">{title}</span>
            {subtitle && (
              <span 
                className="product-subtitle"
                style={{ color: highlightColor }}
              >
                {subtitle}
              </span>
            )}
          </h1>
          {description && (
            <p className="product-hero-description">{description}</p>
          )}
        </div>

        {carouselItems.length > 0 && (
          <>
            <div 
              className="product-carousel-container"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="product-carousel-wrapper">
                {carouselItems.map((item, index) => {
                  const position = getSlidePosition(index);
                  let className = 'product-carousel-slide';
                  
                  if (position === 0) {
                    className += ' active';
                  } else if (position === -1) {
                    className += ' prev';
                  } else if (position === 1) {
                    className += ' next';
                  } else if (position === -2 || position === carouselItems.length - 2) {
                    className += ' far-prev';
                  } else if (position === 2 || position === -(carouselItems.length - 2)) {
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
                      <div className="product-carousel-image-container">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="product-carousel-image"
                        />
                        <div className="product-image-overlay">
                          <div className="product-overlay-tag">{item.tag}</div>
                          <div className="product-overlay-date">{item.date}</div>
                          <div className="product-overlay-title">{item.title}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="product-carousel-navigation">
              <button className="product-nav-button" onClick={prevSlide}>
                ‹
              </button>
              <button className="product-nav-button" onClick={nextSlide}>
                ›
              </button>
            </div>

            <div className="product-carousel-indicators">
              {carouselItems.map((_, index) => (
                <div
                  key={index}
                  className={`product-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <div className="product-carousel-accent-line"></div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductHero;
