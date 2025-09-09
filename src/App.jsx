import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import AppRoutes from './routes/routes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import StagingAuth from './components/StagingAuth/StagingAuth';
// ============================================================================
// STYLES 
// ============================================================================
import './App.css';
const App = () => {
  return (
    <HelmetProvider>
      <Router>
{/*         <StagingAuth> */}
          <ScrollToTop />
          <AppRoutes />
{/*         </StagingAuth> */}
      </Router>
    </HelmetProvider>
  );
};

export default App;
