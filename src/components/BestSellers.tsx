import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { LUXURY_COLLECTION } from '../data/luxuryData';
import { LuxuryPiece } from '../types';

interface BestSellersProps {
  onOpenConcierge: (subject: string) => void;
}

export default function BestSellers({ onOpenConcierge }: BestSellersProps) {
  const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);

  // Filter 4 masterpieces representing best-sellers
  const bestSellers: LuxuryPiece[] = LUXURY_COLLECTION.filter(p => 
    ['elysian-sofa', 'monolith-table', 'aether-pendant', 'aurelia-armchair'].includes(p.id)
  );

  return (
    <section className="relative py-32 md:py-44 bg-warm-white text-matte-black overflow-hidden border-t border-stone/20" id="best-sellers">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 md:gap-0">
          <div>
            <span className="font-mono text-[9px] tracking-[0.4em] text-bronze uppercase block mb-3 font-bold">
              THE MOST DESIRED
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-matte-black">
              The Best Sellers
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-stone-dark font-light max-w-sm leading-relaxed tracking-wide opacity-80">
            A small ledger of our most celebrated architectural creations, commissioned by discerning collectors and masterfully crafted across Western Europe and Japan.
          </p>
        </div>

        {/* Asymmetrical Magazine Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12" id="best-sellers-asym-grid">
          {bestSellers.map((piece, idx) => {
            // Asymmetrical grid column configurations
            const colSpan = idx === 0 
              ? 'lg:col-span-7' 
              : idx === 1 
              ? 'lg:col-span-5' 
              : idx === 2 
              ? 'lg:col-span-5' 
              : 'lg:col-span-7';

            const heightClass = idx === 0 || idx === 3
              ? 'aspect-[4/3] md:aspect-[16/10]'
              : 'aspect-[4/5] md:aspect-[3/4]';

            return (
              <motion.div
                key={piece.id}
                className={`${colSpan} flex flex-col justify-between group cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIdx(piece.id)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onOpenConcierge(`Bespoke Commission Enquiry: ${piece.name}`)}
              >
                {/* Image Showcase */}
                <div className={`relative overflow-hidden ${heightClass} bg-soft-beige rounded-xs border border-stone/15 mb-6`}>
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-103 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-matte-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Subtle rank indicator overlay */}
                  <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest bg-warm-white/95 px-3 py-1.5 border border-stone-light text-bronze uppercase font-bold rounded-xs">
                    Edition No. 0{idx + 1}
                  </div>
                </div>

                {/* Info and Narrative block */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-2xl font-light text-matte-black group-hover:text-bronze transition-colors duration-300">
                      {piece.name}
                    </h3>
                    <span className="font-mono text-sm text-matte-black font-semibold pl-4">
                      {piece.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-stone-dark font-mono text-[9px] tracking-widest uppercase font-bold">
                    <span>{piece.designer}</span>
                    <span className="h-1 w-1 bg-bronze/45 rounded-full" />
                    <span>{piece.provenance}</span>
                  </div>

                  <p className="font-sans text-xs text-stone-dark font-light leading-relaxed max-w-xl">
                    {piece.description}
                  </p>

                  <div className="border-t border-stone/15 pt-4 flex justify-between items-center text-stone-medium group-hover:text-bronze transition-colors">
                    <span className="font-mono text-[8px] tracking-[0.2em] uppercase">
                      Bespoke Allocation Available
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.15em] uppercase text-matte-black group-hover:text-bronze font-bold">
                      Commission Item <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
