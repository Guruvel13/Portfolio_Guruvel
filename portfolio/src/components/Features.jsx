import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Globe, Zap, Layers, Code, Layout, Smartphone } from 'lucide-react';

const features = [
  {
    title: "UI/UX DESIGN",
    description: "Crafting intuitive interfaces that delight users.",
    icon: Layout
  },
  {
    title: "FRONTEND DEV",
    description: "Building responsive, pixel-perfect web applications.",
    icon: Monitor
  },
  {
    title: "MOTION GRAPHICS",
    description: "Adding life to static designs with fluid animations.",
    icon: Zap
  },
  {
    title: "SYSTEM ARCHITECTURE",
    description: "Scalable and robust backend solutions.",
    icon: Layers
  },
  {
    title: "MOBILE APPS",
    description: "Native and cross-platform mobile experiences.",
    icon: Smartphone
  },
  {
    title: "GLOBAL DEPLOYMENT",
    description: "Optimized for performance and accessibility worldwide.",
    icon: Globe
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 relative z-10 bg-background">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 flex items-end justify-between border-b border-border pb-4">
          <div>
            <span className="font-mono text-primary text-xs tracking-widest block mb-2">// SERVICES</span>
            <h2 className="text-3xl md:text-5xl font-bold">WHAT I DO.</h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted">
            [ SCROLL DOWN ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-surface border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-primary animate-pulse"></div>
              </div>

              <div className="mb-6 w-12 h-12 bg-text/5 rounded flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <feature.icon size={24} />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-text transition-colors text-text">{feature.title}</h3>
              <p className="text-muted font-mono text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
