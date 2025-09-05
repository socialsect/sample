import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import './NotFound.css';

const NotFound = () => {
  // Structured Data for 404 Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - FERZ Consulting",
    "description": "The page you're looking for doesn't exist. Return to FERZ Consulting's homepage or explore our AI governance and strategic consulting services.",
    "url": "https://ferzconsulting.com/404",
    "mainEntity": {
      "@type": "Organization",
      "name": "FERZ - Formalizing Emergent Reasoning Zones",
      "url": "https://ferzconsulting.com",
      "logo": "https://ferzconsulting.com/Logo.svg",
      "description": "AI Governance, Precision Strategy, and Enterprise Enablement Solutions"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Page Not Found - FERZ Consulting | 404 Error</title>
        <meta name="title" content="Page Not Found - FERZ Consulting | 404 Error" />
        <meta name="description" content="The page you're looking for doesn't exist. Return to FERZ Consulting's homepage or explore our AI governance and strategic consulting services." />
        <meta name="keywords" content="404 error, page not found, FERZ consulting, AI governance, strategic consulting" />
        <meta name="author" content="FERZ Consulting" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="language" content="English" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ferzconsulting.com/404" />
        <meta property="og:title" content="Page Not Found - FERZ Consulting | 404 Error" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Return to FERZ Consulting's homepage or explore our AI governance and strategic consulting services." />
        <meta property="og:image" content="https://ferzconsulting.com/Logo.svg" />
        <meta property="og:site_name" content="FERZ Consulting" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ferzconsulting.com/404" />
        <meta property="twitter:title" content="Page Not Found - FERZ Consulting | 404 Error" />
        <meta property="twitter:description" content="The page you're looking for doesn't exist. Return to FERZ Consulting's homepage or explore our AI governance and strategic consulting services." />
        <meta property="twitter:image" content="https://ferzconsulting.com/Logo.svg" />
        <meta property="twitter:site" content="@ferz_ai" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ferzconsulting.com/404" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />
      <div className="not-found-page">
        <div className="not-found-container">
          {/* 404 Content */}
          <div className="not-found-content">
            <div className="error-code">
              <span className="error-number">4</span>
              <div className="error-zero">
                <div className="zero-circle"></div>
              </div>
              <span className="error-number">4</span>
            </div>
            
            <h1 className="error-title">Page Not Found</h1>
            <p className="error-description">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, you can still explore our AI governance and strategic consulting services.
            </p>
            
            {/* Quick Actions */}
            <div className="quick-actions">
              <Link to="/" className="action-button primary">
                <Home size={20} />
                <span>Go to Homepage</span>
              </Link>
              
              <Link to="/services-overview" className="action-button secondary">
                <Search size={20} />
                <span>Explore Services</span>
              </Link>
              
              <Link to="/contact-us" className="action-button secondary">
                <Mail size={20} />
                <span>Contact Us</span>
              </Link>
            </div>
            
            {/* Popular Pages */}
            <div className="popular-pages">
              <h3>Popular Pages</h3>
              <div className="page-links">
                <Link to="/products">AI Governance Products</Link>
                <Link to="/methodologies">Our Methodologies</Link>
                <Link to="/about-us">About FERZ</Link>
                <Link to="/ip-portfolio">IP Portfolio</Link>
              </div>
            </div>
            
            {/* Search Suggestion */}
            <div className="search-suggestion">
              <p>Looking for something specific? Try searching our site:</p>
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="Search FERZ Consulting..." 
                  className="search-input"
                />
                <button className="search-button">
                  <Search size={18} />
                </button>
              </div>
            </div>
            
            {/* Back Button */}
            <div className="back-navigation">
              <button onClick={() => window.history.back()} className="back-button">
                <ArrowLeft size={16} />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
