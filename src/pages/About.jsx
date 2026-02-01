import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Shield,
  Star,
  Award,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Users,
  Briefcase,
  TrendingUp,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    { icon: Sparkles, text: "Certified Astrologer" },
    { icon: Heart, text: "Master Reikist" },
    { icon: Shield, text: "Trusted Guide" },
    { icon: Star, text: "7+ Years Experience" },
    { icon: Award, text: "Psychologist" },
    { icon: BookOpen, text: "Numerologist" },
  ];

  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "15+", label: "Expertise Areas" },
    { value: "3K+", label: "Consultations Delivered" },
    { value: "15K+", label: "Happy Clients" },
  ];

  const corporateFeatures = [
    {
      icon: Users,
      title: "Employee Wellness Programs",
      description: "Comprehensive mental health and wellness initiatives designed to create a healthier, more engaged workforce."
    },
    {
      icon: Briefcase,
      title: "Corporate Mental Health",
      description: "Professional counseling and therapy services tailored to address workplace stress, burnout, and emotional challenges."
    },
    {
      icon: TrendingUp,
      title: "Leadership Development",
      description: "Mindfulness and emotional intelligence training programs to cultivate effective, empathetic leaders."
    },
    {
      icon: Target,
      title: "Stress Management",
      description: "Practical workshops and techniques to help teams manage pressure, enhance productivity, and maintain work-life balance."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO WITH IMAGE */}
      <section className="relative pt-40 pb-32">
        {/* Banner Image */}
        <img
          src="/images/about-banner.jpg"
          alt="Ashray Wellness"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-semibold tracking-widest uppercase text-base mb-6"
          >
            About The
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
          >
            Ashray Wellness
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Whether you're seeking emotional healing, spiritual guidance, or
            practical solutions
            <br /> to life's challenges, Ashray Wellness is here to guide you
            every step of the way.
          </motion.p>
        </div>
      </section>

      {/* ABOUT CONTENT - PERSONAL WELLNESS */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/images/ashi-pawaiya.jpg"
                  alt="Ashi Pawaiya Jain"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-30 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl" />
            </motion.div>

            {/* TEXT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
                My Story
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
                Your Guide to <span className="text-gradient">Inner Peace</span>
              </h2>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  I'm <strong>Ashi Pawaiya Jain</strong>, known as Ashray
                  Wellness. I'm a Psychic, Numerologist, Master Reikist, &
                  Psychologist guiding individuals worldwide with personalized
                  healing, clarity, and balance.
                </p>

                <p>
                  My practice combines the ancient wisdom of Vedic astrology,
                  the intuitive art of tarot reading, the mathematical precision
                  of numerology, and the healing power of Reiki. Each
                  consultation is a sacred space where we explore your unique
                  cosmic blueprint together.
                </p>

                <p>
                  I've collaborated with top platforms like Astrotalk and
                  Nebula, and respected organizations like Accenture and the
                  Airforce. Whether you're seeking guidance on love, career,
                  health, or spiritual growth, I'm here to illuminate your path
                  with compassion, honesty, and deep understanding.
                </p>
              </div>

              {/* FEATURES */}
              <div className="flex flex-wrap gap-3 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full border"
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 gradient-cosmic">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE WELLNESS SECTION - NEW */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Corporate Wellness
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
              Transforming Organizations Through{" "}
              <span className="text-gradient">Holistic Wellness</span>
            </h2>
            <p className="text-card-foreground text-lg max-w-3xl mx-auto">
              Beyond individual consultations, Ashray Wellness partners with organizations 
              to create thriving, balanced workplaces. We understand that employee well-being 
              directly impacts organizational success, and we're committed to fostering 
              healthier, more productive teams.
            </p>
          </motion.div>

          {/* Corporate Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {corporateFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-card-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Corporate Clients & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Trusted by Leading Organizations
            </h3>
            <p className="text-card-foreground text-lg mb-6 max-w-2xl mx-auto">
              We've had the privilege of collaborating with esteemed organizations including 
              <strong> Accenture</strong> and the <strong>Indian Air Force</strong>, delivering 
              wellness programs that enhance employee mental health, reduce burnout, and boost 
              overall organizational performance.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/corporate-services">
                Explore Corporate Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border">
                <Phone />
                <p>+91 93402 16182</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border">
                <Mail />
                <p>ashrayspiritualsoul@gmail.com</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border md:col-span-2">
                <MapPin />
                <p>Jabalpur, Madhya Pradesh, India</p>
              </div>
            </div>

            <Button asChild size="lg">
              <a
                href="https://wa.me/919340216182"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;