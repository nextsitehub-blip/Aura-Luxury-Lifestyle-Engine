import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield, Globe, Award } from 'lucide-react';

interface NavbarProps {
  onOpenConcierge: () => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ onOpenConcierge, activeSection, scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'The Registry', id: 'showcase' },
    { label: 'Aura Engine', id: 'curation-engine' },
    { label: 'Material Studio', id: 'material-studio' },
    { label: 'The Chronicles', id: 'craftsmanship-timeline' },
    { label: 'Maison Story', id: 'brand-story' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 border rounded-xs ${
          isScrolled 
            ? 'bg-warm-white/90 backdrop-blur-xl border-stone/30 py-3 shadow-md' 
            : 'bg-matte-black/40 backdrop-blur-md border-white/10 py-5'
        }`}
        id="aura-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-start focus:outline-none cursor-pointer"
            id="nav-logo-btn"
          >
            <span className={`font-serif text-2xl md:text-3xl tracking-[0.4em] uppercase font-light transition-colors duration-500 ${
              isScrolled ? 'text-matte-black group-hover:text-bronze' : 'text-white group-hover:text-bronze'
            }`}>
              Aura
            </span>
            <span className={`font-mono text-[7px] md:text-[8px] tracking-[0.4em] uppercase transition-colors duration-500 mt-1 ${
              isScrolled ? 'text-stone-dark group-hover:text-bronze' : 'text-stone group-hover:text-white'
            }`}>
              Luxury Lifestyle Engine
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12" id="nav-desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-sans text-xs tracking-[0.25em] uppercase transition-all duration-300 py-2 focus:outline-none cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-bronze font-bold' 
                    : isScrolled ? 'text-stone-dark hover:text-matte-black' : 'text-stone-light hover:text-white'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-bronze to-transparent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6" id="nav-actions">
            <span className={`text-[10px] font-mono flex items-center tracking-widest gap-1 uppercase transition-colors ${
              isScrolled ? 'text-stone-dark' : 'text-stone-light'
            }`}>
              <Globe className="w-3 h-3 text-bronze" />
              Ateliers: Global
            </span>
            <button
              onClick={onOpenConcierge}
              className={`relative px-6 py-2.5 overflow-hidden group border transition-all duration-500 rounded-sm focus:outline-none cursor-pointer ${
                isScrolled ? 'border-bronze/35 text-bronze' : 'border-white/30 text-white'
              }`}
              id="nav-concierge-btn"
            >
              <div className="absolute inset-0 w-0 bg-bronze transition-all duration-500 ease-out group-hover:w-full" />
              <span className={`relative font-mono text-[10px] tracking-[0.25em] uppercase font-bold transition-colors group-hover:text-white ${
                isScrolled ? 'text-bronze' : 'text-white'
              }`}>
                Request Allocation
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={onOpenConcierge}
              className={`px-4 py-2 border rounded-sm bg-transparent focus:outline-none cursor-pointer transition-colors ${
                isScrolled ? 'border-bronze/30 text-bronze' : 'border-white/20 text-white'
              }`}
            >
              <span className="font-mono text-[8px] tracking-[0.2em] uppercase font-bold">
                Enquire
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none cursor-pointer p-1 transition-colors ${
                isScrolled ? 'text-matte-black' : 'text-white'
              }`}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-warm-white/98 backdrop-blur-2xl z-40 pt-28 px-8 flex flex-col justify-between pb-12"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col space-y-8">
              <div className="h-[1px] bg-stone/20 w-full" />
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => scrollToSection(item.id), 300);
                    }}
                    className="text-left font-serif text-3xl tracking-wide text-matte-black hover:text-gold transition-colors duration-300 focus:outline-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <div className="h-[1px] bg-stone/20 w-full" />
              <div className="grid grid-cols-2 gap-4 text-stone-dark font-mono text-[9px] tracking-widest uppercase">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-bronze/60" />
                  <span>Bespoke Handcraft</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-bronze/60" />
                  <span>Limited Registry</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 mt-2">
                  <Globe className="w-3.5 h-3.5 text-bronze/60" />
                  <span>Ateliers in Milan, Paris, NY</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConcierge();
                }}
                className="w-full py-4 bg-gold text-matte-black font-mono text-xs tracking-[0.3em] uppercase hover:bg-bronze hover:text-warm-white transition-colors duration-300 rounded-sm focus:outline-none cursor-pointer font-bold"
              >
                Request Allocation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
