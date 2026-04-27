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
  { label: "Services", href: "/services" },
  { label: "Wellness Products", href: "/wellness-products" },
  { label: "Contact", href: "/contact" },
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

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setIsMobileCorporateOpen(false);
    setIsMobilePersonalOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 dark:bg-gray-900/30 shadow-lg"
            : "bg-white/10 dark:bg-gray-900/20"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="h-[72px] sm:h-[80px] flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center overflow-hidden rounded-full bg-white/95 p-2 shadow-lg ring-1 ring-white/60 transition-transform group-hover:scale-105">
                <img
                  src="/logo.svg"
                  alt="Ashray Wellness"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-200 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setIsCorporateOpen(true)}
                onMouseLeave={() => setIsCorporateOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-200 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  Corporate Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
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
                      className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border border-white/20 overflow-hidden"
                    >
                      <Link
                        to="/corporate-services"
                        className="block px-5 py-3.5 font-semibold text-sm text-primary bg-secondary/10"
                      >
                        View All Corporate Services
                      </Link>
                      {corporateServices.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-secondary/10 hover:text-secondary transition"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setIsPersonalOpen(true)}
                onMouseLeave={() => setIsPersonalOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-200 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  Personal Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
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
                      className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border border-white/20 overflow-hidden"
                    >
                      <Link
                        to="/services"
                        className="block px-5 py-3.5 font-semibold text-sm text-primary bg-secondary/10"
                      >
                        View All Personal Services
                      </Link>
                      {personalServices.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-secondary/10 hover:text-secondary transition"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button
                asChild
                className="rounded-full px-6 bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
              >
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden ${
                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              {isMobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-[72px] sm:top-[80px] inset-x-0 bottom-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl md:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-4 sm:px-6 py-6">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className="text-base sm:text-lg font-medium text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t border-border pt-4">
                  <button
                    onClick={() =>
                      setIsMobileCorporateOpen(!isMobileCorporateOpen)
                    }
                    className="flex w-full items-center justify-between text-base sm:text-lg font-medium text-foreground"
                  >
                    Corporate Services
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isMobileCorporateOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isMobileCorporateOpen && (
                    <div className="mt-4 ml-3 flex flex-col gap-3">
                      <Link
                        to="/corporate-services"
                        onClick={closeMobileMenu}
                        className="text-sm font-semibold text-primary"
                      >
                        View All Corporate Services
                      </Link>
                      {corporateServices.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={closeMobileMenu}
                          className="text-sm text-muted-foreground"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-border pt-4">
                  <button
                    onClick={() => setIsMobilePersonalOpen(!isMobilePersonalOpen)}
                    className="flex w-full items-center justify-between text-base sm:text-lg font-medium text-foreground"
                  >
                    Personal Services
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isMobilePersonalOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isMobilePersonalOpen && (
                    <div className="mt-4 ml-3 flex flex-col gap-3">
                      <Link
                        to="/services"
                        onClick={closeMobileMenu}
                        className="text-sm font-semibold text-primary"
                      >
                        View All Personal Services
                      </Link>
                      {personalServices.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={closeMobileMenu}
                          className="text-sm text-muted-foreground"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Button asChild className="mt-4 w-full">
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Book Consultation
                  </Link>
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
