import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl gradient-golden flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Psychic Readings
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Tap into the unseen realms of intuition and receive profound insights about your life's journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-6">What Are Psychic Readings?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Psychic readings are a sacred practice that connects you with higher realms of consciousness, offering guidance, clarity, and profound insights into your life's journey. Through intuitive perception, I tap into the energy fields surrounding you to reveal hidden truths, understand patterns, and provide spiritual guidance.
              </p>
              <p className="text-foreground leading-relaxed">
                Whether you're seeking answers about relationships, career decisions, or your life's purpose, psychic readings help illuminate the path ahead and empower you to make informed choices aligned with your highest good.
              </p>
            </motion.div>

            {/* What You'll Receive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8">What You'll Receive</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Past life insights and karmic patterns",
                  "Spiritual guidance for current situations",
                  "Intuitive clarity on life decisions",
                  "Energy reading and aura analysis",
                  "Messages from spirit guides",
                  "Future possibilities and potential outcomes",
                  "Answers to your specific questions",
                  "Personalized spiritual advice"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-golden flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8">How It Works</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Book Your Session",
                    description: "Schedule a convenient time for your psychic reading session"
                  },
                  {
                    step: "2",
                    title: "Prepare Your Questions",
                    description: "Think about areas where you need guidance or clarity"
                  },
                  {
                    step: "3",
                    title: "Connect & Receive",
                    description: "During the session, I'll connect with your energy and provide intuitive insights"
                  },
                  {
                    step: "4",
                    title: "Integration",
                    description: "Receive guidance on how to integrate the insights into your daily life"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 p-6 bg-card rounded-xl border border-border shadow-soft">
                    <div className="w-12 h-12 rounded-full gradient-golden flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Session Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-accent/30 p-8 rounded-2xl border border-border mb-16"
            >
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Session Details</h2>
              <div className="grid md:grid-cols-2 gap-6 text-foreground">
                <div>
                  <p className="font-semibold mb-2">Duration</p>
                  <p>45-60 minutes</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Format</p>
                  <p>Video call, Phone, or In-person</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Follow-up</p>
                  <p>Email summary included</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Pricing</p>
                  <p>Contact for custom pricing</p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-4">
                Ready to Gain Spiritual Clarity?
              </h2>
              <p className="text-foreground mb-8">
                Book your psychic reading session and discover the insights waiting for you
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
