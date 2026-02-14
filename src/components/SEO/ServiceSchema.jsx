const ServiceSchema = ({
  name,
  description,
  serviceType,
  areaServed = "India",
  provider = "Ashray Wellness",
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://ashraywellness.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": areaServed
    },
    "url": url,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default ServiceSchema;