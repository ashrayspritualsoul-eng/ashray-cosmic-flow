import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    text: "Ashi's tarot reading was incredibly accurate and helped me gain clarity during a difficult period. Her compassionate approach made me feel truly understood. I'm forever grateful for her guidance.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    text: "The astrology consultation opened my eyes to patterns I never noticed. Ashi explained complex concepts in a way that made complete sense. Her insights about my career path were spot on!",
    rating: 5,
  },
  {
    name: "Ankit Verma",
    location: "Dubai, UAE",
    text: "I was skeptical at first, but the Reiki healing session with Ashi was transformative. I felt a sense of peace I hadn't experienced in years. She has a genuine gift for healing.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    location: "New York, USA",
    text: "The numerology reading revealed so much about my life purpose. Ashi's warm and professional approach made the session truly special. Highly recommend her services!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-tertiary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
            Words from <span className="text-gradient">Blessed Souls</span>
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Real stories from clients who have experienced transformation through spiritual guidance.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-soft relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary opacity-50" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
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
