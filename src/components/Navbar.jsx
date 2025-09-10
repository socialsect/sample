import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Package, Briefcase, BookOpen, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { sitemapData } from './sitemapData';
import './Navbar.css';
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Check if we're on the IP Portfolio page
  const isIPPortfolioPage = location.pathname === '/ip-portfolio';
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setSelectedCategory(null);
    setSearchQuery('');
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    setSelectedCategory(null);
    setSearchQuery('');
  };
  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);
  const handleCategoryClick = (category) => {
    // If it's the Intellectual Property category, navigate directly to /ip-portfolio
    if (category.id === 'intellectual-property') {
      navigate('/ip-portfolio');
      closeMenu();
      return;
    }
    setSelectedCategory(category);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleLinkClick = (path, e) => {
    // Only prevent default for external links or special cases
    if (!path.startsWith('http') && !path.startsWith('mailto') && !path.startsWith('tel')) {
      e.preventDefault();
      navigate(path);
    }
    closeMenu();
  };

  // Helper function to get the appropriate icon for overview buttons
  const getOverviewIcon = (subcategoryId) => {
    switch (subcategoryId) {
      case 'products-portfolio':
        return <Package size={16} />;
      case 'services-portfolio':
        return <Briefcase size={16} />;
      case 'methodologies':
        return <BookOpen size={16} />;
      default:
        return <ArrowRight size={16} />;
    }
  };

  const getFilteredItems = () => {
    if (!searchQuery.trim()) return null;

    const companyPages = sitemapData?.companyPages || [];
    const mainCategories = sitemapData?.mainCategories || [];

    const allItems = [
      ...companyPages,
      ...mainCategories,
      ...mainCategories.flatMap(cat => cat.subcategories || []),
      ...mainCategories.flatMap(cat =>
        (cat.subcategories || []).flatMap(subcat => subcat.subcategories || [])
      )
    ];

    return allItems.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredItems = getFilteredItems();

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-container">
          <button
            onClick={toggleMenu}
            className="menu-button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="overlay-menu"
            aria-haspopup="true"
          >
            <Menu size={24} aria-hidden="true" />
          </button>

          <div className="logo-container">
            <Link 
              to="/" 
              className="logo"
              onClick={closeMenu}
              aria-label="FERZ - Go to homepage"
            >
              <img src="/FERZWHITELETTERS.svg" alt="FERZ" />
            </Link>
          </div>

          <div className="navbar-right">
            <button 
              className="contact-button"
              onClick={(e) => handleLinkClick('/contact-us', e)}
              aria-label={isIPPortfolioPage ? "Request a briefing" : "Contact FERZ"}
            >
             {isIPPortfolioPage ? 'Request a briefing' : 'Contact FERZ'}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div 
          id="overlay-menu"
          className={`overlay-menu ${isMenuOpen ? 'open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-title"
        >
          <div className="overlay-header">
            <button
              onClick={closeMenu}
              className="close-button"
              aria-label="Close navigation menu"
            >
              <X size={24} aria-hidden="true" />
            </button>

            <div className="overlay-logo-container">
              <Link 
                to="/" 
                className="overlay-logo"
                onClick={closeMenu}
                aria-label="FERZ - Go to homepage"
              >
                <img src="/FERZWHITELETTERS.svg" alt="FERZ" />
              </Link>
            </div>

            <form onSubmit={handleSearchSubmit} className="search-container" role="search">
              <label htmlFor="search-input" className="sr-only">Search</label>
              <Search size={18} className="search-icon" aria-hidden="true" />
              <input
                id="search-input"
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="Search website content"
                aria-describedby="search-results-count"
              />
            </form>

            <button 
              className="overlay-contact-button"
              onClick={(e) => handleLinkClick('/contact-us', e)}
              aria-label={isIPPortfolioPage ? "Access a briefing" : "Contact us"}
            >
              {isIPPortfolioPage ? 'Access a Briefing' : 'Contact Us'}
            </button>
          </div>

          <div className="menu-content">
            <div className="sidebar">
              <div className="sidebar-content">
                <h2 className="sidebar-title">FERZ Consulting </h2>
                <nav className="nav-section" aria-label="Services navigation">
                  {sitemapData.mainCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`nav-link ${selectedCategory?.id === category.id ? 'nav-link-active' : ''}`}
                      onClick={() => handleCategoryClick(category)}
                      aria-expanded={selectedCategory?.id === category.id}
                      aria-controls={`category-${category.id}`}
                      aria-label={`${category.title} - ${selectedCategory?.id === category.id ? 'expanded' : 'collapsed'}`}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>

              </div>
            </div>
            <div className="content-area">
              {searchQuery.trim() && filteredItems ? (
                <div className="search-results" role="region" aria-label="Search results">
                  <div className="search-results-header">
                    <h2 className="search-results-title">
                      Search Results for "{searchQuery}"
                    </h2>
                    <p className="search-results-count" id="search-results-count">
                      {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  <div className="search-results-grid" role="list" aria-label="Search results list">
                    {filteredItems.map((item) => (
                      <div key={item.id} className="search-result-card" role="listitem">
                        <Link 
                          to={item.path}
                          className="search-result-link"
                          onClick={closeMenu}
                          aria-label={`Go to ${item.title} page`}
                        >
                          <h3 className="search-result-title">{item.title}</h3>
                          <p className="search-result-description">{item.description}</p>
                          <div className="visit-page-button" aria-hidden="true">
                            Visit Page
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedCategory ? (
                <div className="category-content" id={`category-${selectedCategory.id}`} role="region" aria-label={`${selectedCategory.title} content`}>
                  <div className="category-header">
                    <h2 className="category-title">{selectedCategory.title}</h2>
                    <p className="category-description">{selectedCategory.description}</p>
                  </div>             
                  <div className="subcategories-grid" role="list" aria-label={`${selectedCategory.title} subcategories`}>
                    {selectedCategory.subcategories?.map((subcategory) => (
                      <div key={subcategory.id} className="subcategory-card" role="listitem">
                        {subcategory.subcategories ? (
                          // This subcategory has its own subcategories (like Products Portfolio)
                          <div className="subcategory-with-nested">
                            <h3 className="subcategory-title">{subcategory.title}</h3>
                            <p className="subcategory-description">{subcategory.description}</p>
                            
                            {/* Overview Button */}
                            <div className="overview-button-container">
                              <Link 
                                to={subcategory.path}
                                className="overview-button"
                                onClick={closeMenu}
                                aria-label={`Go to ${subcategory.title} overview page`}
                              >
                                <span className="overview-button-icon">
                                  {getOverviewIcon(subcategory.id)}
                                </span>
                                <span className="overview-button-text">Overview</span>
                              </Link>
                            </div>

                            <div className="nested-subcategories">
                              {subcategory.subcategories.map((nestedSub) => (
                                <Link 
                                  key={nestedSub.id}
                                  to={nestedSub.path}
                                  className="nested-subcategory-link"
                                  onClick={closeMenu}
                                  aria-label={`Go to ${nestedSub.title} page`}
                                >
                                  <span className="nested-subcategory-title">{nestedSub.title}</span>
                                  <span className="nested-subcategory-description">{nestedSub.description}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          // Regular subcategory with direct link
                          <Link 
                            to={subcategory.path}
                            className="subcategory-link"
                            onClick={closeMenu}
                            aria-label={`Go to ${subcategory.title} page`}
                          >
                            <h3 className="subcategory-title">{subcategory.title}</h3>
                            <p className="subcategory-description">{subcategory.description}</p>
                            <div className="visit-page-button" aria-hidden="true">
                              Visit Page
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="placeholder-content">
                  <div className="placeholder-text">
                    Select a category or search
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    </>
  );
};
export default Navbar;
