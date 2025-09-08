import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PDFLibrary.css';
import { downloadsRegistry } from './registry';

const formatSize = (bytes) => {
  if (!bytes) return null;
  const kb = bytes / 1024;
  const mb = kb / 1024;
  if (mb >= 1) return `${mb.toFixed(1)} MB`;
  return `${Math.ceil(kb)} KB`;
};

const PDFLibrary = ({ title = 'Library', items, related }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [animClass, setAnimClass] = useState('pdf-library--hidden');
  const location = useLocation();
  const routeKey = (location.pathname.replace(/\/+$/, '') || '/');
  // Exact match or prefix match (so /products/lasof/lasof-ag matches /products/lasof)
  let fromRegistry = downloadsRegistry[routeKey];
  if (!fromRegistry) {
    const entry = Object.keys(downloadsRegistry).find(key => routeKey === key || routeKey.startsWith(key + '/'));
    if (entry) fromRegistry = downloadsRegistry[entry];
  }
  fromRegistry = fromRegistry || {};

  const libTitle = fromRegistry.title || title;
  const libItems = items || fromRegistry.items || [];
  const libRelated = related || fromRegistry.related || [];

  if (!libItems.length && !libRelated.length) return null;

  useEffect(() => {
    // Initialize panel open state based on viewport (collapsed on small screens)
    const initMobileState = () => {
      const isSmall = window.matchMedia('(max-width: 768px)').matches;
      setIsPanelOpen(!isSmall);
    };
    initMobileState();

    const handle = () => {
      const heroThreshold = window.innerHeight; // first 100vh
      const scrolledPastHero = window.scrollY > heroThreshold;

      let nearFooter = false;
      const footerEl = document.querySelector('footer');
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        // If footer is within 120px of viewport bottom, hide the library
        nearFooter = rect.top < window.innerHeight - 120;
      }

      setIsVisible(scrolledPastHero && !nearFooter);
    };

    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  // Animate entrance/exit when visibility changes
  useEffect(() => {
    let timeoutId;
    if (isVisible) {
      setAnimClass('pdf-library--enter');
      timeoutId = setTimeout(() => setAnimClass('pdf-library--visible'), 220);
    } else {
      setAnimClass(prev => (prev === 'pdf-library--hidden' ? prev : 'pdf-library--exit'));
      timeoutId = setTimeout(() => setAnimClass('pdf-library--hidden'), 220);
    }
    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  return (
    <>
      {/* Floating toggle for mobile/smaller screens */}
      <button
        type="button"
        className={`pdf-library__toggle ${isVisible ? 'show' : ''}`}
        aria-controls="pdf-library-panel"
        aria-expanded={isPanelOpen}
        aria-label={isPanelOpen ? 'Hide Library' : 'Show Library'}
        onClick={() => setIsPanelOpen(o => !o)}
      >
        {isPanelOpen ? 'Library ▾' : 'Library ▴'}
      </button>

      <aside
        id="pdf-library-panel"
        className={`pdf-library ${isPanelOpen ? 'open' : 'closed'} ${animClass}`}
        aria-label="Downloadable resources"
        aria-hidden={!isPanelOpen}
      >
        <div className="pdf-library__header" role="heading" aria-level={2}>
          <span>{libTitle}</span>
          <button
            type="button"
            className="pdf-library__close"
            onClick={() => setIsPanelOpen(false)}
            aria-label="Close Library"
          >
            ✕
          </button>
        </div>

      {libItems.length > 0 && (
        <div className="pdf-library__section">
          <div className="pdf-library__section-title">Documents</div>
          <ul className="pdf-library__list">
            {libItems.map((doc) => (
              <li key={doc.url} className="pdf-library__item">
                <a href={doc.url} className="pdf-library__link" download target="_blank" rel="noopener noreferrer">
                  <span className="pdf-library__icon" aria-hidden="true">
                    {doc.type === 'pdf' ? '📄' : doc.type === 'doc' ? '📝' : '📎'}
                  </span>
                  <span className="pdf-library__meta">
                    <span className="pdf-library__name">{doc.title}</span>
                    <span className="pdf-library__details">
                      {doc.type ? doc.type.toUpperCase() : 'FILE'}
                      {doc.size ? ` • ${formatSize(doc.size)}` : ''}
                      {doc.date ? ` • ${doc.date}` : ''}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {libRelated.length > 0 && (
        <div className="pdf-library__section">
          <div className="pdf-library__section-title">Related</div>
          <ul className="pdf-library__related">
            {libRelated.map((r) => (
              <li key={r.url} className="pdf-library__related-item">
                <a href={r.url} className="pdf-library__related-link">{r.title}</a>
              </li>
            ))}
          </ul>
          </div>
        )}
      </aside>
    </>
  );
};

export default PDFLibrary;


