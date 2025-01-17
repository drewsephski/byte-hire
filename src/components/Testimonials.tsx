import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ByteHire transformed our hiring process. We found amazing developers in record time, and the AI matching system is incredibly accurate.",
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200"
    },
    {
      quote: "The technical assessment platform saved us countless hours. The quality of candidates has been consistently outstanding.",
      author: "Michael Rodriguez",
      role: "Head of Engineering at DevScale",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200"
    },
    {
      quote: "Outstanding talent pool and excellent support throughout the hiring process. The platform's AI recommendations were spot-on.",
      author: "Emily Watson",
      role: "VP Engineering at CloudPeak",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200"
    },
    {
      quote: "The speed and accuracy of ByteHire's matching system is unparalleled. We've built our entire engineering team through the platform.",
      author: "David Park",
      role: "Founder at CodeVenture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200"
    },
    {
      quote: "ByteHire's platform has revolutionized how we approach technical hiring. The quality of matches is consistently impressive.",
      author: "Lisa Thompson",
      role: "Tech Lead at InnovateTech",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200"
    },
    {
      quote: "The automated assessment tools and AI matching have made our hiring process 3x faster. Highly recommended!",
      author: "James Wilson",
      role: "CTO at FutureStack",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-forest-light/10">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-white/80">Trusted by leading tech companies worldwide</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card floating p-8 rounded-xl relative"
            >
              <Quote className="text-mint w-8 h-8 mb-4 opacity-80" />
              <p className="text-white/90 mb-6 text-lg">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-mint/20"
                />
                <div>
                  <p className="font-medium text-mint">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
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