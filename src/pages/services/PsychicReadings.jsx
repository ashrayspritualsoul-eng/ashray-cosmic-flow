import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PsychicReadings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-cosmic">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl gradient-golden flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Psychic Readings
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Tap into the unseen realms of intuition and receive profound insights about your life's journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">What Are Psychic Readings?</h2>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Psychic readings help you understand hidden patterns, receive spiritual guidance, and gain clarity on situations that seem unclear. Through intuitive perception and spiritual connection, I access information beyond the physical realm to provide insights that can illuminate your path forward.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                These readings can offer profound revelations about your past, present circumstances, and potential future paths, empowering you to make informed decisions aligned with your highest good.
              </p>
            </motion.div>

            {/* What You'll Receive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">What You'll Receive</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Past life insights and karmic patterns",
                  "Spiritual guidance for life decisions",
                  "Intuitive clarity on relationships",
                  "Energy reading and aura analysis",
                  "Messages from spirit guides",
                  "Career and life purpose guidance",
                  "Answers to specific questions",
                  "Spiritual protection techniques"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 p-8 bg-card rounded-2xl border border-border shadow-soft">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Benefits</h2>
              <ul className="space-y-4">
                {[
                  "Gain clarity on confusing life situations",
                  "Understand your soul's purpose and journey",
                  "Receive validation and spiritual confirmation",
                  "Identify and release energetic blockages",
                  "Connect with loved ones who have passed",
                  "Discover hidden talents and abilities",
                  "Navigate major life transitions with confidence"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-foreground text-lg">{benefit}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Session Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Session Details</h2>
              <div className="bg-accent/50 rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Duration</h3>
                  <p className="text-foreground">45-60 minutes per session</p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Format</h3>
                  <p className="text-foreground">Available in-person, via phone, or video call</p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Preparation</h3>
                  <p className="text-foreground">Come with an open mind and specific questions you'd like guidance on</p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 gradient-golden rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Ready to Receive Spiritual Guidance?
              </h2>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Book your psychic reading session today and gain the clarity and insights you seek.
              </p>
              <Button variant="default" size="xl" asChild>
                <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                  Book Your Reading
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PsychicReadings;
