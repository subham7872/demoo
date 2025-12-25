import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-navy-900 text-4xl md:text-5xl font-extrabold mb-6"
          >
            Comprehensive Remodeling <span className="text-accent-orange">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-navy-600 text-lg leading-relaxed"
          >
            From small upgrades to full-scale transformations, we provide end-to-end expertise for every corner of your home.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = Icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-navy-50 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors" />
                </div>
                
                <div className="p-8 relative">
                  <div className="absolute -top-10 left-8 bg-white p-4 rounded-2xl shadow-xl group-hover:bg-accent-orange transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-navy-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3 mt-4">{service.title}</h3>
                  <p className="text-navy-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#quote" className="text-accent-orange font-bold text-sm inline-flex items-center group/link">
                    Explore Service 
                    <Icons.ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

