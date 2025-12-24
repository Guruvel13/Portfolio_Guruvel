import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);

  // Typing Effect State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "FULL STACK DEVELOPER",
    "WEB DEVELOPER",
    "PROBLEM SOLVER",
    "TECH ENTHUSIAST"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden">

      {/* Dynamic Background Grid (Parallax) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-24 h-24 border border-border rounded-full" />
        <div className="absolute top-40 right-20 w-32 h-32 border border-primary/20 rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-white/5 rotate-45" />
      </motion.div>

      {/* Floating Pixels / Code Debris */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full blur-[1px]" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-surface rounded-sm" />
        {/* <div className="absolute bottom-1/3 left-10 text-xs font-mono text-muted/30">const future = true;</div> */}
        <div className="absolute bottom-10 right-10 text-xs font-mono text-primary/10">while(alive) code();</div>
      </motion.div>

      {/* Background Glow */}
      <motion.div
        style={{ scale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"
      />

      {/* Main Text Content */}
      <motion.div
        style={{ y, opacity }}
        className="z-10 text-center mb-16 px-4 relative"
      >
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
          className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-4 leading-[0.9]"
        >
          GURU <span className="text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">VEL</span>
        </motion.h1>

        {/* Dynamic Typing Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-8 mb-6 font-mono text-primary text-sm md:text-lg tracking-widest uppercase"
        >
          I AM A <span className="text-text">{text}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto text-muted font-mono text-sm md:text-base mb-8"
        >
          Turning ideas into reliable software products with modern web and backend technologies.
          I build systems that are simple to use, hard to break, and ready to scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <Link to="/about" className="px-8 py-3 bg-text text-background font-mono text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,85,0,0.3)]">
            About Me
          </Link>

          <div className="flex gap-4">
            <a href="https://github.com/Guruvel13" target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-full bg-surface/50 hover:bg-text hover:text-background transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-full bg-surface/50 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;