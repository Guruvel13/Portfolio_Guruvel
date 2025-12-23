import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Github, Globe, Calendar, User } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  // Redirect or show 404 if project not found
  useEffect(() => {
    if (!project) {
        // Simple redirect for now
       // navigate('/work'); 
    }
  }, [project, navigate]);

  if (!project) return <div className="min-h-screen pt-32 text-center">Project Not Found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 px-6 min-h-screen pb-20"
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/work" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 font-mono text-xs transition-colors">
          <ArrowLeft size={16} /> BACK_TO_INDEX
        </Link>
        
        <div className="mb-8">
            <span className="text-primary font-mono text-sm tracking-widest block mb-2">// CASE STUDY 0{project.id}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">{project.title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              {project.description}
            </p>
        </div>

        {/* Big visual */}
        <div className="w-full aspect-video bg-surface border border-white/10 rounded-xl mb-12 overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/20 bg-grid-pattern opacity-20 mix-blend-overlay z-10"></div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
           <div className="md:col-span-4 space-y-8">
              <div>
                <h3 className="font-mono text-gray-500 text-xs mb-2 flex items-center gap-2"><User size={12}/> CLIENT</h3>
                <p className="font-bold text-lg">{project.client}</p>
              </div>
              <div>
                <h3 className="font-mono text-gray-500 text-xs mb-2 flex items-center gap-2"><Calendar size={12}/> YEAR</h3>
                <p className="font-bold text-lg">{project.year}</p>
              </div>
              <div>
                <h3 className="font-mono text-gray-500 text-xs mb-2">TECH STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack && project.techStack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white/5 text-xs rounded border border-white/5 text-gray-300">{tech}</span>
                  ))}
                </div>
              </div>
               <div className="flex gap-4 pt-4">
                  <a href={project.liveUrl} className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 font-bold text-sm hover:bg-primary transition-colors">
                    <Globe size={16} /> LIVE DEMO
                  </a>
                  <a href={project.repoUrl} className="flex-1 flex items-center justify-center gap-2 border border-white/20 hover:border-white py-3 font-bold text-sm transition-colors">
                    <Github size={16} /> SOURCE
                  </a>
               </div>
           </div>
           
           <div className="md:col-span-8 prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold mb-4 text-white">Project Overview</h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                {project.fullDescription}
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-white">The Challenge & Solution</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                 (Placeholder text as this is a demo) This project involved complex state management and required a high-performance rendering engine. We utilized the latest features of {project.tags[0]} to ensure 60fps animations and seamless transitions.
              </p>

              <div className="grid grid-cols-2 gap-4 my-8">
                 <div className="aspect-square bg-surface border border-white/10 rounded overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center font-mono text-xs text-gray-600">
                      [ DETAIL_SHOT_1 ]
                    </div>
                 </div>
                 <div className="aspect-square bg-surface border border-white/10 rounded overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center font-mono text-xs text-gray-600">
                      [ DETAIL_SHOT_2 ]
                    </div>
                 </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">The Outcome</h3>
              <p className="text-gray-400 leading-relaxed">
                The final product exceeded client expectations, delivering a 99.9% uptime and processing over 1M requests per day. The user interface was praised for its clarity and aesthetic appeal.
              </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
