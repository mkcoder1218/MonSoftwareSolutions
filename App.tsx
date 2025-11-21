import React, { useState, useEffect } from 'react';
import { translations } from './constants';
import { Language, Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Database, Briefcase, MapPin, Phone, Mail, Send } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<Language>('am');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const content = translations[lang];

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Icon mapper
  const getIcon = (name: string) => {
    switch(name) {
      case 'Globe': return <Globe className="w-10 h-10 text-blue-600" />;
      case 'Smartphone': return <Smartphone className="w-10 h-10 text-blue-600" />;
      case 'Database': return <Database className="w-10 h-10 text-blue-600" />;
      case 'Briefcase': return <Briefcase className="w-10 h-10 text-blue-600" />;
      default: return <Code className="w-10 h-10 text-blue-600" />;
    }
  };

  // --- Page Components (Inline for single file optimization) ---

  const Hero = () => (
    <div className="relative bg-blue-900 min-h-screen flex items-center font-amharic overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?blur=2" 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 text-center md:text-left">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              {content.hero.cta} <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setCurrentPage('services')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center"
            >
              {content.hero.secondaryCta}
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Shape */}
      <div className="absolute bottom-0 right-0 hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="300" fill="white" fillOpacity="0.05"/>
          <circle cx="400" cy="400" r="200" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>
    </div>
  );

  const About = () => (
    <div className="py-20 bg-white font-amharic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{content.about.title}</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <img 
              src="https://picsum.photos/600/500?random=10" 
              alt="Mon Team" 
              className="rounded-lg shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-orange-500 hidden md:block">
              <p className="text-3xl font-bold text-blue-600">5+</p>
              <p className="text-gray-600 text-sm">Years of Excellence</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.about.storyTitle}</h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {content.about.story}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{content.about.missionTitle}</h4>
                  <p className="text-gray-600">{content.about.mission}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{content.about.visionTitle}</h4>
                  <p className="text-gray-600">{content.about.vision}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-900 rounded-2xl p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-700">
            {content.about.stats.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0 px-4">
                <div className="text-4xl font-bold text-orange-400 mb-2">{stat.value}</div>
                <div className="text-blue-200 uppercase tracking-wide text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const Services = () => (
    <div className="py-20 bg-gray-50 font-amharic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{content.services.title}</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{content.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {content.services.items.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Portfolio = () => (
    <div className="py-20 bg-white font-amharic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{content.portfolio.title}</h2>
          <p className="text-gray-600 mt-4">{content.portfolio.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.portfolio.items.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <button className="text-blue-600 font-bold text-sm hover:text-blue-800 flex items-center">
                  View Details <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Pricing = () => (
    <div className="py-20 bg-gray-900 text-white font-amharic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">{content.pricing.title}</h2>
          <p className="text-gray-400 mt-4">{content.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.pricing.tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-800 rounded-2xl p-8 border-2 ${
                tier.recommended ? 'border-orange-500 transform scale-105 shadow-2xl shadow-orange-500/20' : 'border-gray-700 hover:border-gray-600'
              } transition-all`}
            >
              {tier.recommended && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-400">{tier.price}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle size={18} className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  tier.recommended ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {lang === 'am' ? 'ይምረጡ' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Contact = () => (
    <div className="py-20 bg-gray-50 font-amharic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="bg-blue-900 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">{content.contact.title}</h2>
              <p className="text-blue-200 mb-10">{content.contact.subtitle}</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-wider">Address</p>
                    <p className="font-medium">{content.contact.info.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-wider">Phone</p>
                    <p className="font-medium">{content.contact.info.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-wider">Email</p>
                    <p className="font-medium">{content.contact.info.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <div className="h-48 bg-gray-700 rounded-lg opacity-50 flex items-center justify-center text-sm text-gray-300">
                  [Google Map Placeholder]
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{content.contact.form.name}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{content.contact.form.email}</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{content.contact.form.message}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder=""></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg flex justify-center items-center gap-2">
                {content.contact.form.submit} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Contact />
          </>
        );
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'portfolio': return <Portfolio />;
      case 'pricing': return <Pricing />;
      case 'contact': return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        currentPage={currentPage} 
        setPage={setCurrentPage}
        content={content.nav}
      />
      
      <main className="pt-20">
        {renderPage()}
      </main>

      <Footer content={content.footer} navContent={content.nav} setPage={setCurrentPage} />
    </div>
  );
}

export default App;