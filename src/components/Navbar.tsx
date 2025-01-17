import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white transition-colors hover:text-mint">
          ByteHire
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/app" className="text-white/90 hover:text-mint transition-colors">
            App
          </Link>
          <Link to="/pricing" className="text-white/90 hover:text-mint transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-white/90 hover:text-mint transition-colors">
            About Us
          </Link>
          <Link to="/blog" className="text-white/90 hover:text-mint transition-colors">
            Blog
          </Link>
        </div>
        <Button className="bg-mint hover:bg-mint/90 text-forest font-medium transition-transform hover:scale-105">
          Get started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;