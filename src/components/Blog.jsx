import React from 'react';
import { motion } from 'framer-motion'; 
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';

const Blog = () => {
  // Logic: 
  // - Render static blog entries with a slight delay for each item
  // - Animation: Slide in from left (-20px) and fade in
  return (
    <Section id="blog" title="03 — Recent Thoughts">
        <div className="space-y-4">
          {[1, 2, 3].map((item, index) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }} 
              viewport={{ once: false }}
              className="group flex justify-between items-center py-6 border-b border-neutral-800 cursor-pointer hover:bg-neutral-900/30 px-4 transition-colors"
            >
              <div>
                <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                  Optimizing Laravel Queries for High Performance
                </h4>
                <p className="text-sm text-neutral-500 mt-1">Feb 08, 2026 • Backend Engineering</p>
              </div>
              <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" />
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            viewport={{ once: false }}
            className="pt-4"
          >
             <a href="#" className="text-sm font-mono text-neutral-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 inline-block">View all posts &rarr;</a>
          </motion.div>
        </div>
    </Section>
  );
};

export default Blog;