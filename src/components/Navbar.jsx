import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { label: "Psychic Readings", href: "/services/psychic-readings" },
  { label: "Tarot Readings & Teaching", href: "/services/tarot-readings" },
  { label: "Numerology Consultations", href: "/services/numerology" },
  { label: "Reiki Healing & Training", href: "/services/reiki-healing" },
  { label: "Reiki Classes", href: "/services/reiki-classes" },
  { label: "Spiritual Remedies", href: "/services/spiritual-remedies" },
  { label: "Therapy Sessions", href: "/services/therapy" },
  { label: "Mental Health Support", href: "/services/mental-health" },
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
            ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className={`w-6 h-6 ${isScrolled ? "text-primary" : "text-secondary"}`} />
              <span className={`text-xl font-bold ${isScrolled ? "text-card-foreground" : "text-primary-foreground"}`}>
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
                    className={`font-medium transition-colors duration-300 ${
                      isScrolled
                        ? "text-foreground hover:text-primary"
                        : "text-primary-foreground/80 hover:text-secondary"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`font-medium transition-colors duration-300 ${
                      isScrolled
                        ? "text-foreground hover:text-primary"
                        : "text-primary-foreground/80 hover:text-secondary"
                    }`}
                  >
                    {link.label}
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
                  className={`font-medium transition-colors duration-300 flex items-center gap-1 ${
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/80 hover:text-secondary"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-background/98 backdrop-blur-md rounded-lg shadow-card border border-border py-2"
                    >
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
                      >
                        All Services
                      </Link>
                      <div className="h-px bg-border my-1" />
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button variant={isScrolled ? "default" : "hero"} size="default" asChild>
                <a href="/#contact">Book Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-card-foreground" : "text-primary-foreground"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-card-foreground" : "text-primary-foreground"}`} />
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
            className="fixed top-[72px] left-0 right-0 bg-background/98 backdrop-blur-md z-40 border-b border-border shadow-card md:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  link.href.startsWith("/#") ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-card-foreground font-medium py-2 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-card-foreground font-medium py-2 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="text-card-foreground font-medium py-2 hover:text-primary transition-colors flex items-center gap-1 w-full"
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
                          className="block text-card-foreground py-2 hover:text-primary transition-colors text-sm font-medium"
                        >
                          All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                            className="block text-card-foreground/80 py-2 hover:text-primary transition-colors text-sm"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Button variant="default" className="mt-2" asChild>
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
