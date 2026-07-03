import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Quote, Shield } from 'lucide-react';

interface Designer {
  id: string;
  name: string;
  location: string;
  quote: string;
  perspective: string;
  image: string;
  famousPiece: string;
}

const DESIGNERS: Designer[] = [
  {
    id: 'vincent',
    name: 'Vincent Van Duysen',
    location: 'Antwerp, Belgium',
    quote: '“We must honor stone. It has millions of years of memory. To touch Travertine is to touch gravity.”',
    perspective: 'A pioneer of sensual minimalism, Vincent focuses on pure, solid geometries, soft natural lights, and materials of massive tectonic gravity.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    famousPiece: 'The Monolith Plinth Series'
  },
  {
    id: 'deniot',
    name: 'Jean-Louis Deniot',
    location: 'Paris, France',
    quote: '“Luxury is about correct proportions. Scale is the only thing that cannot be faked.”',
    perspective: 'Jean-Louis balances classical grandeur with cutting-edge comfort, using curvilinear, cloud-like seating lines that redefine space.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    famousPiece: 'The Elysian Sectional Series'
  },
  {
    id: 'wearstler',
    name: 'Kelly Wearstler',
    location: 'Los Angeles, USA',
    quote: '“Material juxtaposition is where the soul of an interior lies. Alabaster with rough brass.”',
    perspective: 'Kelly injects dramatic, sculptural minerals and warm, high-contrast organic textures into classical settings, elevating lighting to art.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    famousPiece: 'The Solis Alabaster Sconce'
  }
];

export default function FeaturedDesigners() {
  return (
    <section className="relative py-32 md:py-48 bg-warm-white text-matte-black overflow-hidden border-t border-stone/20" id="featured-designers">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-24 md:mb-32">
          <div className="lg:col-span-6">
            <span className="font-mono text-[9px] tracking-[0.45em] text-bronze uppercase block mb-4 font-bold">
              THE VISIONARIES
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-matte-black leading-none">
              Featured Designers
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-xs md:text-sm text-stone-dark font-light leading-relaxed tracking-wide opacity-80">
              A private circle of global architects and master designers who write the spatial blueprints for Aura. Their pieces are numbered, signed, and handcraft-protected.
            </p>
          </div>
        </div>

        {/* Designers Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12" id="designers-grid">
          {DESIGNERS.map((des, idx) => (
            <motion.div
              key={des.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory border border-stone/20 rounded-xs p-6 md:p-8 flex flex-col justify-between hover:border-stone-dark/30 transition-all duration-300 shadow-sm group"
            >
              {/* Profile portrait block */}
              <div className="space-y-6">
                <div className="relative aspect-square w-24 h-24 rounded-full overflow-hidden border border-stone/30 bg-soft-beige mx-auto">
                  <img
                    src={des.image}
                    alt={des.name}
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-center space-y-1">
                  <span className="font-mono text-[8px] text-stone-medium tracking-widest uppercase block">
                    {des.location}
                  </span>
                  <h3 className="font-serif text-xl font-light text-matte-black group-hover:text-bronze transition-colors">
                    {des.name}
                  </h3>
                </div>

                <div className="relative bg-warm-white p-5 border border-stone/15 rounded-xs">
                  <Quote className="absolute top-3 left-3 w-4 h-4 text-bronze/15" />
                  <p className="font-serif text-xs italic text-charcoal leading-relaxed tracking-wide pl-4">
                    {des.quote}
                  </p>
                </div>

                <p className="font-sans text-xs text-stone-dark font-light leading-relaxed text-center">
                  {des.perspective}
                </p>
              </div>

              {/* Designer Watermark footer */}
              <div className="border-t border-stone/15 mt-8 pt-4 flex justify-between items-center text-stone-medium">
                <span className="font-mono text-[8px] tracking-widest uppercase">
                  PRIMARY SPEC
                </span>
                <span className="font-mono text-[9px] text-bronze tracking-wide font-bold">
                  {des.famousPiece}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
