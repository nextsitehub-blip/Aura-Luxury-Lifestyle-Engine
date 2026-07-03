import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Award, Lock, Check } from 'lucide-react';

interface FooterProps {
  onOpenConcierge: (initialPieceName?: string) => void;
  scrollToSection: (id: string) => void;
}

export default function Footer({ onOpenConcierge, scrollToSection }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmailInput('');
    }, 4000);
  };

  return (
    <footer className="relative bg-warm-white text-matte-black border-t border-stone/30 pt-24 pb-12" id="footer-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top block: Brand declaration & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone/20">
          
          {/* Brand Logo & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.25em] uppercase text-matte-black font-light">
                Aura
              </span>
              <span className="font-mono text-[8px] tracking-[0.45em] uppercase text-stone-dark mt-1">
                Luxury Lifestyle Engine
              </span>
            </div>
            <p className="font-sans text-xs md:text-sm text-charcoal font-light max-w-sm leading-relaxed tracking-wide">
              We cultivate high-fashion, low-frequency architectural statements that anchor residential spaces. We invite a limited registry of clients each season to curate their private sanctuaries.
            </p>
          </div>

          {/* Ledger Subscription Form */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-end">
            <div>
              <span className="font-mono text-[9px] text-bronze tracking-[0.3em] uppercase block mb-1 font-bold">
                AURA LEDGER
              </span>
              <h4 className="font-serif text-lg font-light text-matte-black tracking-wide">
                Subscribe for Limited Releases
              </h4>
              <p className="font-sans text-stone-dark text-xs mt-0.5">
                Join our private ledger to receive notification of physical collection drops, unique artistic releases, and local design workshop schedules.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 border border-bronze/25 bg-bronze/5 px-4 py-3 rounded-xs max-w-md">
                <Check className="w-4.5 h-4.5 text-bronze shrink-0" />
                <span className="font-mono text-[9px] text-bronze tracking-wider font-semibold">
                  Registration Complete. Welcome to the Ledger.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md border-b border-stone/25 pb-2">
                <input
                  required
                  type="email"
                  placeholder="Insert email for private registry"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="bg-transparent text-sm p-2 flex-grow outline-none border-0 text-matte-black font-sans font-light placeholder-stone-medium focus:placeholder-stone-dark transition-colors"
                />
                <button
                  type="submit"
                  className="p-2 text-stone-dark hover:text-matte-black transition-colors focus:outline-none cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle block: Navigation Links columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-stone/20">
          
          {/* Column 1: Curation */}
          <div className="space-y-4">
            <h5 className="font-mono text-[9px] text-stone-dark tracking-[0.25em] uppercase border-l border-bronze pl-3 font-bold">
              Curation Space
            </h5>
            <ul className="space-y-2.5 font-sans text-xs text-charcoal font-light">
              <li>
                <button onClick={() => scrollToSection('showcase')} className="hover:text-bronze transition-colors focus:outline-none cursor-pointer text-left">
                  The Master Collection
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('curation-engine')} className="hover:text-bronze transition-colors focus:outline-none cursor-pointer text-left">
                  Sanctuary Curation Engine
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('material-studio')} className="hover:text-bronze transition-colors focus:outline-none cursor-pointer text-left">
                  Tactile Material Studio
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConcierge('Bespoke Architectural Commission')} className="hover:text-bronze transition-colors focus:outline-none cursor-pointer text-left font-semibold">
                  Custom Atelier Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Ateliers */}
          <div className="space-y-4">
            <h5 className="font-mono text-[9px] text-stone-dark tracking-[0.25em] uppercase border-l border-bronze pl-3 font-bold">
              Global Ateliers
            </h5>
            <ul className="space-y-2.5 font-sans text-xs text-charcoal font-light">
              <li className="hover:text-matte-black transition-colors">Milan &mdash; Via Solferino 12</li>
              <li className="hover:text-matte-black transition-colors">Paris &mdash; Rue du Faubourg Saint-Honoré</li>
              <li className="hover:text-matte-black transition-colors">Kyoto &mdash; Higashiyama District</li>
              <li className="hover:text-matte-black transition-colors">New York &mdash; Greene St, SoHo</li>
            </ul>
          </div>

          {/* Column 3: The Maison */}
          <div className="space-y-4">
            <h5 className="font-mono text-[9px] text-stone-dark tracking-[0.25em] uppercase border-l border-bronze pl-3 font-bold">
              The Maison
            </h5>
            <ul className="space-y-2.5 font-sans text-xs text-charcoal font-light">
              <li>
                <button onClick={() => scrollToSection('brand-story')} className="hover:text-bronze transition-colors focus:outline-none cursor-pointer text-left">
                  Our Brand Story
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConcierge('Certificate & Origin Registry Enquiry')} className="hover:text-bronze transition-colors focus:outline-none cursor-pointer text-left">
                  Pedigree &amp; Blockchain Logs
                </button>
              </li>
              <li className="hover:text-matte-black transition-colors">Master Artisans Registry</li>
              <li className="hover:text-matte-black transition-colors">Limited Edition Press</li>
            </ul>
          </div>

          {/* Column 4: Private Services */}
          <div className="space-y-4">
            <h5 className="font-mono text-[9px] text-stone-dark tracking-[0.25em] uppercase border-l border-bronze pl-3 font-bold">
              Private Services
            </h5>
            <ul className="space-y-2.5 font-sans text-xs text-charcoal font-light">
              <li>
                <button onClick={() => onOpenConcierge('Schedule Private Viewing')} className="hover:text-bronze transition-colors focus:outline-none cursor-pointer text-left">
                  Book Salon Private Viewing
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConcierge('Material Swatch Box Delivery Request')} className="hover:text-bronze transition-colors focus:outline-none cursor-pointer text-left">
                  Order Swatch Delivery Box
                </button>
              </li>
              <li className="hover:text-matte-black transition-colors font-semibold text-stone-dark">Architect &amp; Builder Partner Portal</li>
              <li className="hover:text-matte-black transition-colors">Atelier Careers</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar: Legal notes & badges */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-6 md:gap-0">
          
          {/* Security & Provenance tags */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-stone-medium font-mono text-[8px] tracking-[0.2em] uppercase">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-bronze/40" />
              <span>Verifiable Pedigree Logs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-bronze/40" />
              <span>Limited Annual Registry Slots</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-bronze/40" />
              <span>Secure Allocation Protection</span>
            </div>
          </div>

          {/* Copyright details */}
          <div className="text-center md:text-right font-mono text-[9px] text-stone-medium tracking-wider">
            &copy; {new Date().getFullYear()} AURA LIFESTYLE GMBH. ALL RIGHTS RESERVED. ATELIER CODES AR-192.
          </div>

        </div>

      </div>
    </footer>
  );
}
