import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import AppRoutes from './routes/routes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// ============================================================================
// STYLES 
// ============================================================================
import './App.css';
const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
};

export default App;