import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const corporateServices = [
  {
    label: "Corporate Mental Health Programs",
    href: "/corporate-services/mental-health",
  },
  {
    label: "Employee Wellness & Burnout Prevention",
    href: "/corporate-services/wellness-burnout",
  },
  {
    label: "Therapy & Counseling Services",
    href: "/corporate-services/therapy-counseling",
  },
  {
    label: "Stress Management Workshops",
    href: "/corporate-services/stress-management",
  },
  {
    label: "Emotional Intelligence & Resilience Training",
    href: "/corporate-services/emotional-intelligence",
  },
  {
    label: "Leadership & Mindfulness Programs",
    href: "/corporate-services/leadership-mindfulness",
  },
  {
    label: "Holistic Wellness Add-ons",
    href: "/corporate-services/holistic-wellness",
  },
];

const personalServices = [
  { label: "Psychic Readings", href: "/services/psychic-readings" },
  { label: "Tarot Readings & Teaching", href: "/services/tarot" },
  { label: "Numerology Consultations", href: "/services/numerology" },
  { label: "Reiki Healing & Training", href: "/services/reiki" },
  { label: "Spiritual Remedies", href: "/services/spiritual-remedies" },
  { label: "Individual Therapy Sessions", href: "/services/therapy" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isMobileCorporateOpen, setIsMobileCorporateOpen] = useState(false);
  const [isMobilePersonalOpen, setIsMobilePersonalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="h-[72px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary/40 group-hover:ring-primary transition">
                <img
                  src="/logo.png"
                  alt="Ashray Wellness"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold tracking-wide transition-colors text-gray-900 dark:text-white">
                Ashray Wellness
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium transition-colors text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm font-medium transition-colors text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Corporate Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCorporateOpen(true)}
                onMouseLeave={() => setIsCorporateOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium transition-colors text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                >
                  Corporate Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isCorporateOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isCorporateOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl border border-secondary/30 dark:border-secondary/20 overflow-hidden"
                    >
                      <Link
                        to="/corporate-services"
                        className="block px-5 py-3.5 font-semibold text-sm text-primary bg-secondary/5 hover:bg-secondary/10 transition-colors"
                      >
                        ✨ View All Corporate Services
                      </Link>
                      {corporateServices.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-secondary/10 hover:text-secondary dark:hover:text-secondary transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Personal Wellness Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsPersonalOpen(true)}
                onMouseLeave={() => setIsPersonalOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium transition-colors text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                >
                  Personal Wellness Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isPersonalOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isPersonalOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl border border-secondary/30 dark:border-secondary/20 overflow-hidden"
                    >
                      <Link
                        to="/services"
                        className="block px-5 py-3.5 font-semibold text-sm text-primary bg-secondary/5 hover:bg-secondary/10 transition-colors"
                      >
                        ✨ View All Personal Services
                      </Link>
                      {personalServices.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-secondary/10 hover:text-secondary dark:hover:text-secondary transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Book Consultation CTA */}
              <Button
                asChild
                className="rounded-full px-6 bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all"
              >
                <a href="/#contact">Book Consultation</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden transition-colors text-gray-900 dark:text-white"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg md:hidden overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-3 font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Corporate Services Accordion */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                <button
                  onClick={() => setIsMobileCorporateOpen(!isMobileCorporateOpen)}
                  className="flex items-center justify-between w-full py-3 font-medium text-gray-900 dark:text-white"
                >
                  Corporate Services
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isMobileCorporateOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileCorporateOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 pb-2">
                        <Link
                          to="/corporate-services"
                          onClick={() => setIsMobileOpen(false)}
                          className="block py-2 text-sm font-semibold text-primary"
                        >
                          ✨ View All Corporate Services
                        </Link>
                        {corporateServices.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Personal Wellness Services Accordion */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                <button
                  onClick={() => setIsMobilePersonalOpen(!isMobilePersonalOpen)}
                  className="flex items-center justify-between w-full py-3 font-medium text-gray-900 dark:text-white"
                >
                  Personal Wellness Services
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isMobilePersonalOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobilePersonalOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 pb-2">
                        <Link
                          to="/services"
                          onClick={() => setIsMobileOpen(false)}
                          className="block py-2 text-sm font-semibold text-primary"
                        >
                          ✨ View All Personal Services
                        </Link>
                        {personalServices.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                >
                  <a href="/#contact" onClick={() => setIsMobileOpen(false)}>
                    Book Consultation
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