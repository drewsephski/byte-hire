import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
const AboutUsPage = () => {
  const teamMembers = [{
    name: "David Chen",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300",
    bio: "Former tech recruiter with over 15 years of experience connecting talent with top companies."
  }, {
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300",
    bio: "AI expert with a Ph.D. from MIT and previous experience leading engineering at tech giants."
  }, {
    name: "Michael Rodriguez",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
    bio: "Product visionary who has built recruitment tools used by Fortune 500 companies."
  }, {
    name: "Lisa Zhang",
    role: "Chief Data Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300",
    bio: "Data scientist specializing in matching algorithms and predictive recruitment analytics."
  }, {
    name: "James Wilson",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
    bio: "Software architect who has scaled platforms serving millions of users worldwide."
  }, {
    name: "Emily Patel",
    role: "VP of Customer Success",
    image: "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?auto=format&fit=crop&w=300&h=300",
    bio: "Client relationship expert dedicated to ensuring success for companies of all sizes."
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
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent rounded-xl">
              {teamMembers.map((member, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1 * index + 0.4,
              duration: 0.6
            }} className="glass-card overflow-hidden rounded-xl">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mint">{member.name}</h3>
                    <p className="text-oceanic-light mb-3">{member.role}</p>
                    <p className="text-white/80">{member.bio}</p>
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