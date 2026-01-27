import { motion } from "framer-motion";
import { Flame, Battery, Wind, Smile, Target, Award, CheckCircle2, ArrowRight, Sparkles, Heart, Zap, Clock, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WellnessBurnout = () => {
  const benefits = [
    {
      icon: Battery,
      title: "Restored Energy Levels",
      description: "Help employees regain vitality and enthusiasm through proven burnout prevention strategies",
      stat: "55%",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop"
    },
    {
      icon: TrendingDown,
      title: "Reduced Stress Levels",
      description: "Significantly decrease workplace stress and create a healthier, more balanced work environment",
      stat: "50%",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop"
    },
    {
      icon: Smile,
      title: "Improved Work-Life Balance",
      description: "Establish healthy boundaries that protect personal time while maintaining productivity",
      stat: "65%",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
    },
    {
      icon: Heart,
      title: "Enhanced Overall Wellbeing",
      description: "Foster holistic health addressing physical, mental, and emotional wellness dimensions",
      stat: "70%",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop"
    },
  ];

  const offerings = [
    {
      title: "Burnout Risk Assessments",
      description: "Identify early warning signs and risk factors through comprehensive evaluations before burnout becomes critical.",
      features: [
        "Individual burnout screening",
        "Team-level stress analysis",
        "Risk factor identification",
        "Personalized action plans",
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop"
    },
    {
      title: "Recovery & Resilience Programs",
      description: "Structured programs to help employees recover from burnout and build long-term resilience against future stress.",
      features: [
        "Burnout recovery coaching",
        "Resilience building techniques",
        "Energy management training",
        "Sustainable performance strategies",
      ],
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop"
    },
    {
      title: "Work-Life Balance Workshops",
      description: "Interactive sessions teaching practical strategies for maintaining healthy boundaries and sustainable productivity.",
      features: [
        "Boundary-setting techniques",
        "Time management skills",
        "Priority alignment exercises",
        "Digital detox strategies",
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop"
    },
    {
      title: "Stress Management Training",
      description: "Equip teams with evidence-based tools to recognize, manage, and reduce workplace stress effectively.",
      features: [
        "Stress recognition techniques",
        "Coping strategy development",
        "Relaxation method training",
        "Mindfulness practices",
      ],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop"
    },
    {
      title: "Energy Management Coaching",
      description: "One-on-one coaching to optimize personal energy, prioritize effectively, and sustain high performance without burnout.",
      features: [
        "Personal energy audits",
        "Peak performance timing",
        "Recovery protocol design",
        "Sustainable habit formation",
      ],
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&auto=format&fit=crop"
    },
    {
      title: "Organizational Culture Consulting",
      description: "Transform workplace culture to prevent systemic burnout through policy changes and leadership training.",
      features: [
        "Culture assessment",
        "Policy recommendations",
        "Leadership accountability",
        "Sustainable workload design",
      ],
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop"
    },
  ];

  const whyItMatters = [
    {
      stat: "77%",
      label: "Of employees experience burnout at their current job",
      icon: Flame,
    },
    {
      stat: "$190B",
      label: "Annual healthcare costs linked to burnout in the U.S.",
      icon: Target,
    },
    {
      stat: "63%",
      label: "More likely to take a sick day when experiencing burnout",
      icon: Clock,
    },
    {
      stat: "2.6x",
      label: "More likely to seek a different job when burned out",
      icon: Award,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Discovery",
      description: "We evaluate current stress levels, burnout indicators, and organizational factors contributing to employee exhaustion.",
    },
    {
      step: "02",
      title: "Customized Program Design",
      description: "Create targeted interventions addressing your specific burnout risks, workplace culture, and employee needs.",
    },
    {
      step: "03",
      title: "Implementation & Training",
      description: "Roll out wellness programs with employee education, manager training, and accessible resources for immediate support.",
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Track wellbeing metrics, gather feedback, and continuously refine programs to ensure lasting positive impact.",
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
                  Employee Wellness &
                  <span className="block mt-2 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Burnout Prevention</span>
                </h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Protect your team from exhaustion and restore vitality in your workplace. Our evidence-based programs address the root causes of burnout while building sustainable wellness practices that keep employees energized, engaged, and thriving.
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
                    <a href="#offerings">Explore Services</a>
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
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&auto=format&fit=crop"
                    alt="Employee wellness and burnout prevention"
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
                      <Battery className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-gradient">65%</p>
                      <p className="text-sm text-muted-foreground">Energy Restored</p>
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
                The Burnout <span className="text-gradient">Crisis</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Burnout is an epidemic affecting organizations worldwide. Prevention is not optional—it's essential.
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
                Revitalize Your <span className="text-gradient">Workforce</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform exhaustion into energy and create a workplace where people flourish
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
                Our Wellness <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive programs designed to prevent burnout, restore energy, and build lasting resilience
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
                Our <span className="text-gradient">Approach</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic process to prevent burnout and restore workplace wellness
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
                Ready to Restore Energy & Prevent Burnout?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Transform your workplace from exhaustion to vitality. Let's create a wellness strategy that works.
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

export default WellnessBurnout;