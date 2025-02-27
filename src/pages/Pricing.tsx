
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import React from "react";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$249",
      period: "per month",
      description: "Perfect for startups and small teams",
      features: [
        "Up to 5 job postings",
        "50 candidate matches",
        "Basic AI matching",
        "Email support",
        "Standard reporting"
      ],
      highlight: false,
      ctaText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$749",
      period: "per month",
      description: "For growing companies and larger teams",
      features: [
        "Up to 20 job postings",
        "250 candidate matches",
        "Advanced AI matching",
        "Priority support",
        "Enhanced reporting",
        "Technical assessments"
      ],
      highlight: true,
      ctaText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored solutions",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited job postings",
        "Unlimited candidate matches",
        "Premium AI matching",
        "Dedicated account manager",
        "Custom reporting",
        "Full integration suite",
        "White-labeling options"
      ],
      highlight: false,
      ctaText: "Contact Sales"
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
            <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-white/80 text-lg">
              Choose the plan that works best for your recruitment needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`glass-card p-8 rounded-xl ${plan.highlight ? 'border-oceanic border-2 shadow-gradient-oceanic' : 'border-mint/10'} relative overflow-hidden`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-oceanic text-white px-4 py-1 text-sm font-medium">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-mint">{plan.price}</span>
                  <span className="text-white/60 ml-1">{plan.period}</span>
                </div>
                <p className="text-white/80 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-mint w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.highlight ? 'bg-oceanic hover:bg-oceanic-deep' : 'bg-mint/20 hover:bg-mint/30 text-mint'}`}>
                  {plan.ctaText}
                </Button>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-3xl mx-auto text-center p-8 glass-card rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-white/80 mb-6">
              We offer tailored packages for enterprises with specific requirements. Contact our team to discuss your needs.
            </p>
            <Button className="bg-gradient-oceanic hover:bg-oceanic-deep text-white font-medium">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PricingPage;
