/**
 * ============================================
 * DYNAMIC LANDING PAGE TEMPLATE
 * ============================================
 * 
 * Universal template for SEO-optimized landing pages.
 * Auto-pulls data from content database.
 * 
 * USAGE EXAMPLE:
 * <DynamicLandingPage landingSlug="tarot-reading" />
 */

import LandingPageSEO from '@/components/SEO/LandingPageSEO';
import RelatedServices from '@/components/SEO/RelatedServices';
import InternalLinkFooter from '@/components/SEO/InternalLinkFooter';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getServiceBySlug } from '@/seo/content.database';
import { Link } from 'react-router-dom';
import { Check, Star, Users, Calendar } from 'lucide-react';

const DynamicLandingPage = ({ landingSlug }) => {
  // Get service data
  const service = getServiceBySlug(landingSlug);
  
  if (!service) {
    return <div>Page not found</div>;
  }
  
  return (
    <>
      {/* Auto-generated SEO */}
      <LandingPageSEO 
        landingSlug={landingSlug}
        category={service.category}
      />
      
      <PageWrapper>
        {/* Hero Section - Optimized for conversions */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {service.name} Online in India
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600">
                  <Link to="/contact">Book Your Session Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to={`/${service.slug}`}>Learn More</Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 justify-center pt-8 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Trusted by 1000+ clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span>Expert practitioners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-pink-600" />
                  <span>Available in English & Hindi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose {service.name}?
            </h2>
            {service.benefits && service.benefits.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.benefits.map((benefit, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6 space-y-3">
                      <Check className="h-8 w-8 text-green-600" />
                      <p className="font-medium">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Long-form Content Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>What is {service.name}?</h2>
              <p>{service.longDescription || service.description}</p>
              
              <h2>How It Works</h2>
              <p>
                Our {service.name.toLowerCase()} sessions are conducted online via video call, 
                making them accessible from anywhere in India. The process is simple:
              </p>
              <ol>
                <li>Book your preferred date and time</li>
                <li>Complete the secure payment</li>
                <li>Receive confirmation and session details</li>
                <li>Join at your scheduled time</li>
                <li>Receive guidance and insights</li>
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 px-4">
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
          title="Explore More Services"
        />

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of satisfied clients who have transformed their lives through {service.name.toLowerCase()}.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book Your Session Today</Link>
            </Button>
            <div className="pt-4 text-sm opacity-80">
              <p>👍 100% Confidential | ⭐ Expert Guidance | ⚡ Instant Booking</p>
            </div>
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

export default DynamicLandingPage;