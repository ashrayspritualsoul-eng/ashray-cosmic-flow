const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ashray Wellness",
    "alternateName": "Ashray Cosmic Flow",
    "url": "https://ashraywellness.com",
    "logo": "https://ashraywellness.com/logo.png",
    "description": "Leading spiritual wellness and corporate wellness provider in India. Offering tarot readings, psychic consultations, reiki healing, numerology, and comprehensive corporate wellness programs.",
    "foundingDate": "2022",
    "founder": {
      "@type": "Person",
      "name": "Ashi Pawaiya Jain"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "sameAs": [
      "https://twitter.com/AshrayWellness",
      "https://www.facebook.com/ashraywellness",
      "https://www.instagram.com/ashraywellness",
      "https://www.linkedin.com/company/ashraywellness"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "service": [
      {
        "@type": "Service",
        "serviceType": "Tarot Reading",
        "description": "Professional online tarot card reading services"
      },
      {
        "@type": "Service",
        "serviceType": "Psychic Reading",
        "description": "Authentic psychic readings and spiritual guidance"
      },
      {
        "@type": "Service",
        "serviceType": "Reiki Healing",
        "description": "Distance reiki healing and energy therapy"
      },
      {
        "@type": "Service",
        "serviceType": "Numerology",
        "description": "Numerology readings and life path analysis"
      },
      {
        "@type": "Service",
        "serviceType": "Corporate Wellness Programs",
        "description": "Comprehensive employee wellness and mental health programs"
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default OrganizationSchema;