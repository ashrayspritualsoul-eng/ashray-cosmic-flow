import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    label: "Psychic & Tarot Readings",
    href: "/services/psychic-tarot-readings",
  },
  { label: "Numerology Consultations", href: "/services/numerology" },
  { label: "Reiki Healing & Training", href: "/services/reiki-healing" },
  { label: "Spiritual Remedies", href: "/services/spiritual-remedies" },
  {
    label: "Therapy & Mental Health Support",
    href: "/services/therapy-mental-health",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
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
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled
                        ? "text-gray-700 hover:text-primary"
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
                        ? "text-gray-700 hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      className="absolute left-0 top-full mt-4 w-80 rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                    >
                      <Link
                        to="/services"
                        className="block px-6 py-4 font-semibold text-sm text-primary bg-primary/5"
                      >
                        ✨ All Services
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="block px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary/5 hover:text-primary transition"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <Button
                asChild
                className="rounded-full px-6 bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl"
              >
                <a href="/#contact">Book Session</a>
              </Button>
            </div>

            {/* Mobile Button */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] inset-x-0 z-40 bg-white dark:bg-gray-900 backdrop-blur-xl shadow-xl md:hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block font-medium text-gray-900 dark:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center gap-2 font-medium text-gray-900 dark:text-white"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 space-y-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block text-sm text-gray-700 dark:text-gray-300"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              <Button
                asChild
                className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-white"
              >
                <a href="/#contact">Book Session</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
