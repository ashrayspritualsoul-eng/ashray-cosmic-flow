/**
 * ============================================
 * SERVICE PAGE SEO COMPONENT
 * ============================================
 * 
 * Specialized SEO component for service pages.
 * Automatically pulls data from content database.
 */

import DynamicSEO from './DynamicSEO';
import { getServiceById, getServiceBySlug } from '@/seo/content.database';
import { generateBreadcrumbs } from '@/seo/internalLink.engine';

const ServicePageSEO = ({ serviceId, serviceSlug }) => {
  // Get service data
  const service = serviceId 
    ? getServiceById(serviceId) 
    : getServiceBySlug(serviceSlug);
  
  if (!service) {
    console.error(`Service not found: ${serviceId || serviceSlug}`);
    return null;
  }
  
  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs(service.slug);
  
  return (
    <DynamicSEO
      pageType="service"
      title={service.name}
      description={service.shortDescription || service.description}
      slug={service.slug}
      image={service.image}
      keywords={service.keywords}
      category={service.category}
      pageData={{
        ...service,
        breadcrumbs,
        faqs: service.faqs,
      }}
    />
  );
};

export default ServicePageSEO;