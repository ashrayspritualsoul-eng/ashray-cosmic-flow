import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { z } from "zod";
import emailjs from "emailjs-com";

const corporateServices = [
  { label: "Corporate Mental Health Programs" },
  { label: "Employee Wellness & Burnout Prevention" },
  { label: "Therapy & Counseling Services" },
  { label: "Stress Management Workshops" },
  { label: "Emotional Intelligence & Resilience Training" },
  { label: "Leadership & Mindfulness Programs" },
  { label: "Holistic Wellness Add-ons" },
];

const personalServices = [
  { label: "Psychic Readings" },
  { label: "Tarot Readings & Teaching" },
  { label: "Numerology Consultations" },
  { label: "Reiki Healing & Training" },
  { label: "Spiritual Remedies" },
  { label: "Individual Therapy Sessions" },
];

// Zod schema for frontend validation
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
  corporateService: z.string().optional(),
  personalService: z.string().optional(),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    corporateService: "",
    personalService: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      // Add current timestamp for email template
      const emailData = {
        ...validatedData,
        time: new Date().toLocaleString(),
      };

      // Send email via EmailJS
      await emailjs.send(
        "service_djsisbs", // replace with your EmailJS Service ID
        "template_tyjx5dl", // replace with your EmailJS Template ID
        emailData,
        "5s1Ypz71xNFSSKepP", // replace with your EmailJS Public Key
      );

      toast({
        title: "Message Sent! ✨",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        corporateService: "",
        personalService: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description:
            error.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6 leading-tight">
              Begin Your{" "}
              <span className="text-gradient">Spiritual Journey</span>
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-10">
              Ready to explore the cosmos and discover your true path? Reach out
              for a consultation or simply say hello. Every great journey begins
              with a single step.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "ashrayspritualsoul@gmail.com",
                },
                { icon: Phone, label: "Phone", value: "+91 93402 16182" },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Janakpuri Jumerati, Bhopal",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{item.label}</p>
                    <p className="font-semibold text-card-foreground">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative */}
            <div className="mt-12 p-6 rounded-2xl gradient-golden/30 border border-secondary">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-card-foreground">
                  What to Expect
                </h3>
              </div>
              <p className="text-foreground text-sm">
                After submitting your message, you'll receive a response within
                24-48 hours. We'll discuss your needs and schedule a
                consultation at your convenience.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl border border-border shadow-card"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="h-12 bg-muted border-border focus:border-primary"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-12 bg-muted border-border focus:border-primary"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9340216182"
                    className="h-12 bg-muted border-border focus:border-primary"
                  />
                </div>

                {/* Corporate Services Dropdown */}
                <div>
                  <label
                    htmlFor="corporateService"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Corporate Services
                  </label>
                  <select
                    id="corporateService"
                    name="corporateService"
                    value={formData.corporateService}
                    onChange={handleChange}
                    className="h-12 w-full bg-muted border-border focus:border-primary rounded-md px-3"
                  >
                    <option value="">Select a corporate service</option>
                    {corporateServices.map((service, idx) => (
                      <option key={idx} value={service.label}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Personal Services Dropdown */}
                <div>
                  <label
                    htmlFor="personalService"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Personal Services
                  </label>
                  <select
                    id="personalService"
                    name="personalService"
                    value={formData.personalService}
                    onChange={handleChange}
                    className="h-12 w-full bg-muted border-border focus:border-primary rounded-md px-3"
                  >
                    <option value="">Select a personal service</option>
                    {personalServices.map((service, idx) => (
                      <option key={idx} value={service.label}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your spiritual needs or questions..."
                    className="min-h-[140px] bg-muted border-border focus:border-primary resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
