import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#7b2c6f] via-[#4b2368] to-[#2a1f4f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* 🔹 GRID — 4 DISTINCT COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1️⃣ BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo.png"
                alt="Ashray Wellness"
                className="w-16 h-16 rounded-full"
              />
              <h2 className="text-2xl font-semibold">Ashray Wellness</h2>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              Guiding individuals and organizations towards clarity, balance,
              and growth through spiritual wisdom and holistic wellness
              solutions.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ashraywellnesss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:ashrayspiritualsoul@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/919340216182"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* 2️⃣ PERSONAL WELLNESS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
              Personal Wellness
            </h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/services">Psychic & Tarot Readings</Link>
              </li>
              <li>
                <Link to="/services">Numerology Consultations</Link>
              </li>
              <li>
                <Link to="/services">Reiki Healing & Training</Link>
              </li>
              <li>
                <Link to="/services">Spiritual Remedies</Link>
              </li>
              <li>
                <Link to="/services">Therapy & Mental Health Support</Link>
              </li>
            </ul>
          </div>

          {/* 3️⃣ CORPORATE SERVICES — ✅ NOW VISIBLE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
              Corporate Services
            </h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/corporate-services">
                  Corporate Mental Health Programs
                </Link>
              </li>
              <li>
                <Link to="/corporate-services">
                  Employee Wellness & Burnout Prevention
                </Link>
              </li>
              <li>
                <Link to="/corporate-services">
                  Therapy & Counseling Services
                </Link>
              </li>
              <li>
                <Link to="/corporate-services">
                  Stress Management Workshops
                </Link>
              </li>
              <li>
                <Link to="/corporate-services">
                  Emotional Intelligence & Resilience Training
                </Link>
              </li>
              <li>
                <Link to="/corporate-services">
                  Leadership & Mindfulness Programs
                </Link>
              </li>
              <li>
                <Link to="/corporate-services">Holistic Wellness Add-ons</Link>
              </li>
            </ul>
          </div>

          {/* 4️⃣ GET IN TOUCH */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
              Get in Touch
            </h3>

            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3 items-start">
                <Phone size={18} />
                <span>+91 93402 16182</span>
              </li>

              <li className="flex gap-3 items-start">
                <Mail size={18} />
                <span className="break-all">ashrayspiritualsoul@gmail.com</span>
              </li>

              <li className="flex gap-3 items-start">
                <MapPin size={18} />
                <span>
                  Jabalpur, Madhya Pradesh <br /> India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔻 FOOTER BOTTOM */}
        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between text-sm text-white/60">
          <span>© {year} Ashray Wellness. All rights reserved.</span>
          <span>Crafted with 💜 for personal & corporate growth</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
