/**
 * ============================================
 * DYNAMIC SERVICE PAGE TEMPLATE
 * ============================================
 * 
 * Universal template for all service pages.
 * All content and SEO auto-generated from content database.
 * 
 * USAGE:
 * - No hardcoded content
 * - No manual SEO tags
 * - All data from content.database.js
 */

import { useParams } from 'react-router-dom';
import ServicePageSEO from '@/components/SEO/ServicePageSEO';
import RelatedServices from '@/components/SEO/RelatedServices';
import InternalLinkFooter from '@/components/SEO/InternalLinkFooter';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getServiceById, getServiceBySlug } from '@/seo/content.database';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const DynamicServicePage = ({ serviceId }) => {
  // Get service data from database
  const service = getServiceById(serviceId);
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  return (
    <>
      {/* Auto-generated SEO */}
      <ServicePageSEO serviceId={serviceId} />
      
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {service.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600">
                    <Link to="/contact">Book Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What You'll Get</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.longDescription || service.description}
                </p>
                {service.benefits && service.benefits.length > 0 && (
                  <div className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pricing</h3>
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </div>
                  {service.duration && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Duration</h3>
                      <p className="text-muted-foreground">{service.duration}</p>
                    </div>
                  )}
                  <Button className="w-full" size="lg" asChild>
                    <Link to="/contact">Book Your Session</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 px-4 bg-muted/50">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Auto-generated Related Services */}
        <RelatedServices 
          currentServiceId={service.id}
          category={service.category}
          limit={3}
        />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl opacity-90">
              Book your {service.name.toLowerCase()} session today and experience transformation.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>

        {/* Auto-generated Internal Links */}
        <InternalLinkFooter 
          currentServiceId={service.id}
          category={service.category}
        />
      </PageWrapper>
    </>
  );
};

export default DynamicServicePage;