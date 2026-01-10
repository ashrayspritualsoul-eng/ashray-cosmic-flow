import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Heart, Shield, Star, Award, Users, BookOpen, Phone, Mail, MapPin } from "lucide-react";
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
    { value: "15+", label: "Expertise" },
    { value: "3K", label: "Consultations Delivered" },
    { value: "15K", label: "Happy Customers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 gradient-cosmic">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4"
          >
            About The
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Ashray Wellness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Whether you're seeking emotional healing, spiritual guidance, or practical solutions to life's challenges, Ashray Wellness is here to guide you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <div className="absolute inset-0 gradient-cosmic opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-secondary flex items-center justify-center bg-primary/20">
                      <span className="text-6xl font-bold text-secondary">A</span>
                    </div>
                    <h3 className="text-3xl font-bold text-primary-foreground mb-2">Ashi Pawaiya Jain</h3>
                    <p className="text-secondary font-medium text-lg">Ashray Wellness</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-30 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
                My Story
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6 leading-tight">
                Your Spiritual Guide to{" "}
                <span className="text-gradient">Inner Peace</span>
              </h2>
              
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Welcome, I'm <strong>Ashi Pawaiya Jain</strong>, known as Ashray Wellness. 
                  I'm a Psychic, Numerologist, Master Reikist, & Psychologist guiding individuals 
                  worldwide with personalized healing, clarity, and balance.
                </p>
                <p>
                  My practice combines the ancient wisdom of Vedic astrology, the intuitive art of 
                  tarot reading, the mathematical precision of numerology, and the healing power of 
                  Reiki. Each consultation is a sacred space where we explore your unique cosmic 
                  blueprint together.
                </p>
                <p>
                  I've collaborated with top platforms like Astrotalk and Nebula, and respected 
                  organizations like Accenture and the Airforce. Whether you're seeking guidance on 
                  love, career, health, or spiritual growth, I'm here to illuminate your path with 
                  compassion, honesty, and deep understanding.
                </p>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full border border-secondary"
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-card-foreground">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-card-foreground mb-8"
            >
              Get In Touch
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-card-foreground">+91 93402 16182</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-card-foreground">ashrayspritualsoul@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border md:col-span-2"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-card-foreground">Janakpuri Jumerati, Bhopal</p>
                </div>
              </motion.div>
            </div>

            <Button asChild size="lg" className="mt-4">
              <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                Connect On WhatsApp
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
