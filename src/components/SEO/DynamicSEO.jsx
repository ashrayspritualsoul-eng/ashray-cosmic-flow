/**
 * ============================================
 * DYNAMIC SEO COMPONENT
 * ============================================
 * 
 * Universal SEO component that handles all meta tags and schema.
 * One component for all pages - no duplication.
 */

import { Helmet } from 'react-helmet-async';
import { generateSEO, toHelmetProps } from '@/seo/seo.generator';
import { generateSchemaForPage, SchemaScript } from '@/seo/schema.generator';

const DynamicSEO = ({
  pageType = 'static',
  title,
  description,
  slug,
  image,
  imageAlt,
  keywords = [],
  category = 'common',
  author,
  publishDate,
  modifiedDate,
  noindex = false,
  pageData = {},
  children,
}) => {
  // Generate SEO data
  const seoData = generateSEO({
    pageType,
    title,
    description,
    slug,
    image,
    imageAlt,
    keywords,
    category,
    author,
    publishDate,
    modifiedDate,
    noindex,
  });
  
  // Convert to Helmet props
  const helmetProps = toHelmetProps(seoData);
  
  // Generate structured data schemas
  const schemas = generateSchemaForPage(pageType, {
    ...pageData,
    name: title,
    description,
    slug,
    image,
    keywords,
    author,
    publishDate,
    modifiedDate,
  });
  
  return (
    <>
      <Helmet {...helmetProps} />
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
};

export default DynamicSEO;