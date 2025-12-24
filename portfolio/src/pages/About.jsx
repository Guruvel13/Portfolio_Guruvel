import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Coffee, Award } from 'lucide-react';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 px-6 min-h-screen pb-20"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 border-b border-border pb-8">
                    <span className="font-mono text-primary text-xs tracking-widest block mb-2">// WHO AM I?</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">BEHIND THE <br /> PIXELS.</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Bio and Image */}
                    <div className="md:col-span-7 space-y-8">
                        <div className="prose prose-invert prose-lg">
                            <p className="text-muted leading-relaxed text-lg">
                                I'm a creative developer obsessed with building digital experiences that feel
                                <span className="text-text font-bold"> alive</span>. With a background in both design and engineering,
                                I bridge the gap between aesthetics and functionality.
                            </p>
                            <p className="text-muted leading-relaxed">
                                My journey started with a simple "Hello World" and has evolved into architecting complex,
                                scalable applications for clients worldwide. I believe that code is not just about logic—it's
                                a medium for creative expression.
                            </p>
                            <p className="text-muted leading-relaxed">
                                When I'm not coding, you can find me exploring new coffee shops, reading about brutalist architecture,
                                or tweaking my terminal config for the 100th time.
                            </p>
                        </div>

                        {/* Stats / Quick Facts */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {[
                                { label: "YEARS EXP", value: "05+" },
                                { label: "PROJECTS", value: "10" },
                                { label: "CLIENTS", value: "30+" },
                                { label: "COFFEE", value: "∞" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-surface border border-border p-4 rounded text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-[10px] font-mono text-muted tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Sidebar */}
                    <div className="md:col-span-5">
                        <div className="bg-surface border border-border p-8 rounded-xl sticky top-32">
                            <h3 className="font-mono text-xs text-secondary mb-6 tracking-widest flex items-center gap-2">
                                <Terminal size={14} /> TECHNICAL_ARSENAL
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-sm text-text mb-3">CORE</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['JavaScript', 'Java', 'HTML5', 'CSS3', 'Python'].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-text/5 text-xs rounded border border-border text-muted hover:text-text hover:border-primary/50 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-sm text-text mb-3">FRAMEWORKS</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Next.js', 'Spring Boot', 'Tailwind', 'Node.js', 'Streamlit'].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-text/5 text-xs rounded border border-border text-muted hover:text-text hover:border-primary/50 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-sm text-text mb-3">TOOLS</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Git', 'Figma', 'Docker', 'AWS'].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-text/5 text-xs rounded border border-border text-muted hover:text-text hover:border-primary/50 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terminal Log / Achievements */}
                <div className="mt-24">
                    <div className="bg-black/80 border border-white/20 rounded-lg overflow-hidden font-mono text-sm shadow-2xl max-w-3xl">
                        {/* Terminal Header */}
                        <div className="bg-white/10 p-3 flex items-center gap-2 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            <span className="ml-2 text-xs text-gray-500">user@guru-dev:~/achievements</span>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 space-y-4 text-gray-300">
                            <div className="flex gap-2">
                                <span className="text-green-500">➜</span>
                                <span className="text-blue-400">~</span>
                                <span>./list_achievements.sh --verbose</span>
                            </div>

                            <div className="pl-4 space-y-3 pt-2">
                                <p className="flex gap-3">
                                    <span className="text-primary whitespace-nowrap">[Coding ]</span>
                                    <span>LeetCode --- 150+ Problems Solved</span>
                                </p>
                                <p className="flex gap-3">
                                    <span className="text-primary whitespace-nowrap">[Coding ]</span>
                                    <span>Skillrack --- 500+ Problems Solved</span>
                                </p>
                                <p className="flex gap-3">
                                    <span className="text-primary whitespace-nowrap">[Coding ]</span>
                                    <span>HackerRank --- 100+ Problems Solved</span>
                                </p>
                                {/* <p className="flex gap-3">
                        <span className="text-primary whitespace-nowrap">[2021_Q1]</span> 
                        <span>First Place Winner - Silicon Valley AI Hackathon.</span>
                      </p> */}
                            </div>

                            <div className="flex gap-2">
                                <span className="text-green-500">➜</span>
                                <span className="text-blue-400">~</span>
                                <span>./list_Internships.sh --verbose</span>
                            </div>
                            <div className="pl-4 space-y-3 pt-2">
                                <p className="flex gap-3">
                                    <span className="text-primary whitespace-nowrap">[Jan 2025]</span>
                                    <span>MERN Stack Internd --  Gained knowledge on how to work on MongoDB, Express, ReactJS and NodeJS. </span>
                                </p>
                            </div>
                            <div className="flex gap-2 pt-4">
                                <span className="text-green-500">➜</span>
                                <span className="text-blue-400">~</span>
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mt-24 mb-20">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-primary block"></span>
                        CREDENTIALS & CERTIFICATIONS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "AWS Academy Cloud Foundations",
                                issuer: "AWS Academy",
                                year: "2025",
                                id: "AWS-BSA-29381"
                            },
                            {
                                title: "MongoDB",
                                issuer: "Infosys SpringBoard",
                                year: "2025",
                                id: "META-FE-9921"
                            },
                            {
                                title: "React",
                                issuer: "Infosys SpringBoard",
                                year: "2025",
                                id: "G-UX-8821"
                            },
                            {
                                title: "Exploring Internet of Things ",
                                issuer: "Cisco Networking Academy",
                                year: "2025",
                                id: "G-UX-81"
                            },
                            {
                                title: "Networking Basics",
                                issuer: "Cisco Networking Academy",
                                year: "2025",
                                id: "G-8821"
                            },
                            {
                                title: "Fundamentals of Deep Learning",
                                issuer: "NVIDIA",
                                year: "2025",
                                id: "8821"
                            }
                        ].map((cert, i) => (
                            <div key={i} className="bg-surface border border-border p-6 rounded hover:border-primary/50 transition-colors group relative overflow-hidden">
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <Award className="text-primary" size={28} />
                                    <span className="font-mono text-[10px] bg-text/5 px-2 py-1 rounded text-muted border border-border">VERIFIED</span>
                                </div>
                                <h3 className="font-bold text-lg mb-1 group-hover:text-text transition-colors relative z-10">{cert.title}</h3>
                                <p className="text-sm text-muted font-mono mb-4 relative z-10">{cert.issuer} • {cert.year}</p>

                                {/* <div className="font-mono text-[10px] text-gray-600 mb-2 relative z-10">ID: {cert.id}</div> */}

                                <div className="w-full h-1 bg-text/5 rounded overflow-hidden relative z-10">
                                    <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </div>

                                {/* Background pattern */}
                                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default About;
