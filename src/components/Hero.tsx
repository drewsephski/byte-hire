
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-20 px-4"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-purple/10 w-fit px-4 py-2 rounded-full border border-purple/20 transition-all hover:bg-purple/20"
          >
            <Star className="w-4 h-4 text-purple" />
            <span className="text-purple text-sm font-medium">AI-Powered Recruitment</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-white"
          >
            Hire top<br />tech talent<br />wisely
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-white/80 max-w-md"
          >
            Find and hire the best tech professionals for your team with our AI-powered recruitment platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <Link to="/get-started">
              <Button className="purple-gradient-btn button-hover-effect text-white font-medium px-8 py-6 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-purple/20 text-purple hover:bg-purple/10 button-hover-effect">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-br from-purple/20 to-oceanic/20 rounded-2xl blur opacity-30" />
          <motion.img
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="https://images.unsplash.com/photo-1550439062-609e1531270e"
            alt="Tech professional coding"
            className="relative rounded-2xl shadow-2xl"
          />
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-10 -left-10 bg-forest-light/80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-purple/10 transition-all hover:border-purple/30 hover:shadow-purple/20"
          >
            <p className="text-purple text-4xl font-bold">124k+</p>
            <p className="text-white/80">Active candidates</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
