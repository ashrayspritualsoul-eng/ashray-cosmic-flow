import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      name: "Psychic & Tarot Readings",
      href: "/services/psychic-tarot-readings",
    },
    { name: "Numerology Consultations", href: "/services/numerology" },
    { name: "Reiki Healing & Training", href: "/services/reiki-healing" },
    { name: "Spiritual Remedies", href: "/services/spiritual-remedies" },
    {
      name: "Therapy & Mental Health Support",
      href: "/services/therapy-mental-health",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-cosmic" />

      {/* Soft cosmic glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-16 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-5 mb-6 group">
              <div className="w-24 h-24 rounded-full bg-white shadow-[0_0_45px_rgba(255,255,255,0.55)] ring-4 ring-white/60 group-hover:ring-white transition-all duration-300 flex items-center justify-center overflow-hidden">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-[0_0_45px_rgba(255,255,255,0.55)] ring-5 ring-white/60">
                  <img
                    src="/logo.png"
                    alt="Ashray Wellness Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary to-secondary">
                  <span className="text-3xl font-bold text-white tracking-wide">
                    AW
                  </span>
                </div>
              </div>
              <span className="text-2xl font-bold text-primary-foreground">
                Ashray Wellness
              </span>
            </Link>

            <p className="text-primary-foreground/80 leading-relaxed mb-7 max-w-sm">
              Guiding you towards spiritual awakening, inner peace, and holistic
              well-being through ancient wisdom and modern healing practices.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ashraywellnesss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="mailto:ashrayspritualsoul@gmail.com"
                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/919340216182"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-5 tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/75 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-5 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-primary-foreground/75 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/75 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-5 tracking-wide">
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-secondary mt-0.5" />
                <a
                  href="https://wa.me/919340216182"
                  className="hover:text-secondary transition-colors"
                >
                  +91 93402 16182
                </a>
              </li>

              <li className="flex gap-4 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-secondary mt-0.5" />
                <a
                  href="mailto:ashrayspritualsoul@gmail.com"
                  className="hover:text-secondary transition-colors break-all"
                >
                  ashrayspritualsoul@gmail.com
                </a>
              </li>

              <li className="flex gap-4 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span>
                  Jabalpur, Madhya Pradesh
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Ashray Wellness. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Crafted with 💜 for your spiritual journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
