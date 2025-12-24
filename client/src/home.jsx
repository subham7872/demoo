import React, { useState, useEffect } from 'react';
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
  ArrowRight,
  Search,
  AlertCircle,
  Star,
  Zap,
  DollarSign,
  AlertTriangle,
  Smartphone,
  Users,
  Award,
  FileCheck,
  TrendingUp
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
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 pb-6 bg-gradient-to-t from-white via-white/95 to-transparent z-40">
      <a 
        href="tel:5550199" 
        className="flex w-full items-center justify-center px-6 py-4 bg-blue-600 text-white text-lg font-black rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-95 transition-all"
      >
        <Phone className="mr-2 h-5 w-5" /> CALL NOW (555) 0199
      </a>
    </div>
  );
};

// 1️⃣ Website Audit Overlay
const WebsiteAuditOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const auditIssues = [
    {
      problem: "No clear Call-To-Action above the fold",
      solution: "We place prominent, clickable CTAs in the hero section with clear value propositions."
    },
    {
      problem: "Phone number not clickable on mobile",
      solution: "All phone numbers use tel: links that work seamlessly on mobile devices."
    },
    {
      problem: "No emergency plumbing highlight",
      solution: "Emergency services are prominently featured with 24/7 messaging and sticky CTAs."
    },
    {
      problem: "No trust badges / licenses shown",
      solution: "Trust signals (licensed, insured, years of experience) are visible throughout."
    },
    {
      problem: "No Google reviews embedded",
      solution: "Reviews are prominently displayed with star ratings and customer testimonials."
    },
    {
      problem: "No service area clarity",
      solution: "Service areas are clearly listed with visual map indicators."
    },
    {
      problem: "Slow loading hero images",
      solution: "Optimized images with lazy loading and proper compression for fast load times."
    },
    {
      problem: "No booking or quick contact option",
      solution: "Floating quote button and contact forms are easily accessible on every page."
    }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-4 z-50 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg shadow-2xl flex items-center gap-2 font-bold text-xs transition-all hover:scale-105 hidden md:flex"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline">🔍 Website Issues Found</span>
        <span className="lg:hidden">🔍 Audit</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-end">
          <div className="bg-white h-full w-full max-w-2xl overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black mb-1">Website Audit Report</h2>
                <p className="text-red-100 text-sm">Common issues found on plumbing websites</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-red-800 p-2 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {auditIssues.map((issue, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border-l-4 border-red-500">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 mb-2">❌ {issue.problem}</p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-3">
                        <p className="text-sm text-green-800 font-semibold mb-1">✅ How we fix it:</p>
                        <p className="text-sm text-green-700">{issue.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// 2️⃣ Sticky Emergency CTA Bar
const StickyEmergencyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white py-2.5 px-4 z-40 shadow-2xl border-b-2 border-red-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-xl md:text-2xl">🚨</span>
          <div>
            <p className="font-black text-sm md:text-lg">24/7 Emergency Plumber — Call Now</p>
            <p className="text-xs text-red-100 hidden md:block">Most plumbing websites don't highlight emergency services clearly.</p>
          </div>
        </div>
        <a
          href="tel:5550199"
          className="bg-white text-red-600 px-4 md:px-6 py-1.5 md:py-2 rounded-full font-black hover:bg-red-50 transition-all active:scale-95 flex items-center gap-2 text-sm md:text-base"
        >
          <Phone className="h-4 w-4 md:h-5 md:w-5" />
          <span className="hidden sm:inline">(555) 0199</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </div>
  );
};

// 3️⃣ Mobile Preview Toggle
const MobilePreviewToggle = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (isMobileView) {
      const timer = setTimeout(() => setShowTooltip(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowTooltip(false);
    }
  }, [isMobileView]);

  return (
    <>
      <button
        onClick={() => setIsMobileView(!isMobileView)}
        className="fixed bottom-32 right-4 z-50 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg shadow-2xl flex items-center gap-2 font-bold text-xs transition-all hover:scale-105 hidden md:flex"
      >
        <Smartphone className="h-4 w-4" />
        <span className="hidden lg:inline">{isMobileView ? 'Desktop View' : 'Mobile Preview'}</span>
        <span className="lg:hidden">Mobile</span>
      </button>
      {isMobileView && (
        <div className="fixed inset-0 bg-black/80 z-[90] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full relative">
            <div className="bg-slate-900 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <span className="font-bold">Mobile Preview</span>
              <button onClick={() => setIsMobileView(false)} className="text-white hover:bg-slate-800 p-1 rounded">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="relative">
                <a
                  href="tel:5550199"
                  className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-black text-xl animate-pulse"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <Phone className="inline mr-2 h-6 w-6" />
                  (555) 0199
                </a>
                {showTooltip && (
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-red-600 text-white p-3 rounded-lg shadow-xl w-64 text-sm font-bold z-50 animate-bounce">
                    ⚠️ On most sites, this number is not clickable — leads lost.
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-600"></div>
                  </div>
                )}
              </div>
              <p className="text-sm text-slate-600 text-center">
                This phone number is clickable and will dial directly on mobile devices.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// 4️⃣ Enhanced Trust Proof Section
const TrustProofSection = () => {
  const trustItems = [
    { icon: <ShieldCheck className="h-8 w-8" />, title: "Licensed & Insured", desc: "Fully bonded and covered" },
    { icon: <Award className="h-8 w-8" />, title: "30+ Years Experience", desc: "Proven track record" },
    { icon: <FileCheck className="h-8 w-8" />, title: "Background-Checked Technicians", desc: "Safe and reliable" },
    { icon: <Clock className="h-8 w-8" />, title: "Same-Day Service", desc: "Fast response times" },
    { icon: <DollarSign className="h-8 w-8" />, title: "Upfront Pricing", desc: "No surprises" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-100 border-2 border-yellow-400 px-4 py-2 rounded-lg mb-4">
            <p className="text-sm font-black text-yellow-800">⚠️ Missing trust signals = lower conversion</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Why Customers Trust Us <span className="text-slate-500">(Most Sites Don't Show This)</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building trust through transparency and proven credentials
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all hover:scale-105">
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5️⃣ Google Reviews Embed (Mock)
const GoogleReviewsSection = () => {
  const reviews = [
    { name: "Sarah Johnson", rating: 5, text: "Fast response and fixed our leak immediately. Professional and courteous!" },
    { name: "Mike Chen", rating: 5, text: "Best plumber in town. Upfront pricing and excellent work. Highly recommend!" },
    { name: "Emily Rodriguez", rating: 5, text: "Emergency service at 2 AM and they were there in 30 minutes. Amazing!" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200">
          <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-black text-slate-900">4.8</span>
              </div>
              <p className="text-slate-600 font-semibold">Based on 247 Google Reviews</p>
            </div>
            <div className="bg-red-100 border-2 border-red-400 px-4 py-2 rounded-lg">
              <p className="text-sm font-black text-red-800">⚠️ Most plumbing sites don't leverage reviews properly.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">{review.text}</p>
                <p className="font-bold text-slate-900">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 6️⃣ Service Area Clarity
const ServiceAreaSection = () => {
  const areas = ["Houston, TX", "Dallas, TX", "Austin, TX", "Phoenix, AZ", "San Antonio, TX", "Fort Worth, TX"];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">We Serve These Areas</h2>
          <div className="inline-block bg-yellow-500 text-slate-900 px-4 py-2 rounded-lg mb-6">
            <p className="text-sm font-black">⚠️ Customers leave if they're unsure you serve their area.</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-blue-700 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-4" />
            <p className="text-xl font-semibold mb-2">50+ Mile Service Radius</p>
            <p className="text-slate-400">We proudly serve residential and commercial properties across the region</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7️⃣ Fast Quote Widget
const FastQuoteWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', zip: '', service: '', emergency: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({ name: '', zip: '', service: '', emergency: '' });
    }, 3000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 md:bottom-6 right-4 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 md:px-5 py-2.5 md:py-3 rounded-full shadow-2xl flex items-center gap-2 font-black text-xs md:text-sm hover:scale-110 transition-all animate-pulse"
      >
        <Zap className="h-4 w-4 md:h-5 md:w-5" />
        <span className="hidden lg:inline">⚡ Get Instant Quote</span>
        <span className="hidden md:inline lg:hidden">⚡ Quote</span>
        <span className="md:hidden">⚡</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-6 w-6" />
            </button>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Requested!</h3>
                <p className="text-slate-600 mb-4">This is where leads are captured. Most sites don't have this.</p>
                <p className="text-sm text-slate-500">We'll call you within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Your Instant Quote</h3>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Zip Code</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="77001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Type</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Plumbing</option>
                    <option value="drain">Drain Cleaning</option>
                    <option value="water-heater">Water Heater</option>
                    <option value="leak">Leak Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Is this an emergency?</label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, emergency: 'yes' })}
                      className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                        formData.emergency === 'yes' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, emergency: 'no' })}
                      className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                        formData.emergency === 'no' ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all"
                >
                  Get My Quote
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// 8️⃣ Pricing Transparency
const PricingTransparencySection = () => {
  const pricing = [
    { service: "Drain Cleaning", price: "$99–$149", desc: "Standard residential drain cleaning" },
    { service: "Water Heater Repair", price: "$150–$450", desc: "Diagnosis and repair included" },
    { service: "Leak Repair", price: "$89–$199", desc: "Most common leaks fixed same day" },
    { service: "Emergency Service", price: "$125–$200", desc: "24/7 emergency call-out fee" },
    { service: "Pipe Replacement", price: "$500–$1,500", desc: "Depends on pipe length and type" },
    { service: "Fixture Installation", price: "$200–$600", desc: "Labor and basic materials" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 border-2 border-green-400 px-4 py-2 rounded-lg mb-4">
            <p className="text-sm font-black text-green-800">✅ Clear pricing builds trust. Hidden pricing kills conversions.</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Transparent Pricing <span className="text-slate-500">(Most Sites Hide This)</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No surprises. No hidden fees. Upfront pricing you can trust.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricing.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.service}</h3>
              <p className="text-3xl font-black text-blue-600 mb-3">{item.price}</p>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">*Prices are estimates. Final cost depends on specific situation.</p>
          <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
            Get Your Exact Quote
          </a>
        </div>
      </div>
    </section>
  );
};

// 9️⃣ Speed & UX Callouts (Visual Markers)
const SpeedUXCallouts = () => {
  const callouts = [
    { position: "top-[450px]", left: "left-[55%]", text: "⚠️ No CTA Above Fold", color: "bg-red-500" },
    { position: "top-[850px]", left: "left-[25%]", text: "⚠️ Too Much Text", color: "bg-yellow-500" },
    { position: "top-[1250px]", left: "left-[65%]", text: "⚠️ Slow Image Here", color: "bg-orange-500" }
  ];

  return (
    <div className="hidden lg:block">
      {callouts.map((callout, index) => (
        <div
          key={index}
          className={`fixed ${callout.position} ${callout.left} ${callout.color} text-white px-3 py-1.5 rounded-lg shadow-xl z-30 text-xs font-bold animate-pulse pointer-events-none opacity-80`}
        >
          {callout.text}
        </div>
      ))}
    </div>
  );
};

// 🔟 Final Pitch Section
const FinalPitchSection = () => {
  const benefits = [
    "Built for mobile-first users",
    "Designed for emergency intent",
    "Optimized for calls & leads",
    "Trust-driven layout",
    "Clear service coverage",
    "Fast loading & responsive"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Why This Demo Converts Better Than Most Plumbing Websites
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="text-xl font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
            <TrendingUp className="h-16 w-16 text-yellow-300 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Website?</h3>
            <p className="text-blue-100 mb-6">
              This demo showcases best practices that most plumbing websites are missing. 
              See the difference in conversion rates, user experience, and lead generation.
            </p>
            <a
              href="#contact"
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-black text-lg hover:bg-yellow-300 transition-all shadow-xl"
            >
              Want This for Your Website?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustProofSection />
        <GoogleReviewsSection />
        <WhyChooseUs />
        <ServiceAreaSection />
        <PricingTransparencySection />
        <EmergencyCTA />
        <ContactSection />
        <FinalPitchSection />
      </main>
      <Footer />
      <MobileStickyCTA />
      <WebsiteAuditOverlay />
      <StickyEmergencyCTA />
      <MobilePreviewToggle />
      <FastQuoteWidget />
      <SpeedUXCallouts />
    </div>
  );
}

