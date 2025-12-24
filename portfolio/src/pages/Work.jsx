import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

import { projects } from '../data/projects';

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 px-6 min-h-screen pb-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border pb-4">
          <h1 className="text-4xl md:text-6xl font-black mb-4">SELECTED WORKS</h1>
          <p className="font-mono text-muted">A curation of digital products and experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-surface border border-border overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-mono text-xs text-primary mb-1 block">{project.category} // {project.year}</span>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <Link to={`/work/${project.id}`} className="bg-text/5 p-2 rounded-full hover:bg-primary hover:text-black transition-colors">
                    <ArrowUpRight size={20} />
                  </Link>
                </div>

                <p className="text-muted text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex bg-background/30 p-2 rounded border border-border gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono bg-text/5 px-2 py-1 rounded text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
