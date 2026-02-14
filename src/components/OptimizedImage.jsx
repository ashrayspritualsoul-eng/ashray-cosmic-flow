import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

/**
 * OptimizedImage Component
 * 
 * Performance-optimized image component with:
 * - Lazy loading
 * - WebP support with fallback
 * - Responsive srcset
 * - Loading states
 * - Error handling
 * - Aspect ratio preservation
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {string} width - Image width
 * @param {string} height - Image height
 * @param {string} sizes - Sizes attribute for responsive images
 * @param {string} priority - If true, disable lazy loading (for LCP image)
 * @param {string} aspectRatio - Aspect ratio (e.g., '16/9', '4/3')
 */
const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  width,
  height,
  sizes = '100vw',
  priority = false,
  aspectRatio,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  // Generate WebP source if supported
  const webpSrc = src?.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const supportsWebP = typeof window !== 'undefined' && 
    document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;

  // Generate srcset for responsive images
  const generateSrcSet = (source) => {
    if (!source) return '';
    const baseSrc = source.split('.').slice(0, -1).join('.');
    const ext = source.split('.').pop();
    return `
      ${baseSrc}-small.${ext} 640w,
      ${baseSrc}-medium.${ext} 1024w,
      ${baseSrc}-large.${ext} 1920w,
      ${source} 2560w
    `.trim();
  };

  const handleLoad = (e) => {
    setIsLoading(false);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    setIsLoading(false);
    console.warn(`Failed to load image: ${src}`);
    
    // Fallback to original if WebP fails
    if (imageSrc === webpSrc && src) {
      setImageSrc(src);
      setHasError(false);
    }
    
    if (onError) onError(e);
  };

  useEffect(() => {
    setImageSrc(supportsWebP && webpSrc ? webpSrc : src);
  }, [src, webpSrc, supportsWebP]);

  // Fallback placeholder if image fails
  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gray-200 text-gray-400',
          className
        )}
        style={{
          width: width || '100%',
          height: height || 'auto',
          aspectRatio: aspectRatio,
        }}
      >
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{
        aspectRatio: aspectRatio,
      }}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
          style={{
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}

      {/* Actual image */}
      <picture>
        {/* WebP source for modern browsers */}
        {webpSrc && (
          <source
            type="image/webp"
            srcSet={generateSrcSet(webpSrc)}
            sizes={sizes}
          />
        )}
        
        {/* Fallback to original format */}
        <img
          src={imageSrc}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          style={{
            width: width || '100%',
            height: height || 'auto',
            objectFit: 'cover',
          }}
          {...props}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
