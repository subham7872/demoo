import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6">Clients <span className="text-accent-green">Love</span> Our Work</h2>
          <p className="text-navy-600 text-lg">
            Don't just take our word for it. Hear what our homeowners have to say about their BuildCraft experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-50 p-10 rounded-[2.5rem] relative group hover:bg-navy-900 transition-colors duration-500 shadow-sm"
            >
              <Quote className="h-10 w-10 text-accent-green mb-6 transition-colors group-hover:text-accent-orange" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent-orange fill-accent-orange" />
                ))}
              </div>
              <p className="text-navy-800 text-lg mb-8 italic leading-relaxed transition-colors group-hover:text-white">
                "{t.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-white/20" />
                <div>
                  <h4 className="font-bold text-navy-900 transition-colors group-hover:text-white">{t.name}</h4>
                  <p className="text-navy-500 text-sm transition-colors group-hover:text-navy-300">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

