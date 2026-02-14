/**
 * ============================================
 * BLOG PAGE SEO COMPONENT
 * ============================================
 * 
 * Specialized SEO component for blog posts.
 * Auto-generates Article schema and meta tags.
 */

import DynamicSEO from './DynamicSEO';
import { generateBreadcrumbs } from '@/seo/internalLink.engine';

const BlogPageSEO = ({ 
  title,
  excerpt,
  slug,
  image,
  author,
  publishDate,
  modifiedDate,
  keywords = [],
  category = 'common',
}) => {
  // Auto-generate description from excerpt (first 160 chars)
  const description = excerpt 
    ? excerpt.substring(0, 160) + (excerpt.length > 160 ? '...' : '')
    : '';
  
  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs(`blog/${slug}`);
  
  return (
    <DynamicSEO
      pageType="blog"
      title={title}
      description={description}
      slug={`blog/${slug}`}
      image={image}
      keywords={keywords}
      category={category}
      author={author}
      publishDate={publishDate}
      modifiedDate={modifiedDate}
      pageData={{
        title,
        excerpt,
        slug: `blog/${slug}`,
        author,
        publishDate,
        modifiedDate,
        keywords,
        breadcrumbs,
      }}
    />
  );
};

export default BlogPageSEO;