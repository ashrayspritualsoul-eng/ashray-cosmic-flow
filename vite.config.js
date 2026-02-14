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
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Critical: Prevent duplicate React instances
    dedupe: ['react', 'react-dom', 'react-router-dom'],
  },
  
  build: {
    // Use esbuild minification (default, fast, reliable)
    minify: 'esbuild',
    
    // Simpler target for better compatibility
    target: 'es2015',
    
    // Increase chunk size limit
    chunkSizeWarningLimit: 1000,
    
    // Simplified rollup options
    rollupOptions: {
      output: {
        // Let Vite handle chunking automatically
        manualChunks: undefined,
      },
    },
  },
  
  // Pre-bundle React to avoid issues
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react-router-dom',
    ],
  },
}));
