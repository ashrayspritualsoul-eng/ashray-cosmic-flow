/**
 * ============================================
 * CENTRALIZED SEO CONFIGURATION
 * ============================================
 * 
 * Single source of truth for all SEO settings.
 * Framework-agnostic, reusable across entire site.
 */

export const seoConfig = {
  // Brand Information
  brand: {
    name: 'Ashray Wellness',
    tagline: 'Spiritual & Corporate Wellness Solutions',
    founder: 'Ashi Pawaiya Jain',
    established: '2020',
  },

  // Site Configuration
  site: {
    baseUrl: 'https://ashraywellness.com',
    locale: 'en_IN',
    language: 'en',
    region: 'IN',
    timezone: 'Asia/Kolkata',
  },

  // Social Media
  social: {
    twitter: '@AshrayWellness',
    facebook: 'https://facebook.com/ashraywellness',
    instagram: 'https://instagram.com/ashraywellness',
    linkedin: 'https://linkedin.com/company/ashraywellness',
    youtube: 'https://youtube.com/@ashraywellness',
  },

  // Contact Information
  contact: {
    email: 'ashrayspritualsoul@gmail.com',
    phone: '+91-9340216182',
    whatsapp: '+91-9340216182',
  },

  // Organization Details (for Schema)
  organization: {
    '@type': 'Organization',
    name: 'Ashray Wellness',
    alternateName: 'Ashray Cosmic Flow',
    description: 'Leading provider of spiritual and corporate wellness services in India, offering tarot reading, psychic guidance, reiki healing, numerology, and corporate wellness programs.',
    url: 'https://ashraywellness.com',
    logo: 'https://ashraywellness.com/logo.svg',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Ashi Pawaiya Jain',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'ashrayspritualsoul@gmail.com',
      availableLanguage: ['English', 'Hindi'],
    },
  },

  // Default SEO Templates
  templates: {
    // Title Templates
    titleTemplate: '{title} | Ashray Wellness – Corporate Mental Wellness & Personal Care',
    titleTemplateShort: '{title} | Ashray Wellness',
    homepageTitle: 'Ashray Wellness | Corporate Mental Wellness & Personal Care in India',
    
    // Description Templates
    descriptionTemplate: 'Experience {title} with Ashray Wellness. {description} Trusted corporate mental wellness and personal care solutions in India by Ashi Pawaiya Jain.',
    
    // Service Description Template
    serviceDescriptionTemplate: 'Professional {serviceName} services in India. {description} Book your consultation with expert practitioners. Available in English & Hindi.',
    
    // Blog Description Template
    blogDescriptionTemplate: '{excerpt} Read expert insights on spiritual wellness, personal growth, and holistic healing from Ashray Wellness.',
  },

  // Default Meta Tags
  defaults: {
    title: 'Ashray Wellness – Corporate Mental Wellness & Personal Care Solutions in India',
    description: 'Discover corporate mental wellness and personal care with Ashray Wellness. Expert workplace wellbeing programs, counseling, and holistic mental health support across India. Book your personalized care today.',
    keywords: 'corporate mental wellness, personal care, workplace wellbeing, mental health support, stress management, employee wellness, executive counseling, corporate wellness, holistic care',
    image: '/images/og-default.jpg',
    imageAlt: 'Ashray Wellness - Corporate Mental Wellness and Personal Care',
    type: 'website',
  },

  // Robots Configuration
  robots: {
    default: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    noindex: 'noindex, nofollow',
  },

  // Structured Data Configuration
  structuredData: {
    enableOrganization: true,
    enableWebsite: true,
    enableBreadcrumbs: true,
    enableLocalBusiness: true,
  },

  // Page Type Configuration
  pageTypes: {
    home: {
      type: 'website',
      priority: 1.0,
      changefreq: 'weekly',
    },
    service: {
      type: 'service',
      priority: 0.9,
      changefreq: 'monthly',
    },
    blog: {
      type: 'article',
      priority: 0.8,
      changefreq: 'weekly',
    },
    corporate: {
      type: 'service',
      priority: 0.9,
      changefreq: 'monthly',
    },
    landing: {
      type: 'website',
      priority: 0.95,
      changefreq: 'weekly',
    },
    static: {
      type: 'website',
      priority: 0.7,
      changefreq: 'monthly',
    },
  },

  // Keywords by Category
  categoryKeywords: {
    personal: [
      'spiritual guidance',
      'tarot reading online',
      'psychic reading india',
      'numerology consultation',
      'reiki healing',
      'energy healing',
      'spiritual wellness',
      'meditation',
      'chakra balancing',
    ],
    corporate: [
      'corporate wellness programs',
      'employee mental health',
      'workplace stress management',
      'burnout prevention',
      'emotional intelligence training',
      'leadership mindfulness',
      'corporate meditation',
      'team wellness',
    ],
    common: [
      'wellness services india',
      'holistic healing',
      'mind body spirit',
      'personal growth',
      'self improvement',
    ],
  },

  // Service Categories
  serviceCategories: {
    personal: {
      name: 'Personal Wellness Services',
      description: 'Individual spiritual guidance and healing services',
      slug: 'services',
    },
    corporate: {
      name: 'Corporate Wellness Programs',
      description: 'Workplace wellness and mental health solutions',
      slug: 'corporate-services',
    },
    products: {
      name: 'Wellness Products',
      description: 'Curated spiritual and wellness products',
      slug: 'wellness-products',
    },
  },
};

/**
 * Get full URL for a path
 */
export const getFullUrl = (path = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${seoConfig.site.baseUrl}${cleanPath}`;
};

/**
 * Get canonical URL
 */
export const getCanonicalUrl = (path = '') => {
  return getFullUrl(path);
};

/**
 * Format title with template
 */
export const formatTitle = (title, useShortTemplate = false) => {
  if (!title) return seoConfig.defaults.title;
  
  const template = useShortTemplate 
    ? seoConfig.templates.titleTemplateShort 
    : seoConfig.templates.titleTemplate;
  
  return template.replace('{title}', title);
};

/**
 * Get keywords for a category
 */
export const getKeywordsForCategory = (category, additionalKeywords = []) => {
  const categoryKeys = seoConfig.categoryKeywords[category] || [];
  const commonKeys = seoConfig.categoryKeywords.common;
  
  return [...new Set([...categoryKeys, ...commonKeys, ...additionalKeywords])].join(', ');
};

export default seoConfig;
