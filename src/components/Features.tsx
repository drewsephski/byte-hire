import React, { useEffect, useRef } from "react";
import { Star, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, element: HTMLDivElement) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      element.style.setProperty('--x', `${x}%`);
      element.style.setProperty('--y', `${y}%`);
    };

    buttonRefs.current.forEach(button => {
      if (button) {
        button.addEventListener('mousemove', (e) => handleMouseMove(e, button));
      }
    });

    return () => {
      buttonRefs.current.forEach(button => {
        if (button) {
          button.removeEventListener('mousemove', (e) => handleMouseMove(e, button));
        }
      });
    };
  }, []);

  const features = [
    {
      icon: Star,
      title: "Post Your Requirements",
      description: "Specify your needs and let our AI match you with the perfect candidates",
      stats: { value: "95%", label: "Match Rate" }
    },
    {
      icon: Award,
      title: "Review Matches",
      description: "Get a curated list of pre-screened candidates that match your criteria",
      stats: { value: "48hrs", label: "Average Time" }
    },
    {
      icon: ShieldCheck,
      title: "Hire the Best",
      description: "Interview and hire top tech talent efficiently",
      stats: { value: "89%", label: "Success Rate" }
    },
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
          <h2 className="text-4xl font-bold mb-4 text-white">
            How it works?
          </h2>
          <p className="text-white/80">Our AI-powered platform simplifies tech recruitment</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={el => buttonRefs.current[index] = el}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card floating button-trail p-8 rounded-xl transform transition-all duration-300"
            >
              <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mb-6">
                {React.createElement(feature.icon, { className: "w-6 h-6 text-forest" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/80 mb-6">{feature.description}</p>
              <div className="mt-auto">
                <div className="text-mint text-2xl font-bold">{feature.stats.value}</div>
                <div className="text-white/60 text-sm">{feature.stats.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;