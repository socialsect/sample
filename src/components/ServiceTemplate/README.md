# ServiceTemplate Component

A reusable React component for creating professional service pages with consistent layout and styling.

## 🚀 **Usage**

```jsx
import ServiceTemplate from '../../../components/ServiceTemplate/ServiceTemplate';

const MyService = () => {
  const serviceData = {
    // Your service data here
  };

  return <ServiceTemplate {...serviceData} />;
};
```

## 📋 **Props Structure**

### **SEO Data**
```jsx
seo: {
  title: "Page Title",
  description: "Meta description",
  canonical: "Canonical URL"
}
```

### **Hero Section**
```jsx
hero: {
  serviceName: "Service Name",
  title: "Main Title",
  focus: "Strategic Focus Statement",
  challengeTitle: "Challenge Title",
  challengeDescription: "Challenge description",
  solutionHeader: "Solution header",
  solutionDescription: "Solution description",
  targetAudience: "Target audience description",
  strategicOutcomes: ["Outcome 1", "Outcome 2", "Outcome 3"]
}
```

### **Challenge-Solution Analysis**
```jsx
challengeSolution: {
  title: "Section Title",
  subtitle: "Section subtitle",
  challenge: {
    title: "Challenge title",
    businessImpact: "Business impact description",
    consultingGap: "Why traditional approaches fail",
    regulatoryContext: "Regulatory context"
  },
  solution: {
    methodology: "FERZ methodology description",
    mathematicalFoundation: "Mathematical foundation",
    expectedOutcomes: "Expected outcomes"
  },
  patentAdvantage: "Patent advantage description"
}
```

### **FERZ Methodology**
```jsx
methodology: {
  title: "Methodology title",
  coreInnovation: "Core innovation description",
  description: "Methodology description",
  steps: [
    {
      title: "Step title",
      description: "Step description"
    }
    // ... more steps
  ]
}
```

### **Engagement Model**
```jsx
engagement: {
  title: "Engagement title",
  subtitle: "Engagement subtitle",
  phases: [
    {
      title: "Phase title",
      duration: "Phase duration",
      focus: "Phase focus",
      deliverables: "Phase deliverables"
    }
    // ... more phases
  ]
}
```

### **Expected Outcomes & Metrics**
```jsx
outcomes: {
  title: "Outcomes title",
  subtitle: "Outcomes subtitle",
  metrics: [
    {
      value: "Metric value",
      description: "Metric description"
    }
    // ... more metrics
  ],
  disclaimer: "Outcomes disclaimer"
}
```

### **Investment Framework**
```jsx
investment: {
  title: "Investment title",
  subtitle: "Investment subtitle",
  items: [
    {
      value: "Investment value",
      description: "Investment description"
    }
    // ... more items
  ],
  valueRealization: "Value realization description"
}
```

### **Organizational Readiness**
```jsx
readiness: {
  title: "Readiness title",
  subtitle: "Readiness subtitle",
  factors: [
    {
      title: "Factor title",
      description: "Factor description"
    }
    // ... more factors
  ],
  summary: "Readiness summary"
}
```

### **Call to Action**
```jsx
cta: {
  title: "CTA title",
  subtitle: "CTA subtitle",
  primaryButton: {
    text: "Button text",
    link: "Button link"
  },
  secondaryButtons: [
    { text: "Button text", link: "Button link" }
    // ... more buttons
  ],
  metrics: [
    { value: "Metric value", label: "Metric label" }
    // ... more metrics
  ]
}
```

## 🎨 **Styling**

- Uses `service-` prefix for all CSS classes
- Follows FERZ design system (Inter font, black/white theme, blue accents)
- Responsive design with mobile-first approach
- Professional gradient backgrounds and card layouts

## 📱 **Responsive Features**

- Mobile-optimized layouts
- Flexible grid systems
- Adaptive typography
- Touch-friendly buttons and interactions

## 🔧 **Customization**

All content is driven by props, making it easy to:
- Change text content
- Modify metrics and outcomes
- Adjust engagement phases
- Update methodology steps
- Customize CTA buttons and links

## 📁 **File Structure**

```
src/components/ServiceTemplate/
├── ServiceTemplate.jsx    # Main component
├── ServiceTemplate.css    # Styling
└── README.md             # This documentation
```

## 💡 **Example Implementation**

See `src/pages/services/example-service/ExampleService.jsx` for a complete example of how to use the ServiceTemplate component.
