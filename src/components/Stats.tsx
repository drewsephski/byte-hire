import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { value: "95%", label: "Placement Rate" },
    { value: "48hrs", label: "Average Response Time" },
    { value: "10k+", label: "Companies Trust Us" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
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
                delay: index * 0.2,
                duration: 0.4,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
              className="bg-forest-light/80 backdrop-blur-md p-8 rounded-xl border border-mint/10 
                        transition-all hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5
                        transform-gpu perspective-1000"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="text-4xl font-bold text-mint mb-2"
              >
                {stat.value}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="text-white/80"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;