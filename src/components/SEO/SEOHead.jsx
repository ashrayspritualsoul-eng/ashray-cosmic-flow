import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://ashraywellness.com/logo.png',
  ogType = 'website',
  schema,
  noindex = false,
}) => {
  const siteUrl = 'https://ashraywellness.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Ashi Pawaiya Jain" />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Ashray Wellness" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@AshrayWellness" />
      
      {/* Geographic Targeting */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;