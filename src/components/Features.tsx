import React, { useEffect, useRef } from "react";
import { Star, Award, ShieldCheck, Code, Users, Zap, Clock, Target, Cpu } from "lucide-react";
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
      icon: Code,
      title: "Smart Matching",
      description: "AI-powered algorithm matches candidates with the perfect roles based on skills and experience",
      stats: { value: "95%", label: "Match Accuracy" }
    },
    {
      icon: Users,
      title: "Global Talent Pool",
      description: "Access to pre-vetted developers from around the world",
      stats: { value: "50k+", label: "Active Developers" }
    },
    {
      icon: Zap,
      title: "Quick Hiring",
      description: "Streamlined process gets you from posting to hiring in record time",
      stats: { value: "48hrs", label: "Average Time" }
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for both employers and candidates",
      stats: { value: "100%", label: "Support Coverage" }
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Find developers that perfectly match your tech stack and culture",
      stats: { value: "89%", label: "Success Rate" }
    },
    {
      icon: Cpu,
      title: "Tech Assessment",
      description: "Automated technical assessments and code reviews",
      stats: { value: "2.5k+", label: "Skills Tested" }
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
            Why Choose Us?
          </h2>
          <p className="text-white/80">Our AI-powered platform revolutionizes tech recruitment with these powerful features</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={el => buttonRefs.current[index] = el}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card floating button-trail p-8 rounded-xl transform transition-all duration-300"
            >
              <div className="w-12 h-12 bg-mint/20 rounded-full flex items-center justify-center mb-6">
                {React.createElement(feature.icon, { className: "w-6 h-6 text-mint" })}
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