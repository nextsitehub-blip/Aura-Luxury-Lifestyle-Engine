import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Feather, History } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: <Compass className="w-6 h-6 text-bronze" />,
      title: 'Geological Provenance',
      desc: 'We trace our materials to their geological source. Whether unfilled Roman travertine from Tivoli or pure crystalline Marquina marble from the Basque peaks, we choose stone with millions of years of memory.'
    },
    {
      icon: <Feather className="w-6 h-6 text-bronze" />,
      title: 'Master Craftsmen Registry',
      desc: 'Our pieces are materialized in highly limited workshops across Geneva, Switzerland, and Lyon, France. No automated lines. Every stitching line, joint, and surface-hone is completed by hand by listed masters.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-bronze" />,
      title: 'Tactile Architecture',
      desc: 'We believe furniture is a medium of silent vibration. We combine high-density foams, real goose-down layers, and Belgian Bouclés to guarantee that the emotional experience of sitting is as deep as the visual beauty.'
    }
  ];

  const origins = [
    { location: 'Tivoli, Italy', craft: 'Roman Travertine Carving', coordinates: '41.96 N, 12.80 E' },
    { location: 'Lyon, France', craft: 'Haute-Couture Tailoring', coordinates: '45.76 N, 4.83 E' },
    { location: 'Kyoto, Japan', craft: 'Mulberry Silk Weaving', coordinates: '35.01 N, 135.76 E' },
    { location: 'Geneva, Switzerland', craft: 'Ebony & Elm Cabinetry', coordinates: '46.20 N, 6.14 E' }
  ];

  return (
    <section className="relative py-28 md:py-40 bg-ivory text-matte-black overflow-hidden border-t border-stone/30" id="philosophy">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-stone/15 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-stone/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 md:mb-36">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-[9px] tracking-[0.4em] text-bronze uppercase mb-4 block font-bold">
              OUR MANIFESTO
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight font-light leading-snug mb-8">
              We do not manufacture. <br />
              We <span className="italic font-normal text-bronze font-semibold">materialize</span>.
            </h2>
            <div className="h-[1px] bg-stone/25 w-24 mb-8" />
            <p className="font-sans text-charcoal font-light text-sm md:text-base leading-relaxed tracking-wide mb-6 opacity-80">
              Aura Living was founded on a simple, uncompromising thesis: that the spaces we inhabit are the structural expansion of our subconscious. Mass-produced spaces produce mass-produced thoughts.
            </p>
            <p className="font-sans text-charcoal font-light text-sm md:text-base leading-relaxed tracking-wide opacity-80">
              We operate at the razor edge where fine architectural form meets geological masterworks. We craft for the discerning few who view their residence not merely as shelter, but as a sovereign private cathedral of peace.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            <div className="col-span-7">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden bg-stone-light/10 aspect-[4/5] rounded-xs shadow-2xl border border-stone/15"
              >
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
                  alt="Crafting travertine block"
                  className="w-full h-full object-cover filter brightness-95 grayscale-[10%]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="col-span-5 pt-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden bg-stone-light/10 aspect-[3/4] rounded-xs shadow-2xl mb-4 border border-stone/15"
              >
                <img
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
                  alt="Luxurious draperies"
                  className="w-full h-full object-cover filter brightness-90"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="bg-warm-white p-6 border border-stone/20 backdrop-blur-md rounded-xs shadow-sm">
                <p className="font-mono text-[9px] text-bronze tracking-[0.2em] uppercase mb-1 font-bold">PROVENANCE RECORD</p>
                <p className="font-serif text-xs text-stone-dark italic font-light">Every piece is accompanied by a blockchain-linked Certificate of Atelier Origin.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-28 md:mb-36">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="p-8 md:p-10 border border-stone/20 bg-warm-white hover:bg-soft-beige hover:border-stone-dark/30 transition-all duration-500 rounded-sm shadow-xs"
            >
              <div className="mb-6 bg-ivory w-12 h-12 flex items-center justify-center rounded-xs border border-stone/20">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl font-light tracking-wide text-matte-black mb-4">
                {pillar.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-charcoal font-light leading-relaxed tracking-wide">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Global Ateliers Map / Coordinates Overlay */}
        <div className="border border-stone/25 bg-warm-white backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-xs" id="ateliers-provenance">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 md:gap-0">
            <div>
              <span className="font-mono text-[8px] tracking-[0.4em] text-bronze uppercase block mb-2 font-bold">
                THE GEOGRAPHY OF CRAFT
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-matte-black tracking-wide">
                Where Handcraft Meets Provenance
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-[9px] text-stone-dark tracking-widest uppercase bg-ivory px-4 py-2 border border-stone/20 rounded-xs">
              <History className="w-3.5 h-3.5 text-bronze" />
              <span>Limited Registry Slots Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {origins.map((origin, idx) => (
              <div key={idx} className="p-6 border border-stone/20 bg-ivory flex flex-col justify-between h-40 group hover:border-stone-dark/35 transition-all duration-300 animate-fade-in rounded-xs shadow-xs">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-serif text-lg font-light text-matte-black group-hover:text-bronze transition-colors duration-300">{origin.location}</span>
                    <span className="font-mono text-[8px] text-stone-medium">0{idx + 1}</span>
                  </div>
                  <span className="font-mono text-[10px] text-charcoal tracking-wider block font-light">{origin.craft}</span>
                </div>
                <div className="border-t border-stone/15 pt-3">
                  <span className="font-mono text-[9px] text-bronze/70 tracking-widest">{origin.coordinates}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
