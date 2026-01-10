import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { label: "Psychic & Tarot Readings", href: "/services/psychic-tarot-readings" },
  { label: "Numerology Consultations", href: "/services/numerology" },
  { label: "Reiki Healing & Training", href: "/services/reiki-healing" },
  { label: "Spiritual Remedies", href: "/services/spiritual-remedies" },
  { label: "Therapy & Mental Health Support", href: "/services/therapy-mental-health" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-200 dark:border-gray-700 py-3"
            : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg ring-2 ring-primary/30 group-hover:ring-primary/60 group-hover:scale-105 transition-all duration-300">
                <img 
                  src="/logo.png" 
                  alt="Ashray Wellness Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary/30', 'to-secondary/30');
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Logo */}
                <div className="hidden absolute inset-0 items-center justify-center">
                  <span className="text-xl font-bold text-primary">AW</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ashray Wellness
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )
              ))}
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-300 flex items-center gap-1 relative group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-80 bg-white dark:bg-gray-900 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 py-3 overflow-hidden"
                    >
                      <Link
                        to="/services"
                        className="block px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all border-b border-gray-100 dark:border-gray-800"
                      >
                        ✨ All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 hover:text-primary hover:pl-8 transition-all duration-200"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300" size="default" asChild>
                <a href="/#contact">Book Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 bg-white dark:bg-gray-900 backdrop-blur-xl z-40 border-b border-gray-200 dark:border-gray-700 shadow-2xl md:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  link.href.startsWith("/#") ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-900 dark:text-white font-medium py-2 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-900 dark:text-white font-medium py-2 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="text-gray-900 dark:text-white font-medium py-2 hover:text-primary transition-colors flex items-center gap-1 w-full"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 overflow-hidden"
                      >
                        <Link
                          to="/services"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="block text-gray-900 dark:text-white py-2 hover:text-primary transition-colors text-sm font-semibold"
                        >
                          ✨ All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                            className="block text-gray-700 dark:text-gray-300 py-2 hover:text-primary transition-colors text-sm"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Button className="mt-2 bg-gradient-to-r from-primary to-secondary text-white" asChild>
                  <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
