import React from 'react';
import { Content } from '../types';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  content: Content['footer'];
  navContent: Content['nav'];
  setPage: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ content, navContent, setPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 font-amharic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mon<span className="text-orange-500">.</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {content.company} - Building digital excellence in Ethiopia.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Links</h4>
            <ul className="space-y-2">
              {navContent.map(item => (
                <li key={item.id}>
                  <button 
                    onClick={() => setPage(item.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">Addis Ababa, Bole</p>
            <p className="text-gray-400 text-sm mb-2">+251 911 00 00 00</p>
            <p className="text-gray-400 text-sm">info@monsoftware.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {content.company}. {content.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;