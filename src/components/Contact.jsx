import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Section from './Section';

const Contact = () => {
  return (
    <Section id="contact" title="06 — Get In Touch" className="pb-0 border-b-0">
        <div className="py-20 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Let's work together.
          </h2>
          <a 
            href="mailto:djalisuandre123654@gmail.com" 
            className="inline-flex items-center gap-3 text-xl md:text-2xl text-neutral-400 hover:text-white transition-colors border-b border-neutral-800 hover:border-white pb-2"
          >
            <Mail /> djalisuandre123654@gmail.com
          </a>
          
          <div className="mt-20 py-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-600">
            <p>© 2026 DJALI SUANDRE. PALEMBANG, ID.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://github.com/suandre35" className="hover:text-white">GITHUB</a>
              <a href="https://www.linkedin.com/in/djali-suandre-441415304/" className="hover:text-white">LINKEDIN</a>
              <a href="https://www.instagram.com/djali_suandre/" className="hover:text-white">INSTAGRAM</a>
            </div>
          </div>
        </div>
    </Section>
  );
};

export default Contact;