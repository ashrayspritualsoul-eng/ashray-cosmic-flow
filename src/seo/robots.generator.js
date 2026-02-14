/**
 * ============================================
 * ROBOTS.TXT GENERATOR
 * ============================================
 * 
 * Generates robots.txt with sitemap reference.
 */

import { seoConfig } from './seo.config.js';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = () => {
  let content = '# robots.txt for ' + seoConfig.brand.name + '\n\n';
  
  // Allow all bots
  content += 'User-agent: *\n';
  content += 'Allow: /\n\n';
  
  // Disallow admin/private paths (if any)
  content += '# Disallow private paths\n';
  content += 'Disallow: /api/\n';
  content += 'Disallow: /admin/\n';
  content += 'Disallow: /_next/\n\n';
  
  // Sitemap location
  content += '# Sitemap\n';
  content += `Sitemap: ${seoConfig.site.baseUrl}/sitemap.xml\n`;
  
  return content;
};

/**
 * Save robots.txt to public folder
 */
export const saveRobotsTxt = () => {
  const content = generateRobotsTxt();
  
  try {
    writeFileSync(
      resolve(process.cwd(), 'public', 'robots.txt'),
      content,
      'utf-8'
    );
    console.log('✅ robots.txt generated successfully');
    return true;
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error);
    return false;
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  saveRobotsTxt();
}

export default {
  generateRobotsTxt,
  saveRobotsTxt,
};