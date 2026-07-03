import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CollectionItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  curatorNote: string;
}

const COLLECTIONS: CollectionItem[] = [
  {
    id: 'tivoli-travertine',
    tag: 'Series I — Geological Mass',
    title: 'The Tivoli Travertine Collection',
    description: 'Sculptured directly from ancient limestone beds outside Rome. These pieces explore pure, unfiltered tectonic lines, honoring millions of years of mineral crystallization with raw pitted surfaces and meticulously hand-honed bevels.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    curatorNote: '“We designed this series to ground modern, high-light living rooms with sovereign, immovable geological history.” — Vincent Van Duysen'
  },
  {
    id: 'lyon-boucle',
    tag: 'Series II — Haute Couture Seating',
    title: 'The Lyon Silk Bouclé Series',
    description: 'Upholstered in exclusive, heavy-weight Belgian Bouclé blended with raw Japanese silk. Every curve of this seating line is hand-shaped over solid heart-elm frames in our private Lyon atelier, providing an incomparable soft-cloud seating resonance.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    curatorNote: '“An architectural study of curvature. The Lyon series forms a dialogue with natural light, changing from gold to soft cream throughout the day.”'
  },
  {
    id: 'shigaraki-ceramic',
    tag: 'Series III — Silent Fire',
    title: 'The Shigaraki Ceramic Atelier',
    description: 'An exclusive collection of large-format vessels and focal lamps hand-thrown in Shiga Prefecture, Japan. Wood-fired in ancient anagama kilns for seven days, each piece bears natural ash glazes and unique planetary textures.',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=80',
    curatorNote: '“No two pieces are alike. The fire writes its own unpredictable story on the clay.” — Takashi K.'
  }
];

interface FeaturedCollectionsProps {
  onOpenConcierge: (subject: string) => void;
}

export default function FeaturedCollections({ onOpenConcierge }: FeaturedCollectionsProps) {
  return (
    <section className="relative py-32 md:py-48 bg-warm-white text-matte-black overflow-hidden border-t border-stone/20" id="featured-collections">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-24 md:mb-32 text-center md:text-left">
          <span className="font-mono text-[9px] tracking-[0.4em] text-bronze uppercase block mb-4 font-bold">
            MASTER CURATIONS
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-matte-black leading-none">
            Featured Collections
          </h2>
          <div className="h-[1px] bg-stone/35 w-20 mt-6 hidden md:block" />
        </div>

        {/* Alternate Left-Right compositions */}
        <div className="space-y-36 md:space-y-48">
          {COLLECTIONS.map((col, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={col.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center`}
              >
                {/* Large Editorial Image Block */}
                <div 
                  className={`lg:col-span-7 relative ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden bg-stone-light/10 aspect-[4/3] rounded-xs border border-stone/15 shadow-sm group"
                  >
                    <img
                      src={col.image}
                      alt={col.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105 filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  {/* Absolute subtle indicator badge */}
                  <div className={`absolute -bottom-6 ${isEven ? '-right-4 md:-right-6' : '-left-4 md:-left-6'} bg-ivory border border-stone/25 p-5 md:p-6 rounded-xs max-w-xs shadow-sm hidden sm:block`}>
                    <span className="font-mono text-[8px] text-stone-dark uppercase block mb-1">Pedigree Check</span>
                    <span className="font-serif text-[11px] italic text-bronze">{col.curatorNote}</span>
                  </div>
                </div>

                {/* Conceptual Text Block */}
                <div 
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <span className="font-mono text-[9px] tracking-widest text-bronze uppercase font-bold block">
                      {col.tag}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-light text-matte-black tracking-wide leading-tight">
                      {col.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-charcoal font-light leading-relaxed tracking-wide">
                      {col.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="pt-4"
                  >
                    <button
                      onClick={() => onOpenConcierge(`Acquisition request: ${col.title}`)}
                      className="group flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-matte-black hover:text-bronze font-bold transition-all duration-300 focus:outline-none cursor-pointer"
                    >
                      <span>Explore Series &amp; Enquire</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
