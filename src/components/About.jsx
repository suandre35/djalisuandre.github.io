import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import profilePic from '../assets/img/profile.JPG';

const About = () => {
  return (
    <Section id="about" title="01 — About Me">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-center h-full">
          {/* FOTO */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group w-full max-w-[280px]">
              <div className="absolute -inset-3 border-2 border-neutral-800 rounded-xl group-hover:border-white/50 transition-colors duration-500"></div>
              <div className="relative aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src={profilePic} alt="Djali Suandre" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-md border border-white/20 px-2 py-1 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-mono text-white">Open for Work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="space-y-6 relative text-left">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold leading-tight"
            >
              From <span className="text-neutral-500 line-through decoration-red-500/50">Nothing</span> <br/>
              to <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Everything</span>
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 text-neutral-400 leading-relaxed text-sm font-light"
            >
              <p><strong className="text-white">Halo, I'm Djali Suandre.</strong> A fresh graduate in Information Systems based in Palembang.</p>
              <p>My journey wasn't linear. I started as a <span className="text-white border-b border-neutral-700 pb-0.5">Graphic Designer</span> (leading the team at MDPTV), obsessing over typography and layout. This background gave me a unique advantage: I don't just write code that <i>works</i>; I write code that <i>feels good</i> to use.</p>
              <p>Recently, I completed my bachelor’s thesis building a complex <strong>KPI Management System</strong> using Laravel. Now, I spend my nights configuring Arch Linux, optimizing databases, and exploring the depths of Fullstack Development.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800"
            >
              <div>
                <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">Education</h4>
                <p className="text-white text-sm font-medium">S.Kom, Information Systems</p>
                <p className="text-neutral-600 text-xs">Universitas Multi Data Palembang</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">Tech Obsession</h4>
                <p className="text-white text-sm font-medium">System Architecture</p>
                <p className="text-neutral-600 text-xs">Arch Linux (Hyprland), Docker</p>
              </div>
            </motion.div>
          </div>
        </div>
    </Section>
  );
};

export default About;