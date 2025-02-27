
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
const AboutUsPage = () => {
  const technologies = [{
    name: "React",
    role: "Frontend Framework",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&h=300",
    bio: "Our primary UI library for building dynamic, responsive interfaces with a component-based architecture."
  }, {
    name: "Node.js",
    role: "Backend Runtime",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=300&h=300",
    bio: "Powers our server-side applications, providing a fast, scalable JavaScript runtime environment for API services."
  }, {
    name: "TypeScript",
    role: "Programming Language",
    image: "https://images.unsplash.com/photo-1637058267061-1813eb071942?auto=format&fit=crop&w=300&h=300",
    bio: "Enhances our JavaScript codebase with static typing, improving maintainability and catching errors early."
  }, {
    name: "MongoDB",
    role: "Database Technology",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=300&h=300",
    bio: "Our NoSQL database solution for storing and retrieving data with flexibility for rapid iterations and scalability."
  }, {
    name: "TensorFlow",
    role: "Machine Learning Framework",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=300&h=300",
    bio: "Powers our AI matching algorithms, providing advanced machine learning capabilities for recruitment optimization."
  }, {
    name: "AWS",
    role: "Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1549605659-32d82da3a059?auto=format&fit=crop&w=300&h=300",
    bio: "Hosts our distributed systems with reliable, scalable cloud computing services for global availability."
  }];
  const milestones = [{
    year: "2018",
    event: "ByteHire founded in San Francisco, California"
  }, {
    year: "2019",
    event: "Seed funding round of $2.5M completed"
  }, {
    year: "2020",
    event: "First 1,000 successful placements milestone"
  }, {
    year: "2021",
    event: "Series A funding of $15M to scale operations"
  }, {
    year: "2022",
    event: "International expansion to Europe and Asia"
  }, {
    year: "2023",
    event: "Reached 50,000 developers on the platform"
  }, {
    year: "Present",
    event: "Serving over 10,000 companies worldwide"
  }];
  return <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About ByteHire</h1>
            <p className="text-white/80 text-lg">
              We're on a mission to revolutionize technical hiring with AI-powered solutions that connect the right talent with the right opportunities.
            </p>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="glass-card p-8 rounded-xl bg-gradient-forest shadow-gradient-oceanic">
              <p className="text-white/90 text-lg mb-4">
                ByteHire was founded in 2018 by David Chen and Sarah Johnson, who experienced firsthand the challenges of technical recruiting from both sides of the equation.
              </p>
              <p className="text-white/90 text-lg mb-4">
                After years of frustration with traditional recruitment methods, they set out to build a platform that uses artificial intelligence to make the matching process more accurate, efficient, and fair for both companies and candidates.
              </p>
              <p className="text-white/90 text-lg">
                Today, ByteHire has grown into a global platform connecting tens of thousands of skilled developers with companies ranging from startups to Fortune 500 enterprises.
              </p>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent rounded-xl">
              {technologies.map((tech, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1 * index + 0.4,
              duration: 0.6
            }} className="glass-card interactive-card overflow-hidden rounded-xl shadow-gradient-purple">
                  <div className="h-64 flex items-center justify-center p-6 bg-gradient-purple-deep">
                    <img src={tech.image} alt={tech.name} className="w-32 h-32 object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-purple">{tech.name}</h3>
                    <p className="text-purple-light mb-3">{tech.role}</p>
                    <p className="text-white/80">{tech.bio}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }}>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="glass-card p-8 rounded-xl bg-gradient-forest shadow-gradient-mint">
              <div className="space-y-6">
                {milestones.map((milestone, index) => <div key={index} className="flex">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-oceanic font-bold">{milestone.year}</span>
                    </div>
                    <div className="flex-grow pl-4 border-l border-mint/30">
                      <p className="text-white/90">{milestone.event}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>;
};
export default AboutUsPage;
