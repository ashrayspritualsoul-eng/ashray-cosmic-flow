import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Psychic & Tarot Readings", href: "/services/psychic-tarot-readings" },
    { name: "Numerology Consultations", href: "/services/numerology" },
    { name: "Reiki Healing & Training", href: "/services/reiki-healing" },
    { name: "Spiritual Remedies", href: "/services/spiritual-remedies" },
    { name: "Therapy & Mental Health Support", href: "/services/therapy-mental-health" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted border-t border-border">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-5 pointer-events-none"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section with Logo */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40 group-hover:scale-105 transition-all duration-300">
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
                  <span className="text-2xl font-bold text-primary">AW</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-card-foreground">Ashray Wellness</span>
            </Link>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Guiding you towards spiritual awakening, inner peace, and holistic well-being through ancient wisdom and modern healing practices.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ashraywellnesss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:jainarchi023@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919340216182"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-card-foreground mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-card-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-card-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/80">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="https://wa.me/919340216182" className="hover:text-primary transition-colors">
                    +91 93402 16182
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:jainarchi023@gmail.com" className="hover:text-primary transition-colors break-all">
                    jainarchi023@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  Jabalpur, Madhya Pradesh<br />
                  India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Ashray Wellness. All rights reserved.
            </p>
            <p className="text-foreground/60 text-sm text-center md:text-right">
              Crafted with 💜 for your spiritual journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
