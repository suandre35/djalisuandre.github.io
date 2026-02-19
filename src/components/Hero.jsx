import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MenuItem from './MenuItem';
import heroPic from '../assets/img/hero.png'; 

const Hero = () => {
    // Config: Toggle background image here
    // const useImageBackground = false;

    // Animation Logic:
    // - Container: Controls the staggering (timing) of children
    const containerVariants = {
        hidden: { 
            opacity: 0, 
            borderLeftColor: "rgba(255,255,255,0)" // Border starts invisible
        },
        visible: { 
            opacity: 1, 
            borderLeftColor: "rgba(255,255,255,0.1)", // Border fades in
            transition: { 
                duration: 0.5,
                staggerChildren: 0.1 // Delay 0.1s between each menu item
            }
        }
    };

    // - Children (Items): Slide in from left
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (         
        <section className="relative min-h-screen w-full snap-center overflow-hidden flex flex-col justify-center px-6 md:px-20 shrink-0">
        
        {/* <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <video 
            autoPlay loop muted playsInline
            className="w-full h-full object-cover opacity-80"
            >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4" type="video/mp4" />
            </video>
        </div> */}

        {/* <div className="absolute inset-0 z-0">          
            <img 
            src={heroPic}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
            /> */}
        {/* </div> */}

        <div className="relative z-20 max-w-6xl w-full mx-auto h-full flex items-center">
            
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-8"> 
            
            {/* <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-2"
            >
                <h1 className="text-sm font-mono text-blue-400 mb-1">Hi, I'm Djali Suandre.</h1>
                <p className="text-xs text-neutral-400 max-w-[250px]">
                Fullstack Web Developer & IS Graduate. Welcome to my portfolio.
                </p>
            </motion.div> */}

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} // Allow replay on scroll
                className="flex flex-col items-start space-y-1 border-l pl-8"
            >
                <motion.div variants={itemVariants}>
                    <MenuItem title="About" href="#about" subtitle="01 — Identity" />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                    <MenuItem title="Skills" href="#skills" subtitle="02 — Arsenal" />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <MenuItem title="Experiences" href="#experiences" subtitle="03 - Background" />
                </motion.div>

                {/* <motion.div variants={itemVariants}>
                    <MenuItem title="Blog" href="#blog" subtitle="04 — Thoughts" />
                </motion.div> */}

                <motion.div variants={itemVariants}>
                    <MenuItem title="Projects" href="#projects" subtitle="04 — Works" />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <MenuItem title="Contact" href="#contact" subtitle="05 — Connect" />
                </motion.div>

            </motion.div>

            </div>
        </div>

        <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            viewport={{ once: false }}
            className="absolute bottom-10 left-10 z-20 text-neutral-500 flex items-center gap-2 text-xs font-mono"
        >
            <ArrowDown size={14} />
            <span>SCROLL TO EXPLORE</span>
        </motion.div>
        </section>
    );
};

export default Hero;