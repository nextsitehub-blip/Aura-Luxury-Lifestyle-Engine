import React from 'react';
import { motion } from 'motion/react';
import { Compass, BookOpen, Anchor, Sparkles } from 'lucide-react';

interface StoryChapter {
  id: string;
  tag: string;
  title: string;
  p1: string;
  p2: string;
  image: string;
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'chapter-1',
    tag: 'Chapter I — Tectonic Provenance',
    title: 'The Sovereign Architecture of Stone',
    p1: 'AURA LIVING was founded on a simple, uncompromising thesis: that the spaces we inhabit are the structural expansion of our subconscious. Mass-produced spaces produce mass-produced thoughts. We craft for the discerning few who view their residence not merely as shelter, but as a sovereign private cathedral of peace.',
    p2: 'We trace our materials to their deep geological source. Whether unfilled Roman travertine from ancient Tivoli beds or pure black crystalline Marquina marble from the Basque peaks, we select stone with millions of years of geological memory. No automated lines. Every hone, every bevel, every chamfer is shaped by listed artisans.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chapter-2',
    tag: 'Chapter II — The French & Swiss Ateliers',
    title: 'Master Craftsmen Registry',
    p1: 'Our physical works are materialized in highly limited workshops across Geneva, Switzerland, and Lyon, France. We maintain a private registry of our master artisans—listed masters who have spent decades perfecting their craft. We do not manufacture; we breathe life into raw wood, silk, and heavy brass.',
    p2: 'Every stitching line on our Belgian bouclé sectionals is individually checked; every joint of our reclaimed smoked elm dining columns is bound by hand using antique carpentry techniques. We believe this silent, slow vibration of craftsmanship is felt the moment you cross the threshold of an Aura-curated sanctuary.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'
  }
];

export default function BrandStory() {
  return (
    <section className="relative py-32 md:py-48 bg-ivory text-matte-black overflow-hidden border-t border-stone/20" id="brand-story">
      {/* Absolute decorative watermark line */}
      <div className="absolute top-0 bottom-0 left-[15%] w-[1px] bg-stone/15 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[15%] w-[1px] bg-stone/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Title */}
        <div className="mb-24 md:mb-32 text-center md:text-left">
          <span className="font-mono text-[9px] tracking-[0.45em] text-bronze uppercase block mb-4 font-bold">
            THE MAISON NARRATIVE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-matte-black leading-none mb-4">
            Our Brand Story
          </h2>
          <p className="font-sans text-xs md:text-sm text-stone-dark font-light max-w-lg mt-4 leading-relaxed tracking-wide opacity-80">
            A quiet ledger documenting our architectural origins, tactile materials, and the strict physical handcraft guidelines that define the Aura universe.
          </p>
        </div>

        {/* Chapters Loop */}
        <div className="space-y-36 md:space-y-48">
          {STORY_CHAPTERS.map((chap, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={chap.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center"
              >
                {/* Visual block */}
                <div 
                  className={`lg:col-span-6 relative ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="aspect-[4/5] bg-stone-light/10 overflow-hidden border border-stone/20 rounded-xs shadow-md group"
                  >
                    <img
                      src={chap.image}
                      alt={chap.title}
                      className="w-full h-full object-cover transition-transform duration-[1.8s] group-hover:scale-103 filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>

                {/* Literary Text Block */}
                <div 
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <span className="font-mono text-[9px] tracking-widest text-bronze uppercase font-bold block">
                      {chap.tag}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-light text-matte-black tracking-wide leading-snug">
                      {chap.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-charcoal font-light leading-relaxed tracking-wide opacity-85">
                      {chap.p1}
                    </p>
                    <p className="font-sans text-xs md:text-sm text-charcoal font-light leading-relaxed tracking-wide opacity-85">
                      {chap.p2}
                    </p>
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
