# FERZ Website Deployment & Maintenance Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)
1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Vercel automatically builds and deploys
   - Get live URL (e.g., `your-site.vercel.app`)

4. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify
1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "New site from Git"

2. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Deploy**
   - Click "Deploy site"
   - Netlify handles the rest

### Option 3: Manual Hosting
1. **Build Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload contents of `dist/` folder to your web server
   - Ensure server supports SPA routing (redirect all routes to index.html)

## 🔧 Environment Setup

### Development Environment
```bash
# Install Node.js (v16 or higher)
# Download from nodejs.org

# Clone repository
git clone [your-repo-url]
cd SAMOKEN

# Install dependencies
npm install

# Start development server
npm run dev
# Site available at http://localhost:3000
```

### Production Environment
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Pre-Deployment Checklist

### Content Review
- [ ] All pages load correctly
- [ ] Navigation menu works
- [ ] Contact form functions
- [ ] PDF downloads work
- [ ] Images display properly
- [ ] FAQ sections expand/collapse
- [ ] Mobile responsive design

### Technical Review
- [ ] No console errors
- [ ] All routes accessible
- [ ] SEO meta tags present
- [ ] Structured data valid
- [ ] Performance optimized
- [ ] HTTPS enabled (production)

### Content Updates
- [ ] Company information current
- [ ] Product information accurate
- [ ] Service descriptions updated
- [ ] Contact information correct
- [ ] FAQ content relevant

## 🔄 Update Process

### For Content Updates
1. **Make Changes**
   - Edit content files
   - Update images if needed
   - Test locally with `npm run dev`

2. **Commit Changes**
   ```bash
   git add .
   git commit -m "Update content: [description]"
   git push origin main
   ```

3. **Auto-Deploy**
   - Vercel/Netlify automatically redeploys
   - Changes live within 2-3 minutes

### For Major Updates
1. **Test Thoroughly**
   - Run `npm run build` locally
   - Test all functionality
   - Check responsive design

2. **Deploy to Staging** (Optional)
   - Create staging branch
   - Deploy staging environment
   - Test before production

3. **Deploy to Production**
   - Merge to main branch
   - Monitor deployment
   - Verify live site

## 🛠️ Maintenance Tasks

### Weekly
- [ ] Check for broken links
- [ ] Review contact form submissions
- [ ] Monitor site performance
- [ ] Check mobile responsiveness

### Monthly
- [ ] Update content as needed
- [ ] Review and update FAQs
- [ ] Check for outdated information
- [ ] Monitor SEO performance

### Quarterly
- [ ] Review and update product information
- [ ] Update service descriptions
- [ ] Refresh article content
- [ ] Check all downloadable PDFs

## 🔍 Monitoring & Analytics

### Performance Monitoring
- **Google PageSpeed Insights**: Check site speed
- **GTmetrix**: Monitor performance metrics
- **Google Search Console**: Track SEO performance

### Analytics Setup
1. **Google Analytics**
   - Add tracking code to `index.html`
   - Monitor visitor behavior
   - Track conversion goals

2. **Vercel Analytics** (if using Vercel)
   - Built-in performance monitoring
   - Real-time visitor insights

## 🚨 Troubleshooting

### Common Issues

#### Site Not Loading
- Check DNS settings
- Verify hosting configuration
- Check for build errors

#### Images Not Displaying
- Verify file paths
- Check file permissions
- Ensure images are in `public/` folder

#### Contact Form Not Working
- Check API configuration in `api/sendEmail.js`
- Verify email service settings
- Test form submission

#### Navigation Issues
- Check `sitemapData.js` structure
- Verify route definitions
- Clear browser cache

### Emergency Rollback
```bash
# Revert to previous version
git log --oneline
git checkout [previous-commit-hash]
git push origin main --force
```

## 📞 Support Contacts

### Technical Issues
- Check deployment platform documentation
- Review error logs in hosting dashboard
- Test locally to isolate issues

### Content Updates
- Follow content management guide
- Use provided templates
- Test changes locally first

## 🔐 Security Best Practices

### Production Security
- [ ] Enable HTTPS
- [ ] Use strong passwords
- [ ] Regular security updates
- [ ] Monitor for vulnerabilities

### Content Security
- [ ] Validate all user inputs
- [ ] Sanitize uploaded content
- [ ] Regular backups
- [ ] Access control for admin functions

## 📊 Performance Optimization

### Build Optimization
- Images optimized for web
- CSS/JS minified
- Gzip compression enabled
- CDN for static assets

### Runtime Optimization
- Lazy loading for images
- Efficient routing
- Minimal JavaScript bundles
- Optimized fonts

## 🎯 Success Metrics

### Key Performance Indicators
- **Page Load Speed**: < 3 seconds
- **Mobile Performance**: > 90/100
- **SEO Score**: > 95/100
- **Accessibility**: WCAG AA compliant

### Monitoring Tools
- Google PageSpeed Insights
- GTmetrix
- Google Search Console
- Browser developer tools

This deployment guide ensures smooth, reliable operation of the FERZ website with minimal technical overhead. The automated deployment process makes updates simple and safe.
