
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { 
  Rocket, 
  Briefcase, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  UserPlus, 
  Building 
} from "lucide-react";

const GetStartedPage = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create an account",
      description: "Set up your company profile and define your recruitment needs"
    },
    {
      icon: Briefcase,
      title: "Post your job",
      description: "Create detailed job descriptions with required skills and experience"
    },
    {
      icon: Users,
      title: "Review candidates",
      description: "Our AI algorithm matches the most qualified candidates for your review"
    },
    {
      icon: CheckCircle,
      title: "Interview and hire",
      description: "Schedule interviews and make offers through our platform"
    }
  ];

  const clientTypes = [
    {
      icon: Rocket,
      title: "Startups",
      description: "Find technical talent to build your product and scale your team quickly",
      benefits: ["Quick hiring process", "Budget-friendly plans", "Access to pre-vetted developers"]
    },
    {
      icon: Building,
      title: "Enterprises",
      description: "Enterprise-grade solutions for companies with complex technical hiring needs",
      benefits: ["Custom workflows", "Integration with your ATS", "Advanced reporting and analytics"]
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
            <h1 className="text-5xl font-bold mb-6">Start Hiring Top Tech Talent</h1>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of companies who have transformed their technical recruitment process with ByteHire
            </p>
            <Button className="bg-oceanic hover:bg-oceanic-deep text-white font-medium px-8 py-6 text-lg">
              Create Free Account
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  className="glass-card p-8 rounded-xl text-center bg-gradient-forest shadow-gradient-oceanic relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-mint/50" />
                    </div>
                  )}
                  <div className="w-16 h-16 bg-oceanic/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {React.createElement(step.icon, { className: "w-8 h-8 text-oceanic-light" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Solutions For Every Business</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  className="glass-card p-8 rounded-xl bg-gradient-oceanic shadow-gradient-mint"
                >
                  <div className="flex items-center mb-6">
                    {React.createElement(client.icon, { className: "w-10 h-10 text-oceanic-light mr-4" })}
                    <h3 className="text-2xl font-bold">{client.title}</h3>
                  </div>
                  <p className="text-white/80 mb-6">{client.description}</p>
                  <ul className="space-y-3">
                    {client.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-mint w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full bg-oceanic-deep hover:bg-oceanic text-white">
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card p-12 rounded-xl text-center bg-gradient-forest shadow-gradient-oceanic"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to transform your hiring process?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies who have found their perfect technical match with ByteHire's AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-oceanic hover:bg-oceanic-deep text-white font-medium px-8 py-6 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-mint/20 text-mint hover:bg-mint/10 px-8 py-6 text-lg">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default GetStartedPage;
