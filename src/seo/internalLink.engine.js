/**
 * ============================================
 * INTERNAL LINKING ENGINE
 * ============================================
 * 
 * Automatically generates internal links based on content relationships.
 * Improves SEO through strategic cross-linking.
 */

import { allServices, getServiceById, getRelatedServices } from './content.database';

/**
 * Get related content based on current page
 */
export const getRelatedContent = (currentPageId, contentType = 'service', options = {}) => {
  const { limit = 3, category = null } = options;
  
  switch (contentType) {
    case 'service':
      return getRelatedServicesForPage(currentPageId, limit, category);
    
    case 'blog':
      return getRelatedBlogsForPage(currentPageId, limit);
    
    default:
      return [];
  }
};

/**
 * Get related services for a service page
 */
const getRelatedServicesForPage = (serviceId, limit = 3, categoryFilter = null) => {
  const currentService = getServiceById(serviceId);
  if (!currentService) return [];
  
  // Get explicitly defined related services first
  const explicitRelated = getRelatedServices(serviceId, limit);
  
  if (explicitRelated.length >= limit) {
    return explicitRelated.slice(0, limit);
  }
  
  // Fill remaining slots with services from same category
  const remainingSlots = limit - explicitRelated.length;
  const sameCategoryServices = Object.values(allServices)
    .filter(service => 
      service.id !== serviceId && 
      service.category === (categoryFilter || currentService.category) &&
      !explicitRelated.find(related => related.id === service.id)
    )
    .slice(0, remainingSlots);
  
  return [...explicitRelated, ...sameCategoryServices];
};

/**
 * Get related blogs for a page (placeholder - extend when blog system is implemented)
 */
const getRelatedBlogsForPage = (pageId, limit = 3) => {
  // TODO: Implement when blog database is created
  return [];
};

/**
 * Get services that should link to a specific keyword
 */
export const getServicesForKeyword = (keyword) => {
  return Object.values(allServices).filter(service => {
    const searchText = `${service.name} ${service.description} ${service.keywords.join(' ')}`.toLowerCase();
    return searchText.includes(keyword.toLowerCase());
  });
};

/**
 * Generate breadcrumb trail for a page
 */
export const generateBreadcrumbs = (slug) => {
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  
  // Parse slug to build breadcrumb trail
  const parts = slug.split('/').filter(Boolean);
  
  parts.forEach((part, index) => {
    const url = '/' + parts.slice(0, index + 1).join('/');
    const name = formatBreadcrumbName(part);
    breadcrumbs.push({ name, url });
  });
  
  return breadcrumbs;
};

/**
 * Format breadcrumb name from slug
 */
const formatBreadcrumbName = (slug) => {
  // Check if it's a known service
  const service = Object.values(allServices).find(s => 
    s.slug.includes(slug) || s.landingSlug === slug
  );
  
  if (service) return service.name;
  
  // Otherwise, format the slug
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Generate contextual links for a text block
 * (Auto-link keywords to relevant pages)
 */
export const generateContextualLinks = (text, currentPageId = null) => {
  let processedText = text;
  
  // Keywords to auto-link
  const linkableKeywords = [
    { keyword: 'tarot reading', serviceId: 'tarot-readings' },
    { keyword: 'psychic reading', serviceId: 'psychic-readings' },
    { keyword: 'numerology', serviceId: 'numerology' },
    { keyword: 'reiki healing', serviceId: 'reiki-healing' },
    { keyword: 'reiki', serviceId: 'reiki-healing' },
    { keyword: 'spiritual remedies', serviceId: 'spiritual-remedies' },
    { keyword: 'therapy', serviceId: 'individual-therapy' },
    { keyword: 'mental health', serviceId: 'mental-health' },
    { keyword: 'burnout', serviceId: 'wellness-burnout' },
    { keyword: 'stress management', serviceId: 'stress-management' },
    { keyword: 'emotional intelligence', serviceId: 'emotional-intelligence' },
    { keyword: 'mindfulness', serviceId: 'leadership-mindfulness' },
  ];
  
  // Don't link to current page
  const validKeywords = linkableKeywords.filter(item => item.serviceId !== currentPageId);
  
  // Track already linked keywords to avoid duplicate links
  const linkedKeywords = new Set();
  
  validKeywords.forEach(({ keyword, serviceId }) => {
    const service = getServiceById(serviceId);
    if (!service || linkedKeywords.has(keyword)) return;
    
    // Case-insensitive replacement (only first occurrence)
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    const match = processedText.match(regex);
    
    if (match) {
      processedText = processedText.replace(
        regex,
        `<a href="/${service.slug}" class="text-primary hover:underline">${match[0]}</a>`
      );
      linkedKeywords.add(keyword);
    }
  });
  
  return processedText;
};

/**
 * Get navigation structure for sitemap/menus
 */
export const getNavigationStructure = () => {
  return {
    personal: {
      title: 'Personal Wellness',
      slug: 'services',
      children: Object.values(allServices)
        .filter(s => s.category === 'personal')
        .map(s => ({
          title: s.name,
          slug: s.slug,
        })),
    },
    corporate: {
      title: 'Corporate Services',
      slug: 'corporate-services',
      children: Object.values(allServices)
        .filter(s => s.category === 'corporate')
        .map(s => ({
          title: s.name,
          slug: s.slug,
        })),
    },
  };
};

/**
 * Generate internal link section for page footer
 */
export const generateInternalLinkSection = (currentPageId, category = null) => {
  const relatedServices = getRelatedContent(currentPageId, 'service', { limit: 6, category });
  
  return {
    title: category === 'corporate' 
      ? 'Related Corporate Services' 
      : 'Related Spiritual Services',
    links: relatedServices.map(service => ({
      text: service.name,
      url: `/${service.slug}`,
      description: service.shortDescription,
    })),
  };
};

/**
 * Get "You might also like" recommendations
 */
export const getRecommendations = (currentPageId, type = 'service') => {
  if (type === 'service') {
    const currentService = getServiceById(currentPageId);
    if (!currentService) return [];
    
    // Mix of related services and same-category services
    const related = getRelatedServices(currentPageId, 2);
    const sameCategory = Object.values(allServices)
      .filter(s => 
        s.category === currentService.category && 
        s.id !== currentPageId &&
        !related.find(r => r.id === s.id)
      )
      .slice(0, 2);
    
    return [...related, ...sameCategory];
  }
  
  return [];
};

/**
 * Generate cross-category links (Personal <-> Corporate)
 */
export const getCrossCategoryLinks = (currentCategory) => {
  const targetCategory = currentCategory === 'personal' ? 'corporate' : 'personal';
  
  return Object.values(allServices)
    .filter(s => s.category === targetCategory)
    .slice(0, 3)
    .map(s => ({
      text: s.name,
      url: `/${s.slug}`,
      description: s.shortDescription,
    }));
};

export default {
  getRelatedContent,
  getServicesForKeyword,
  generateBreadcrumbs,
  generateContextualLinks,
  getNavigationStructure,
  generateInternalLinkSection,
  getRecommendations,
  getCrossCategoryLinks,
};