
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, ChevronRight } from "lucide-react";
import React from "react";

const BlogPage = () => {
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
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 
                    ? "bg-oceanic hover:bg-oceanic-deep text-white" 
                    : "border-mint/30 text-mint hover:bg-mint/10"}
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
            {posts.map((post, index) => (
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
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BlogPage;
