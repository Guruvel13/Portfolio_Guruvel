import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PixelReveal from '../components/PixelReveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const Home = () => {
    // Get top 2 featured projects
    const featuredProjects = projects.slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PixelReveal />
            <Hero />
            <Features />

            {/* Featured Projects Preview */}
            <section className="py-24 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="font-mono text-primary text-xs tracking-widest block mb-2">// SELECTED WORKS</span>
                            <h2 className="text-3xl md:text-5xl font-bold">RECENT HIGHLIGHTS</h2>
                        </div>
                        <Link to="/work" className="hidden md:flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-white transition-colors">
                            VIEW ALL PROJECTS <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <Link to={`/work/${project.id}`} key={project.id} className="group relative block">
                                <div className="aspect-video bg-surface overflow-hidden rounded-lg border border-white/10 mb-6 relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-2 max-w-sm">{project.description}</p>
                                    </div>
                                    <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded text-gray-500 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                        {project.year}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 md:hidden text-center">
                        <Link to="/work" className="inline-flex items-center gap-2 font-mono text-xs text-white border-b border-white pb-1">
                            VIEW ALL PROJECTS <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-24 px-6 border-t border-white/10 bg-surface/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
                    <span className="font-mono text-primary text-xs tracking-widest block mb-4">// READY TO START?</span>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        HAVE AN IDEA? <br />
                        LET'S BUILD IT.
                    </h2>
                    <Link to="/contact" className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors rounded-sm">
                        Start Project
                        <span className="group-hover:translate-x-1 transition-transform">{'->'}</span>
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
