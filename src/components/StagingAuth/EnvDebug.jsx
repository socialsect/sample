import React from 'react';

const EnvDebug = () => {
  if (process.env.NODE_ENV === 'production') {
    return null; // Don't show in production
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: '#000',
      color: '#fff',
      padding: '10px',
      fontSize: '12px',
      zIndex: 99999,
      border: '1px solid #333',
      borderRadius: '4px',
      maxWidth: '300px'
    }}>
      <h4>Environment Debug:</h4>
      <p>import.meta.env.VITE_STAGING_PASSWORD: {import.meta.env.VITE_STAGING_PASSWORD || 'undefined'}</p>
      <p>process.env.VITE_STAGING_PASSWORD: {process.env.VITE_STAGING_PASSWORD || 'undefined'}</p>
      <p>window.VITE_STAGING_PASSWORD: {window.VITE_STAGING_PASSWORD || 'undefined'}</p>
      <p>NODE_ENV: {process.env.NODE_ENV}</p>
      <p>Hostname: {window.location.hostname}</p>
    </div>
  );
};

export default EnvDebug;
