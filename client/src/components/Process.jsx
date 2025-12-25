import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <section id="process" className="py-24 bg-navy-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6">Our Seamless <span className="text-accent-orange">Process</span></h2>
          <p className="text-navy-600 text-lg">
            We follow a structured roadmap to ensure your project is completed on time, on budget, and to our exacting standards.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-navy-200 via-accent-orange/50 to-navy-200 z-0" />

          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-8 border border-navy-100 group hover:bg-accent-orange transition-colors duration-500">
                  <IconComponent className="h-10 w-10 text-accent-orange group-hover:text-white transition-colors" />
                </div>
                <div className="absolute -top-4 -right-2 bg-navy-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-4">{step.title}</h3>
                <p className="text-navy-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

