import { motion } from "framer-motion";
import { Heart, Brain, Shield, Users, Sparkles, CheckCircle2, ArrowRight, Zap, MessageSquare, Compass, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IndividualTherapy = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Mental Clarity & Insight",
      description: "Gain deeper understanding of your thoughts, emotions, and behavioral patterns through guided self-exploration",
      stat: "85%",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop"
    },
    {
      icon: Shield,
      title: "Emotional Resilience",
      description: "Build stronger coping skills and psychological flexibility to navigate life's challenges with confidence",
      stat: "78%",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop"
    },
    {
      icon: Heart,
      title: "Healing & Recovery",
      description: "Process trauma, grief, and emotional pain in a safe, supportive environment with professional guidance",
      stat: "82%",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop"
    },
    {
      icon: Compass,
      title: "Personal Growth",
      description: "Discover your authentic self, clarify values, and develop actionable strategies for meaningful life changes",
      stat: "76%",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop"
    },
  ];

  const offerings = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn evidence-based techniques to reduce anxiety, manage stress, and regain a sense of calm and control.",
      features: [
        "Cognitive restructuring for anxious thoughts",
        "Relaxation & breathing techniques",
        "Exposure therapy for phobias",
        "Stress management strategies",
      ],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop"
    },
    {
      title: "Depression Support",
      description: "Address depressive symptoms through therapeutic interventions that restore hope, energy, and life satisfaction.",
      features: [
        "Behavioral activation techniques",
        "Cognitive therapy for negative thoughts",
        "Mood tracking & monitoring",
        "Relapse prevention planning",
      ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop"
    },
    {
      title: "Trauma & PTSD Therapy",
      description: "Heal from traumatic experiences using trauma-informed approaches that honor your pace and safety.",
      features: [
        "EMDR (Eye Movement Desensitization)",
        "Somatic experiencing techniques",
        "Trauma narrative processing",
        "Safety & stabilization skills",
      ],
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop"
    },
    {
      title: "Relationship & Life Transitions",
      description: "Navigate major life changes, relationship challenges, and identity questions with clarity and confidence.",
      features: [
        "Life transition support",
        "Relationship patterns exploration",
        "Decision-making guidance",
        "Identity & purpose discovery",
      ],
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=600&auto=format&fit=crop"
    },
    {
      title: "Self-Esteem & Confidence Building",
      description: "Develop a healthier relationship with yourself through self-compassion, acceptance, and empowerment.",
      features: [
        "Identifying negative self-beliefs",
        "Self-compassion practices",
        "Assertiveness training",
        "Personal strengths development",
      ],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop"
    },
    {
      title: "Mindfulness-Based Therapy",
      description: "Integrate mindfulness practices into therapy to enhance present-moment awareness and emotional regulation.",
      features: [
        "Mindfulness meditation training",
        "Body awareness practices",
        "Acceptance & commitment therapy",
        "Mindful emotion regulation",
      ],
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop"
    },
  ];

  const whyItMatters = [
    {
      stat: "75%",
      label: "Of therapy clients report significant improvement in symptoms",
      icon: TrendingUp,
    },
    {
      stat: "80%",
      label: "Say therapy helped them better manage stress and emotions",
      icon: Brain,
    },
    {
      stat: "70%",
      label: "Experience improved relationships after therapy",
      icon: Heart,
    },
    {
      stat: "85%",
      label: "Would recommend therapy to friends or family",
      icon: Users,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Share your story, discuss concerns, and collaboratively establish therapy goals in a warm, non-judgmental setting.",
    },
    {
      step: "02",
      title: "Personalized Treatment Plan",
      description: "Develop a customized therapeutic approach tailored to your unique needs, preferences, and goals.",
    },
    {
      step: "03",
      title: "Regular Therapy Sessions",
      description: "Meet weekly or bi-weekly for 50-minute sessions where we explore, process, and build new skills together.",
    },
    {
      step: "04",
      title: "Progress & Growth",
      description: "Track improvements, adjust strategies as needed, and celebrate your growth toward lasting positive change.",
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
                  Individual
                  <span className="block mt-2 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Therapy</span>
                </h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Transform your life through personalized, evidence-based therapy. In a safe, confidential space, we'll work together to understand your challenges, heal emotional wounds, and create lasting positive change.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
                    asChild
                  >
                    <a href="/contact">
                      Book Session
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300 text-lg"
                    asChild
                  >
                    <a href="#offerings">Learn More</a>
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
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&auto=format&fit=crop"
                    alt="Individual therapy counseling session"
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
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-gradient">85%</p>
                      <p className="text-sm text-muted-foreground">Feel Better</p>
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
                Therapy <span className="text-gradient">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Evidence shows that therapy is one of the most effective interventions for mental health and personal growth.
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
                Your Path to <span className="text-gradient">Wellness</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the transformative benefits of personalized therapy tailored to your unique needs
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
                Therapy <span className="text-gradient">Specializations</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Evidence-based therapeutic approaches addressing a wide range of mental health concerns
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
                Your Therapy <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A clear, supportive pathway from your first session to lasting transformation
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
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Take the first step toward lasting positive change. You deserve support, healing, and growth.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg font-semibold"
                  asChild
                >
                  <a href="/contact">
                    Book Your Session
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

export default IndividualTherapy;