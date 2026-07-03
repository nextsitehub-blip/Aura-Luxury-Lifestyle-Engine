import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartCuration: () => void;
  onExploreCollection: () => void;
}

export default function Hero({ onStartCuration, onExploreCollection }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="relative min-h-screen bg-matte-black flex flex-col justify-between overflow-hidden" 
      id="hero-section"
    >
      {/* Background Image with Rich Premium Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Architecture Living Space"
          className="w-full h-full object-cover object-center scale-105 opacity-55 filter contrast-[1.05] brightness-[0.75]"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/20 to-matte-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-transparent to-matte-black/45" />
      </div>

      {/* Mouse Follow Ambient Lighting overlay */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-10 hidden md:block"
        animate={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(140, 98, 57, 0.15), transparent 80%)`
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.6 }}
      />

      {/* Decorative Fine Framing & Corner Notches */}
      <div className="absolute inset-6 md:inset-10 border border-bronze/15 pointer-events-none z-10 hidden sm:block">
        <span className="absolute top-0 left-0 w-3 h-[1px] bg-bronze" />
        <span className="absolute top-0 left-0 h-3 w-[1px] bg-bronze" />
        <span className="absolute top-0 right-0 w-3 h-[1px] bg-bronze" />
        <span className="absolute top-0 right-0 h-3 w-[1px] bg-bronze" />
        <span className="absolute bottom-0 left-0 w-3 h-[1px] bg-bronze" />
        <span className="absolute bottom-0 left-0 h-3 w-[1px] bg-bronze" />
        <span className="absolute bottom-0 right-0 w-3 h-[1px] bg-bronze" />
        <span className="absolute bottom-0 right-0 h-3 w-[1px] bg-bronze" />
      </div>

      {/* Hero Content: Centered & Spacious */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-6 md:px-12 pt-36 pb-20">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          {/* Subtle Premium Header Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6 md:mb-8 opacity-75"
          >
            <span className="h-[1px] w-8 bg-bronze/50" />
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-bronze uppercase font-bold">
              MAISON AURA &mdash; THE REGISTRY
            </span>
            <span className="h-[1px] w-8 bg-bronze/50" />
          </motion.div>

          {/* Master Brand Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] text-white tracking-tighter font-light leading-[0.95] mb-8"
          >
            Curated Living <br />
            <span className="italic font-light font-serif text-bronze">Beyond Ordinary.</span>
          </motion.h1>

          {/* Premium Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base md:text-lg text-stone font-light max-w-xl tracking-wide leading-relaxed mb-12 opacity-80"
          >
            A sovereign sanctuary engine for fine architectural collections, statement furniture, and masterfully curated interior landscapes.
          </motion.p>

          {/* Luxury Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto"
            id="hero-cta-group"
          >
            {/* Primary Elegant Button */}
            <button
              onClick={onStartCuration}
              className="w-full sm:w-auto px-10 py-5 bg-bronze hover:bg-white hover:text-matte-black text-white font-mono text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-500 rounded-sm shadow-2xl focus:outline-none cursor-pointer flex items-center justify-center gap-2.5 group"
              id="hero-start-curation-btn"
            >
              <span>Initialize Curation</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="font-bold text-xs"
              >
                &rarr;
              </motion.span>
            </button>

            {/* Ghost Button */}
            <button
              onClick={onExploreCollection}
              className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:border-bronze text-white hover:text-bronze font-mono text-[10px] uppercase tracking-[0.25em] bg-transparent transition-all duration-500 rounded-sm focus:outline-none cursor-pointer"
              id="hero-explore-collection-btn"
            >
              The Master Collection
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Meta Stats - Footer of Hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 border-t border-white/10 pt-8">
        <div className="flex items-center gap-8 text-stone font-mono text-[10px] tracking-[0.25em] uppercase">
          <div className="flex items-center gap-2">
            <Compass className="w-4.5 h-4.5 text-bronze" />
            <div>
              <span className="text-white opacity-85">Milan Atelier:</span> Via Solferino 12
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-bronze" />
            <div>
              <span className="text-white opacity-85">Registry:</span> Verifiable Pedigree
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={onExploreCollection}
          className="flex items-center gap-3 font-mono text-[9px] tracking-[0.3em] uppercase text-stone-medium hover:text-bronze transition-colors duration-300 focus:outline-none cursor-pointer self-center md:self-auto"
          id="hero-scroll-prompt"
        >
          <span>Scroll to Discover</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-bronze" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
