import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Users, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-cosmic-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%]"
        >
          <Brain className="w-6 h-6 text-secondary opacity-60" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-[15%]"
        >
          <Users className="w-8 h-8 text-secondary opacity-50" />
        </motion.div>
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-[20%]"
        >
          <Shield className="w-5 h-5 text-secondary opacity-40" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-28 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-secondary font-medium tracking-[0.25em] uppercase text-xs sm:text-sm mb-5"
          >
            Ashray Wellness
          </motion.p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-5 max-w-5xl mx-auto">
            Corporate Mental Wellness
            <span className="block text-secondary">
              That Supports People and Performance
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-primary-foreground/80 text-sm sm:text-base md:text-xl mb-4 font-light leading-relaxed"
          >
            Mental Health Programs • Burnout Prevention • Therapy • Leadership
            Support
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-primary-foreground/70 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We help organizations build healthier teams with structured mental
            wellness programs, practical workshops, and compassionate support
            for both employees and leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xl mx-auto"
          >
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/corporate-services">Explore Corporate Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
