import { Suspense } from 'react';
import { cn } from '@/lib/utils';

/**
 * Loading Fallback Component
 * Displays while lazy-loaded components are loading
 */
export const LoadingFallback = ({ className = '' }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center min-h-screen w-full',
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-gray-600 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
};

/**
 * LazyLoad Wrapper Component
 * 
 * Wraps lazy-loaded components with Suspense and loading fallback
 * 
 * Usage:
 * const MyComponent = lazy(() => import('./MyComponent'));
 * <LazyLoad><MyComponent /></LazyLoad>
 */
const LazyLoad = ({ children, fallback = <LoadingFallback /> }) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default LazyLoad;
