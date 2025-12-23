import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const rotateX = useTransform(scrollY, [0, 500], [20, 0]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden perspective-1000">
      
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
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[0.9]"
        >
          DIGITAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">EXPERIENCES</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto text-gray-400 font-mono text-sm md:text-base"
        >
          Forging pixel-perfect digital products with a focus on motion, aesthetics, and interaction.
        </motion.p>
      </div>

      {/* 3D Tilted Interface Mockup */}
      <motion.div 
        style={{ y, rotateX, opacity }}
        className="w-full max-w-5xl px-4 relative preserve-3d"
      >
        <div className="relative aspect-[16/9] bg-surface rounded-xl border border-white/10 shadow-2xl overflow-hidden group">
          
          {/* Mockup Header */}
          <div className="h-12 bg-black/50 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            <div className="flex-1 text-center font-mono text-xs text-gray-600">portfolio_v1.0.exe</div>
          </div>

          {/* Mockup Content */}
          <div className="p-8 grid grid-cols-12 gap-4 h-full">
            {/* Sidebar */}
            <div className="col-span-3 bg-white/5 rounded-lg border border-white/5 p-4 hidden md:block">
              <div className="h-2 w-12 bg-white/10 rounded mb-4"></div>
              <div className="space-y-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-8 w-full bg-white/5 rounded"></div>
                ))}
              </div>
            </div>
            
            {/* Main Area */}
            <div className="col-span-12 md:col-span-9 bg-white/5 rounded-lg border border-white/5 p-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
               <div className="relative z-10 flex flex-col justify-center h-full">
                 <div className="h-4 w-32 bg-primary/50 mb-4 rounded"></div>
                 <div className="h-12 w-3/4 bg-white/20 mb-4 rounded"></div>
                 <div className="h-32 w-full bg-white/5 rounded border border-white/5"></div>
               </div>
            </div>
          </div>
          
          {/* Overlay Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
