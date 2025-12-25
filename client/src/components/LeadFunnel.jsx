import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Clock, Wallet } from 'lucide-react';

const LeadFunnel = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: ''
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const updateData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    if (step === 1) return formData.projectType !== '';
    if (step === 2) return formData.budget !== '';
    if (step === 3) return formData.timeline !== '';
    return formData.name && formData.email && formData.phone;
  };

  return (
    <section id="quote" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 bg-navy-950 rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Left Column: Info */}
            <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-white text-4xl font-extrabold mb-8">Start Your <span className="text-accent-orange">Project</span> Today</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-2 rounded-lg mt-1"><Clock className="text-accent-orange h-5 w-5" /></div>
                    <div>
                      <h4 className="text-white font-bold">Fast Estimates</h4>
                      <p className="text-navy-300 text-sm">Get a preliminary quote within 48 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-2 rounded-lg mt-1"><ShieldCheck className="text-accent-green h-5 w-5" /></div>
                    <div>
                      <h4 className="text-white font-bold">Licensed & Insured</h4>
                      <p className="text-navy-300 text-sm">Full peace of mind on every square foot.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-2 rounded-lg mt-1"><Wallet className="text-accent-orange h-5 w-5" /></div>
                    <div>
                      <h4 className="text-white font-bold">Flexible Financing</h4>
                      <p className="text-navy-300 text-sm">Pay over time with our partner programs.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-navy-400 text-xs uppercase tracking-widest mb-3">Next Available Consult</p>
                <div className="flex items-center space-x-3 text-white">
                  <Calendar className="text-accent-green h-5 w-5" />
                  <span className="font-bold">Monday, October 14th - 10:00 AM</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-white p-12 lg:p-16">
              {/* Stepper */}
              <div className="flex items-center justify-between mb-12">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center flex-1 last:flex-none">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      step >= i ? 'bg-navy-900 text-white' : 'bg-navy-50 text-navy-300'
                    }`}>
                      {step > i ? <CheckCircle2 className="h-5 w-5" /> : i}
                    </div>
                    {i < 4 && <div className={`flex-1 h-1 mx-2 rounded-full ${step > i ? 'bg-navy-900' : 'bg-navy-50'}`} />}
                  </div>
                ))}
              </div>

              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-extrabold text-navy-900 mb-8">What type of project are you planning?</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {['Kitchen', 'Bathroom', 'Basement', 'Full Home', 'Outdoor', 'Other'].map((type) => (
                          <button
                            key={type}
                            onClick={() => updateData('projectType', type)}
                            className={`p-5 rounded-2xl border-2 text-left transition-all ${
                              formData.projectType === type 
                                ? 'border-navy-900 bg-navy-50' 
                                : 'border-gray-100 hover:border-navy-200'
                            }`}
                          >
                            <span className="font-bold text-navy-900">{type}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-extrabold text-navy-900 mb-8">What is your estimated budget?</h3>
                      <div className="space-y-4">
                        {['Under $20k', '$20k - $50k', '$50k - $100k', '$100k+'].map((range) => (
                          <button
                            key={range}
                            onClick={() => updateData('budget', range)}
                            className={`w-full p-5 rounded-2xl border-2 text-left transition-all flex justify-between items-center ${
                              formData.budget === range 
                                ? 'border-navy-900 bg-navy-50' 
                                : 'border-gray-100 hover:border-navy-200'
                            }`}
                          >
                            <span className="font-bold text-navy-900">{range}</span>
                            {formData.budget === range && <CheckCircle2 className="text-navy-900 h-5 w-5" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-extrabold text-navy-900 mb-8">When would you like to start?</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {['Immediately', '1-3 Months', '3-6 Months', 'Just Exploring'].map((time) => (
                          <button
                            key={time}
                            onClick={() => updateData('timeline', time)}
                            className={`p-5 rounded-2xl border-2 text-left transition-all ${
                              formData.timeline === time 
                                ? 'border-navy-900 bg-navy-50' 
                                : 'border-gray-100 hover:border-navy-200'
                            }`}
                          >
                            <span className="font-bold text-navy-900">{time}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-extrabold text-navy-900 mb-8">Almost there! Your contact details</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-bold text-navy-500 mb-2 uppercase tracking-widest">Full Name</label>
                          <input 
                            type="text" 
                            className="w-full p-4 bg-navy-50 border-0 rounded-2xl focus:ring-2 focus:ring-navy-900 transition-all outline-none"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => updateData('name', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-500 mb-2 uppercase tracking-widest">Email Address</label>
                          <input 
                            type="email" 
                            className="w-full p-4 bg-navy-50 border-0 rounded-2xl focus:ring-2 focus:ring-navy-900 transition-all outline-none"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => updateData('email', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-500 mb-2 uppercase tracking-widest">Phone Number</label>
                          <input 
                            type="tel" 
                            className="w-full p-4 bg-navy-50 border-0 rounded-2xl focus:ring-2 focus:ring-navy-900 transition-all outline-none"
                            placeholder="(555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => updateData('phone', e.target.value)}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
                <button
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`flex items-center text-navy-500 font-bold ${step === 1 ? 'opacity-0' : 'hover:text-navy-900'}`}
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Back
                </button>
                <button
                  onClick={step === 4 ? () => alert('Project request submitted!') : nextStep}
                  disabled={!isStepValid()}
                  className={`bg-navy-900 text-white px-10 py-4 rounded-full font-bold flex items-center shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed transform hover:-translate-y-1`}
                >
                  {step === 4 ? 'Submit Project Request' : 'Continue'}
                  {step < 4 && <ChevronRight className="ml-2 h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFunnel;

