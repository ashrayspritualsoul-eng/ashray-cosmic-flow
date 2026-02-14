# Sitemap & Robots.txt Implementation Guide

## 🎯 **Overview**

Sitemap and robots.txt are **critical for SEO**. They help search engines:
- Discover all your pages
- Understand site structure
- Crawl efficiently
- Index new content faster

---

## 📁 **What Was Created**

### **1. Dynamic Sitemap Generator**
**File:** `src/seo/sitemap.generator.js`

**Features:**
- Auto-generates from content database
- XML sitemap (for search engines)
- HTML sitemap (for users)
- Includes all services
- Includes landing pages
- Sets correct priorities
- Updates lastmod dates

---

### **2. Robots.txt Generator**
**File:** `src/seo/robots.generator.js`

**Features:**
- Allows all search engines
- Disallows private paths
- Points to sitemap location

---

### **3. Generation Script**
**File:** `scripts/generate-sitemap.js`

**Features:**
- One command to generate all
- Run before deployment
- Validates output

---

## 🚀 **Usage**

### **Generate Sitemap (Before Each Deployment)**

```bash
# Option 1: Direct script
node scripts/generate-sitemap.js

# Option 2: npm script (add to package.json)
npm run generate-sitemap
```

**Output:**
```
🚀 Generating SEO files...

✅ sitemap.xml generated successfully
✅ sitemap.html generated successfully
✅ robots.txt generated successfully

✅ All SEO files generated successfully!

Generated files:
  - public/sitemap.xml
  - public/sitemap.html
  - public/robots.txt
```

---

## 📝 **Add to package.json**

Add this script to your `package.json`:

```json
{
  "scripts": {
    "generate-sitemap": "node scripts/generate-sitemap.js",
    "prebuild": "npm run generate-sitemap",
    "build": "vite build"
  }
}
```

Now sitemap will **auto-generate** before every build!

---

## 📊 **Generated Sitemap Structure**

### **Sitemap includes:**

**1. Homepage**
- Priority: 1.0
- Changefreq: weekly

**2. Static Pages**
- /about (0.8)
- /services (0.9)
- /corporate-services (0.9)
- /wellness-products (0.7)
- /contact (0.8)

**3. All Service Pages**
- /services/tarot (0.9)
- /services/psychic-readings (0.9)
- /services/numerology (0.9)
- etc. (all from database)

**4. All Landing Pages**
- /tarot-reading (0.95)
- /psychic-reading (0.95)
- etc. (all with landingSlug)

**Total:** ~30+ URLs automatically

---

## 🔍 **Sitemap XML Example**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ashraywellness.com</loc>
    <lastmod>2026-02-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ashraywellness.com/services/tarot</loc>
    <lastmod>2026-02-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- ... more URLs ... -->
</urlset>
```

---

## 🤖 **Robots.txt Example**

```
# robots.txt for Ashray Wellness

User-agent: *
Allow: /

# Disallow private paths
Disallow: /api/
Disallow: /admin/
Disallow: /_next/

# Sitemap
Sitemap: https://ashraywellness.com/sitemap.xml
```

---

## ⚙️ **Automated Workflow**

### **1. Development:**
```bash
npm run generate-sitemap
npm run dev
# Sitemap available at http://localhost:5173/sitemap.xml
```

### **2. Before Deployment:**
```bash
npm run build
# Automatically runs generate-sitemap (if prebuild added)
```

### **3. Production:**
- sitemap.xml deployed to https://ashraywellness.com/sitemap.xml
- robots.txt deployed to https://ashraywellness.com/robots.txt
- sitemap.html deployed to https://ashraywellness.com/sitemap.html

---

## 🔗 **HTML Sitemap (User-Friendly)**

HTML sitemap at `/sitemap.html` provides:
- Organized page sections
- Clickable links
- Clean, styled layout
- Helps users navigate site

**Add link in footer:**
```jsx
<Link to="/sitemap.html">Sitemap</Link>
```

---

## ✅ **Verification**

### **1. Local Testing:**
```bash
npm run generate-sitemap
open public/sitemap.xml
```

### **2. Validate Sitemap:**
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- Paste your sitemap.xml content

### **3. Submit to Search Engines:**

**Google Search Console:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to Sitemaps
4. Submit: `https://ashraywellness.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [Bing Webmaster](https://www.bing.com/webmasters)
2. Submit sitemap URL

---

## 📊 **SEO Benefits**

**With Sitemap:**
- ✅ All pages discoverable
- ✅ Faster indexing
- ✅ Better crawl budget
- ✅ Clear site structure
- ✅ Priority signals to Google

**Without Sitemap:**
- ❌ Pages may not be found
- ❌ Slow indexing
- ❌ Wasted crawl budget
- ❌ Poor SEO performance

---

## 🔄 **Updating Sitemap**

**When to regenerate:**
- ✅ Before every deployment
- ✅ When adding new services
- ✅ When adding new pages
- ✅ When changing URLs

**How to update:**
1. Add new service to `content.database.js`
2. Run `npm run generate-sitemap`
3. Sitemap automatically includes new service
4. Deploy

**Automatic!** No manual editing needed.

---

## 🐛 **Troubleshooting**

### **Issue: Script won't run**
```bash
# Make script executable
chmod +x scripts/generate-sitemap.js
```

### **Issue: Import errors**
```bash
# Ensure package.json has "type": "module"
# Or use .mjs extension
```

### **Issue: File not found in browser**
- Ensure files are in `public/` folder
- Check build copies public folder
- Verify deployment includes public files

---

## 🎯 **Best Practices**

1. **Regenerate before each deployment**
2. **Submit to Google Search Console**
3. **Monitor indexing status**
4. **Update when site structure changes**
5. **Keep priorities accurate**
6. **Include HTML sitemap for users**

---

## ⭐ **Summary**

**What was created:**
- ✅ Dynamic sitemap generator
- ✅ Robots.txt generator
- ✅ Generation script
- ✅ XML + HTML sitemaps
- ✅ Auto-generated from database

**Result:**
- ✅ Complete sitemap coverage
- ✅ SEO-optimized
- ✅ Auto-updating
- ✅ Zero maintenance
- ✅ Production-ready

**Status:** ✅ **COMPLETE**

---

**Next:** Run `npm run generate-sitemap` and submit to Google Search Console!
