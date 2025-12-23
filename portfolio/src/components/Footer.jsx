import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">LET'S BUILD SOMETHING.</h2>
          <a href="mailto:hello@guru.dev" className="text-primary hover:text-white transition-colors font-mono text-lg">
            hello@guru.dev
          </a>
        </div>

        <div className="flex gap-6">
          {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
             <a key={social} href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-mono uppercase">
               {social}
             </a>
          ))}
        </div>

        <div className="text-xs text-gray-600 font-mono">
          <div className="flex items-center gap-2 justify-center md:justify-end">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>SYSTEM STATUS: ONLINE</span>
          </div>
          <div className="mt-1">
            © {new Date().getFullYear()} GURU.DEV
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
