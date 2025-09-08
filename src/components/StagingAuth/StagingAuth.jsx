import React, { useState, useEffect } from 'react';
import './StagingAuth.css';

const StagingAuth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Check if we're in staging environment
  const isStaging = process.env.NODE_ENV === 'development' || 
                   window.location.hostname.includes('vercel.app') ||
                   window.location.hostname.includes('netlify.app');

  useEffect(() => {
    // Check if already authenticated (stored in sessionStorage)
    const authStatus = sessionStorage.getItem('staging_authenticated');
    if (authStatus === 'true' || !isStaging) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [isStaging]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_STAGING_PASSWORD || 'ferz-staging-2024';
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError('');
      // Store authentication status for session
      sessionStorage.setItem('staging_authenticated', 'true');
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setError('');
    sessionStorage.removeItem('staging_authenticated');
  };

  if (isLoading) {
    return (
      <div className="staging-auth-loading">
        <div className="staging-auth-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isStaging || isAuthenticated) {
    return (
      <>
        {isStaging && (
          <div className="staging-banner">
            <span>🔒 Staging Environment</span>
            <button onClick={handleLogout} className="staging-logout">
              Logout
            </button>
          </div>
        )}
        {children}
      </>
    );
  }

  return (
    <div className="staging-auth-container">
      <div className="staging-auth-card">
        <div className="staging-auth-header">
          <h2>🔒 Staging Access Required</h2>
          <p>This is a staging environment. Please enter the password to continue.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="staging-auth-form">
          <div className="staging-auth-input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter staging password"
              className="staging-auth-input"
              required
              autoFocus
            />
            {error && (
              <p className="staging-auth-error">{error}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="staging-auth-button"
          >
            Access Staging
          </button>
        </form>
        
        <div className="staging-auth-footer">
          <p>Contact your administrator if you need access.</p>
        </div>
      </div>
    </div>
  );
};

export default StagingAuth;
