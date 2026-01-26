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
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-all duration-300
          ${
            isScrolled
              ? "bg-white/20 dark:bg-gray-900/30 shadow-lg"
              : "bg-white/10 dark:bg-gray-900/20"
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
              <span
                className={`text-lg font-semibold tracking-wide transition-colors ${
                  isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                }`}
              >
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
                    className={`text-sm font-medium transition-colors ${
                      isScrolled
                        ? "text-gray-700 dark:text-gray-200 hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
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
                ),
              )}

              {/* Corporate Services Dropdown */}
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
                    className={`w-4 h-4 transition-transform ${isCorporateOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isCorporateOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-0 top-full mt-2 w-80 rounded-xl
                        bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl
                        shadow-2xl border border-white/20 overflow-hidden"
                    >
                      <Link
                        to="/corporate-services"
                        className="block px-5 py-3.5 font-semibold text-sm text-primary bg-secondary/10"
                      >
                        ✨ View All Corporate Services
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

              {/* Personal Services Dropdown */}
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
                  Personal Wellness Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isPersonalOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isPersonalOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-0 top-full mt-2 w-80 rounded-xl
                        bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl
                        shadow-2xl border border-white/20 overflow-hidden"
                    >
                      <Link
                        to="/services"
                        className="block px-5 py-3.5 font-semibold text-sm text-primary bg-secondary/10"
                      >
                        ✨ View All Personal Services
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
                <a href="/#contact">Book Consultation</a>
              </Button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
            >
              {isMobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed top-[72px] inset-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl md:hidden"
          >
            {/* unchanged mobile content */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
