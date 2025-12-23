import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Text Content */}
      <div className="z-10 text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-3 py-1 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm"
        >
          <span className="font-mono text-xs text-primary tracking-widest">● AVAILABLE FOR WORK</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.9]"
        >
          GURU <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">VEL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto text-gray-400 font-mono text-sm md:text-base mb-8"
        >
          Forging pixel-perfect digital products with a focus on motion, aesthetics, and interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <Link to="/about" className="px-8 py-3 bg-white text-black font-mono text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors rounded-sm">
            About Me
          </Link>

          <div className="flex gap-4">
            <a href="https://github.com/Guruvel13" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full bg-white/5 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;