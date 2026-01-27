import { motion } from "framer-motion";
import { Sparkles, Moon, Star, Eye, Compass, Heart, CheckCircle2, ArrowRight, Zap, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TarotReadings = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Clarity & Insight",
      description: "Gain deeper understanding of your current situation, past influences, and potential future outcomes",
      stat: "92%",
      image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&auto=format&fit=crop"
    },
    {
      icon: Compass,
      title: "Guidance & Direction",
      description: "Receive intuitive guidance to navigate life decisions, transitions, and crossroads with confidence",
      stat: "88%",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop"
    },
    {
      icon: Heart,
      title: "Relationship Understanding",
      description: "Explore relationship dynamics, patterns, and possibilities for deeper connection and resolution",
      stat: "85%",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop"
    },
    {
      icon: Star,
      title: "Personal Empowerment",
      description: "Discover your strengths, overcome obstacles, and align with your highest path and purpose",
      stat: "90%",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop"
    },
  ];

  const offerings = [
    {
      title: "General Life Reading",
      description: "Comprehensive overview of your current life situation, covering all major areas including career, relationships, and personal growth.",
      features: [
        "Past-Present-Future spread",
        "Celtic Cross reading",
        "Life path guidance",
        "Recorded session available",
      ],
      image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&auto=format&fit=crop"
    },
    {
      title: "Love & Relationship Reading",
      description: "Deep dive into romantic connections, soulmate questions, and relationship dynamics to find clarity and direction.",
      features: [
        "Relationship dynamics analysis",
        "Compatibility insights",
        "Future potential exploration",
        "Communication guidance",
      ],
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop"
    },
    {
      title: "Career & Success Reading",
      description: "Navigate professional decisions, career changes, and opportunities with clarity about your vocational path.",
      features: [
        "Career path guidance",
        "Opportunity identification",
        "Obstacle awareness",
        "Timing for action",
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop"
    },
    {
      title: "Spiritual Guidance Reading",
      description: "Connect with your higher self and spiritual guides for wisdom, purpose clarity, and soul-level understanding.",
      features: [
        "Life purpose exploration",
        "Spiritual blocks identification",
        "Soul contract insights",
        "Intuition development",
      ],
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop"
    },
    {
      title: "Yes/No Question Reading",
      description: "Quick, focused reading for specific questions requiring clear yes or no answers with supporting guidance.",
      features: [
        "Direct answer clarity",
        "Supporting card guidance",
        "Action recommendations",
        "Up to 3 questions",
      ],
      image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&auto=format&fit=crop"
    },
    {
      title: "Tarot Learning & Workshops",
      description: "Learn to read tarot yourself through personalized instruction, card meanings, and intuitive development.",
      features: [
        "Card meanings & symbolism",
        "Spread techniques",
        "Intuitive reading development",
        "Practice sessions",
      ],
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop"
    },
  ];

  const whyItMatters = [
    {
      stat: "5,000+",
      label: "Years of tarot wisdom and ancient divination tradition",
      icon: BookOpen,
    },
    {
      stat: "92%",
      label: "Of clients report gaining valuable clarity from readings",
      icon: Eye,
    },
    {
      stat: "78 Cards",
      label: "In the tarot deck, each with profound symbolic meaning",
      icon: Sparkles,
    },
    {
      stat: "88%",
      label: "Feel more confident in their decisions after readings",
      icon: TrendingUp,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Set Your Intention",
      description: "Share your questions, concerns, or areas where you seek guidance and clarity in your life.",
    },
    {
      step: "02",
      title: "Card Selection & Spread",
      description: "Choose your reading type and allow the universe to guide which cards appear in your unique spread.",
    },
    {
      step: "03",
      title: "Intuitive Interpretation",
      description: "Receive detailed interpretation of card meanings, symbols, and messages specific to your situation.",
    },
    {
      step: "04",
      title: "Guidance & Integration",
      description: "Discuss insights, ask follow-up questions, and receive practical guidance for applying wisdom to your life.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gradient-to-b from-muted/30 via-background to-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 -right-40 w-96 h-96 bg-secondary/40 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-20 -left-40 w-96 h-96 bg-tertiary/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 12, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  Personal Wellness Services
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                  Tarot Readings &
                  <span className="block mt-2 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Teaching</span>
                </h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Discover ancient wisdom through the mystical art of tarot. Gain profound insights, clarity, and guidance for your life's journey through personalized readings or learn to read tarot yourself.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
                    asChild
                  >
                    <a href="/contact">
                      Book Reading
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300 text-lg"
                    asChild
                  >
                    <a href="#offerings">Explore Readings</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30">
                  <img
                    src="https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200&auto=format&fit=crop"
                    alt="Tarot card reading session"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs backdrop-blur-sm border border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-glow">
                      <Moon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-gradient">92%</p>
                      <p className="text-sm text-muted-foreground">Gain Clarity</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 px-6 bg-gradient-soft">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ancient <span className="text-gradient">Wisdom</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tarot has guided seekers for centuries, offering profound insights into life's mysteries and possibilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyItMatters.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 h-full">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-5xl font-bold text-gradient mb-3">{item.stat}</div>
                      <p className="text-muted-foreground font-medium">{item.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Unlock Your <span className="text-gradient">Path</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how tarot readings can illuminate your journey and empower your decisions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 overflow-hidden h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-4xl font-bold text-gradient">{benefit.stat}</div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section id="offerings" className="py-20 px-6 bg-gradient-soft">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Reading <span className="text-gradient">Types</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the tarot reading that resonates with your current needs and questions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={offering.image}
                        alt={offering.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                          <Zap className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{offering.description}</p>
                      <div className="space-y-2">
                        {offering.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Your Reading <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A sacred, intuitive journey from question to clarity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 h-full">
                    <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-cosmic text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Discover Your Path?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Let the cards reveal the wisdom you seek. Book your personalized tarot reading today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg font-semibold"
                  asChild
                >
                  <a href="/contact">
                    Book Your Reading
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg"
                  asChild
                >
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TarotReadings;