/**
 * ============================================
 * DYNAMIC SCHEMA.ORG GENERATOR
 * ============================================
 * 
 * Auto-generates JSON-LD structured data for any page type.
 * No manual schema writing needed.
 */

import { seoConfig, getFullUrl } from './seo.config';

/**
 * Generate Organization Schema (Global)
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    ...seoConfig.organization,
    url: getFullUrl(''),
    logo: getFullUrl('/logo.png'),
    sameAs: [
      seoConfig.social.facebook,
      seoConfig.social.instagram,
      seoConfig.social.linkedin,
      seoConfig.social.youtube,
    ].filter(Boolean),
  };
};

/**
 * Generate Website Schema (Homepage)
 */
export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.brand.name,
    url: getFullUrl(''),
    description: seoConfig.defaults.description,
    publisher: {
      '@type': 'Organization',
      name: seoConfig.brand.name,
      logo: {
        '@type': 'ImageObject',
        url: getFullUrl('/logo.png'),
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: getFullUrl('/search?q={search_term_string}'),
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

/**
 * Generate Service Schema
 */
export const generateServiceSchema = (serviceData) => {
  const {
    name,
    description,
    slug,
    category = 'Service',
    price,
    duration,
    image,
  } = serviceData;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: seoConfig.brand.name,
      url: getFullUrl(''),
    },
    serviceType: category,
    url: getFullUrl(slug),
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    availableLanguage: ['English', 'Hindi'],
    ...(image && {
      image: getFullUrl(image),
    }),
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    }),
    ...(duration && {
      serviceOutput: {
        '@type': 'Duration',
        name: duration,
      },
    }),
  };
};

/**
 * Generate Article Schema (Blog Posts)
 */
export const generateArticleSchema = (blogData) => {
  const {
    title,
    excerpt,
    slug,
    author,
    publishDate,
    modifiedDate,
    image,
    keywords = [],
  } = blogData;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: image ? getFullUrl(image) : getFullUrl(seoConfig.defaults.image),
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Person',
      name: author || seoConfig.brand.founder,
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.brand.name,
      logo: {
        '@type': 'ImageObject',
        url: getFullUrl('/logo.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getFullUrl(slug),
    },
    ...(keywords.length > 0 && {
      keywords: keywords.join(', '),
    }),
  };
};

/**
 * Generate FAQ Schema
 */
export const generateFAQSchema = (faqArray) => {
  if (!faqArray || faqArray.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqArray.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

/**
 * Generate Breadcrumb Schema
 */
export const generateBreadcrumbSchema = (breadcrumbArray) => {
  if (!breadcrumbArray || breadcrumbArray.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbArray.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getFullUrl(item.url),
    })),
  };
};

/**
 * Generate Person Schema (For About/Team Pages)
 */
export const generatePersonSchema = (personData) => {
  const {
    name,
    jobTitle,
    description,
    image,
    email,
    sameAs = [],
  } = personData;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    ...(image && { image: getFullUrl(image) }),
    ...(email && { email }),
    worksFor: {
      '@type': 'Organization',
      name: seoConfig.brand.name,
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
};

/**
 * Generate LocalBusiness Schema
 */
export const generateLocalBusinessSchema = (businessData = {}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: seoConfig.brand.name,
    description: seoConfig.defaults.description,
    url: getFullUrl(''),
    telephone: seoConfig.contact.phone,
    email: seoConfig.contact.email,
    address: seoConfig.organization.address,
    areaServed: seoConfig.organization.areaServed,
    ...businessData,
  };
};

/**
 * Generate Course Schema (For Workshop/Training Pages)
 */
export const generateCourseSchema = (courseData) => {
  const {
    name,
    description,
    slug,
    instructor,
    duration,
    price,
    image,
  } = courseData;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url: getFullUrl(slug),
    provider: {
      '@type': 'Organization',
      name: seoConfig.brand.name,
    },
    ...(instructor && {
      instructor: {
        '@type': 'Person',
        name: instructor,
      },
    }),
    ...(image && { image: getFullUrl(image) }),
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'INR',
      },
    }),
    ...(duration && { timeRequired: duration }),
  };
};

/**
 * Inject Schema into Page (React Component)
 */
export const SchemaScript = ({ schema }) => {
  if (!schema) return null;
  
  // Handle multiple schemas
  const schemaArray = Array.isArray(schema) ? schema : [schema];
  const validSchemas = schemaArray.filter(Boolean);
  
  if (validSchemas.length === 0) return null;
  
  return (
    <>
      {validSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}
    </>
  );
};

/**
 * Auto-generate schema based on page type
 */
export const generateSchemaForPage = (pageType, pageData) => {
  const schemas = [];
  
  // Always include Organization schema
  schemas.push(generateOrganizationSchema());
  
  // Add page-specific schemas
  switch (pageType) {
    case 'home':
      schemas.push(generateWebsiteSchema());
      break;
    
    case 'service':
      schemas.push(generateServiceSchema(pageData));
      if (pageData.faqs) {
        schemas.push(generateFAQSchema(pageData.faqs));
      }
      break;
    
    case 'blog':
      schemas.push(generateArticleSchema(pageData));
      break;
    
    case 'corporate':
      schemas.push(generateServiceSchema({ ...pageData, category: 'Corporate Wellness' }));
      break;
    
    case 'course':
      schemas.push(generateCourseSchema(pageData));
      break;
    
    default:
      break;
  }
  
  // Add breadcrumbs if available
  if (pageData.breadcrumbs) {
    schemas.push(generateBreadcrumbSchema(pageData.breadcrumbs));
  }
  
  return schemas;
};

export default {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateServiceSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generatePersonSchema,
  generateLocalBusinessSchema,
  generateCourseSchema,
  SchemaScript,
  generateSchemaForPage,
};