/**
 * ============================================
 * INTERNAL LINK FOOTER COMPONENT
 * ============================================
 * 
 * Auto-generates internal link section for page footer.
 * Improves SEO through strategic internal linking.
 */

import { Link } from 'react-router-dom';
import { generateInternalLinkSection } from '@/seo/internalLink.engine';

const InternalLinkFooter = ({ currentServiceId, category = null }) => {
  const linkSection = generateInternalLinkSection(currentServiceId, category);
  
  if (linkSection.links.length === 0) return null;
  
  return (
    <section className="py-8 px-4 bg-muted/20 border-t">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-lg font-semibold mb-4 text-center">{linkSection.title}</h3>
        <div className="flex flex-wrap gap-3 justify-center text-sm">
          {linkSection.links.map((link, index) => (
            <span key={index}>
              <Link 
                to={link.url}
                className="text-primary hover:underline"
                title={link.description}
              >
                {link.text}
              </Link>
              {index < linkSection.links.length - 1 && (
                <span className="mx-2 text-muted-foreground">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinkFooter;