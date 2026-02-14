import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // ============================================
  // PERFORMANCE OPTIMIZATIONS
  // ============================================
  build: {
    // Enable minification with terser for better compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
      },
      format: {
        comments: false,
      },
    },
    
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    
    // Source maps only in development
    sourcemap: mode === 'development',
    
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    
    // Aggressive code splitting for better caching and parallel loading
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal loading
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            // Separate framer-motion (large animation library)
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            
            // React core libraries
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            
            // UI libraries (shadcn, radix-ui)
            if (id.includes('@radix-ui') || id.includes('class-variance-authority') || id.includes('clsx')) {
              return 'ui-vendor';
            }
            
            // Query libraries
            if (id.includes('@tanstack') || id.includes('query')) {
              return 'query-vendor';
            }
            
            // Other vendor code
            return 'vendor';
          }
          
          // Split SEO components
          if (id.includes('/components/SEO/')) {
            return 'seo';
          }
          
          // Split landing pages
          if (id.includes('/pages/landing/')) {
            return 'landing';
          }
          
          // Split corporate pages
          if (id.includes('/pages/corporate/')) {
            return 'corporate';
          }
          
          // Split personal service pages
          if (id.includes('/pages/personal/')) {
            return 'personal';
          }
        },
        
        // Optimize chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/js/[name]-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        entryFileNames: `assets/js/[name]-[hash].js`,
      },
    },
    
    // Increase worker pool for faster builds
    target: 'esnext',
    
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
    ],
    exclude: [
      // Exclude large libraries from pre-bundling to allow code splitting
      'framer-motion',
    ],
  },
}));
