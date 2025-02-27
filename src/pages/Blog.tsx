
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, ChevronRight, Check, Code, ArrowRight, Laptop, Brain, MessageSquare } from "lucide-react";
import React, { useState } from "react";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const featuredPost = {
    title: "The Future of AI in Technical Recruitment",
    excerpt: "How artificial intelligence is revolutionizing the way companies find and hire technical talent in 2024 and beyond.",
    date: "June 15, 2024",
    author: "Sarah Johnson",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&h=600",
    category: "Artificial Intelligence"
  };

  const posts = [
    {
      title: "5 Ways to Optimize Your Technical Hiring Process",
      excerpt: "Practical strategies for reducing time-to-hire and improving candidate quality in your engineering team.",
      date: "June 10, 2024",
      author: "Michael Rodriguez",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400",
      category: "Recruitment"
    },
    {
      title: "Remote Work Culture: Building Distributed Engineering Teams",
      excerpt: "Best practices for hiring, onboarding, and maintaining cohesion in global development teams.",
      date: "June 5, 2024",
      author: "Lisa Zhang",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&h=400",
      category: "Remote Work"
    },
    {
      title: "Technical Assessment Strategies That Don't Alienate Candidates",
      excerpt: "How to evaluate technical skills effectively while creating a positive candidate experience.",
      date: "May 30, 2024",
      author: "James Wilson",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=600&h=400",
      category: "Assessments"
    },
    {
      title: "Diversity in Tech: Strategies for Inclusive Hiring",
      excerpt: "Actionable approaches to build a diverse engineering team and create an inclusive workplace.",
      date: "May 25, 2024",
      author: "Emily Patel",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&h=400",
      category: "Diversity & Inclusion"
    },
    {
      title: "The Rise of Specialized Tech Talent Marketplaces",
      excerpt: "Why niche platforms are replacing traditional job boards for technical recruitment.",
      date: "May 20, 2024",
      author: "David Chen",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=600&h=400",
      category: "Industry Trends"
    },
    {
      title: "Data-Driven Recruitment: Using Analytics to Improve Hiring",
      excerpt: "How to leverage metrics and KPIs to optimize your technical recruitment funnel.",
      date: "May 15, 2024",
      author: "Sarah Johnson",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
      category: "Data & Analytics"
    }
  ];

  const categories = [
    "All Posts",
    "Artificial Intelligence",
    "Recruitment",
    "Remote Work",
    "Assessments",
    "Diversity & Inclusion",
    "Industry Trends",
    "Data & Analytics"
  ];

  // Filter posts based on selected category
  const filteredPosts = activeCategory === "All Posts" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

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
            <h1 className="text-5xl font-bold mb-6">ByteHire Blog</h1>
            <p className="text-white/80 text-lg">
              Insights, trends, and best practices in technical recruitment and hiring
            </p>
          </motion.div>
          
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 pb-2 min-w-max">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={category === activeCategory ? "default" : "outline"}
                  className={category === activeCategory 
                    ? "bg-oceanic hover:bg-oceanic-deep text-white" 
                    : "border-mint/30 text-mint hover:bg-mint/10"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <div className="glass-card overflow-hidden rounded-xl relative shadow-gradient-oceanic">
              <div className="relative h-96">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="bg-oceanic text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-3">{featuredPost.title}</h2>
                  <p className="text-white/80 mb-4 max-w-3xl">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-white/60 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.4, duration: 0.6 }}
                className="glass-card overflow-hidden rounded-xl shadow-gradient-mint"
              >
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-oceanic/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 hover-glow">{post.title}</h3>
                  <p className="text-white/80 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-white/60 text-sm">
                      <span className="mr-3">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" className="p-0 hover:bg-transparent text-mint">
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredPosts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <Button className="bg-gradient-oceanic hover:bg-oceanic-deep text-white px-8">
                Load More Articles
              </Button>
            </motion.div>
          )}

          {/* New Section 1: Technical Interview Prep - Based on first design image */}
          <section 
            className="mt-32 mb-24 glass-card rounded-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #10141f 0%, #0f172a 100%)',
              borderColor: 'rgba(99, 102, 241, 0.2)',
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center">
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-6" 
                  style={{ color: '#f8fafc' }}
                >
                  Ace your next technical interview with confidence.
                </h2>
                <p className="text-lg mb-6 text-white/80">
                  Practice your skills the way they are meant to be practiced - in a real interview setting. 
                  ByteHire provides the most popular Data Structures, Algorithms and Front-end technical 
                  questions asked in Technical Interview Rounds.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Button 
                    className="px-6 py-2 rounded-md" 
                    style={{ 
                      backgroundColor: '#374151', 
                      color: 'white',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Coding Interview
                  </Button>
                  <Button 
                    className="px-6 py-2 rounded-md"
                    style={{ 
                      backgroundColor: '#4c1d95', 
                      color: 'white',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Laptop className="w-4 h-4 mr-2" />
                    Front-end Interview
                  </Button>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ background: '#131626' }}>
                <pre
                  className="text-xs md:text-sm p-6 font-mono h-full"
                  style={{ color: '#a3e635' }}
                >
                  <code>
{`import React, { useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './style.css';

export default function App() {
  const useRef = useRef(null);

  useEffect(()=>{
    document.addEventListener('click', () => toast('Clicked outside 🎉'));
  }, []);

  return (
    <>
      <Toaster />
      <div className="container">
        <div className="input" ref={useRef}>
        </div>
      </div>
    </>
  );
}`}
                  </code>
                </pre>
                <div 
                  className="absolute top-3 left-3 flex gap-1.5"
                  style={{ pointerEvents: 'none' }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10b981' }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* New Section 2: Platform for Developers - Based on second design image */}
          <section 
            className="mb-24 relative overflow-hidden glass-card rounded-xl py-20 px-8"
            style={{ 
              background: 'linear-gradient(135deg, rgba(25, 30, 62, 0.95) 0%, rgba(33, 39, 80, 0.9) 100%)',
            }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ 
                  color: '#f8fafc',
                  textShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                }}
              >
                A Single Platform Built for Developers and DevOps
              </h2>
              <p className="text-lg mb-10 text-white/80">
                ByteHire helps developers build secure and scalable applications quickly 
                while helping DevOps teams standardize and automate service and environment management.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  className="px-8 py-2 rounded-md"
                  style={{ 
                    backgroundColor: '#4f46e5', 
                    color: 'white',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Try for Free
                </Button>
                <Button 
                  className="px-8 py-2 rounded-md"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                    color: 'white',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get a Demo
                </Button>
              </div>
            </div>

            <div className="mt-20 relative">
              <div 
                className="w-40 h-40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(67, 56, 202, 0.3) 50%, transparent 70%)',
                  boxShadow: '0 0 60px rgba(139, 92, 246, 0.6)',
                }}
              >
                <div 
                  className="w-24 h-24 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{ 
                    background: 'rgba(139, 92, 246, 0.8)',
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)',
                  }}
                >
                  <Brain className="text-white w-12 h-12" />
                </div>
              </div>

              {/* Orbital Path Design */}
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-64 max-w-4xl mx-auto">
                  <div className="text-right space-y-8">
                    <div className="flex items-center justify-end">
                      <p className="mr-3 text-white/90 font-medium">Self-service environments</p>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-end">
                      <p className="mr-3 text-white/90 font-medium">Real-time logging</p>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-end">
                      <p className="mr-3 text-white/90 font-medium">CLI</p>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-end">
                      <p className="mr-3 text-white/90 font-medium">Integrations</p>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-left space-y-8">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                      <p className="ml-3 text-white/90 font-medium">Centralized configs</p>
                    </div>
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                      <p className="ml-3 text-white/90 font-medium">Built-in CI/CD</p>
                    </div>
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                      <p className="ml-3 text-white/90 font-medium">Resource control</p>
                    </div>
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                      <p className="ml-3 text-white/90 font-medium">Integrations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile-friendly simplified version */}
              <div className="md:hidden mt-32 space-y-4">
                <h3 className="text-center text-white/90 font-bold mb-4">Developer Features</h3>
                <div className="space-y-2">
                  {["Self-service environments", "Real-time logging", "CLI", "Integrations"].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                      <p className="text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-center text-white/90 font-bold mb-4 mt-6">DevOps Features</h3>
                <div className="space-y-2">
                  {["Centralized configs", "Built-in CI/CD", "Resource control", "Integrations"].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.8)' }}
                      ></div>
                      <p className="text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* New Section 3: AI Proposals - Based on third design image */}
          <section 
            className="mb-24 glass-card rounded-xl overflow-hidden"
            style={{
              backgroundImage: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
            }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: '#f8fafc' }}
                >
                  Create meaningful proposals in less than a minute.
                </h2>
                <p className="text-lg mb-4 text-white/80">
                  Use ByteHire's AI to write proposals that get you clients within minutes.
                </p>
                <p className="text-lg mb-8 text-white/80">
                  Sidestep the slog and start winning today!
                </p>
                <Button 
                  className="rounded-md py-3 w-full max-w-xs uppercase font-semibold tracking-wide"
                  style={{ 
                    backgroundColor: '#10b981', 
                    color: 'white',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Try ByteHire For Free
                </Button>

                <div className="mt-16">
                  <div className="flex items-center mb-6">
                    <img 
                      src="/lovable-uploads/742fe382-ae2d-4d9f-b237-f53785a36ebf.png" 
                      alt="ByteHire Logo" 
                      className="h-8"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>

                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="you@example.com" 
                        className="w-full py-3 px-4 rounded-md bg-white/10 text-white/90 border border-white/20"
                      />
                    </div>
                    <button 
                      className="bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors"
                    >
                      Stay Updated
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50"></div>
                <img 
                  src="/lovable-uploads/742fe382-ae2d-4d9f-b237-f53785a36ebf.png" 
                  alt="Proposal Example" 
                  className="object-cover h-full w-full"
                  style={{ objectPosition: 'center right' }}
                />

                <div 
                  className="absolute right-12 top-1/4 bg-white/10 backdrop-blur-sm rounded-lg p-4 w-64"
                  style={{ 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div className="flex items-center mb-2">
                    <MessageSquare className="text-emerald-500 w-5 h-5 mr-2" />
                    <h3 className="text-white font-medium text-sm">AI Proposal Generator</h3>
                  </div>
                  <p className="text-white/80 text-xs">
                    "Hello John, Thanks for reaching out. I'm a skilled developer with 5+ years experience in React and Node.js..."
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BlogPage;
