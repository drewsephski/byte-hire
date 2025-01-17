import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white transition-all hover:text-mint hover:scale-105">
          ByteHire
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {["App", "Pricing", "About Us", "Blog"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Link 
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white/90 hover:text-mint transition-all hover:scale-105"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button className="bg-mint/80 backdrop-blur-sm hover:bg-mint/90 text-forest font-medium 
                           transition-all hover:scale-105 hover:shadow-lg hover:shadow-mint/20">
            Get started
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;