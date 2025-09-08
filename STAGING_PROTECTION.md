# Staging Environment Protection Guide

## 🔐 Password Protection Options

### Option 1: Custom Environment-Based Protection (IMPLEMENTED)

#### Setup Steps:
1. **Environment Variables**
   - Copy `env.example` to `.env.local` for local development
   - Set `VITE_STAGING_PASSWORD=your-password-here`
   - In Vercel: Go to Settings → Environment Variables
   - Add `VITE_STAGING_PASSWORD` with your password

2. **Deploy**
   - Push changes to trigger deployment
   - Password protection is now active on staging

#### Features:
- ✅ **Custom password** via environment variables
- ✅ **Staging banner** when authenticated
- ✅ **Session persistence** - login once per session
- ✅ **Production unaffected** - only protects staging
- ✅ **Beautiful UI** - matches your site theme
- ✅ **Logout functionality** - clear session

#### Default Password:
- **Current**: `ferz-staging-2024`
- **Change**: Update `VITE_STAGING_PASSWORD` in environment variables

### Option 2: Vercel Password Protection (Alternative)

#### Setup Steps:
1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Select your project

2. **Enable Password Protection**
   - Go to **Settings** → **General**
   - Scroll to **Password Protection**
   - Toggle **Enable Password Protection**
   - Set your password (e.g., `ferz-staging-2024`)
   - Click **Save**

3. **Deploy**
   - Push your changes to trigger a new deployment
   - Password protection will be active on preview deployments

#### Benefits:
- ✅ **Zero code changes** required
- ✅ **Built-in Vercel feature**
- ✅ **Automatic protection** on staging/preview
- ✅ **Production remains unprotected**
- ✅ **Easy to manage** from dashboard

---

### Option 2: Custom Basic Auth (Advanced)

If you prefer custom implementation, here's the code:

#### 1. Create Auth Component
```jsx
// src/components/StagingAuth.jsx
import { useState, useEffect } from 'react';

const StagingAuth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Only show auth on staging/preview
  const isStaging = process.env.NODE_ENV === 'development' || 
                   window.location.hostname.includes('vercel.app');

  useEffect(() => {
    if (!isStaging) {
      setIsAuthenticated(true);
    }
  }, [isStaging]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'ferz-staging-2024') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!isStaging || isAuthenticated) {
    return children;
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: '#111',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid #333',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h2 style={{ marginBottom: '1rem', color: '#fa2132' }}>
          Staging Access Required
        </h2>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          This is a staging environment. Please enter the password to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              background: '#222',
              border: '1px solid #333',
              borderRadius: '4px',
              color: '#fff',
              fontSize: '1rem'
            }}
            required
          />
          {error && (
            <p style={{ color: '#fa2132', marginBottom: '1rem' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              background: '#fa2132',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Access Staging
          </button>
        </form>
      </div>
    </div>
  );
};

export default StagingAuth;
```

#### 2. Wrap Your App
```jsx
// src/App.jsx
import StagingAuth from './components/StagingAuth';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <StagingAuth>
          <ScrollToTop />
          <AppRoutes />
        </StagingAuth>
      </Router>
    </HelmetProvider>
  );
};
```

---

### Option 3: Environment-Based Protection

#### 1. Add Environment Variables
```bash
# In Vercel Dashboard → Settings → Environment Variables
STAGING_PASSWORD=ferz-staging-2024
STAGING_USERNAME=ferz
```

#### 2. Create Protected Route Component
```jsx
// src/components/ProtectedRoute.jsx
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we're in staging
    const isStaging = process.env.NODE_ENV === 'development' || 
                     window.location.hostname.includes('vercel.app');
    
    if (!isStaging) {
      setIsAuthenticated(true);
    }
    
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <StagingAuth onAuth={() => setIsAuthenticated(true)} />;
  }

  return children;
};
```

---

## 🚀 Recommended Implementation

### For Vercel (Easiest):
1. **Use Vercel's built-in password protection**
2. **Set password in dashboard**
3. **Deploy and test**

### For Custom Solution:
1. **Use Option 2** (Custom Basic Auth)
2. **Add StagingAuth component**
3. **Wrap your app with it**
4. **Set your desired password**

---

## 🔧 Configuration

### Password Options:
- `ferz-staging-2024`
- `ferz-preview-access`
- `staging-ferz-2024`
- Any custom password you prefer

### Environment Detection:
- **Development**: `localhost` or `127.0.0.1`
- **Staging**: `*.vercel.app` domains
- **Production**: Your custom domain

---

## 📋 Setup Checklist

- [ ] Choose protection method (Vercel built-in recommended)
- [ ] Set strong password
- [ ] Test on staging environment
- [ ] Verify production remains unprotected
- [ ] Document password for team access
- [ ] Update deployment guide with protection info

---

## 🛡️ Security Notes

- **Staging only**: Production remains fully accessible
- **Strong passwords**: Use complex passwords
- **Team access**: Share password securely with team
- **Regular updates**: Change password periodically
- **No indexing**: Added `noindex` headers to prevent search engine indexing

This protection ensures only authorized users can access your staging environment while keeping production fully accessible to the public.
