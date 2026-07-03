import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CURATION_STEPS, LIFESTYLE_THEMES } from '../data/luxuryData';
import { CurationStep, SanctuaryTheme } from '../types';
import { Check, Clipboard, Send, Compass, Moon, Sun, Layers, HelpCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CurationEngine() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({
    canvas: '',
    palette: '',
    focalPoint: '',
    ambiance: ''
  });
  const [engineFinished, setEngineFinished] = useState(false);
  const [allocationSubmitted, setAllocationSubmitted] = useState(false);
  const [allocationForm, setAllocationForm] = useState({
    fullName: '',
    email: '',
    projectLocation: '',
    timeline: '3-6 Months',
    conciergeNotes: ''
  });

  const currentStep = CURATION_STEPS[currentStepIndex];

  const handleSelectOption = (key: string, value: string) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStepIndex < CURATION_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setEngineFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const resetEngine = () => {
    setSelections({ canvas: '', palette: '', focalPoint: '', ambiance: '' });
    setCurrentStepIndex(0);
    setEngineFinished(false);
    setAllocationSubmitted(false);
    setAllocationForm({ fullName: '', email: '', projectLocation: '', timeline: '3-6 Months', conciergeNotes: '' });
  };

  const handleAllocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAllocationSubmitted(true);
  };

  // Compile selected theme results
  const getSelectedThemeDetails = (): SanctuaryTheme => {
    const canvasSelection = selections.canvas || 'canvas-penthouse';
    const cleanCanvasId = canvasSelection.replace('canvas-', '');
    const foundTheme = LIFESTYLE_THEMES.find((theme) => theme.id === cleanCanvasId);
    return foundTheme || LIFESTYLE_THEMES[0];
  };

  const activeTheme = getSelectedThemeDetails();

  // Find readable names for the summary mockup
  const getReadableSelection = (stepKey: string, optionId: string) => {
    const step = CURATION_STEPS.find(s => s.key === stepKey);
    const option = step?.options.find(o => o.value === optionId || o.id === optionId);
    return option ? option.title : 'Bespoke Curation';
  };

  return (
    <section className="relative py-28 md:py-36 bg-warm-white text-matte-black border-t border-stone-light" id="curation-engine">
      
      {/* Structural layout grid styling in background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0dcd3_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {!engineFinished ? (
          // STEP-BY-STEP FLOW
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Header with Step Tracker */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone/20 pb-8">
              <div>
                <span className="font-mono text-[9px] tracking-[0.4em] text-bronze uppercase block mb-3 font-bold">
                  THE SANCTUARY GENERATOR
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-matte-black">
                  Aura Lifestyle Engine
                </h2>
                <p className="font-sans text-xs text-stone-dark font-light mt-2 max-w-lg leading-relaxed opacity-80">
                  Calibrate your spatial parameters to assemble a bespoke interior vision board, curated palette recommendations, and registered furniture proposals.
                </p>
              </div>

              {/* Minimal Progress Indicator */}
              <div className="flex flex-col items-end shrink-0">
                <span className="font-mono text-xs text-bronze tracking-widest font-bold mb-2">
                  STAGE {currentStep.id} OF {CURATION_STEPS.length}
                </span>
                <div className="flex gap-1.5 h-1 w-44 bg-stone-light rounded-full overflow-hidden">
                  {CURATION_STEPS.map((step) => (
                    <div
                      key={step.id}
                      className={`h-full flex-grow transition-all duration-500 rounded-full ${
                        step.id <= currentStep.id ? 'bg-bronze' : 'bg-stone/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Selection Prompt */}
            <div className="space-y-4 text-center md:text-left">
              <span className="font-mono text-[9px] text-bronze/80 tracking-widest uppercase block font-bold">
                {currentStep.title}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-matte-black tracking-wide">
                {currentStep.subtitle}
              </h3>
            </div>

            {/* Option Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id={`engine-step-options-${currentStep.id}`}>
              {currentStep.options.map((option) => {
                const isSelected = selections[currentStep.key] === option.value || selections[currentStep.key] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(currentStep.key, option.value)}
                    className={`w-full text-left bg-ivory border overflow-hidden p-4 rounded-xs transition-all duration-500 group cursor-pointer focus:outline-none flex flex-col justify-between h-[360px] ${
                      isSelected
                        ? 'border-bronze bg-soft-beige shadow-lg shadow-stone/10'
                        : 'border-stone/20 hover:border-stone/40'
                    }`}
                  >
                    {/* Visual Preview */}
                    <div className="relative w-full aspect-[16/10] bg-stone-light overflow-hidden rounded-xs mb-4">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 filter brightness-95 group-hover:brightness-100"
                        referrerPolicy="no-referrer"
                      />
                      {isSelected && (
                        <div className="absolute top-3 right-3 bg-bronze text-warm-white p-1.5 rounded-full shadow-lg">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-lg font-light text-matte-black group-hover:text-bronze transition-colors duration-300">
                          {option.title}
                        </h4>
                        <p className="font-sans text-stone-dark text-xs font-light leading-relaxed mt-1">
                          {option.description}
                        </p>
                      </div>

                      {/* Accent highlight bar */}
                      <div className="h-[1px] w-full bg-stone/20 mt-4 group-hover:bg-bronze/35 transition-all duration-500" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center border-t border-stone/20 pt-8" id="engine-controls">
              <button
                disabled={currentStepIndex === 0}
                onClick={handleBack}
                className={`flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors focus:outline-none cursor-pointer ${
                  currentStepIndex === 0 ? 'text-stone/40 cursor-not-allowed' : 'text-stone-dark hover:text-matte-black'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev Stage</span>
              </button>

              <button
                disabled={!selections[currentStep.key]}
                onClick={handleNext}
                className={`px-8 py-3.5 font-mono text-[10px] tracking-[0.25em] uppercase rounded-sm transition-all duration-500 focus:outline-none cursor-pointer flex items-center gap-2.5 ${
                  selections[currentStep.key]
                    ? 'bg-matte-black text-warm-white hover:bg-bronze hover:text-white hover:border-bronze font-bold'
                    : 'bg-stone-light text-stone-medium border border-stone-light/50 cursor-not-allowed'
                }`}
              >
                <span>
                  {currentStepIndex === CURATION_STEPS.length - 1 ? 'Analyze Sanctuary' : 'Next Stage'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ) : (
          // COMPLETED SANCTUARY PROPOSAL SCREEN
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto space-y-12"
            id="curation-completed-proposal"
          >
            {/* Header Statement */}
            <div className="text-center space-y-3">
              <span className="font-mono text-[10px] text-bronze tracking-[0.4em] uppercase font-bold">
                CURATION COMPLETE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-matte-black">
                Your Sanctuary Spatial Proposal
              </h2>
              <p className="font-mono text-[9px] text-stone-dark tracking-[0.2em] uppercase">
                Registry ID: #SR-{Math.floor(10000 + Math.random() * 90000)}
              </p>
            </div>

            {/* Bento Grid Architecture Brief Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Box 1: Core Design Vibe & Canvas (Takes 7 cols) */}
              <div className="md:col-span-7 border border-stone/25 bg-ivory p-8 md:p-10 rounded-xs space-y-8 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
                {/* Micro ambient color background based on selection */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-bronze/[0.02] blur-[100px] pointer-events-none rounded-full" />
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-bronze" />
                    <span className="font-mono text-[9px] text-bronze tracking-widest uppercase font-bold">
                      ARCHITECTURAL PRESET
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-light text-matte-black tracking-wide">
                    The {activeTheme.name}
                  </h3>
                  <span className="font-serif text-sm italic text-stone-dark block font-light">
                    {activeTheme.tagline}
                  </span>
                  <p className="font-sans text-xs md:text-sm text-charcoal font-light leading-relaxed tracking-wide opacity-85">
                    {activeTheme.description}
                  </p>
                </div>

                <div className="border-t border-stone/20 pt-6 space-y-3">
                  <span className="font-mono text-[8px] text-stone-medium uppercase block">RECOMMENDED ATELIER PALETTE</span>
                  <div className="flex flex-wrap gap-2">
                    {activeTheme.recommendedPalette.map((col, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-soft-beige border border-stone/20 rounded-full font-mono text-[9px] text-matte-black tracking-wider font-semibold"
                      >
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Box 2: Spec Summary Breakdown Checklist (Takes 5 cols) */}
              <div className="md:col-span-5 border border-stone/25 bg-warm-white p-8 rounded-xs flex flex-col justify-between space-y-8 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-stone/20 pb-4">
                    <Layers className="w-5 h-5 text-bronze" />
                    <h4 className="font-serif text-sm tracking-widest text-matte-black uppercase font-bold">Your Material Matrix</h4>
                  </div>

                  {/* Checked Selections */}
                  <div className="space-y-5">
                    <div>
                      <span className="font-mono text-[8px] text-stone-medium uppercase block">CANVAS LANDSCAPE</span>
                      <p className="font-serif text-sm text-bronze font-bold mt-1">
                        {getReadableSelection('canvas', selections.canvas)}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-stone-medium uppercase block">TEXTURAL SIGNATURE</span>
                      <p className="font-serif text-sm text-matte-black font-semibold mt-1">
                        {getReadableSelection('palette', selections.palette)}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-stone-medium uppercase block">SCULPTURAL ANCHOR</span>
                      <p className="font-serif text-sm text-matte-black font-semibold mt-1">
                        {getReadableSelection('focalPoint', selections.focalPoint)}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-stone-medium uppercase block">SENSORY ATMOSPHERE</span>
                      <p className="font-serif text-sm text-matte-black font-semibold mt-1">
                        {getReadableSelection('ambiance', selections.ambiance)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reset button inside grid */}
                <button
                  onClick={resetEngine}
                  className="w-full py-3 border border-stone-dark/30 hover:border-stone-dark text-stone-dark hover:bg-soft-beige font-mono text-[9px] tracking-widest uppercase transition-all duration-300 rounded-sm focus:outline-none cursor-pointer font-bold"
                >
                  Recalibrate Matrix
                </button>
              </div>

              {/* Box 3: Sensory Ambiance Deep Dive & Form (Takes 12 cols - full-width) */}
              <div className="md:col-span-12 border border-stone/25 bg-ivory p-8 md:p-12 rounded-xs grid grid-cols-1 lg:grid-cols-12 gap-10 shadow-sm">
                
                {/* Column 1 inside Box 3: Concept Notes */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="font-mono text-[8px] text-bronze tracking-widest uppercase block font-bold">
                      CURATOR ADVISORY BLUEPRINT
                    </span>
                    <h4 className="font-serif text-2xl font-light text-matte-black tracking-wide">
                      Inquire for Spatial Commission
                    </h4>
                    <p className="font-sans text-charcoal/95 font-light text-xs leading-relaxed tracking-wide opacity-85">
                      Our private architecture team is ready to materialize this curated brief. We will coordinate material swatch delivery (including travertine core samples, high-weight boucle wools, and timber swatches) to your residence.
                    </p>
                  </div>

                  <div className="p-5 border border-stone/20 bg-warm-white rounded-xs space-y-3">
                    <p className="font-mono text-[8px] text-stone-dark uppercase tracking-widest font-semibold">Included in Commission Request:</p>
                    <ul className="text-xs font-mono text-charcoal/95 space-y-1.5 list-disc pl-4">
                      <li>Bespoke spatial layout scaling charts</li>
                      <li>Rare material swatch delivery box</li>
                      <li>Private consultation at local design workshop</li>
                      <li>Priority artisan production slots guaranteed</li>
                    </ul>
                  </div>
                </div>

                {/* Column 2 inside Box 3: Dynamic inquiry Form */}
                <div className="lg:col-span-7 lg:border-l lg:border-stone/20 lg:pl-10">
                  {allocationSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8"
                    >
                      <div className="w-14 h-14 bg-bronze/10 rounded-full border border-bronze/20 flex items-center justify-center">
                        <Check className="w-7 h-7 text-bronze" />
                      </div>
                      <h4 className="font-serif text-xl font-light text-matte-black">Spatial Curation Registered</h4>
                      <p className="font-mono text-[10px] text-stone-dark max-w-sm tracking-wide leading-relaxed">
                        Your custom design proposal has been added to our limited registry. An Aura Lifestyle Architect will initiate contact within 2 hours to confirm your project parameters and dispatch your tactile material box.
                      </p>
                      <span className="font-mono text-[10px] text-bronze bg-bronze/5 px-3 py-1.5 border border-bronze/20 rounded-sm font-bold">
                        REGISTRY REFERENCE: #AURA-LIFESTYLE-{Math.floor(1000 + Math.random() * 9000)}
                      </span>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleAllocationSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="font-mono text-[8px] text-stone-dark tracking-widest uppercase block font-semibold">FULL NAME</label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Alistair Belmont"
                            value={allocationForm.fullName}
                            onChange={(e) => setAllocationForm({ ...allocationForm, fullName: e.target.value })}
                            className="w-full bg-warm-white border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-mono text-[8px] text-stone-dark tracking-widest uppercase block font-semibold">EMAIL ADDRESS</label>
                          <input
                            required
                            type="email"
                            placeholder="e.g. alistair@belmontateliers.com"
                            value={allocationForm.email}
                            onChange={(e) => setAllocationForm({ ...allocationForm, email: e.target.value })}
                            className="w-full bg-warm-white border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="font-mono text-[8px] text-stone-dark tracking-widest uppercase block font-semibold">PROJECT CITY / SITE LOCATION</label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Lake Como, Italy"
                            value={allocationForm.projectLocation}
                            onChange={(e) => setAllocationForm({ ...allocationForm, projectLocation: e.target.value })}
                            className="w-full bg-warm-white border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-mono text-[8px] text-stone-dark tracking-widest uppercase block font-semibold">EXPECTED INSTALLATION TIMELINE</label>
                          <select
                            value={allocationForm.timeline}
                            onChange={(e) => setAllocationForm({ ...allocationForm, timeline: e.target.value })}
                            className="w-full bg-warm-white border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300"
                          >
                            <option value="Immediate (<1 Month)">Immediate (Under 1 Month)</option>
                            <option value="1-3 Months">1 to 3 Months</option>
                            <option value="3-6 Months">3 to 6 Months</option>
                            <option value="6+ Months">6+ Months (Planning Stage)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-[8px] text-stone-dark tracking-widest uppercase block font-semibold">RESIDENCE SPECIFICS &amp; BESPOKE REQUESTS</label>
                        <textarea
                          rows={3}
                          placeholder="Please tell us a bit about your property (e.g., number of rooms, architectural highlights) or special commissions required."
                          value={allocationForm.conciergeNotes}
                          onChange={(e) => setAllocationForm({ ...allocationForm, conciergeNotes: e.target.value })}
                          className="w-full bg-warm-white border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 border border-stone-dark/20 bg-matte-black text-warm-white font-mono text-xs tracking-[0.3em] uppercase hover:bg-bronze hover:text-white hover:border-bronze transition-all duration-500 rounded-sm focus:outline-none cursor-pointer flex items-center justify-center gap-2 font-bold"
                      >
                        <span>Acquire Custom Spatial Commission</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
}
