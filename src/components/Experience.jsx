import React from 'react';
import { motion } from 'framer-motion'; 
import Section from './Section';

const Experience = () => {
  // Data Source:
  // - Refactored into an array for cleaner mapping
  // - 'desc' contains HTML string for bold text
  const experiences = [
    {
      year: "2025 - 2026",
      role: "Bachelor Thesis",
      color: "text-blue-400",
      company: "PT Multi Data Palembang",
      desc: "Developed a comprehensive <strong>Key Performance Indicator (KPI) System</strong> to digitize and optimize the employee evaluation process.",
      tags: ["System Analysis", "KPI", "Laravel Fullstack", "MySQL", "RESTful API"]
    },
    {
      year: "2024 - 2025",
      role: "Internship",
      color: "text-green-400",
      company: "CV Vica Jaya",
      desc: "Built a custom <strong>Inventory & Point of Sale (POS) Application</strong> during practical work. Streamlined stock tracking and cashier transactions.",
      tags: ["Inventory Logic", "POS System", "Laravel", "MySQL"]
    },
    {
      year: "2022 - Present",
      role: "Religion",
      color: "text-neutral-600",
      company: "Multimedia Bhakti Luhur Temple",
      desc: "Responsible for managing visual and audio systems for live events. Specialized in OBS Studio configuration for live streaming.",
      tags: ["OBS Studio", "Live Streaming", "Audio Mixing"]
    },
    {
      year: "2024 - Present",
      role: "Student Org",
      color: "text-neutral-600",
      company: "Programming UMDP",
      desc: "Active member focusing on game design and web development. Collaborated with peers to build interactive web projects.",
      tags: ["Web Dev", "Game Design", "Teamwork"]
    },
    {
      year: "2024 - Present",
      role: "Head of Division",
      color: "text-neutral-600",
      company: "MDPTV (Graphic Design Div)",
      desc: "Led the Graphic Design division, overseeing the creation of visual assets for university media. Managed team workflows.",
      tags: ["Adobe Suite", "Leadership", "Branding"]
    }
  ];

  // Render Logic:
  // - Map through experiences array
  // - Use dangerouslySetInnerHTML for description to render <strong> tags
  return (
    <Section id="experiences" title="04 — Experience">
        <div className="space-y-0">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }} 
              viewport={{ once: false, margin: "-50px" }} 
              className="group flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="md:w-1/4 shrink-0">
                <span className="text-neutral-500 font-mono text-sm block mb-1">{exp.year}</span>
                <span className={`text-xs uppercase tracking-wider font-bold ${exp.color}`}>{exp.role}</span>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {exp.company}
                </h4>
                
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base" dangerouslySetInnerHTML={{ __html: exp.desc }}></p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-neutral-800 text-neutral-300 text-[10px] font-mono rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
    </Section>
  );
};

export default Experience;