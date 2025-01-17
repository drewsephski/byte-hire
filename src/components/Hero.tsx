import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20 transition-colors hover:bg-mint/20">
            <Star className="w-4 h-4 text-mint" />
            <span className="text-mint text-sm font-medium">AI-Powered Recruitment</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Hire top
            <br />
            tech talent
            <br />
            wisely
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            Find and hire the best tech professionals for your team with our AI-powered recruitment platform.
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg transition-transform hover:scale-105">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-mint/20 text-mint hover:bg-mint/10 transition-transform hover:scale-105">
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
          <img
            src="https://images.unsplash.com/photo-1550439062-609e1531270e"
            alt="Tech professional coding"
            className="relative rounded-2xl shadow-2xl transition-transform hover:scale-[1.02]"
          />
          <div className="absolute -bottom-10 -left-10 bg-forest-light p-6 rounded-xl shadow-xl border border-mint/10 transition-all hover:border-mint/30 hover:shadow-mint/20">
            <p className="text-mint text-4xl font-bold">124k+</p>
            <p className="text-white/80">Active candidates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;