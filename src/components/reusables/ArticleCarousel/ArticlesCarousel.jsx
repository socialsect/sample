import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import { ArrowRight, Clock, User } from "lucide-react";
import { loadArticles } from "../../../utils/articleLoader";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./carousel.css";

const ArticlesCarousel = ({
  autoplayDelay = 3000,
  showPagination = true,
  maxArticles = 6,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const allArticles = await loadArticles();
        console.log('Loaded articles:', allArticles);
        // Limit to maxArticles and only featured ones for carousel
        const featuredArticles = allArticles
          .filter(article => article.featured)
          .slice(0, maxArticles);
        console.log('Featured articles for carousel:', featuredArticles);
        setArticles(featuredArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [maxArticles]);

  if (loading) {
    return (
      <div className="articles-carousel-loading">
        <div className="loading-spinner">Loading articles...</div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="articles-carousel-empty">
        <p>No articles available at the moment.</p>
      </div>
    );
  }

  return (
    <section className="articles-carousel-section" aria-label="Articles carousel">
      <div className="articles-carousel-outer-container">
        <div className="articles-carousel-inner-container">
          <div className="articles-carousel-info">
            <div className="info-group">
              <div className="info-text">
                <h3 className="info-title" style={{ fontFamily: 'Georgia, serif' }}>
                  Featured Articles
                </h3>
                <p className="info-subtitle" style={{ fontFamily: 'Georgia, serif' }}>
                  Explore our latest insights on AI governance and safety
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-wrapper-container">
            <div className="swiper-container" role="region" aria-label="Articles slideshow">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={articles.length > 1}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination ? {
                  clickable: true,
                  dynamicBullets: true,
                } : false}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                onSlideChange={(swiper) => {
                  console.log('Slide changed to:', swiper.activeIndex);
                }}
                a11y={{
                  enabled: true,
                  prevSlideMessage: 'Previous article',
                  nextSlideMessage: 'Next article',
                  firstSlideMessage: 'This is the first article',
                  lastSlideMessage: 'This is the last article',
                  paginationBulletMessage: 'Go to article {{index}}',
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                  },
                }}
              >
                {articles.map((article, index) => (
                  <SwiperSlide key={`${article.id}-${index}`}>
                    <div className="article-card">
                      <div className="article-image-wrapper">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="article-image"
                          loading="lazy"
                          onError={(e) => {
                            console.warn(`Failed to load image: ${article.image}`);
                            e.target.src = '/Logo.svg';
                          }}
                        />
                        <div className="article-overlay">
                          <div className="article-meta">
                            <span className="article-category" style={{ fontFamily: 'Georgia, serif' }}>
                              {article.category}
                            </span>
                            <span className="article-read-time" style={{ fontFamily: 'Georgia, serif' }}>
                              <Clock size={12} />
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="c-article-content">
                        <h3 className="article-title" style={{ fontFamily: 'Georgia, serif' }}>
                          {article.title}
                        </h3>
                        <p className="article-description" style={{ fontFamily: 'Georgia, serif' }}>
                          {article.description}
                        </p>
                        
                        <div className="article-footer">
                          <span className="article-author" style={{ fontFamily: 'Georgia, serif' }}>
                            <User size={12} />
                            {article.author}
                          </span>
                          <span className="article-date" style={{ fontFamily: 'Georgia, serif' }}>
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <Link 
                          to={`/articles/${article.slug}`} 
                          className="article-read-more"
                          style={{ fontFamily: 'Georgia, serif' }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          Read More
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesCarousel;