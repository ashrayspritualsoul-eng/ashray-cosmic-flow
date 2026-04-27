import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const personalServices = [
    { name: "Individual Therapy", href: "/services/therapy" },
  ];

  const corporateServices = [
    {
      name: "Corporate Mental Health",
      href: "/corporate-services/mental-health",
    },
    {
      name: "Wellness & Burnout Prevention",
      href: "/corporate-services/wellness-burnout",
    },
    {
      name: "Therapy & Counseling",
      href: "/corporate-services/therapy-counseling",
    },
    {
      name: "Stress Management",
      href: "/corporate-services/stress-management",
    },
    {
      name: "Emotional Intelligence",
      href: "/corporate-services/emotional-intelligence",
    },
    {
      name: "Leadership & Mindfulness",
      href: "/corporate-services/leadership-mindfulness",
    },
    {
      name: "Holistic Wellness Add-ons",
      href: "/corporate-services/holistic-wellness",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Wellness Products", href: "/wellness-products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-cosmic" />

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-16 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-3 group">
              <div className="flex h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 items-center justify-center overflow-hidden rounded-full bg-white/95 p-3 shadow-xl ring-1 ring-white/40 transition-transform group-hover:scale-105">
                <img
                  src="/logo.svg"
                  alt="Ashray Wellness Logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-sm">
              Supporting healthier workplaces and healthier lives through
              thoughtful mental wellness programs, therapy, and leadership
              support.
            </p>

            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/ashraywellnesss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="mailto:ashrayspiritualsoul@gmail.com"
                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/919340216182"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-5">
              Personal Support
            </h3>
            <ul className="space-y-3">
              {personalServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/75 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-5">
              Corporate Services
            </h3>
            <ul className="space-y-3">
              {corporateServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/75 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/75 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/919340216182"
                  className="hover:text-secondary text-sm"
                >
                  +91 93402 16182
                </a>
              </li>

              <li className="flex gap-4 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:ashrayspiritualsoul@gmail.com"
                  className="hover:text-secondary break-all text-sm"
                >
                  ashrayspiritualsoul@gmail.com
                </a>
              </li>

              <li className="flex gap-4 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Janakpuri Jumerati Bhopal, Madhya Pradesh
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

          <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Ashray Wellness. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Built for personal and workplace mental wellness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
