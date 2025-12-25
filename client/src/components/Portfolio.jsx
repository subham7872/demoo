import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MoveRight } from 'lucide-react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const [showAfter, setShowAfter] = useState(true);

  return (
    <section id="portfolio" className="py-24 bg-navy-950 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Transformation <span className="text-accent-green">Portfolio</span></h2>
            <p className="text-navy-300 text-lg leading-relaxed font-light">
              Seeing is believing. Explore some of our favorite transformations where vision met reality.
            </p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => setShowAfter(false)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${!showAfter ? 'bg-white text-navy-900' : 'border border-white/20 hover:bg-white/10'}`}
            >
              Before
            </button>
            <button 
              onClick={() => setShowAfter(true)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${showAfter ? 'bg-accent-green text-white' : 'border border-white/20 hover:bg-white/10'}`}
            >
              After
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Visualizer */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden aspect-[16/10] group shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProject.id + (showAfter ? 'after' : 'before')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={showAfter ? activeProject.afterImage : activeProject.beforeImage}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-accent-green font-bold text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">
                {activeProject.category}
              </span>
              <h3 className="text-3xl font-bold">{activeProject.title}</h3>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xl border border-white/40 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Project List */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-navy-400 mb-2">Selected Cases</h4>
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`p-6 rounded-2xl text-left transition-all border ${
                  activeProject.id === project.id 
                    ? 'bg-white/5 border-white/20 scale-[1.02]' 
                    : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    <img src={project.afterImage} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">{project.title}</h5>
                    <p className="text-xs text-navy-400 uppercase tracking-widest">{project.category}</p>
                  </div>
                </div>
              </button>
            ))}
            
            <a 
              href="#" 
              className="group mt-6 inline-flex items-center text-accent-green font-bold text-lg hover:text-white transition-colors"
            >
              See All Projects 
              <MoveRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

