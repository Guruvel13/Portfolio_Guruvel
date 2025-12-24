import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    // Initialize theme based on localStorage or default to dark
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

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
                    ? 'top-6 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-5xl py-3 rounded-2xl bg-background/80 backdrop-blur-lg border border-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
                    : 'top-0 left-0 right-0 py-6 bg-transparent border-b border-border backdrop-blur-sm'
                }
      `}
        >
            <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-mono font-bold text-black transition-transform group-hover:rotate-12">
                    G
                </div>
                <span className="font-mono text-sm tracking-widest text-muted group-hover:text-text transition-colors">GURU.DEV</span>
            </Link>

            <nav className="hidden md:flex gap-8">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`text-xs font-mono tracking-widest transition-colors relative
                ${isActive ? 'text-primary' : 'text-muted hover:text-text'}
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

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-surface/50 text-muted hover:text-text transition-colors"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                    )}
                </button>

                <Link to="/contact">
                    <button className={`
            text-xs font-bold font-mono tracking-widest hover:bg-primary hover:text-black transition-all uppercase rounded-sm border border-transparent
            ${isScrolled ? 'px-4 py-2 bg-text text-background' : 'px-4 py-2 bg-text text-background'}
            `}>
                        Get in Touch
                    </button>
                </Link>
            </div>
        </motion.header>
    );
};

export default Header;
