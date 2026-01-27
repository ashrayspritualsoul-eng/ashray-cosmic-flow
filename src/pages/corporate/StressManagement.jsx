import { motion } from "framer-motion";
import { Waves, Brain, Heart, Shield, Target, Award, CheckCircle2, ArrowRight, Sparkles, Wind, Zap, Activity, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const StressManagement = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduced Stress Levels",
      description: "Lower cortisol and anxiety through evidence-based stress reduction techniques and mindfulness practices",
      stat: "62%",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop"
    },
    {
      icon: Brain,
      title: "Enhanced Focus & Clarity",
      description: "Improve concentration, decision-making, and cognitive performance under pressure",
      stat: "58%",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
    },
    {
      icon: Heart,
      title: "Better Physical Health",
      description: "Reduce stress-related health issues including headaches, fatigue, and cardiovascular problems",
      stat: "54%",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop"
    },
    {
      icon: Shield,
      title: "Increased Resilience",
      description: "Build psychological strength to handle challenges, setbacks, and workplace pressures effectively",
      stat: "67%",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
    },
  ];

  const offerings = [
    {
      title: "Stress Awareness Training",
      description: "Learn to recognize early warning signs of stress and understand how it impacts performance, health, and wellbeing.",
      features: [
        "Stress triggers identification",
        "Physical & emotional symptoms",
        "Personal stress patterns",
        "Warning sign recognition",
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop"
    },
    {
      title: "Mindfulness & Meditation",
      description: "Develop present-moment awareness and meditation practices to calm the mind and reduce reactivity to stressors.",
      features: [
        "Guided meditation sessions",
        "Breathing techniques",
        "Body scan exercises",
        "Mindful awareness practices",
      ],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop"
    },
    {
      title: "Time Management Skills",
      description: "Master prioritization, scheduling, and boundary-setting to reduce overwhelm and create sustainable productivity.",
      features: [
        "Priority matrix training",
        "Calendar optimization",
        "Delegation strategies",
        "Boundary-setting techniques",
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop"
    },
    {
      title: "Cognitive Reframing Techniques",
      description: "Transform negative thought patterns and develop healthier perspectives on workplace challenges and stressors.",
      features: [
        "Thought pattern analysis",
        "Cognitive restructuring tools",
        "Positive reframing exercises",
        "Limiting belief identification",
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop"
    },
    {
      title: "Relaxation & Recovery Methods",
      description: "Learn evidence-based relaxation techniques including progressive muscle relaxation, visualization, and breathing exercises.",
      features: [
        "Progressive muscle relaxation",
        "Guided imagery & visualization",
        "Deep breathing protocols",
        "Quick stress-relief techniques",
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop"
    },
    {
      title: "Resilience Building Programs",
      description: "Strengthen psychological resilience and develop coping strategies for long-term stress management and adaptation.",
      features: [
        "Resilience assessment tools",
        "Adaptive coping strategies",
        "Growth mindset development",
        "Stress inoculation training",
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop"
    },
  ];

  const whyItMatters = [
    {
      stat: "83%",
      label: "Of U.S. workers suffer from work-related stress",
      icon: Waves,
    },
    {
      stat: "$300B",
      label: "Annual cost to U.S. businesses due to workplace stress",
      icon: Target,
    },
    {
      stat: "120K",
      label: "Deaths per year attributed to workplace stress",
      icon: Activity,
    },
    {
      stat: "76%",
      label: "Of employees report stress affects their personal relationships",
      icon: Heart,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Stress Assessment",
      description: "Evaluate organizational stress levels, identify key stressors, and understand impact on employee wellbeing and performance.",
    },
    {
      step: "02",
      title: "Customized Workshop Design",
      description: "Create tailored stress management training addressing your specific workplace challenges and employee needs.",
    },
    {
      step: "03",
      title: "Interactive Training Delivery",
      description: "Facilitate engaging workshops with hands-on practice, real-world scenarios, and actionable stress reduction tools.",
    },
    {
      step: "04",
      title: "Ongoing Support & Resources",
      description: "Provide continued access to stress management resources, follow-up sessions, and reinforcement materials.",
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
                  Corporate Wellness Solutions
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                  Stress Management
                  <span className="block mt-2 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Workshops</span>
                </h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Equip your team with practical tools to manage workplace stress effectively. Our interactive workshops teach evidence-based techniques that reduce stress, enhance resilience, and foster a calmer, more productive work environment.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
                    asChild
                  >
                    <a href="/contact">
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300 text-lg"
                    asChild
                  >
                    <a href="#offerings">Explore Workshops</a>
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
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop"
                    alt="Stress management and mindfulness training"
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
                      <Wind className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-gradient">62%</p>
                      <p className="text-sm text-muted-foreground">Stress Reduction</p>
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
                The Stress <span className="text-gradient">Epidemic</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Workplace stress is reaching crisis levels. Effective stress management isn't optional—it's essential for organizational health.
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
                Transform <span className="text-gradient">Stress</span> into Strength
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Give your team the skills to thrive under pressure and maintain peak performance
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
                Our Workshop <span className="text-gradient">Programs</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive stress management training designed to equip teams with practical, evidence-based coping strategies
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
                Our <span className="text-gradient">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven approach to delivering effective stress management training
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
                Ready to Build a Less Stressed Workplace?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Empower your team with practical stress management skills. Let's create a calmer, more resilient workforce together.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg font-semibold"
                  asChild
                >
                  <a href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg"
                  asChild
                >
                  <Link to="/corporate-services">View All Services</Link>
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

export default StressManagement;