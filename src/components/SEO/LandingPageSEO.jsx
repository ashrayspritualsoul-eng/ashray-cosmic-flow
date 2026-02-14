/**
 * ============================================
 * LANDING PAGE SEO COMPONENT
 * ============================================
 * 
 * Specialized SEO component for SEO-optimized landing pages.
 */

import DynamicSEO from './DynamicSEO';
import { getServiceBySlug } from '@/seo/content.database';
import { generateBreadcrumbs } from '@/seo/internalLink.engine';

const LandingPageSEO = ({ 
  landingSlug,
  title,
  description,
  image,
  keywords = [],
  category = 'personal',
  faqs = [],
}) => {
  // Try to find related service
  const service = getServiceBySlug(landingSlug);
  
  // Use service data if available, otherwise use props
  const finalTitle = title || service?.name;
  const finalDescription = description || service?.shortDescription;
  const finalImage = image || service?.image;
  const finalKeywords = keywords.length > 0 ? keywords : (service?.keywords || []);
  const finalFaqs = faqs.length > 0 ? faqs : (service?.faqs || []);
  
  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs(landingSlug);
  
  return (
    <DynamicSEO
      pageType="landing"
      title={finalTitle}
      description={finalDescription}
      slug={landingSlug}
      image={finalImage}
      keywords={finalKeywords}
      category={category}
      pageData={{
        name: finalTitle,
        description: finalDescription,
        slug: landingSlug,
        image: finalImage,
        breadcrumbs,
        faqs: finalFaqs,
      }}
    />
  );
};

export default LandingPageSEO;