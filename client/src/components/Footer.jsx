import React from 'react';
import { Hammer, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-white p-2 rounded-lg">
                <Hammer className="text-navy-900 h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display leading-tight tracking-tight">BuildCraft</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-navy-400">Home Solutions</span>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-8">
              Building luxury spaces that redefine comfort. Your dream home is just one renovation away.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-orange transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-orange transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-orange transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-navy-300 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How We Work</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Our Services</h4>
            <ul className="space-y-4 text-navy-300 text-sm">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovation</li>
              <li>Basement Finishing</li>
              <li>Flooring & Tile</li>
              <li>Outdoor Living</li>
              <li>Additions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-navy-300 text-sm">
              <li className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-accent-green shrink-0" />
                <span>123 Design Way, Suite 400<br />Austin, TX 78701</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-accent-green shrink-0" />
                <span>(512) 555-0123</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-accent-green shrink-0" />
                <span>hello@buildcraft.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-navy-400">
          <p>© 2024 BuildCraft Home Solutions. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

