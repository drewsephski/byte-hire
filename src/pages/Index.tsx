
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import MobilePreview from "@/components/MobilePreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Laptop, Brain, MessageSquare, ChevronRight, ArrowRight, Check } from "lucide-react";
import React from "react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* New Section 1: Technical Interview Prep */}
      <section 
        className="py-20 px-4"
      >
        <div className="container mx-auto">
          <div 
            className="glass-card rounded-xl overflow-hidden"
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
          </div>
        </div>
      </section>
      
      <Features />
      
      {/* New Section 2: Platform for Developers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div 
            className="relative overflow-hidden glass-card rounded-xl py-20 px-8"
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
          </div>
        </div>
      </section>
      
      <MobilePreview />
      
      {/* New Section 3: AI Proposals */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div 
            className="glass-card rounded-xl overflow-hidden"
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
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
