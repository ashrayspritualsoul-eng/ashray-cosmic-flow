/**
 * ============================================
 * PAGE WRAPPER COMPONENT
 * ============================================
 * 
 * Universal page wrapper that handles layout and SEO.
 * Use this for all pages to ensure consistent structure.
 */

import Navbar from './Navbar';
import Footer from './Footer';
import DynamicSEO from './SEO/DynamicSEO';

const PageWrapper = ({
  children,
  seoProps = {},
  showNavbar = true,
  showFooter = true,
  className = '',
}) => {
  return (
    <>
      {/* Dynamic SEO */}
      <DynamicSEO {...seoProps} />
      
      {/* Page Layout */}
      <div className={`min-h-screen bg-background ${className}`}>
        {showNavbar && <Navbar />}
        
        {/* Main Content */}
        <main>
          {children}
        </main>
        
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default PageWrapper;