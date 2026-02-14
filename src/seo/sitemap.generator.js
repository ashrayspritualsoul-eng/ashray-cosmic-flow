/**
 * ============================================
 * DYNAMIC SITEMAP GENERATOR
 * ============================================
 * 
 * Auto-generates sitemap.xml from content database.
 * Run this to create sitemap before deployment.
 */

import { allServices } from './content.database.js';
import { seoConfig } from './seo.config.js';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Generate sitemap entries
 */
const generateSitemapEntries = () => {
  const entries = [];
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Homepage
  entries.push({
    loc: seoConfig.site.baseUrl,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '1.0',
  });
  
  // Static pages
  const staticPages = [
    { url: '/about', priority: '0.8' },
    { url: '/services', priority: '0.9' },
    { url: '/corporate-services', priority: '0.9' },
    { url: '/wellness-products', priority: '0.7' },
    { url: '/contact', priority: '0.8' },
  ];
  
  staticPages.forEach(page => {
    entries.push({
      loc: `${seoConfig.site.baseUrl}${page.url}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: page.priority,
    });
  });
  
  // All services
  Object.values(allServices).forEach(service => {
    // Main service page
    entries.push({
      loc: `${seoConfig.site.baseUrl}/${service.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9',
    });
    
    // Landing page if exists
    if (service.landingSlug) {
      entries.push({
        loc: `${seoConfig.site.baseUrl}/${service.landingSlug}`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: '0.95',
      });
    }
  });
  
  return entries;
};

/**
 * Generate sitemap XML
 */
export const generateSitemapXML = () => {
  const entries = generateSitemapEntries();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  entries.forEach(entry => {
    xml += '  <url>\n';
    xml += `    <loc>${entry.loc}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

/**
 * Generate HTML sitemap for users
 */
export const generateHTMLSitemap = () => {
  const entries = generateSitemapEntries();
  
  let html = '<!DOCTYPE html>\n';
  html += '<html lang="en">\n';
  html += '<head>\n';
  html += '  <meta charset="UTF-8">\n';
  html += '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
  html += `  <title>Sitemap | ${seoConfig.brand.name}</title>\n`;
  html += '  <style>\n';
  html += '    body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }\n';
  html += '    h1 { color: #6366f1; }\n';
  html += '    .section { margin: 30px 0; }\n';
  html += '    .section h2 { color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px; }\n';
  html += '    ul { list-style: none; padding: 0; }\n';
  html += '    li { margin: 10px 0; }\n';
  html += '    a { color: #6366f1; text-decoration: none; }\n';
  html += '    a:hover { text-decoration: underline; }\n';
  html += '  </style>\n';
  html += '</head>\n';
  html += '<body>\n';
  html += `  <h1>${seoConfig.brand.name} - Sitemap</h1>\n`;
  html += '  <p>Browse all pages on our website:</p>\n';
  
  // Group by section
  const sections = {
    'Main Pages': entries.filter(e => 
      e.loc === seoConfig.site.baseUrl || 
      ['/about', '/services', '/corporate-services', '/wellness-products', '/contact'].some(path => e.loc.includes(path))
    ),
    'Personal Wellness Services': entries.filter(e => 
      e.loc.includes('/services/') && !e.loc.includes('/corporate-services/')
    ),
    'Corporate Wellness Services': entries.filter(e => 
      e.loc.includes('/corporate-services/')
    ),
    'SEO Landing Pages': entries.filter(e => 
      !e.loc.includes('/services/') && 
      !e.loc.includes('/corporate-services/') &&
      e.loc !== seoConfig.site.baseUrl &&
      !['/about', '/services', '/corporate-services', '/wellness-products', '/contact'].some(path => e.loc.includes(path))
    ),
  };
  
  Object.entries(sections).forEach(([title, urls]) => {
    if (urls.length > 0) {
      html += '  <div class="section">\n';
      html += `    <h2>${title}</h2>\n`;
      html += '    <ul>\n';
      urls.forEach(entry => {
        const displayName = entry.loc.replace(seoConfig.site.baseUrl, '').replace(/\//g, ' / ') || 'Home';
        html += `      <li><a href="${entry.loc}">${displayName}</a></li>\n`;
      });
      html += '    </ul>\n';
      html += '  </div>\n';
    }
  });
  
  html += '</body>\n';
  html += '</html>';
  
  return html;
};

/**
 * Save sitemap to public folder
 */
export const saveSitemap = () => {
  const xml = generateSitemapXML();
  const html = generateHTMLSitemap();
  
  try {
    // Save XML sitemap
    writeFileSync(
      resolve(process.cwd(), 'public', 'sitemap.xml'),
      xml,
      'utf-8'
    );
    console.log('✅ sitemap.xml generated successfully');
    
    // Save HTML sitemap
    writeFileSync(
      resolve(process.cwd(), 'public', 'sitemap.html'),
      html,
      'utf-8'
    );
    console.log('✅ sitemap.html generated successfully');
    
    return true;
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    return false;
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  saveSitemap();
}

export default {
  generateSitemapXML,
  generateHTMLSitemap,
  saveSitemap,
};