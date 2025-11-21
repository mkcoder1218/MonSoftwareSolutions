import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Page, Content } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currentPage: Page;
  setPage: (page: Page) => void;
  content: Content['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, currentPage, setPage, content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'am' ? 'en' : 'am');
  };

  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 font-amharic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <span className="text-3xl font-bold text-blue-600">Mon<span className="text-orange-500">.</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {content.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  currentPage === item.id ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-200 font-medium`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Globe size={16} className="text-gray-500" />
              <span className="text-sm font-semibold text-gray-700">{lang === 'am' ? 'English' : 'አማርኛ'}</span>
            </button>
            
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              {lang === 'am' ? 'ጀምር' : 'Start'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-1 px-2 py-1 rounded border border-gray-200"
            >
              <span className="text-xs font-bold text-gray-700">{lang === 'am' ? 'EN' : 'አማ'}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {content.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;