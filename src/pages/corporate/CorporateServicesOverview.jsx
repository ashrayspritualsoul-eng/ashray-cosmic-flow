import { motion } from "framer-motion";
import { Building2, Brain, Heart, Users, Sparkles, TrendingUp, Shield, CheckCircle2, ArrowRight, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CorporateServicesOverview = () => {
  const services = [
    {
      icon: Brain,
      title: "Mental Health Programs",
      description: "Comprehensive workplace mental health initiatives addressing stress, anxiety, and burnout through expert-led programs and individual support.",
      features: ["Mental health workshops", "Individual counseling", "Crisis support", "Wellness assessments"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop",
      href: "/corporate/mental-health-programs",
      stat: "78%",
      statLabel: "Reduced Stress"
    },
    {
      icon: Users,
      title: "Employee Wellness & Burnout Prevention",
      description: "Holistic programs preventing burnout and promoting sustainable wellbeing for thriving, engaged, and energized employees.",
      features: ["Burnout prevention", "Resilience training", "Work-life balance", "Energy management"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop",
      href: "/corporate/employee-wellness",
      stat: "65%",
      statLabel: "Lower Burnout"
    },
    {
      icon: Heart,
      title: "Therapy & Counseling Services",
      description: "Professional therapy and counseling tailored for workplace challenges, personal growth, and comprehensive emotional wellbeing support.",
      features: ["One-on-one therapy", "Group sessions", "Crisis intervention", "Confidential support"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop",
      href: "/corporate/therapy-counseling",
      stat: "82%",
      statLabel: "Satisfaction Rate"
    },
    {
      icon: Shield,
      title: "Stress Management Workshops",
      description: "Interactive workshops teaching practical stress reduction techniques for immediate workplace application and long-term resilience.",
      features: ["Mindfulness practices", "Breathing techniques", "Time management", "Pressure handling"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop",
      href: "/corporate/stress-management",
      stat: "71%",
      statLabel: "Better Coping"
    },
    {
      icon: TrendingUp,
      title: "Emotional Intelligence & Resilience Training",
      description: "Develop emotional awareness, regulation skills, and resilience for enhanced performance, collaboration, and workplace relationships.",
      features: ["EQ assessment", "Self-awareness", "Relationship management", "Adaptive thinking"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
      href: "/corporate/emotional-intelligence",
      stat: "73%",
      statLabel: "Better Collaboration"
    },
    {
      icon: Target,
      title: "Leadership Development & Mindfulness",
      description: "Transform leadership through mindfulness, emotional intelligence, and conscious decision-making practices for authentic impact.",
      features: ["Mindful leadership", "Decision-making", "Team inspiration", "Authentic communication"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop",
      href: "/corporate/leadership-development",
      stat: "69%",
      statLabel: "Leadership Improvement"
    },
    {
      icon: Sparkles,
      title: "Holistic Wellness Add-ons",
      description: "Complement core programs with yoga, meditation, nutrition coaching, and alternative wellness practices for complete wellbeing.",
      features: ["Yoga & movement", "Meditation sessions", "Nutrition coaching", "Energy healing"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop",
      href: "/corporate/holistic-wellness",
      stat: "78%",
      statLabel: "Health Improvement"
    },
  ];

  const whyChooseUs = [
    { icon: Award, stat: "500+", label: "Employees Supported Across Organizations" },
    { icon: TrendingUp, stat: "85%", label: "Client Satisfaction & Program Success Rate" },
    { icon: Users, stat: "50+", label: "Corporate Partners & Ongoing Collaborations" },
    { icon: Brain, stat: "15+ Years", label: "Combined Expertise in Mental Health & Wellness" },
  ];

  const benefits = [
    "Reduced absenteeism and presenteeism",
    "Improved employee retention and loyalty",
    "Enhanced productivity and performance",
    "Stronger team collaboration and morale",
    "Better organizational culture and reputation",
    "Lower healthcare costs and insurance claims",
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
                  <Building2 className="w-4 h-4" />
                  Corporate Wellness Solutions
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                  Transform Your
                  <span className="block mt-2 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Workplace</span>
                </h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Comprehensive mental health and wellness programs designed to create thriving, resilient, and high-performing workplace cultures where employees flourish.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
                    asChild
                  >
                    <a href="/contact">
                      Request Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300 text-lg"
                    asChild
                  >
                    <a href="#services">Explore Services</a>
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"
                    alt="Corporate team collaboration"
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
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-gradient">85%</p>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-gradient-soft">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Organizations <span className="text-gradient">Choose Us</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted partner for comprehensive workplace mental health and wellness solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => {
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

        {/* Services Grid */}
        <section id="services" className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive programs designed to support mental health, prevent burnout, and cultivate thriving workplace cultures
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Link to={service.href}>
                      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 h-full flex flex-col overflow-hidden group">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="flex items-center gap-2">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                                <span className="text-primary font-bold text-lg">{service.stat}</span>
                              </div>
                              <span className="text-white text-sm font-medium">{service.statLabel}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{service.description}</p>
                          <div className="space-y-2">
                            {service.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-gradient-soft">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Business <span className="text-gradient">Benefits</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Investing in employee mental health and wellness delivers measurable returns across your organization.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop"
                    alt="Happy employees collaborating"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </motion.div>
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
                Ready to Transform Your Workplace?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Let's discuss how our corporate wellness programs can support your organization's unique needs and goals.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg font-semibold"
                  asChild
                >
                  <a href="/contact">
                    Request Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg"
                  asChild
                >
                  <Link to="/services">Personal Services</Link>
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

export default CorporateServicesOverview;