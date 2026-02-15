import React from 'react';

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`min-h-screen w-full snap-center py-20 px-6 md:px-20 border-t border-neutral-900 flex flex-col justify-center ${className}`}>
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-10">
        <span className="h-px w-12 bg-neutral-700"></span>
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">{title}</h3>
      </div>
      {children}
    </div>
  </section>
);

export default Section;