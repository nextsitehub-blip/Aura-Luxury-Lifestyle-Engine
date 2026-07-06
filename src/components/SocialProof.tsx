/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Compass, Star, Trophy, ArrowRight, Quote, Flame, Building, ArrowLeft } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  project: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Alexandra de Castiglione',
    role: 'Principal Interior Architect',
    project: 'Lake Como Private Sanctuary',
    quote: '“AURA does not make furniture; they craft monolithic architectural scale that transforms space volume. The Travertine coffee tables have become the literal center of gravity for our Lake Como project. Every client who crosses the threshold is paralyzed by the physical density and pure craftsmanship of the stone.”',
    rating: 5
  },
  {
    id: 2,
    name: 'Sterling H. Wood',
    role: 'Elite Art Advisory & Collector',
    project: 'Manhattan Triplex Penthouse',
    quote: '“Quiet luxury is an easy slogan to write, but incredibly rare to physically materialize. Aura Living’s Bouclé seating achieves exactly this. The seams, the heavy-elm framing, and the sheer tactile cushion density are indistinguishable from custom gallery pieces costing triple. Truly collectible handcraft.”',
    rating: 5
  },
  {
    id: 3,
    name: 'Kengo Takahashi',
    role: 'Co-Founder',
    project: 'Tokyo Roppongi Hillside Salon',
    quote: '“The Shigaraki ceramic vessels represent a magnificent synthesis of ancient Japanese wood-firing techniques and European minimalist geometry. Working alongside Aura’s design workshop has allowed us to elevate our interior styling projects into pristine museum-quality spaces.”',
    rating: 5
  }
];

const PUBLICATIONS = [
  { name: 'Architectural Digest', quote: '“A pristine vision of sovereign, quiet luxury.”' },
  { name: 'Vogue Living', quote: '“Redefining the relationship between stone mass and residential light.”' },
  { name: 'Elle Decor', quote: '“Crafted with exquisite, museum-grade pedigree.”' },
  { name: 'Wallpaper*', quote: '“A spectacular celebration of deep geological provenance.”' }
];

const STATS = [
  { label: 'Spatial Commission Value', value: '$180M+', sub: 'Private residences styled' },
  { label: 'Registered Master Craftsmen', value: '18', sub: 'Geneva & Lyon ateliers' },
  { label: 'Global Design Accolades', value: '14', sub: 'Awwwards, Red Dot, Frame' },
  { label: 'Deep Provenance Materials', value: '100%', sub: 'Quarried & loomed on site' }
];

export default function SocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-32 md:py-48 bg-warm-white text-matte-black overflow-hidden border-t border-stone-light" id="customer-experiences">
      
      {/* Decorative vertical lines and light background blobs */}
      <div className="absolute top-0 bottom-0 left-[12%] w-[1px] bg-stone/15 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[12%] w-[1px] bg-stone/15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bronze/[0.015] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone/[0.02] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-24 text-center md:text-left">
          <span className="font-mono text-[9px] tracking-[0.45em] text-bronze uppercase block mb-4 font-bold">
            THE CHRONICLE OF TRUST
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-matte-black leading-none mb-4">
            Maison Credibility &amp; Accolades
          </h2>
          <p className="font-sans text-xs md:text-sm text-stone-dark font-light max-w-lg mt-4 leading-relaxed tracking-wide opacity-85">
            A selective documentation of global awards, architectural testimonials, leading publications, and luxury spatial performance indicators.
          </p>
        </div>

        {/* Section A: Animated Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-32 md:mb-40" id="credibility-stats">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="p-6 border-b border-stone/25 flex flex-col justify-between h-40 hover:border-bronze/50 transition-colors duration-500"
            >
              <div>
                <span className="font-mono text-[8px] text-stone-medium tracking-widest uppercase block mb-1 font-bold">
                  {stat.label}
                </span>
                <span className="font-serif text-3xl md:text-5.5xl font-light text-matte-black tracking-tighter">
                  {stat.value}
                </span>
              </div>
              <span className="font-sans text-xs text-stone-dark font-light block">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Section B: Testimonial Carousel in Frosted Premium Glass Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32 md:mb-40">
          
          {/* Left Text Detail block (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[9px] text-bronze tracking-[0.3em] uppercase block font-bold">
              ATELIER REVIEWS
            </span>
            <h3 className="font-serif text-3xl md:text-4.5xl font-light text-matte-black tracking-wide leading-tight">
              What the Elite Architects Say
            </h3>
            <p className="font-sans text-xs md:text-sm text-stone-dark font-light leading-relaxed tracking-wide opacity-85">
              Our custom collections have been integrated into world-class residential designs, penthouses, and private showrooms across Switzerland, Italy, France, and Japan. Here is how leading design professionals describe our material presence.
            </p>
            <div className="flex gap-4 pt-4">
              <button 
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full border border-stone/25 hover:border-bronze hover:bg-soft-beige flex items-center justify-center transition-colors cursor-pointer text-matte-black focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full border border-stone/25 hover:border-bronze hover:bg-soft-beige flex items-center justify-center transition-colors cursor-pointer text-matte-black focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Frosted Glass Card Carousel Stage (7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[490px] sm:min-h-[400px] md:min-h-[380px] w-full">
              <AnimatePresence mode="wait">
                {TESTIMONIALS.map((t, idx) => {
                  if (idx !== activeTestimonial) return null;
                  return (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/30 rounded-xs p-6 sm:p-8 md:p-12 shadow-xl shadow-stone-light/40 flex flex-col justify-between overflow-y-auto"
                    >
                      <div className="space-y-6">
                        {/* Rating stars & icon row */}
                        <div className="flex justify-between items-center border-b border-stone/20 pb-4">
                          <div className="flex gap-1">
                            {[...Array(t.rating)].map((_, rIdx) => (
                              <Star key={rIdx} className="w-4.5 h-4.5 text-bronze fill-bronze" />
                            ))}
                          </div>
                          <Quote className="w-8 h-8 text-bronze/15" />
                        </div>

                        {/* Quote Statement */}
                        <p className="font-serif text-sm md:text-base italic text-charcoal leading-relaxed tracking-wide">
                          {t.quote}
                        </p>
                      </div>

                      {/* Author credentials */}
                      <div className="border-t border-stone/20 pt-6 mt-6 flex justify-between items-end">
                        <div>
                          <h4 className="font-serif text-lg font-light text-matte-black">{t.name}</h4>
                          <span className="font-mono text-[9px] text-stone-dark uppercase block tracking-wider mt-0.5">{t.role}</span>
                        </div>
                        <span className="font-mono text-[9px] text-bronze tracking-widest uppercase bg-bronze/5 px-3 py-1 border border-bronze/20 rounded-xs font-semibold">
                          {t.project}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Section C: Awards and Global Publications Carousel/Grid */}
        <div className="border-t border-stone/20 pt-16 mt-16">
          <div className="text-center mb-12">
            <span className="font-mono text-[8px] text-stone-dark tracking-[0.3em] uppercase block font-bold mb-1">
              AS FEATURED IN THE LUXURY PRESS
            </span>
            <div className="h-[1px] bg-stone/25 w-12 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PUBLICATIONS.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 border border-stone/15 bg-ivory rounded-xs text-center space-y-3 hover:border-bronze/45 hover:shadow-md transition-all duration-300 shadow-xs"
              >
                <h4 className="font-serif text-lg tracking-wide text-matte-black font-light">{pub.name}</h4>
                <p className="font-sans text-[11px] text-stone-dark italic font-light leading-relaxed">
                  {pub.quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
