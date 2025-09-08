# FERZ Website Content Management Guide

## 🎯 Quick Start Guide

### Adding a New Article (5 minutes)
1. Run: `node scripts/create-article.js`
2. Follow prompts to create article
3. Article automatically appears on site

### Adding a New Product Page (10 minutes)
1. Create folder: `src/pages/products/your-product/`
2. Copy existing product page structure
3. Add route in `src/routes/routes.jsx`
4. Update products overview page

### Updating Navigation Menu (2 minutes)
1. Edit: `src/components/sitemapData.js`
2. Add/remove menu items
3. Changes appear immediately

## 📝 Content Types & Locations

### Articles
- **Location**: `public/articles/`
- **Structure**: Each article has its own folder with:
  - `article-data.md` (content)
  - `image.jpg` (featured image)
  - `metadata.json` (title, date, author, etc.)

### Products
- **Overview**: `src/pages/products/products.jsx`
- **Individual Pages**: `src/pages/products/[product-name]/`
- **PDF Library**: `src/components/PDFLibrary/registry.js`

### Services
- **Overview**: `src/pages/services/ServicesOverview.jsx`
- **Individual Pages**: `src/pages/services-overview/[service-name]/`

### Methodologies
- **Overview**: `src/pages/methodologies/methodologies.jsx`
- **Individual Pages**: `src/pages/methodologies/[methodology-name]/`

### FAQs
- **Products FAQ**: `src/pages/products/products.jsx` (productsFAQs array)
- **Services FAQ**: `src/pages/services/ServicesOverview.jsx` (servicesFAQs array)
- **Methodologies FAQ**: `src/pages/methodologies/methodologies.jsx` (methodologiesFAQs array)

## 🔧 Common Tasks

### 1. Update Company Information
- **Contact Info**: Update in multiple JSON-LD sections across pages
- **About Content**: `src/pages/AboutUs/AboutUs.jsx`
- **Company Pages**: `src/pages/` directory

### 2. Add New Downloadable PDFs
- **Upload PDF**: Add to `public/` directory
- **Register**: Add entry to `src/components/PDFLibrary/registry.js`
- **Link**: PDFs automatically appear on relevant product pages

### 3. Update FAQ Content
- **Find FAQ Array**: In respective overview page
- **Edit Questions/Answers**: Update the faqs array
- **Format**: Use proper JSON structure with question/answer pairs

### 4. Modify Navigation
- **Main Menu**: `src/components/sitemapData.js`
- **Structure**: Follow existing pattern with categories and subcategories
- **URLs**: Ensure all URLs match your route structure

## 📋 Content Templates

### Article Metadata Template
```json
{
  "title": "Article Title Here",
  "excerpt": "Brief description of the article content",
  "author": "Author Name",
  "date": "2024-01-15",
  "category": "Category Name",
  "tags": ["tag1", "tag2", "tag3"],
  "readTime": "5 min read"
}
```

### Product Page Template
```jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductTemplate from '../../components/ProductTemplate/ProductTemplate';
import PDFLibrary from '../../components/PDFLibrary/PDFLibrary';
import '../../styles/shared/layout.css';

const YourProduct = () => {
  const productData = {
    title: "Product Name",
    subtitle: "Product Description",
    // Add more product data...
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

export default YourProduct;
```

### FAQ Entry Template
```javascript
{
  question: "What is your question?",
  answer: "Your detailed answer here. You can include line breaks with \\n and bullet points with •"
}
```

## 🎨 Styling Guidelines

### Colors
- **Background**: Black (#000000)
- **Cards**: Dark Gray (#111111)
- **Accent**: Red (#fa2132)
- **Text**: White (#ffffff) / Light Gray (#cccccc)

### Typography
- **Headings**: Use semantic HTML (h1, h2, h3, etc.)
- **Body Text**: Regular paragraph tags
- **Lists**: Use proper ul/ol tags for accessibility

### Images
- **Format**: JPG for photos, PNG for graphics
- **Size**: Optimize for web (under 500KB)
- **Alt Text**: Always include for accessibility

## 🚀 Deployment Checklist

Before deploying changes:
- [ ] Test all new links and navigation
- [ ] Verify images load correctly
- [ ] Check responsive design on mobile
- [ ] Validate JSON-LD structured data
- [ ] Test contact form functionality
- [ ] Verify PDF downloads work

## 🔍 SEO Best Practices

### Page Titles
- Use descriptive, keyword-rich titles
- Keep under 60 characters
- Include brand name when appropriate

### Meta Descriptions
- Write compelling descriptions (150-160 characters)
- Include relevant keywords
- Encourage clicks

### Structured Data
- All pages include appropriate JSON-LD
- Product pages have Product schema
- Articles have Article schema
- Services have Service schema

## 📞 Support Resources

### File Locations Quick Reference
- **Navigation**: `src/components/sitemapData.js`
- **Routes**: `src/routes/routes.jsx`
- **Articles**: `public/articles/`
- **Products**: `src/pages/products/`
- **Services**: `src/pages/services/`
- **Methodologies**: `src/pages/methodologies/`
- **PDFs**: `src/components/PDFLibrary/registry.js`
- **FAQs**: In respective overview pages

### Common Issues & Solutions
- **Page not found**: Check route in `routes.jsx`
- **Image not loading**: Verify file path and extension
- **Navigation not updating**: Clear browser cache
- **PDF not downloading**: Check URL in registry.js
- **FAQ not showing**: Verify array structure in overview page

This guide provides everything needed to manage the FERZ website content autonomously. All tasks can be completed without technical expertise, and the modular structure makes updates straightforward and safe.
