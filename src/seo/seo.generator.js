/**
 * ============================================
 * DYNAMIC SEO META GENERATOR
 * ============================================
 * 
 * Generates all meta tags dynamically based on page data.
 * No hardcoded SEO - everything is computed from content.
 */

import { seoConfig, getFullUrl, formatTitle, getKeywordsForCategory } from './seo.config';

/**
 * Generate complete SEO meta tags for any page
 * 
 * @param {Object} options - Page SEO options
 * @param {string} options.pageType - Type of page (home, service, blog, etc.)
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.slug - Page slug/path
 * @param {string} options.image - Page image URL
 * @param {string} options.imageAlt - Image alt text
 * @param {Array} options.keywords - Additional keywords
 * @param {string} options.category - Content category (personal, corporate, etc.)
 * @param {Object} options.author - Author information for blogs
 * @param {string} options.publishDate - Publication date for blogs
 * @param {string} options.modifiedDate - Last modified date
 * @param {boolean} options.noindex - Prevent indexing
 * @returns {Object} Complete SEO meta tags object
 */
export const generateSEO = ({
  pageType = 'static',
  title,
  description,
  slug = '',
  image,
  imageAlt,
  keywords = [],
  category = 'common',
  author,
  publishDate,
  modifiedDate,
  noindex = false,
} = {}) => {
  // Generate URLs
  const canonicalUrl = getFullUrl(slug);
  const fullImageUrl = image ? getFullUrl(image) : getFullUrl(seoConfig.defaults.image);
  
  // Format title
  const formattedTitle = title ? formatTitle(title) : seoConfig.defaults.title;
  
  // Generate description
  const finalDescription = description || seoConfig.defaults.description;
  
  // Generate keywords
  const allKeywords = getKeywordsForCategory(category, keywords);
  
  // Get page type configuration
  const pageTypeConfig = seoConfig.pageTypes[pageType] || seoConfig.pageTypes.static;
  
  // Determine robots directive
  const robotsDirective = noindex ? seoConfig.robots.noindex : seoConfig.robots.default;
  
  return {
    // Basic Meta Tags
    title: formattedTitle,
    description: finalDescription,
    keywords: allKeywords,
    robots: robotsDirective,
    canonical: canonicalUrl,
    
    // Open Graph Tags
    og: {
      type: pageTypeConfig.type,
      url: canonicalUrl,
      title: formattedTitle,
      description: finalDescription,
      image: fullImageUrl,
      imageAlt: imageAlt || seoConfig.defaults.imageAlt,
      siteName: seoConfig.brand.name,
      locale: seoConfig.site.locale,
    },
    
    // Twitter Card Tags
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.social.twitter,
      title: formattedTitle,
      description: finalDescription,
      image: fullImageUrl,
      imageAlt: imageAlt || seoConfig.defaults.imageAlt,
    },
    
    // Additional Meta
    additional: {
      author: author || seoConfig.brand.founder,
      publishDate,
      modifiedDate,
      pageType: pageTypeConfig.type,
    },
    
    // Sitemap Priority
    sitemap: {
      priority: pageTypeConfig.priority,
      changefreq: pageTypeConfig.changefreq,
    },
  };
};

/**
 * Generate SEO for homepage
 */
export const generateHomepageSEO = () => {
  return generateSEO({
    pageType: 'home',
    title: null, // Will use default homepage title
    description: seoConfig.defaults.description,
    slug: '',
    image: '/images/homepage-hero.jpg',
    keywords: ['spiritual wellness', 'corporate wellness', 'ashray wellness'],
    category: 'common',
  });
};

/**
 * Generate SEO for service pages
 */
export const generateServiceSEO = (serviceData) => {
  const {
    name,
    description,
    slug,
    image,
    category = 'personal',
    keywords = [],
    shortDescription,
  } = serviceData;
  
  // Generate service-specific description
  const serviceDescription = shortDescription || description || 
    seoConfig.templates.serviceDescriptionTemplate
      .replace('{serviceName}', name)
      .replace('{description}', description || '');
  
  return generateSEO({
    pageType: 'service',
    title: name,
    description: serviceDescription,
    slug,
    image,
    keywords: [name, ...keywords],
    category,
  });
};

/**
 * Generate SEO for blog posts
 */
export const generateBlogSEO = (blogData) => {
  const {
    title,
    excerpt,
    slug,
    image,
    author,
    publishDate,
    modifiedDate,
    keywords = [],
    category = 'common',
  } = blogData;
  
  // Generate blog description from excerpt
  const blogDescription = excerpt || 
    seoConfig.templates.blogDescriptionTemplate.replace('{excerpt}', excerpt || title);
  
  return generateSEO({
    pageType: 'blog',
    title,
    description: blogDescription,
    slug: `blog/${slug}`,
    image,
    keywords: [...keywords, 'wellness blog', 'spiritual guidance'],
    category,
    author,
    publishDate,
    modifiedDate,
  });
};

/**
 * Generate SEO for corporate pages
 */
export const generateCorporateSEO = (corporateData) => {
  const {
    name,
    description,
    slug,
    image,
    keywords = [],
  } = corporateData;
  
  return generateSEO({
    pageType: 'corporate',
    title: name,
    description,
    slug,
    image,
    keywords: [name, ...keywords],
    category: 'corporate',
  });
};

/**
 * Generate SEO for landing pages
 */
export const generateLandingSEO = (landingData) => {
  const {
    title,
    description,
    slug,
    image,
    keywords = [],
    category = 'personal',
  } = landingData;
  
  return generateSEO({
    pageType: 'landing',
    title,
    description,
    slug,
    image,
    keywords,
    category,
  });
};

/**
 * Convert SEO object to Helmet-compatible format
 */
export const toHelmetProps = (seoData) => {
  return {
    title: seoData.title,
    meta: [
      // Basic Meta
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords },
      { name: 'robots', content: seoData.robots },
      { name: 'author', content: seoData.additional.author },
      
      // Open Graph
      { property: 'og:type', content: seoData.og.type },
      { property: 'og:url', content: seoData.og.url },
      { property: 'og:title', content: seoData.og.title },
      { property: 'og:description', content: seoData.og.description },
      { property: 'og:image', content: seoData.og.image },
      { property: 'og:image:alt', content: seoData.og.imageAlt },
      { property: 'og:site_name', content: seoData.og.siteName },
      { property: 'og:locale', content: seoData.og.locale },
      
      // Twitter Card
      { name: 'twitter:card', content: seoData.twitter.card },
      { name: 'twitter:site', content: seoData.twitter.site },
      { name: 'twitter:title', content: seoData.twitter.title },
      { name: 'twitter:description', content: seoData.twitter.description },
      { name: 'twitter:image', content: seoData.twitter.image },
      { name: 'twitter:image:alt', content: seoData.twitter.imageAlt },
      
      // Additional Meta
      ...(seoData.additional.publishDate ? [{ name: 'article:published_time', content: seoData.additional.publishDate }] : []),
      ...(seoData.additional.modifiedDate ? [{ name: 'article:modified_time', content: seoData.additional.modifiedDate }] : []),
    ],
    link: [
      { rel: 'canonical', href: seoData.canonical },
    ],
  };
};

export default generateSEO;