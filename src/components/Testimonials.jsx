import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "HR Lead, Mumbai",
    text: "The stress management workshop was practical, grounded, and easy for our teams to apply immediately. We saw stronger conversations around wellbeing within days.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    location: "Founder, Bengaluru",
    text: "Ashi brought calm structure to a team that was stretched thin. The burnout prevention sessions helped managers recognize early warning signs and respond better.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    location: "People Ops, London",
    text: "What stood out was the balance between empathy and action. The leadership wellbeing program gave our managers language, tools, and confidence.",
    rating: 5,
  },
  {
    name: "Ankit Verma",
    location: "Individual Client, Dubai",
    text: "The individual therapy experience felt safe, thoughtful, and genuinely helpful. I left sessions with more clarity and healthier ways to handle stress.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-tertiary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-5 sm:mb-6">
            What Clients and Teams <span className="text-gradient">Say</span>
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Feedback from organizations and individuals who trusted Ashray
            Wellness for meaningful mental wellness support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-5 sm:p-6 lg:p-8 rounded-2xl border border-border shadow-soft relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary opacity-50" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-cosmic flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
