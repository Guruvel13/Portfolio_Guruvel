import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      
      {/* Short Call to Action Section for other pages */}
      <section className="py-20 px-6 border-t border-white/10 bg-surface/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-primary text-xs tracking-widest block mb-2">// EXPLORE MORE</span>
            <h2 className="text-3xl font-bold">DIVE INTO MY WORK</h2>
          </div>
          <a href="/work" className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors">
            View Projects
            <span className="group-hover:translate-x-1 transition-transform">-></span>
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
