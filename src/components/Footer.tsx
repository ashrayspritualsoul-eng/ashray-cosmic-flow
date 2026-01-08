import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:ashrayspritualsoul@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="gradient-cosmic py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">Ashray Wellness</h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Illuminating paths through the ancient wisdom of astrology, tarot, 
              numerology, and energy healing. Your spiritual journey begins here.
            </p>
            <p className="text-secondary italic text-sm">
              "Trust the universe, embrace your light"
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:text-center"
          >
            <h4 className="text-lg font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="text-lg font-bold text-primary-foreground mb-4">Connect With Me</h4>
            <div className="flex gap-4 md:justify-end mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-secondary/50 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-primary-foreground/70 text-sm">
              contact@ashraywellness.com
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Available Worldwide
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Ashray Wellness. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> by Ashi Pawaiya Jain
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
