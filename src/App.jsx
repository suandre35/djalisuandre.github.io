import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Main Application Component
// Logic: Handles composition of all sections
function App() {
  return (
    <div className="bg-neutral-950 text-neutral-200 font-sans selection:bg-white selection:text-black h-screen w-full overflow-y-scroll snap-y snap-proximity scroll-smooth no-scrollbar">
      <Hero />
      <About />
      <Skills />
      <Blog />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;