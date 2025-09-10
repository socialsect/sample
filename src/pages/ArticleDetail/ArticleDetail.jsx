import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Tag, Download, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { loadArticles, loadArticleContent } from '../../utils/articleLoader';
import { downloadPDF, downloadExecutiveSummary } from '../../utils/downloadUtils';
import './ArticleDetail.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const allArticles = await loadArticles();
        const foundArticle = allArticles.find(article => article.slug === slug);
        
        if (!foundArticle) {
          setError('Article not found');
          return;
        }

        setArticle(foundArticle);
        
        // Load the markdown content
        const articleContent = await loadArticleContent(foundArticle.id);
        setContent(articleContent);
        
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="article-detail-loading">
        <div className="loading-spinner">Loading article...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="article-detail-error">
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/articles" className="back-to-articles">
          <ArrowLeft size={16} />
          Back to Articles
        </Link>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.date,
    "publisher": {
      "@type": "Organization",
      "name": "FERZ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ferzconsulting.com/Logo.svg"
      }
    },
    "image": `https://ferzconsulting.com${article.image}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ferzconsulting.com/articles/${article.slug}`
    }
  };

  // Download handlers
  const handleDownloadPDF = () => {
    if (content && article) {
      downloadPDF(article, content);
    }
  };

  const handleDownloadSummary = () => {
    if (article) {
      downloadExecutiveSummary(article);
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${article.title} - FERZ Articles`}</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main className="article-detail-page" role="main" aria-labelledby="article-title">
        {/* Hero Section */}
        <Navbar />
        <section className="article-hero">
          <div className="article-hero-background">
            <img 
              src={article.image} 
              alt={article.title}
              className="hero-background-image"
              onError={(e) => {
                e.target.src = '/Logo.svg';
              }}
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="container">
            <div className="article-hero-content">
              <Link to="/articles" className="back-link">
                <ArrowLeft size={16} />
                Back to Articles
              </Link>
              
              <div className="article-meta-hero">
                <span className="article-category-hero" style={{ fontFamily: 'Georgia, serif' }}>
                  {article.category}
                </span>
                <span className="article-read-time-hero" style={{ fontFamily: 'Georgia, serif' }}>
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
              
              <h1 className="article-title-hero" id="article-title" style={{ fontFamily: 'Georgia, serif' }}>
                {article.title}
              </h1>
              
              <p className="article-description-hero" style={{ fontFamily: 'Georgia, serif' }}>
                {article.description}
              </p>
              
              <div className="article-author-hero">
                <span className="author-info" style={{ fontFamily: 'Georgia, serif' }}>
                  <User size={14} />
                  {article.author}
                </span>
                <span className="publish-date" style={{ fontFamily: 'Georgia, serif' }}>
                  <Calendar size={14} />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <div className="article-tags-hero">
                {article.tags.map((tag, index) => (
                  <span key={index} className="article-tag-hero" style={{ fontFamily: 'Georgia, serif' }}>
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="article-content-section">
          <div className="container">
            <article className="article-content-wrapper">
              <div className="article-content" style={{ fontFamily: 'Georgia, serif' }}>
                <div className="markdown-content">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
              </div>
              
              {/* Sidebar */}
              <aside className="article-sidebar">
                <div className="sidebar-section">
                  <h3 style={{ fontFamily: 'Georgia, serif' }}>Article Info & Documents</h3>
                  
                  {/* Article Info */}
                  <div className="article-info-section">
                    <div className="sidebar-item">
                      <strong>Category:</strong> {article.category}
                    </div>
                    <div className="sidebar-item">
                      <strong>Read Time:</strong> {article.readTime}
                    </div>
                    <div className="sidebar-item">
                      <strong>Published:</strong> {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="tags-section">
                    <h4 style={{ fontFamily: 'Georgia, serif', marginBottom: '10px', color: '#000000' }}>Tags</h4>
                    <div className="sidebar-tags">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="sidebar-tag" style={{ fontFamily: 'Georgia, serif' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Related Documents */}
                  <div className="related-documents-section">
                    <h4 style={{ fontFamily: 'Georgia, serif', marginBottom: '15px', color: '#000000' }}>Related Documents</h4>
                    <div className="related-documents">
                      <div className="document-item">
                        <div className="document-icon">
                          <FileText size={16} />
                        </div>
                        <div className="document-info">
                          <span className="document-title">Article PDF</span>
                          <span className="document-description">Downloadable version with logo</span>
                        </div>
                        <div className="document-actions">
                          <button className="action-btn download-btn" title="Download PDF" onClick={handleDownloadPDF}>
                            <Download size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="document-item">
                        <div className="document-icon">
                          <FileText size={16} />
                        </div>
                        <div className="document-info">
                          <span className="document-title">Executive Summary</span>
                          <span className="document-description">Key insights PDF</span>
                        </div>
                        <div className="document-actions">
                          <button className="action-btn download-btn" title="Download Summary" onClick={handleDownloadSummary}>
                            <Download size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticleDetail;
