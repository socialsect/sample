# Product Page Template

A reusable React component template for creating consistent product pages across the FERZ website.

## Features

- **Consistent Styling**: Dark theme with red accents, matching the FERZ brand
- **Modular Structure**: Easy to customize content while maintaining design consistency
- **Responsive Design**: Works perfectly on all device sizes
- **Interactive Elements**: Hover effects, card blurring, and smooth transitions
- **SEO Optimized**: Built-in meta tags and structured content

## Usage

### Basic Implementation

```jsx
import React from 'react';
import ProductPageTemplate from '../../components/ProductPageTemplate/ProductPageTemplate';

const MyProduct = () => {
  const productData = {
    // SEO & Meta
    title: "My Product: Amazing Solution | FERZ",
    description: "Description for SEO",
    
    // Hero Section
    heroTitle: "My Product:\nAmazing Solution",
    heroTagline: "Your product tagline here",
    problemStatement: <strong>Problem:</strong> Description of the problem,
    solutionSummary: (
      <>
        <div className="product-what-is-lasof">
          <strong>What is My Product?</strong>
        </div>
        <div className="product-solution-description">
          Description of your product
        </div>
        <div className="product-benefit-item">• Benefit 1</div>
        <div className="product-benefit-item">• Benefit 2</div>
      </>
    ),
    
    // Business Case (optional)
    businessCaseTitle: "The Business Case",
    businessCaseSubtitle: "Subtitle here",
    businessCaseCards: [
      {
        type: "risk", // or "solution"
        title: "Card Title",
        content: <p>Card content with <strong>bold text</strong></p>
      }
    ],
    
    // Technical Foundation (optional)
    technicalTitle: "Technical Foundation",
    technicalSubtitle: "Technical subtitle",
    architectureTitle: "Architecture Title",
    architectureDescription: "Architecture description",
    innovationHighlights: [
      {
        title: "Feature 1",
        description: "Description of feature 1"
      }
    ],
    
    // Competitive Analysis (optional)
    competitiveTitle: "Competitive Analysis",
    competitiveTable: {
      headers: ["Column 1", "Column 2"],
      rows: [
        {
          isHighlighted: true, // Highlights FERZ row
          cells: [
            { content: "FERZ Product" },
            { type: "checkmark", content: "✓ Feature" },
            { type: "x-mark", content: "✗ Missing" }
          ]
        }
      ]
    },
    competitiveInsight: "Key insight about competition",
    
    // Business Impact (optional)
    impactTitle: "Business Impact",
    impactSubtitle: "Impact subtitle",
    impactMetrics: [
      {
        number: "95%",
        description: "Performance improvement"
      }
    ],
    
    // Execution Readiness (optional)
    executionTitle: "Execution Readiness",
    executionSubtitle: "Readiness subtitle",
    executionCards: [
      {
        title: "Card Title",
        items: ["Item 1", "Item 2", "Item 3"]
      }
    ],
    
    // IP Protection (optional)
    ipTitle: "IP Protection",
    ipContent: (
      <>
        <h3>Patent Portfolio</h3>
        <p>IP content here</p>
      </>
    ),
    
    // CTA Section (optional)
    ctaTitle: "Ready to Get Started?",
    ctaSubtitle: "CTA subtitle",
    ctaButtons: [
      { type: "primary", text: "Primary Button", link: "#" },
      { type: "secondary", text: "Secondary Button", link: "#" }
    ],
    ctaMetrics: [
      { number: "95%", label: "Success Rate" }
    ],
    
    // Secondary CTA (optional)
    secondaryCtaTitle: "Want to Learn More?",
    secondaryCtaButton: "Contact Us"
  };

  return <ProductPageTemplate {...productData} />;
};

export default MyProduct;
```

## Props Reference

### Required Props
- `title`: Page title for SEO
- `description`: Meta description for SEO
- `heroTitle`: Main hero heading
- `heroTagline`: Hero subtitle

### Optional Props
All other sections are optional. If you don't provide a section prop, that section won't render.

### Content Structure

#### Business Case Cards
```jsx
businessCaseCards: [
  {
    type: "risk" | "solution", // Determines card styling
    title: "Card Title",
    content: <JSX content>
  }
]
```

#### Innovation Highlights
```jsx
innovationHighlights: [
  {
    title: "Feature Title",
    description: "Feature description"
  }
]
```

#### Competitive Table
```jsx
competitiveTable: {
  headers: ["Column 1", "Column 2"],
  rows: [
    {
      isHighlighted: true, // Highlights FERZ row
      cells: [
        { content: "Text content" },
        { type: "checkmark", content: "✓ Feature" },
        { type: "x-mark", content: "✗ Missing" }
      ]
    }
  ]
}
```

#### Impact Metrics
```jsx
impactMetrics: [
  {
    number: "95%",
    description: "Metric description"
  }
]
```

#### Execution Cards
```jsx
executionCards: [
  {
    title: "Card Title",
    items: ["Item 1", "Item 2", "Item 3"]
  }
]
```

#### CTA Buttons
```jsx
ctaButtons: [
  {
    type: "primary" | "secondary",
    text: "Button Text",
    link: "#"
  }
]
```

## Styling

The template uses the `product-` prefix for all CSS classes to avoid conflicts. The styling includes:

- Dark theme with red accents (#fa2132)
- Responsive grid layouts
- Hover effects and transitions
- Card blurring effects
- Consistent typography and spacing

## File Structure

```
src/
├── components/
│   └── ProductPageTemplate/
│       ├── ProductPageTemplate.jsx
│       └── ProductPageTemplate.css
└── pages/
    └── products/
        ├── lasof/
        │   └── LASOF.jsx (uses template)
        └── example/
            └── ExampleProduct.jsx (example usage)
```

## Benefits

1. **Consistency**: All product pages maintain the same professional look
2. **Efficiency**: No need to recreate the same structure for each product
3. **Maintainability**: Changes to styling or structure can be made in one place
4. **Flexibility**: Optional sections allow for customization per product
5. **SEO**: Built-in meta tags and structured content
6. **Performance**: Optimized CSS and component structure

## Example Files

- `src/pages/products/lasof/LASOF.jsx` - Real implementation using the template
- `src/pages/products/example/ExampleProduct.jsx` - Example implementation
- `src/components/ProductPageTemplate/ProductPageTemplate.jsx` - Template component
- `src/components/ProductPageTemplate/ProductPageTemplate.css` - Template styles
