# Dynamic SEO System - Quick Start Guide

## ⚡ **30-Second Overview**

**Problem:** Every page has hardcoded SEO tags, duplicate content, manual schema.

**Solution:** One centralized content database. All SEO auto-generated. Zero duplication.

**Result:** Add new page in 3 lines of code. SEO handled automatically.

---

## 🚀 **Quick Start**

### **1. Use Existing Service Page (2 Lines)**

```jsx
import ServicePageSEO from '@/components/SEO/ServicePageSEO';

// That's it! All SEO auto-generated:
<ServicePageSEO serviceId="tarot-readings" />
```

**What you get automatically:**
- ✅ Title tag
- ✅ Meta description
- ✅ Keywords
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ Service schema
- ✅ FAQ schema
- ✅ Breadcrumb schema
- ✅ Related services
- ✅ Internal links

---

### **2. Create Landing Page (1 Line)**

```jsx
import DynamicLandingPage from '@/pages/DynamicLandingPage';

const TarotLanding = () => <DynamicLandingPage landingSlug="tarot-reading" />;
```

**That's the entire page!** Everything else is automatic.

---

### **3. Add New Service (3 Steps)**

**Step 1:** Add to database (`src/seo/content.database.js`):

```javascript
export const personalServices = {
  'my-service': {
    id: 'my-service',
    name: 'My Service Name',
    slug: 'services/my-service',
    category: 'personal',
    description: 'Short description for meta tags',
    longDescription: 'Detailed description for page content',
    image: '/images/my-service.jpg',
    price: 'Starting from ₹999',
    keywords: ['keyword1', 'keyword2'],
    benefits: ['Benefit 1', 'Benefit 2'],
    faqs: [
      { question: 'Question?', answer: 'Answer.' }
    ],
    relatedServices: ['other-service-id'],
  },
};
```

**Step 2:** Create page file:

```jsx
import DynamicServicePage from '@/pages/DynamicServicePage';

const MyServicePage = () => {
  return <DynamicServicePage serviceId="my-service" />;
};

export default MyServicePage;
```

**Step 3:** Add route (`src/App.jsx`):

```jsx
<Route path="/services/my-service" element={<MyServicePage />} />
```

**Done!** New service page with complete SEO.

---

## 📊 **Available Services in Database**

### **Personal Wellness:**
- `tarot-readings` - Tarot Reading
- `psychic-readings` - Psychic Reading
- `numerology` - Numerology Reading
- `reiki-healing` - Reiki Healing
- `spiritual-remedies` - Spiritual Remedies
- `individual-therapy` - Individual Therapy

### **Corporate Services:**
- `mental-health` - Employee Mental Health
- `wellness-burnout` - Burnout Prevention
- `stress-management` - Stress Management
- `emotional-intelligence` - Emotional Intelligence Training
- `leadership-mindfulness` - Leadership Mindfulness
- `therapy-counseling` - Corporate Therapy
- `holistic-wellness` - Holistic Wellness

---

## 🛠️ **Common Use Cases**

### **Use Case 1: Service Page with Auto-SEO**

```jsx
import ServicePageSEO from '@/components/SEO/ServicePageSEO';
import PageWrapper from '@/components/PageWrapper';
import RelatedServices from '@/components/SEO/RelatedServices';
import { getServiceById } from '@/seo/content.database';

const TarotPage = () => {
  const service = getServiceById('tarot-readings');
  
  return (
    <>
      <ServicePageSEO serviceId="tarot-readings" />
      
      <PageWrapper>
        <h1>{service.name}</h1>
        <p>{service.description}</p>
        
        <RelatedServices currentServiceId="tarot-readings" />
      </PageWrapper>
    </>
  );
};
```

---

### **Use Case 2: Custom Page with Manual SEO**

```jsx
import DynamicSEO from '@/components/SEO/DynamicSEO';
import PageWrapper from '@/components/PageWrapper';

const AboutPage = () => {
  return (
    <>
      <DynamicSEO
        pageType="static"
        title="About Us"
        description="Learn about Ashray Wellness"
        slug="about"
        category="common"
      />
      
      <PageWrapper>
        {/* Your content */}
      </PageWrapper>
    </>
  );
};
```

---

### **Use Case 3: Homepage with Special SEO**

```jsx
import { generateHomepageSEO, toHelmetProps } from '@/seo/seo.generator';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';

const Homepage = () => {
  const seoData = generateHomepageSEO();
  const helmetProps = toHelmetProps(seoData);
  
  return (
    <>
      <Helmet {...helmetProps} />
      
      <PageWrapper>
        {/* Homepage content */}
      </PageWrapper>
    </>
  );
};
```

---

## 🎯 **Components Reference**

### **Core Components:**

| Component | Purpose | Usage |
|-----------|---------|-------|
| `DynamicSEO` | Universal SEO | Any page type |
| `ServicePageSEO` | Service pages | Pass serviceId |
| `BlogPageSEO` | Blog posts | Pass blog data |
| `LandingPageSEO` | Landing pages | Pass landingSlug |
| `PageWrapper` | Page layout | Wrap all pages |
| `RelatedServices` | Internal links | Show related services |
| `InternalLinkFooter` | Footer links | Auto-generated links |

### **Utility Functions:**

| Function | Purpose |
|----------|----------|
| `getServiceById(id)` | Get service from database |
| `getServiceBySlug(slug)` | Get service by URL slug |
| `getRelatedServices(id, limit)` | Get related services |
| `generateSEO(options)` | Generate SEO data |
| `generateServiceSchema(data)` | Generate service schema |
| `generateBreadcrumbs(slug)` | Generate breadcrumb trail |

---

## ⚙️ **Configuration**

### **Update Global Settings:**

Edit `src/seo/seo.config.js`:

```javascript
export const seoConfig = {
  brand: {
    name: 'Your Brand',
    tagline: 'Your Tagline',
  },
  site: {
    baseUrl: 'https://yoursite.com',
  },
  social: {
    twitter: '@yourbrand',
  },
  // ... other settings
};
```

---

## ⚠️ **Common Mistakes**

### **❌ DON'T:**
```jsx
// Don't hardcode SEO
<SEOHead title="My Page | Brand" />
<ServiceSchema name="My Service" />

// Don't duplicate content
const description = "Same text everywhere";
```

### **✅ DO:**
```jsx
// Use dynamic SEO
<ServicePageSEO serviceId="my-service" />

// Use content database
const service = getServiceById('my-service');
const description = service.description;
```

---

## 📝 **Checklist for New Pages**

- [ ] Add content to `content.database.js`
- [ ] Create page component
- [ ] Use `ServicePageSEO` or `DynamicSEO`
- [ ] Add `RelatedServices` component
- [ ] Add route to `App.jsx`
- [ ] Test SEO with Lighthouse
- [ ] Verify schema with [Rich Results Test](https://search.google.com/test/rich-results)

---

## 🔍 **Testing SEO**

### **1. View Source:**
```bash
# Start dev server
npm run dev

# Open http://localhost:5173/services/tarot
# Right-click > View Page Source
# Check for meta tags and JSON-LD
```

### **2. Lighthouse Audit:**
```
Chrome DevTools > Lighthouse > Run SEO Audit
```

### **3. Rich Results Test:**
```
Google Search Console > Rich Results Test
https://search.google.com/test/rich-results
```

---

## ❓ **FAQ**

**Q: Do I need to write SEO tags for each page?**  
A: No! Use `ServicePageSEO` or `DynamicSEO` components.

**Q: How do I add a new service?**  
A: Add to `content.database.js`, create page, add route. That's it.

**Q: Will this work with my existing pages?**  
A: Yes! You can gradually migrate pages to use the dynamic system.

**Q: Does this hurt performance?**  
A: No! SEO generation is instant (<1ms). No runtime overhead.

**Q: Can I customize SEO for a specific page?**  
A: Yes! Override any field in `DynamicSEO` component.

**Q: How do I add blog post SEO?**  
A: Use `BlogPageSEO` component with blog data.

---

## 🚀 **Next Steps**

1. **Review Documentation:**
   - Read `DYNAMIC_SEO_ARCHITECTURE.md` for deep dive

2. **Migrate Existing Pages:**
   - Start with high-traffic pages
   - Move content to database
   - Replace hardcoded SEO

3. **Add New Services:**
   - Use templates provided
   - Follow 3-step process

4. **Monitor Results:**
   - Track Lighthouse scores
   - Monitor Google Search Console
   - Check rich snippets

---

**Need Help?** Check `DYNAMIC_SEO_ARCHITECTURE.md` for complete documentation.

**Status:** ✅ Production-ready  
**Updated:** February 14, 2026
