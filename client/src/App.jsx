import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import LeadFunnel from './components/LeadFunnel';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import OfferBox from './components/OfferBox';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Brand Trust Bar */}
      <div className="bg-navy-950 py-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
            <span className="text-white text-2xl font-bold font-display uppercase tracking-tighter">KitchenMaster</span>
            <span className="text-white text-2xl font-bold font-display italic">LuxuryBath</span>
            <span className="text-white text-2xl font-bold font-display">FloorWorks</span>
            <span className="text-white text-2xl font-bold font-display uppercase">Craft&Co</span>
            <span className="text-white text-2xl font-bold font-display tracking-widest">AUSTIN-HOMES</span>
          </div>
        </div>
      </div>

      <Services />
      <Portfolio />
      <Process />
      
      {/* Visual Break / Storytelling Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl relative z-10" 
              alt="Quality details"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-orange rounded-3xl -z-0 opacity-10 animate-pulse" />
            <div className="absolute top-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
              <p className="text-navy-900 font-extrabold text-4xl mb-1">98%</p>
              <p className="text-navy-500 text-sm font-medium uppercase tracking-widest">Referral Rate</p>
            </div>
          </div>
          <div>
            <span className="text-accent-orange font-bold text-xs uppercase tracking-widest mb-4 inline-block">The BuildCraft Standard</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-8 leading-tight">We Don't Just Build Rooms. We Create <span className="text-accent-green">Experiences</span>.</h2>
            <p className="text-navy-600 text-lg mb-8 leading-relaxed">
              Every detail matters. From the way a drawer glides to the texture of a custom-finished wall, we focus on the sensory experience of your new home. Our team of expert artisans treats every project as a unique masterpiece.
            </p>
            <ul className="space-y-4 mb-10">
              {['Sustainable Material Selection', 'White Glove Cleanliness', 'Full Project Management', '2-Year Workmanship Warranty'].map(item => (
                <li key={item} className="flex items-center space-x-3 text-navy-900 font-bold">
                  <div className="bg-accent-green/10 p-1 rounded-full"><div className="w-2 h-2 bg-accent-green rounded-full" /></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#quote" className="inline-block bg-navy-900 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-navy-900/20 transition-all hover:-translate-y-1">
              Learn Our Philosophy
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <LeadFunnel />
      <Footer />

      {/* Persistent CTA for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-full px-6">
        <a 
          href="#quote" 
          className="bg-accent-orange text-white w-full py-4 rounded-full font-bold shadow-2xl flex items-center justify-center space-x-2 border-4 border-white"
        >
          <span>Free Design Quote</span>
        </a>
      </div>

      {/* Chatbot */}
      <Chatbot />

      {/* Offer Box */}
      <OfferBox />
    </div>
  );
}

export default App;

