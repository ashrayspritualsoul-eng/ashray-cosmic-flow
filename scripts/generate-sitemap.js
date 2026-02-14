#!/usr/bin/env node

/**
 * ============================================
 * SITEMAP GENERATION SCRIPT
 * ============================================
 * 
 * Run this before deployment to generate sitemap.xml
 * 
 * Usage:
 *   node scripts/generate-sitemap.js
 *   npm run generate-sitemap
 */

import { saveSitemap } from '../src/seo/sitemap.generator.js';
import { saveRobotsTxt } from '../src/seo/robots.generator.js';

console.log('🚀 Generating SEO files...');
console.log('');

// Generate sitemap
const sitemapSuccess = saveSitemap();

// Generate robots.txt
const robotsSuccess = saveRobotsTxt();

console.log('');

if (sitemapSuccess && robotsSuccess) {
  console.log('✅ All SEO files generated successfully!');
  console.log('');
  console.log('Generated files:');
  console.log('  - public/sitemap.xml');
  console.log('  - public/sitemap.html');
  console.log('  - public/robots.txt');
  console.log('');
  console.log('These files will be deployed with your site.');
  process.exit(0);
} else {
  console.error('❌ Failed to generate some files');
  process.exit(1);
}