import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Home Renovation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 w-fit px-4 py-1.5 rounded-full mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-accent-orange fill-accent-orange" />
              ))}
            </div>
            <span className="text-white text-[11px] font-bold uppercase tracking-widest">Top Rated in Austin, TX</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Transform Your Home with <span className="text-accent-orange">Expert</span> Craftsmanship
          </h1>
          
          <p className="text-xl text-navy-100 mb-8 max-w-xl leading-relaxed font-light">
            Luxury remodeling services tailored to your lifestyle. From concept to completion, we build the space you've always dreamed of.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#quote" 
              className="bg-accent-orange hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-xl hover:shadow-orange-500/20 group"
            >
              Get Free Design Quote
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center transition-all"
            >
              View Projects
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-navy-300 text-xs uppercase tracking-tighter">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-navy-300 text-xs uppercase tracking-tighter">Projects Done</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-navy-300 text-xs uppercase tracking-tighter">Happy Clients</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="aspect-square rounded-full border-2 border-white/20 p-8 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800" 
                alt="Renovation Expert" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Floating Element */}
          <div className="absolute top-1/4 -left-10 bg-white p-4 rounded-2xl shadow-2xl animate-bounce-slow">
            <div className="flex items-center space-x-3">
              <div className="bg-navy-50 p-2 rounded-lg">
                <ChefHatIcon className="text-navy-900 h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-navy-500 font-medium">Next Project</p>
                <p className="text-sm font-bold text-navy-900">Modern Kitchen</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper internal icons
const ChefHatIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" x2="18" y1="17" y2="17"/></svg>
);

export default Hero;

