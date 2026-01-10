import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Eye,
  Shield,
  Users,
  Lightbulb,
  Lock,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PsychicTarotReadings = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    {
      icon: Eye,
      title: "Experienced & Intuitive Reader",
      description:
        "Deep understanding of Tarot symbolism combined with natural psychic abilities",
    },
    {
      icon: Heart,
      title: "Personalized & Compassionate Guidance",
      description:
        "Every reading is tailored to your unique situation with empathy and care",
    },
    {
      icon: Lightbulb,
      title: "Gain Clarity on Complex Situations",
      description:
        "Illuminate hidden influences and understand the bigger picture",
    },
    {
      icon: Sparkles,
      title: "Empowerment & Self-Discovery",
      description: "Unlock your potential and align with your authentic self",
    },
    {
      icon: Shield,
      title: "Safe & Supportive Environment",
      description:
        "A nurturing space to explore your inner world without judgment",
    },
    {
      icon: CheckCircle,
      title: "Receive Practical Advice & Actionable Steps",
      description:
        "Clear guidance you can apply immediately to create positive change",
    },
    {
      icon: Lock,
      title: "Confidential & Respectful",
      description:
        "Your privacy is sacred - all readings are completely confidential",
    },
  ];

  const faqs = [
    {
      question: "What kind of questions can I ask during a Tarot reading?",
      answer:
        "You can ask about any aspect of your life - relationships, career, finances, personal growth, or spiritual development. The most effective questions are open-ended, such as 'What do I need to know about...' or 'How can I improve...?' rather than simple yes/no questions.",
    },
    {
      question: "How accurate are Tarot readings?",
      answer:
        "Tarot readings offer profound insights based on current energies and circumstances. Their accuracy depends on the reader's skill, your openness, and how you apply the guidance. Remember, the future isn't fixed - your choices shape your destiny, and the cards illuminate potential pathways.",
    },
    {
      question: "Can Tarot readings predict the future?",
      answer:
        "Tarot doesn't predict a fixed future but reveals potential outcomes based on current energies and patterns. The cards show you the roads ahead, but you choose which path to take. They're a powerful tool for understanding possibilities and making conscious decisions.",
    },
    {
      question: "How should I prepare for a Tarot reading?",
      answer:
        "Come with an open mind and heart. Think about the areas of your life where you seek clarity. Write down your questions beforehand. Find a quiet space where you can focus without distractions. Most importantly, be ready to receive honest guidance.",
    },
    {
      question: "Are Tarot readings confidential?",
      answer:
        "Yes, absolutely. All Tarot readings at Ashray Wellness are conducted with the utmost confidentiality and respect for your privacy. Your personal information and the content of your reading will never be shared with anyone else.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Gradient */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-purple-800"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.4),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.4),transparent_50%)]"></div>
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="w-24 h-24 rounded-3xl gradient-golden flex items-center justify-center mx-auto mb-8 shadow-2xl"
            >
              <Sparkles className="w-12 h-12 text-primary" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Unlock the Wisdom of the Cards
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Delve into the mystical world of Tarot and prepare to uncover
              profound insights into the tapestry of your life. Through deeply
              intuitive and personalized card readings, we serve as your
              compassionate guide, illuminating the pathways that lie before
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/services/tarot-mystical.jpg"
                    alt="Tarot Cards Reading"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add(
                        "bg-gradient-to-br",
                        "from-purple-500",
                        "via-violet-500",
                        "to-purple-600"
                      );
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-secondary to-primary rounded-full blur-3xl opacity-60"></div>
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-40"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
                  More Than Just Predictions
                </h2>
                <div className="space-y-4 text-foreground/90 text-lg leading-relaxed">
                  <p>
                    These readings offer a powerful tool for self-reflection,
                    revealing the hidden influences that shape your experiences
                    and empowering you to make conscious choices aligned with
                    your authentic self.
                  </p>
                  <p>
                    We meticulously interpret the ancient symbolism of the
                    Tarot, weaving together the wisdom of the cards with innate
                    psychic abilities to provide clarity on relationships,
                    career choices, financial opportunities, and the unfolding
                    of your personal growth journey.
                  </p>
                  <p>
                    Whether you're seeking guidance on navigating complex
                    challenges or striving to unlock your full potential, our
                    Tarot readings provide a beacon of light, empowering you to
                    approach life with newfound clarity, confidence, and
                    unwavering self-assurance.
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary text-white"
                    asChild
                  >
                    <a
                      href="https://wa.me/919340216182"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Your Reading Now
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              Why Choose Ashray Wellness for Your Tarot Reading?
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Experience the difference of working with a truly gifted and
              compassionate reader
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                {/* Soft Glow Aura */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-3xl border border-border/60 shadow-soft hover:shadow-2xl transition-all duration-500 p-8 hover:-translate-y-3">
                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/25 to-secondary/25 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <benefit.icon className="relative w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-card-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                    {benefit.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
                  Tarot Card Reading: A Journey of Self-Discovery
                </h2>
                <div className="space-y-4 text-foreground/90 text-lg leading-relaxed">
                  <p>
                    At Ashray Wellness, we believe that Tarot card readings are
                    more than just predictions; they are a powerful tool for
                    self-discovery and empowerment.
                  </p>
                  <p>
                    Our readings provide a safe and supportive space for you to
                    explore your inner world, gain clarity on your life's path,
                    and make conscious choices aligned with your authentic self.
                  </p>
                  <p>
                    We combine our deep understanding of Tarot symbolism with
                    our intuitive abilities to provide you with personalized
                    guidance and actionable advice, empowering you to navigate
                    life's challenges with confidence and create a more
                    fulfilling and purpose-driven existence.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mt-8 space-y-4">
                  {[
                    "Explore your inner world in a safe space",
                    "Gain clarity on your life's path",
                    "Make conscious, aligned choices",
                    "Navigate challenges with confidence",
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/services/tarot-journey.jpg"
                    alt="Tarot Journey"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add(
                        "bg-gradient-to-br",
                        "from-violet-500",
                        "via-purple-500",
                        "to-indigo-600"
                      );
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Everything you need to know about Tarot card readings
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-purple-800"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.4),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg max-w-2xl mx-auto mb-8"
          >
            Allow the cards to unveil the secrets that await and embark on a
            transformative voyage toward a more fulfilling and purpose-driven
            existence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
              asChild
            >
              <a
                href="https://wa.me/919340216182"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Tarot Reading
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PsychicTarotReadings;
