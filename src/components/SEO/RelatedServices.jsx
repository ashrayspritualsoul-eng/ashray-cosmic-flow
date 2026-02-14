/**
 * ============================================
 * RELATED SERVICES COMPONENT
 * ============================================
 * 
 * Auto-generates related services section for internal linking.
 */

import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { getRelatedContent } from '@/seo/internalLink.engine';
import { ArrowRight } from 'lucide-react';

const RelatedServices = ({ 
  currentServiceId, 
  category = null,
  limit = 3,
  title = 'Related Services',
}) => {
  const relatedServices = getRelatedContent(currentServiceId, 'service', { limit, category });
  
  if (relatedServices.length === 0) return null;
  
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.shortDescription}
                </p>
                <Link 
                  to={`/${service.slug}`}
                  className="text-primary hover:underline inline-flex items-center gap-1 text-sm font-medium"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;