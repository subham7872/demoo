import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="bg-navy-900 p-2 rounded-lg group-hover:bg-accent-orange transition-colors">
            <Hammer className="text-white h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold font-display leading-tight tracking-tight ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}>BuildCraft</span>
            <span className={`text-[10px] font-medium uppercase tracking-[0.2em] ${
              isScrolled ? 'text-navy-500' : 'text-navy-100'
            }`}>Home Solutions</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-orange ${
                isScrolled ? 'text-navy-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-accent-green hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-navy-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-navy-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t shadow-2xl p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-navy-900 text-lg font-medium border-b border-gray-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-navy-950 text-white text-center py-4 rounded-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

