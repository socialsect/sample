# FERZ Consulting Website - Complete Documentation

## 🚀 Overview
This is a React-based website for FERZ Consulting, featuring AI governance products, services, and methodologies. The site is built with Vite, React Router, and modern web technologies.

## 📁 Project Structure

```
SAMOKEN/
├── public/                          # Static assets
│   ├── articles/                    # Article content
│   │   ├── article-1/
│   │   │   ├── article-data.md      # Article content
│   │   │   ├── image.jpg           # Article image
│   │   │   └── metadata.json       # Article metadata
│   │   ├── article-2/              # Same structure
│   │   └── article-3/              # Same structure
│   ├── fonts/                      # Custom fonts
│   ├── icon.png                    # Site favicon
│   └── [other static files]
├── src/
│   ├── components/                 # Reusable components
│   │   ├── FAQ/                   # FAQ component
│   │   │   ├── FAQ.jsx            # FAQ logic
│   │   │   └── FAQ.css            # FAQ styling
│   │   ├── PDFLibrary/            # PDF download component
│   │   │   ├── PDFLibrary.jsx     # PDF library logic
│   │   │   ├── PDFLibrary.css     # PDF library styling
│   │   │   └── registry.js        # PDF content registry
│   │   ├── Navbar.jsx             # Main navigation
│   │   ├── Navbar.css             # Navigation styling
│   │   ├── sitemapData.js         # Navigation menu structure
│   │   └── [other components]
│   ├── pages/                     # Page components
│   │   ├── products/              # Product pages
│   │   │   ├── products.jsx       # Products overview
│   │   │   ├── delia/             # Individual product pages
│   │   │   ├── lasof/
│   │   │   └── [other products]
│   │   ├── services/              # Service pages
│   │   │   ├── ServicesOverview.jsx
│   │   │   └── [individual services]
│   │   ├── methodologies/         # Methodology pages
│   │   │   ├── methodologies.jsx  # Methodologies overview
│   │   │   └── [individual methodologies]
│   │   ├── Articles/              # Article pages
│   │   │   ├── Articles.jsx       # Articles listing
│   │   │   └── ArticleDetail.jsx  # Individual article view
│   │   └── [other pages]
│   ├── routes/                    # Routing configuration
│   │   └── routes.jsx             # All page routes
│   ├── utils/                     # Utility functions
│   │   ├── articleLoader.js       # Article loading logic
│   │   └── scrollAnimations.js    # Scroll animations
│   ├── styles/                    # Global styles
│   │   └── shared/
│   │       └── layout.css         # Shared layout styles
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # App entry point
├── api/                           # Backend API
│   └── sendEmail.js               # Email sending functionality
├── scripts/                       # Utility scripts
│   └── create-article.js          # Article creation script
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
└── vercel.json                    # Deployment configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [your-repo-url]
cd SAMOKEN

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Content Management

### 1. Adding New Articles

#### Method 1: Using the Script (Recommended)
```bash
# Run the article creation script
node scripts/create-article.js
```
Follow the prompts to create a new article with proper structure.

#### Method 2: Manual Creation
1. Create a new folder in `public/articles/` (e.g., `article-4/`)
2. Add these files:
   - `article-data.md` - Your article content in Markdown
   - `image.jpg` - Article featured image
   - `metadata.json` - Article metadata

#### Article Metadata Structure (`metadata.json`)
```json
{
  "title": "Your Article Title",
  "excerpt": "Brief description of the article",
  "author": "Author Name",
  "date": "2024-01-15",
  "category": "AI Governance",
  "tags": ["tag1", "tag2", "tag3"],
  "readTime": "5 min read"
}
```

### 2. Managing Navigation Menu

Edit `src/components/sitemapData.js` to modify the navigation structure:

```javascript
export const sitemapData = {
  mainCategories: [
    {
      title: "COMPANY",
      subcategories: [
        { title: "Home", url: "/" },
        { title: "About FERZ", url: "/about-us" },
        // Add more items...
      ]
    },
    // Add more categories...
  ],
  companyPages: [
    // Company-specific pages...
  ]
};
```

### 3. Adding New Product Pages

1. Create a new folder in `src/pages/products/` (e.g., `new-product/`)
2. Create `NewProduct.jsx`:
```jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductTemplate from '../../components/ProductTemplate/ProductTemplate';
import PDFLibrary from '../../components/PDFLibrary/PDFLibrary';
import '../../styles/shared/layout.css';

const NewProduct = () => {
  const productData = {
    title: "New Product Name",
    subtitle: "Product Description",
    // ... other product data
  };

  return (
    <div className="content-with-aside">
      <div className="content">
        <ProductTemplate {...productData} />
      </div>
      <PDFLibrary />
    </div>
  );
};

export default NewProduct;
```

3. Add route in `src/routes/routes.jsx`:
```jsx
import NewProduct from '../pages/products/new-product/NewProduct';

// Add to routes array:
{
  path: '/products/new-product',
  element: <NewProduct />
}
```

4. Update `src/pages/products/products.jsx` to include the new product in the products array and route mapping.

### 4. Managing PDF Library

Edit `src/components/PDFLibrary/registry.js` to add downloadable content:

```javascript
export const downloadsRegistry = {
  '/products/your-product': {
    title: 'Your Product Library',
    items: [
      {
        title: 'Product Brief',
        url: 'https://your-domain.com/path/to/file.pdf',
        type: 'pdf'
      }
    ],
    related: [
      { title: 'Contact Us', url: '/contact-us' }
    ]
  }
};
```

### 5. Updating FAQ Content

Edit the FAQ arrays in the respective overview pages:

- **Products FAQ**: `src/pages/products/products.jsx` - `productsFAQs` array
- **Services FAQ**: `src/pages/services/ServicesOverview.jsx` - `servicesFAQs` array  
- **Methodologies FAQ**: `src/pages/methodologies/methodologies.jsx` - `methodologiesFAQs` array

```javascript
const faqs = [
  {
    question: "Your question here?",
    answer: "Your detailed answer here..."
  }
  // Add more FAQs...
];
```

## 🎨 Styling & Theming

### Color Scheme
- **Primary Background**: Black (#000000)
- **Card Background**: Dark Gray (#111111)
- **Accent Color**: Red (#fa2132)
- **Text**: White (#ffffff) / Light Gray (#cccccc)

### Component Styling
- **FAQ Component**: `src/components/FAQ/FAQ.css`
- **PDF Library**: `src/components/PDFLibrary/PDFLibrary.css`
- **Navigation**: `src/components/Navbar.css`

### Global Styles
- **Layout**: `src/styles/shared/layout.css`
- **App Styles**: `src/App.css`
- **Index Styles**: `src/index.css`

## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
});
```

### Package Dependencies (`package.json`)
Key dependencies:
- `react` - UI framework
- `react-router-dom` - Routing
- `react-helmet-async` - SEO management
- `lucide-react` - Icons
- `vite` - Build tool

### Deployment (`vercel.json`)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 📧 Email Functionality

The contact form uses `api/sendEmail.js` for sending emails. Configure your email service provider in this file.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push to main branch
3. Custom domain can be configured in Vercel dashboard

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy the 'dist' folder to your hosting provider
```

## 🔍 SEO & Structured Data

The site includes comprehensive JSON-LD structured data for:
- Organization information
- Product schemas
- Service schemas
- Article schemas
- FAQ schemas

All structured data is automatically generated and can be found in the respective page components.

## 📱 Responsive Design

The site is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions

## 🛡️ Security & Performance

- **HTTPS**: Enforced on production
- **SEO**: Comprehensive meta tags and structured data
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA attributes and keyboard navigation

## 📞 Support & Maintenance

### Regular Tasks
1. **Content Updates**: Add new articles, update product information
2. **Navigation Updates**: Modify menu structure in `sitemapData.js`
3. **FAQ Updates**: Keep FAQ content current
4. **PDF Library**: Update downloadable content registry

### Troubleshooting
- **Build Issues**: Check `package.json` dependencies
- **Routing Issues**: Verify routes in `routes.jsx`
- **Styling Issues**: Check CSS file imports and class names
- **Content Issues**: Verify file paths and JSON structure

## 🎯 Key Features

- ✅ **Autonomous Content Management**: Easy article and page creation
- ✅ **Responsive Design**: Works on all devices
- ✅ **SEO Optimized**: Comprehensive structured data
- ✅ **Fast Performance**: Vite build system
- ✅ **Modern UI**: Clean, professional design
- ✅ **Accessibility**: Screen reader friendly
- ✅ **PDF Downloads**: Integrated document library
- ✅ **FAQ System**: Expandable question/answer sections

## 📋 Quick Reference

### Adding Content
- **Articles**: Use `scripts/create-article.js` or manual creation
- **Products**: Create new page + add to routes + update overview
- **Services**: Similar to products
- **FAQs**: Edit arrays in respective overview pages

### Styling
- **Colors**: Black background, white text, red accents
- **Layout**: Responsive grid system
- **Components**: Modular CSS files

### Navigation
- **Menu Structure**: `src/components/sitemapData.js`
- **Routes**: `src/routes/routes.jsx`
- **Links**: Use React Router `Link` components

This documentation covers everything needed to manage and maintain the FERZ Consulting website autonomously. All content can be updated without technical expertise, and the modular structure makes it easy to add new features and pages.