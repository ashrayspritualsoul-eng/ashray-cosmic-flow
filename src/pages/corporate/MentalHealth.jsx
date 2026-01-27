import { motion } from "framer-motion";
import { Brain, Users, TrendingUp, Shield, Target, Award, CheckCircle2, ArrowRight, Sparkles, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentalHealth = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Improve focus, efficiency, and employee output by 35% through better mental health support",
      stat: "35%",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
    },
    {
      icon: Users,
      title: "Higher Employee Retention",
      description: "Reduce turnover rates and create a workplace culture where people want to stay and grow",
      stat: "45%",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
    },
    {
      icon: Shield,
      title: "Reduced Absenteeism",
      description: "Decrease sick days and unplanned absences through proactive mental wellness initiatives",
      stat: "40%",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop"
    },
    {
      icon: Heart,
      title: "Enhanced Employee Satisfaction",
      description: "Build a supportive environment that prioritizes well-being and fosters loyalty",
      stat: "60%",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop"
    },
  ];

  const offerings = [
    {
      title: "Mental Health Assessments",
      description: "Comprehensive evaluations to identify stressors, anxiety levels, and overall mental wellness across your organization.",
      features: [
        "Anonymous screening tools",
        "Individual and team assessments",
        "Data-driven insights and reporting",
        "Personalized recommendations",
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop"
    },
    {
      title: "One-on-One Counseling Sessions",
      description: "Confidential therapy sessions with licensed mental health professionals tailored to individual employee needs.",
      features: [
        "Licensed therapists and counselors",
        "In-person and virtual sessions",
        "Flexible scheduling options",
        "Complete confidentiality guaranteed",
      ],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop"
    },
    {
      title: "Group Therapy & Support Circles",
      description: "Facilitated group sessions that create safe spaces for employees to share experiences and build community.",
      features: [
        "Peer support networks",
        "Guided discussion topics",
        "Team bonding activities",
        "Inclusive and judgment-free zones",
      ],
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop"
    },
    {
      title: "Mental Health Awareness Workshops",
      description: "Educational sessions that reduce stigma and equip employees with tools to recognize and address mental health challenges.",
      features: [
        "Expert-led presentations",
        "Interactive learning modules",
        "Resource distribution",
        "Q&A with mental health professionals",
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop"
    },
    {
      title: "Crisis Intervention Support",
      description: "24/7 emergency mental health support for employees experiencing acute psychological distress or crisis situations.",
      features: [
        "Round-the-clock hotline access",
        "Immediate intervention protocols",
        "Follow-up care coordination",
        "Workplace safety planning",
      ],
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&auto=format&fit=crop"
    },
    {
      title: "Leadership Mental Health Training",
      description: "Specialized programs for managers to recognize mental health signs and create supportive team environments.",
      features: [
        "Recognizing warning signs",
        "Compassionate communication skills",
        "Creating psychologically safe teams",
        "Resource navigation guidance",
      ],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop"
    },
  ];

  const whyItMatters = [
    {
      stat: "1 in 5",
      label: "Adults experience mental illness annually",
      icon: Brain,
    },
    {
      stat: "$300B",
      label: "Annual cost of workplace stress in the U.S.",
      icon: TrendingUp,
    },
    {
      stat: "80%",
      label: "Of employees with mental health conditions report it affects their work",
      icon: Target,
    },
    {
      stat: "5x",
      label: "ROI on mental health programs for employers",
      icon: Award,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet with your leadership team to understand organizational culture, challenges, and specific mental health goals.",
    },
    {
      step: "02",
      title: "Custom Program Design",
      description: "Our experts create a tailored mental health program aligned with your workforce size, industry, and unique needs.",
    },
    {
      step: "03",
      title: "Launch & Training",
      description: "We roll out the program with employee onboarding, manager training, and clear communication about available resources.",
    },
    {
      step: "04",
      title: "Ongoing Support & Evaluation",
      description: "Continuous monitoring, regular check-ins, and data analysis to measure impact and refine the program over time.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gradient-to-b from-muted/30 via-background to-background">
        {/* Hero Section with Dark Colored Background */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 -right-40 w-96 h-96 bg-secondary/40 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-20 -left-40 w-96 h-96 bg-tertiary/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 12, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
            />
          </div>

          {/* Dark overlay for better text contrast */}
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
                  Corporate Mental Health
                  <span className="block mt-2 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Programs</span>
                </h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Transform your workplace into a sanctuary of mental wellness. Our comprehensive programs support employees' psychological health, reduce stigma, and create a culture of care that drives both individual well-being and business success.
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

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop"
                    alt="Mental health and wellness in workplace"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                {/* Floating card */}
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
                      <p className="text-sm text-muted-foreground">Employee Satisfaction</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why It Matters - Stats Section */}
        <section className="py-20 px-6 bg-gradient-soft">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Mental Health <span className="text-gradient">Matters</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The data speaks for itself. Prioritizing mental health isn't just compassionate—it's strategic.
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
                    className="relative group"
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 h-full">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-5xl font-bold text-gradient mb-3">
                        {item.stat}
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Transform Your <span className="text-gradient">Workplace</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Investing in mental health creates ripple effects across your entire organization
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
                    className="group"
                  >
                    <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 overflow-hidden h-full">
                      {/* Image at top */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-4xl font-bold text-gradient">
                            {benefit.stat}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comprehensive Offerings Section */}
        <section id="offerings" className="py-20 px-6 bg-gradient-soft">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Comprehensive <span className="text-gradient">Offerings</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A full spectrum of mental health services designed to meet your organization at every level—from prevention to intervention
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
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 h-full flex flex-col overflow-hidden">
                    {/* Image */}
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

                    {/* Content */}
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {offering.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {offering.description}
                      </p>

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

        {/* Process Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How We <span className="text-gradient">Partner</span> With You
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven four-step approach ensures seamless implementation and measurable results
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
                    <div className="text-6xl font-bold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Arrow (except for last item) */}
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

        {/* CTA Section */}
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
                Ready to Prioritize Mental Wellness?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Let's create a mentally healthier workplace together. Schedule a consultation to discuss your organization's unique needs.
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

export default MentalHealth;