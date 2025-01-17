import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ByteHire transformed our hiring process. We found amazing developers in record time.",
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      quote: "The AI-powered matching system is incredibly accurate. It saved us countless hours.",
      author: "Michael Rodriguez",
      role: "Head of Engineering at DevScale",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      quote: "Outstanding talent pool and excellent support throughout the hiring process.",
      author: "Emily Watson",
      role: "VP Engineering at CloudPeak",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <section className="py-20 px-4">
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
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card floating p-8 rounded-xl relative"
            >
              <Quote className="text-mint w-8 h-8 mb-4" />
              <p className="text-white/90 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
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