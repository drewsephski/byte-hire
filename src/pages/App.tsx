
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Code, Server, Database, Shield, Settings } from "lucide-react";
import React from "react";

const AppPage = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI Matching Engine",
      description: "Our proprietary algorithm analyzes hundreds of data points to find the perfect match."
    },
    {
      icon: Code,
      title: "Technical Assessment",
      description: "Automated coding challenges and evaluations to verify skills quickly."
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Secure, scalable platform that handles thousands of matches per second."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive talent database with secure storage and easy retrieval."
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "Advanced encryption and security protocols to protect sensitive data."
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Tailor the platform to your specific recruitment needs and preferences."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Our Platform</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple to-purple-dark mx-auto mb-6 rounded-full"></div>
            <p className="text-white/80 text-lg">
              ByteHire's innovative technology platform leverages AI to connect tech talent with the perfect opportunities.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(155, 135, 245, 0.1)'
                }}
                className="glass-card interactive-card p-8 rounded-xl bg-gradient-purple shadow-gradient-purple"
              >
                <div className="card-icon">
                  <feature.icon className="w-12 h-12 text-purple mb-4" />
                </div>
                <div className="card-content">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Button className="purple-gradient-btn button-hover-effect text-white font-medium px-8 py-6 text-lg">
              Start Free Trial
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AppPage;
