import React from 'react';
import { motion } from 'framer-motion'; 
import { Database, Code, Terminal } from 'lucide-react';
import Section from './Section';

const Skills = () => {
  // Animation Logic:
  // - hidden: Start 30px below with 0 opacity
  // - visible: Move to original position with 1 opacity
  // - transition: Stagger effect based on index (i)
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 } 
    }),
  };

  return (
    <Section id="skills" title="02 — Technical Arsenal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            custom={0} 
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: false }} 
            className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors"
          >
            <Database className="w-8 h-8 text-neutral-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">Backend & DB</h4>
            <ul className="space-y-2 text-neutral-400 font-mono text-sm">
              <li>Laravel</li>
              <li>PHP 8.x</li>
              <li>MySQL / PostgreSQL</li>
              <li>Go Lang</li>
              <li>RESTful APIs</li>
            </ul>
          </motion.div>

          <motion.div 
            custom={1} 
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: false }}
            className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors"
          >
            <Code className="w-8 h-8 text-neutral-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">Frontend & UI</h4>
            <ul className="space-y-2 text-neutral-400 font-mono text-sm">
              <li>Laravel</li>
              <li>React.js (Vite)</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Figma (Design System)</li>
            </ul>
          </motion.div>

          <motion.div 
            custom={2} 
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: false }}
            className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors"
          >
            <Terminal className="w-8 h-8 text-neutral-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">System & Tools</h4>
            <ul className="space-y-2 text-neutral-400 font-mono text-sm">
              <li>Linux (Arch)</li>
              <li>Git & GitHub</li>
              <li>VS Code / Neovim</li>
              <li>Postman</li>
              <li>Docker</li>
            </ul>
          </motion.div>

        </div>
    </Section>
  );
};

export default Skills;