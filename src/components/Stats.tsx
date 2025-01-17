import React from 'react';
import { motion } from "framer-motion";
import { Users, Clock, Building2, Award, Cpu, Globe } from "lucide-react";

const Stats = () => {
  const stats = [
    { 
      value: "95%", 
      label: "Placement Rate",
      description: "Successful placements within 30 days",
      icon: Users
    },
    { 
      value: "48hrs", 
      label: "Average Response",
      description: "From job posting to first candidate",
      icon: Clock
    },
    { 
      value: "10k+", 
      label: "Partner Companies",
      description: "Global companies trust our platform",
      icon: Building2
    },
    { 
      value: "50k+", 
      label: "Active Developers",
      description: "Pre-vetted tech professionals",
      icon: Cpu
    },
    { 
      value: "98%", 
      label: "Client Satisfaction",
      description: "Based on post-hire surveys",
      icon: Award
    },
    { 
      value: "120+", 
      label: "Countries Covered",
      description: "Global talent network",
      icon: Globe
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-white/80">Transforming tech recruitment with data-driven solutions</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
              }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.4,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl border border-mint/10 
                        transition-all hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5
                        transform-gpu perspective-1000"
            >
              <div className="flex items-center gap-4 mb-4">
                {React.createElement(stat.icon, { className: "w-8 h-8 text-mint opacity-80" })}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-4xl font-bold text-mint"
                >
                  {stat.value}
                </motion.p>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <p className="text-xl font-medium text-white mb-2">{stat.label}</p>
                <p className="text-white/60">{stat.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;