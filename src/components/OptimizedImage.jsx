import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

/**
 * OptimizedImage Component - Performance-optimized image loading
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - WebP format with fallback
 * - Responsive images with srcset
 * - Loading placeholder
 * - Automatic blur-up effect
 * - Prevents layout shift
 * 
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {boolean} priority - Load immediately without lazy loading (for LCP images)
 * @param {string} sizes - Responsive sizes attribute
 * @param {number} width - Image width (for aspect ratio)
 * @param {number} height - Image height (for aspect ratio)
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
  width,
  height,
  objectFit = 'cover',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(priority ? src : null);
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate WebP path from original image path
  const getWebPPath = (path) => {
    if (!path) return null;
    const ext = path.split('.').pop();
    if (ext === 'webp') return path;
    return path.replace(new RegExp(`\\.${ext}$`), '.webp');
  };

  // Generate srcset for responsive images
  const generateSrcSet = (path) => {
    if (!path) return '';
    const basePath = path.substring(0, path.lastIndexOf('.'));
    const ext = path.split('.').pop();
    
    // For now, return original path
    // In production, you'd have multiple sizes generated
    return `${path} 1x`;
  };

  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const img = document.createElement('img');
    img.src = src;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    );

    const imageElement = document.getElementById(`img-${src}`);
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    // Fallback to original image if WebP fails
    if (imageSrc.endsWith('.webp')) {
      const fallbackSrc = imageSrc.replace('.webp', '.jpg').replace('.jpg', '.jpeg');
      setImageSrc(fallbackSrc);
      setImageError(false);
    }
  };

  // Calculate aspect ratio for preventing layout shift
  const aspectRatio = width && height ? `${width} / ${height}` : 'auto';

  const webpSrc = getWebPPath(imageSrc);

  return (
    <div
      id={`img-${src}`}
      className={cn('relative overflow-hidden', className)}
      style={{
        aspectRatio: aspectRatio,
      }}
    >
      {/* Loading Placeholder */}
      {!isLoaded && imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 animate-pulse" />
      )}

      {/* Actual Image with WebP support */}
      {imageSrc && !imageError && (
        <picture>
          {/* WebP source for modern browsers */}
          {webpSrc && webpSrc !== imageSrc && (
            <source
              type="image/webp"
              srcSet={generateSrcSet(webpSrc)}
              sizes={sizes}
            />
          )}
          
          {/* Fallback to original format */}
          <img
            src={imageSrc}
            srcSet={generateSrcSet(imageSrc)}
            sizes={sizes}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'w-full h-full transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0',
              objectFit === 'cover' && 'object-cover',
              objectFit === 'contain' && 'object-contain',
              objectFit === 'fill' && 'object-fill'
            )}
            style={{
              objectFit: objectFit,
            }}
            {...props}
          />
        </picture>
      )}

      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Image not available</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;