import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            className={`fixed z-50 transition-all duration-500 ease-in-out flex justify-between items-center px-6 
        ${isScrolled
                    ? 'top-6 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-5xl py-3 rounded-2xl bg-black/80 backdrop-blur-lg border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                    : 'top-0 left-0 right-0 py-6 bg-transparent border-b border-white/5 backdrop-blur-sm'
                }
      `}
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
                <button className={`
          text-xs font-bold font-mono tracking-widest hover:bg-primary transition-all uppercase rounded-sm
          ${isScrolled ? 'px-4 py-2 bg-white text-black' : 'px-4 py-2 bg-white text-black'}
        `}>
                    Get in Touch
                </button>
            </Link>
        </motion.header>
    );
};

export default Header;
