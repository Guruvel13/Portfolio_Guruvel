import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 px-6 min-h-screen pb-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div>
           <span className="font-mono text-primary text-xs tracking-widest block mb-2">// CONTACT</span>
           <h1 className="text-4xl md:text-6xl font-black mb-6">LET'S WORK <br /> TOGETHER.</h1>
           <p className="text-gray-400 mb-12 text-lg">
             Have a project in mind? I'm currently available for freelance projects and open to new opportunities.
           </p>

           <div className="space-y-6">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-primary">
                 <Mail size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-sm text-gray-300">EMAIL</h3>
                  <a href="mailto:hello@guru.dev" className="text-lg hover:text-primary transition-colors">hello@guru.dev</a>
               </div>
             </div>
             
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-primary">
                 <MapPin size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-sm text-gray-300">LOCATION</h3>
                  <p className="text-lg">San Francisco, CA</p>
               </div>
             </div>
           </div>
        </div>

        <form className="bg-surface border border-white/5 p-8 rounded-2xl shadow-2xl space-y-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="font-mono text-xs text-gray-400 uppercase">Name</label>
                 <input type="text" className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" />
               </div>
               <div className="space-y-2">
                 <label className="font-mono text-xs text-gray-400 uppercase">Email</label>
                 <input type="email" className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="john@example.com" />
               </div>
             </div>

             <div className="space-y-2">
                <label className="font-mono text-xs text-gray-400 uppercase">Subject</label>
                <select className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                  <option>Project Inquiry</option>
                  <option>Freelance Opportunity</option>
                  <option>Just saying hi</option>
                </select>
             </div>

             <div className="space-y-2">
                <label className="font-mono text-xs text-gray-400 uppercase">Message</label>
                <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Tell me about your project..."></textarea>
             </div>

             <button className="w-full bg-white text-black font-bold py-4 rounded tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2">
                SEND MESSAGE <Send size={16} />
             </button>
        </form>

      </div>
    </motion.div>
  );
};

export default Contact;
