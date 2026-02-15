import React from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ title, href, subtitle }) => (
  <motion.a 
    href={href}
    whileHover={{ x: 15, opacity: 1 }} 
    className="group flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer py-2"
  >
    <span className="hidden group-hover:block w-2 h-2 bg-blue-500 rounded-full"></span>
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
        {title}
      </h2>
      <span className="text-[10px] md:text-xs font-mono text-neutral-500 group-hover:text-neutral-300 uppercase tracking-widest block mt-1">
        {subtitle}
      </span>
    </div>
  </motion.a>
);

export default MenuItem;