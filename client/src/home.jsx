import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  Droplets, 
  Trash2, 
  Thermometer, 
  Hammer, 
  MapPin, 
  CheckCircle2, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Droplets className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">ELITE FLOW</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#why-choose-us" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Why Us</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
            <a 
              href="tel:5550199" 
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-semibold rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all active:scale-95"
            >
              <Phone className="mr-2 h-4 w-4" /> (555) 0199
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 pb-4 px-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="space-y-1 pt-2">
            <a onClick={() => setIsOpen(false)} href="#services" className="block px-3 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Services</a>
            <a onClick={() => setIsOpen(false)} href="#why-choose-us" className="block px-3 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Why Us</a>
            <a onClick={() => setIsOpen(false)} href="#contact" className="block px-3 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Contact</a>
          </div>
          <div className="mt-4 px-3">
            <a 
              href="tel:5550199" 
              className="flex w-full items-center justify-center px-4 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" /> Call Now (555) 0199
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-slate-50 pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10">
        <Droplets className="h-96 w-96 text-blue-600" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold tracking-wide text-blue-700 bg-blue-100 mb-6">
              24/7 Emergency Support Available
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Reliable & Affordable <span className="text-blue-600">Plumbing Services</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Fast response • Licensed plumbers • 100% Satisfaction guaranteed. We handle everything from leaky faucets to major pipe repairs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="tel:5550199" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl shadow-xl text-white bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
              >
                <Phone className="mr-3 h-5 w-5" /> Call Now
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
              >
                Get Free Estimate
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span className="font-medium">Same Day Service</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/plumbing/800/600" 
                alt="Plumbing Service" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <CheckCircle2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">15+</p>
                    <p className="text-sm font-medium text-slate-500">Years Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Emergency Plumbing",
      description: "Available 24/7 for burst pipes, sewage backups, and critical leaks that can't wait.",
      icon: <Clock className="h-7 w-7" />,
    },
    {
      id: 2,
      title: "Leak Detection & Repair",
      description: "Advanced technology to find hidden leaks behind walls and under foundations without damage.",
      icon: <Droplets className="h-7 w-7" />,
    },
    {
      id: 3,
      title: "Drain Cleaning",
      description: "Removing stubborn clogs and buildup with professional hydro-jetting and cabling services.",
      icon: <Trash2 className="h-7 w-7" />,
    },
    {
      id: 4,
      title: "Water Heater Services",
      description: "Installation and repair of standard and tankless water heaters for consistent hot water.",
      icon: <Thermometer className="h-7 w-7" />,
    },
    {
      id: 5,
      title: "Pipe Repair & Replacement",
      description: "Expert repiping services using modern, durable materials like PEX and high-grade copper.",
      icon: <Hammer className="h-7 w-7" />,
    },
    {
      id: 6,
      title: "Residential Plumbing",
      description: "Comprehensive maintenance and fixture installations for bathrooms, kitchens, and more.",
      icon: <Wrench className="h-7 w-7" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Complete Plumbing Solutions</p>
          <p className="text-lg text-slate-600">From minor drips to major overhauls, our expert team is ready to restore your home's comfort and safety.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center text-blue-600 font-bold cursor-pointer hover:translate-x-1 transition-transform">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    "Fast response time (within 60 mins for emergencies)",
    "Upfront pricing with no hidden fees",
    "Highly experienced & background-checked professionals",
    "Local & trusted neighborhood plumbers",
    "100% Customer satisfaction guarantee",
    "Environmentally friendly solutions"
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-blue-600 opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-blue-400 font-bold tracking-wide uppercase text-sm mb-2">The Elite Advantage</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">Why Homeowners Trust Our Team</h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We pride ourselves on providing more than just a quick fix. We build long-term relationships through quality workmanship and unparalleled customer service.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 p-1 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-slate-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/tool1/300/400" alt="Plumbing tools" className="rounded-2xl shadow-2xl w-full" />
              <img src="https://picsum.photos/seed/sink1/300/300" alt="Kitchen sink" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/van1/300/300" alt="Service van" className="rounded-2xl shadow-2xl w-full" />
              <img src="https://picsum.photos/seed/bath1/300/400" alt="Bathroom plumbing" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EmergencyCTA = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">
          Plumbing Emergency? We're Ready to Help 24/7!
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Burst pipes, overflows, or no hot water? Don't wait. Our dispatchers are standing by to send a professional to your door.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="tel:5550199" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 text-2xl font-black rounded-2xl shadow-2xl hover:bg-blue-50 transition-all active:scale-95"
          >
            <Phone className="mr-3 h-8 w-8 animate-pulse" /> (555) 0199
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-16">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Contact Us</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Request a Free Quote</h3>
            <p className="text-lg text-slate-600 mb-10">
              Fill out the form below and one of our experts will get back to you within 2 hours. For immediate assistance, please call us directly.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 p-4 bg-white rounded-2xl shadow-sm">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase">Emergency Hotlines</p>
                  <p className="text-xl font-extrabold text-slate-900">(555) 0199</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 bg-white rounded-2xl shadow-sm">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase">Service Area</p>
                  <p className="text-xl font-extrabold text-slate-900">Proudly Serving Local Residential Areas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-100">
              {formState === 'success' ? (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Thank you for reaching out. We'll call you back very shortly.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      placeholder="(555) 000-0000"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tell us about your issue</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      placeholder="e.g. My water heater is leaking in the basement..."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full py-5 px-6 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Request a Call Back'}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    Demo website – This form is for demonstration purposes only.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-black text-white tracking-tight">ELITE FLOW</span>
            </div>
            <p className="leading-relaxed mb-6">
              Your trusted partner for residential and emergency plumbing services. We deliver high-quality solutions with transparency and integrity.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold">f</div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold">t</div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold">i</div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Emergency Services</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Leak Detection</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Water Heaters</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Repiping Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Service Area</h4>
            <p className="mb-4">Currently serving local residential neighborhoods within a 50-mile radius.</p>
            <p className="flex items-center gap-2 text-white font-bold">
              <Phone className="h-5 w-5 text-blue-500" /> (555) 0199
            </p>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Elite Flow Plumbing. All rights reserved.
          </p>
          <div className="bg-slate-800 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-700">
            DEMO SITE - SAMPLE LAYOUT ONLY
          </div>
        </div>
      </div>
    </footer>
  );
};

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/95 to-transparent z-40">
      <a 
        href="tel:5550199" 
        className="flex w-full items-center justify-center px-6 py-5 bg-blue-600 text-white text-xl font-black rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-95 transition-all"
      >
        <Phone className="mr-3 h-6 w-6" /> CALL NOW (555) 0199
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <EmergencyCTA />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

