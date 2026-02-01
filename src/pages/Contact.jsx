import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, HeartHandshake } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "emailjs-com";

/* -------------------- Services -------------------- */
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

/* -------------------- Validation -------------------- */
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
  corporateService: z.string().optional(),
  personalService: z.string().optional(),
});

const Contact = () => {
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      await emailjs.send(
        "service_djsisbs",
        "template_tyjx5dl",
        { ...validatedData, time: new Date().toLocaleString() },
        "5s1Ypz71xNFSSKepP",
      );

      toast({
        title: "Message Sent ✨",
        description: "We'll get back to you very soon.",
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
      toast({
        title: "Error",
        description: "Please check the form and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* -------------------- Banner Image -------------------- */}
      <section className="relative h-[60vh]">
        <img
          src="/images/contact-banner.jpg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-secondary uppercase tracking-widest text-sm mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Let's Begin Your Healing Journey
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Personal wellness or corporate wellbeing — we're here to guide
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* -------------------- Content -------------------- */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* -------- Left Creative Section -------- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold">
                A Safe Space to Share 🌿
              </h2>

              <p className="text-lg text-muted-foreground">
                Whether you're seeking personal clarity or building a healthier
                workplace, your first step starts here.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <HeartHandshake className="text-secondary" />
                  <span>Confidential & compassionate approach</span>
                </div>
                <div className="flex items-center gap-4">
                  <HeartHandshake className="text-secondary" />
                  <span>Tailored personal & corporate solutions</span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4">
                  <Phone className="text-secondary" />
                  <span>+91 93402 16182</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-secondary" />
                  <span>ashrayspiritualsoul@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-secondary" />
                  <span>Bhopal, Madhya Pradesh, India</span>
                </div>
              </div>
            </motion.div>

            {/* -------- Form Section -------- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border shadow-soft"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <select
                  name="corporateService"
                  value={formData.corporateService}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md border px-3"
                >
                  <option value="">Corporate Services</option>
                  {corporateServices.map((s, i) => (
                    <option key={i} value={s.label}>
                      {s.label}
                    </option>
                  ))}
                </select>

                <select
                  name="personalService"
                  value={formData.personalService}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md border px-3"
                >
                  <option value="">Personal Wellness</option>
                  {personalServices.map((s, i) => (
                    <option key={i} value={s.label}>
                      {s.label}
                    </option>
                  ))}
                </select>

                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
