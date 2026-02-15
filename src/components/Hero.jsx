import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MenuItem from './MenuItem';
import heroPic from '../assets/img/hero.png';

const Hero = () => {
    return (         
        <section className="relative min-h-screen w-full snap-center overflow-hidden flex flex-col justify-center px-6 md:px-20 shrink-0">
        
        {/* VIDEO BACKGROUND */}
        {/* <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <video 
            autoPlay loop muted playsInline
            className="w-full h-full object-cover opacity-80"
            >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4" type="video/mp4" />
            </video>
        </div> */}

        {/* PHOTO BACKGROUND */}
        {/* <div className="absolute inset-0 z-0">          
            <img 
            src={heroPic}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
            /> */}
        {/* </div> */}

        {/* CONTENT HERO */}
        <div className="relative z-20 max-w-6xl w-full mx-auto h-full flex items-center">
            
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-8"> 
            
            {/* Intro Kecil */}
            {/* <div className="mb-2">
                <h1 className="text-sm font-mono text-blue-400 mb-1">Hi, I'm Djali Suandre.</h1>
                <p className="text-xs text-neutral-400 max-w-[250px]">
                Fullstack Web Developer & IS Graduate. Welcome to my portfolio.
                </p>
            </div> */}

            {/* Menu List */}
            <div className="flex flex-col items-start space-y-1 border-l border-white/10 pl-8">
                <MenuItem title="About" href="#about" subtitle="01 — Identity" />
                <MenuItem title="Skills" href="#skills" subtitle="02 — Arsenal" />
                <MenuItem title="Blog" href="#blog" subtitle="03 — Thoughts" />
                <MenuItem title="Experiences" href="#experiences" subtitle="04 - Background" />
                <MenuItem title="Projects" href="#projects" subtitle="05 — Works" />
                <MenuItem title="Contact" href="#contact" subtitle="06 — Connect" />
            </div>

            </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-10 z-20 text-neutral-500 flex items-center gap-2 text-xs font-mono"
        >
            <ArrowDown size={14} />
            <span>SCROLL TO EXPLORE</span>
        </motion.div>
        </section>
    );
};

export default Hero;