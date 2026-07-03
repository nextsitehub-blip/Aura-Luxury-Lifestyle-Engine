import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Compass, Plus, Eye, Check, X } from 'lucide-react';

interface ShowcaseZone {
  id: string;
  title: string;
  tagline: string;
  image: string;
  hotspots: {
    top: string;
    left: string;
    item: string;
    desc: string;
    price: string;
  }[];
}

const SHOWN_ZONES: ShowcaseZone[] = [
  {
    id: 'sanctuary-living',
    title: 'The Sovereign Living Room',
    tagline: 'Parisian Classical meets Brutalist Mass',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      { top: '65%', left: '42%', item: 'Elysian Bouclé Sofa', desc: 'Handcrafted curved velvet & bouclé with structural foam support.', price: '$24,500' },
      { top: '78%', left: '60%', item: 'Monolith Travertine Plinth', desc: 'Unfilled Roman Travertine sourced directly from Tivoli, Italy.', price: '$18,200' },
      { top: '25%', left: '50%', item: 'Aether Brass Pendant', desc: 'Asymmetric solid satin-brushed brass rings with hand-blown glass.', price: '$12,800' }
    ]
  },
  {
    id: 'floating-pavilion',
    title: 'The Silent dining Pavilion',
    tagline: 'Japandi Wood Craftsmanship',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      { top: '55%', left: '48%', item: 'Reclaimed Smoked Elm Dining Table', desc: 'Centuries-old heartwood with hand-brushed grain lines.', price: '$19,800' },
      { top: '65%', left: '32%', item: 'Satori Cashmere Chair Pads', desc: 'Hand-loomed in Kyoto with 100% pure Mongolian fibers.', price: '$2,800' },
      { top: '35%', left: '72%', item: 'Alabaster Column Sconce', desc: 'Translucent Spanish alabaster that emits a serene amber glow.', price: '$5,200' }
    ]
  }
];

interface LuxuryInteriorShowcaseProps {
  onOpenConcierge: (subject: string) => void;
}

export default function LuxuryInteriorShowcase({ onOpenConcierge }: LuxuryInteriorShowcaseProps) {
  const [activeZoneIdx, setActiveZoneIdx] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<{
    item: string;
    desc: string;
    price: string;
    idx: number;
  } | null>(null);

  const zone = SHOWN_ZONES[activeZoneIdx];

  return (
    <section className="relative py-32 md:py-48 bg-ivory text-matte-black overflow-hidden border-t border-stone/20" id="interior-showcase">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <div className="lg:col-span-6">
            <span className="font-mono text-[9px] tracking-[0.4em] text-bronze uppercase block mb-4 font-bold">
              SPATIAL EXPERIENCES
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-matte-black leading-none">
              Luxury Interior Showcase
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-xs md:text-sm text-stone-dark font-light leading-relaxed tracking-wide opacity-80">
              Interactive structural studies of spaces designed by our in-house atelier. Toggle between layouts below and click or hover over the flashing hotspots to dissect the signature bespoke materials and architectural furniture pieces of each design.
            </p>
          </div>
        </div>

        {/* Zone Selector Controls */}
        <div className="flex gap-4 border-b border-stone/25 pb-6 mb-12">
          {SHOWN_ZONES.map((z, idx) => (
            <button
              key={z.id}
              onClick={() => {
                setActiveZoneIdx(idx);
                setActiveHotspot(null);
              }}
              className={`px-6 py-3 font-mono text-[10px] tracking-widest uppercase rounded-xs transition-all duration-300 border ${
                activeZoneIdx === idx
                  ? 'border-bronze text-bronze bg-soft-beige font-bold'
                  : 'border-transparent text-stone-dark hover:text-matte-black'
              }`}
            >
              {z.title}
            </button>
          ))}
        </div>

        {/* Fullscreen Interactive Cinematic Stage */}
        <div className="relative overflow-hidden aspect-[16/9] w-full rounded-xs border border-stone/25 bg-stone-light/10 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={zone.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              src={zone.image}
              alt={zone.title}
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.02]"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Zone watermark info */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10 max-w-sm pointer-events-none">
            <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-bronze font-bold block mb-1">
              {zone.tagline}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide">
              {zone.title}
            </h3>
          </div>

          {/* Hotspot Markers */}
          {zone.hotspots.map((spot, idx) => {
            const isSelected = activeHotspot?.idx === idx;
            return (
              <div
                key={idx}
                className="absolute"
                style={{ top: spot.top, left: spot.left }}
              >
                {/* Flashing Pulse Button */}
                <button
                  onMouseEnter={() => setActiveHotspot({ item: spot.item, desc: spot.desc, price: spot.price, idx })}
                  onClick={() => setActiveHotspot({ item: spot.item, desc: spot.desc, price: spot.price, idx })}
                  className="w-8 h-8 rounded-full bg-matte-black/75 border border-white flex items-center justify-center text-white focus:outline-none cursor-pointer hover:bg-bronze transition-colors shadow-lg group relative"
                  aria-label={`Inspect ${spot.item}`}
                >
                  <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                  <Plus className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300" />
                </button>

                {/* Info Card Popover */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-12 w-64 bg-warm-white border border-stone/25 p-5 rounded-sm shadow-xl z-30"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-serif text-sm font-bold text-matte-black">
                          {spot.item}
                        </span>
                        <span className="font-mono text-[10px] text-bronze font-bold">
                          {spot.price}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-stone-dark font-light leading-relaxed mb-4">
                        {spot.desc}
                      </p>
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => onOpenConcierge(`Spatial Spec: ${spot.item}`)}
                          className="font-mono text-[8px] tracking-wider uppercase text-matte-black hover:text-bronze font-bold border-b border-matte-black pb-0.5 focus:outline-none cursor-pointer"
                        >
                          Request Spec Allocation
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveHotspot(null);
                          }}
                          className="p-1 hover:bg-stone/10 rounded-sm focus:outline-none cursor-pointer text-stone-dark"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
