import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'WORK', path: '/work' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' }, 
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/10"
    >
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-mono font-bold text-black transition-transform group-hover:rotate-12">
          G
        </div>
        <span className="font-mono text-sm tracking-widest text-gray-400 group-hover:text-white transition-colors">GURU.DEV</span>
      </Link>

      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`text-xs font-mono tracking-widest transition-colors relative
                ${isActive ? 'text-primary' : 'text-gray-400 hover:text-white'}
              `}
            >
              {`// ${item.name}`}
              {isActive && (
                <motion.span 
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <Link to="/contact">
        <button className="bg-white text-black px-4 py-2 text-xs font-bold font-mono tracking-widest hover:bg-primary transition-colors uppercase">
          Get in Touch
        </button>
      </Link>
    </motion.header>
  );
};

export default Header;
