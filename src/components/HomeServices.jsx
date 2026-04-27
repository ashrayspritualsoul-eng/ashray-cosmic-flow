import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Briefcase, Users, HeartPulse, Shield, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const services = [
  { icon: Brain, title: "Corporate Mental Health Programs" },
  { icon: Users, title: "Burnout Prevention & Employee Support" },
  { icon: HeartPulse, title: "Therapy & Counseling Services" },
  { icon: Shield, title: "Stress Management Workshops" },
  { icon: LineChart, title: "Emotional Intelligence Training" },
  { icon: Briefcase, title: "Leadership & Mindfulness Programs" },
];

const carouselImages = [
  "/images/services-hero.jpg",
  "/images/therapy.jpg",
  "/images/meditation.jpg",
  "/images/psychology.jpg",
  "/images/contact-banner.jpg",
];

const HomeServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 gradient-cosmic">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Corporate Focus
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
              Mental Wellness Programs
              <br />
              Built for Modern Teams
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg mb-7 leading-relaxed">
              Ashray Wellness now centers on corporate mental wellness with
              practical support for stress, burnout, emotional resilience,
              leadership health, and employee care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-xl bg-white/8 px-3 py-3 sm:bg-transparent sm:px-0 sm:py-0"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                  <span className="text-primary-foreground font-medium text-sm md:text-base leading-relaxed">
                    {service.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="golden" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/corporate-services">Explore Corporate Services</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/services/therapy">Individual Therapy</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[460px] xl:h-[500px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={carouselImages[currentIndex]}
                  alt={`Wellness showcase ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {carouselImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-secondary w-12"
                      : "bg-secondary/30 w-8"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
