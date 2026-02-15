import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Terminal } from 'lucide-react';
import Section from './Section';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/suandre35/repos?sort=updated&direction=desc');
        
        if (!response.ok) throw new Error('Gagal mengambil data GitHub');

        const data = await response.json();
        
        // --- PERBAIKAN DI SINI ---
        // Hapus syarat '&& repo.description'. 
        // Cukup filter yang bukan 'fork' saja.
        const filtered = data.filter(repo => !repo.fork).slice(0, 6);
        
        setRepos(filtered);
      
      } catch (err) {
        console.error("Error fetching GitHub:", err);
        setRepos([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Section id="projects" title="05 — Open Source">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {loading ? (
             // LOADING SKELETON
            [1, 2, 3].map((i) => (
              <div key={i} className="h-48 rounded-xl bg-neutral-900/50 border border-neutral-800 animate-pulse p-6 flex flex-col justify-between">
                 <div className="flex justify-between">
                    <div className="w-10 h-10 bg-neutral-800 rounded"></div>
                    <div className="w-16 h-6 bg-neutral-800 rounded"></div>
                 </div>
                 <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-neutral-800 rounded"></div>
                    <div className="h-3 w-full bg-neutral-800 rounded"></div>
                    <div className="h-3 w-2/3 bg-neutral-800 rounded"></div>
                 </div>
              </div>
            ))
          ) : repos.length > 0 ? (
            // DATA ASLI
            repos.map((repo, index) => (
              <motion.div 
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col justify-between p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-blue-500/50 hover:bg-neutral-900 transition-all duration-300 h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-neutral-800 text-blue-400 rounded-lg group-hover:text-white transition-colors">
                      <Terminal size={20} />
                    </div>
                    <div className="flex gap-3">
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1 capitalize">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>

                  {/* Penanganan jika deskripsi NULL */}
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                    {repo.description ? repo.description : "No description provided."}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-800/50">
                  {repo.language && (
                    <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {repo.language}
                    </span>
                  )}
                  
                  <span className="text-xs font-mono text-neutral-600 ml-auto">
                    {new Date(repo.updated_at).getFullYear()}
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            // JIKA KOSONG BENERAN
            <div className="col-span-full text-center py-10 text-neutral-500">
              <p>No public repositories found.</p>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/suandre35?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all"
          >
            View all repositories on GitHub &rarr;
          </a>
        </div>
      </Section>
  );
};

export default Projects;