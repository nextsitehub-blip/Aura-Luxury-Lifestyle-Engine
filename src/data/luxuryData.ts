import { LuxuryPiece, MaterialOption, SanctuaryTheme, CurationStep } from '../types';

export const LUXURY_COLLECTION: LuxuryPiece[] = [
  {
    id: 'elysian-sofa',
    name: 'Elysian Bouclé Sectional',
    category: 'furniture',
    designer: 'Jean-Louis Deniot',
    price: '$24,500',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    description: 'A monument to soft architectural forms. The Elysian Sectional boasts organic, gently flowing contours upholstered in bespoke Belgian Bouclé. Perfect proportions invite deep comfort while maintaining an impeccable structural silhouette.',
    provenance: 'Hand-tailored in Lyon, France',
    materials: ['Belgian Bouclé', 'Reclaimed Elm Base', 'Feather-Down Fill'],
    dimensions: 'W 320cm x D 145cm x H 72cm',
    leadTime: '12-14 Weeks (Bespoke Allocation)'
  },
  {
    id: 'monolith-table',
    name: 'Monolith Travertine Plinth',
    category: 'furniture',
    designer: 'Vincent Van Duysen',
    price: '$18,200',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    description: 'An exploration of mass and geological history. Crafted from a single, hand-selected block of Roman Travertine, the Monolith Coffee Table displays rich pitted textures and organic striations. Every edge is meticulously honed by hand.',
    provenance: 'Quarried and hand-carved in Tivoli, Italy',
    materials: ['Unfilled Roman Travertine', 'Reinforced Steel Core'],
    dimensions: 'W 140cm x D 110cm x H 34cm',
    leadTime: '10-12 Weeks'
  },
  {
    id: 'aether-pendant',
    name: 'Aether Brass & Glass Pendant',
    category: 'lighting',
    designer: 'Apparatus Studio',
    price: '$12,800',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    description: 'An orbit of light. Interlocking rings of hand-brushed solid brass support two hand-blown globes of acid-etched opaline glass. Creates a warm, atmospheric glow with dynamic shadows that elevate any grand dining or salon space.',
    provenance: 'Cast and assembled in New York, USA',
    materials: ['Satin Brushed Brass', 'Acid-Etched Opaline Glass'],
    dimensions: 'Diameter 110cm x Drop Custom up to 250cm',
    leadTime: '8-10 Weeks'
  },
  {
    id: 'solis-sconce',
    name: 'Solis Alabaster Sconce',
    category: 'lighting',
    designer: 'Kelly Wearstler',
    price: '$4,500',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    description: 'Carved from pure Spanish Alabaster. The Solis Sconce acts as a natural canvas, allowing light to illuminate the stone’s unique amber veining. Enclosed in a heavy-gauge, micro-burnished bronze collar.',
    provenance: 'Handcrafted in Barcelona, Spain',
    materials: ['Spanish Alabaster', 'Burnished Bronze'],
    dimensions: 'W 20cm x D 12cm x H 45cm',
    leadTime: '6-8 Weeks'
  },
  {
    id: 'form-sculpture',
    name: 'Plaster Form II Sculpture',
    category: 'art',
    designer: 'Estate of Valentine Schlegel',
    price: '$9,200',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
    description: 'A delicate dialogue between void and mass. Plaster Form II is part of a numbered series of hand-layered gypsum and plaster sculptures that capture the smooth, organic architecture of wind-swept Mediterranean coastlines.',
    provenance: 'Individually sculpted in Sète, France',
    materials: ['Gypsum Plaster', 'Structural Steel Armature'],
    dimensions: 'W 48cm x D 35cm x H 84cm',
    leadTime: 'Ready for Immediate Dispatch (Unique Piece)'
  },
  {
    id: 'obsidian-totem',
    name: 'Obsidian Fluted Pillar',
    category: 'art',
    designer: 'Rick Owens Home',
    price: '$21,000',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    description: 'Brutalist majesty. Carved from a single block of volcanic black obsidian, this fluted decorative totem acts as an imposing anchor in any modernist foyer or study. High-gloss polished fluting contrasts with a raw, hand-chipped base.',
    provenance: 'Mined and sculpted in Jalisco, Mexico',
    materials: ['Mexican Black Obsidian'],
    dimensions: 'W 30cm x D 30cm x H 120cm',
    leadTime: '14-16 Weeks'
  },
  {
    id: 'satori-throw',
    name: 'Satori Silk-Cashmere Throw',
    category: 'textiles',
    designer: 'Aura Atelier',
    price: '$3,400',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
    description: 'The pinnacle of tactile luxury. Hand-spun Mongolian cashmere combined with grade-A Japanese mulberry silk. Hand-loomed using century-old wooden looms to create an incomparably soft, airy texture and sophisticated luster.',
    provenance: 'Hand-woven in Kyoto, Japan',
    materials: ['70% Mongolian Cashmere', '30% Mulberry Silk'],
    dimensions: '160cm x 220cm',
    leadTime: 'Ready for Immediate Dispatch'
  },
  {
    id: 'aurelia-armchair',
    name: 'Aurelia Bouclé Lounge Chair',
    category: 'furniture',
    designer: 'Pierre Yovanovitch',
    price: '$11,600',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
    description: 'An iconic silhouette that cradles the sitter. The Aurelia Lounge Chair sits close to the floor on invisible sphere feet, featuring an organic triple-lobed backrest in thick, heavily textured natural sheepskin bouclé.',
    provenance: 'Upholstered and hand-built in Geneva, Switzerland',
    materials: ['Natural Sheepskin Bouclé', 'Solid Oak Frame'],
    dimensions: 'W 92cm x D 98cm x H 82cm',
    leadTime: '8-10 Weeks'
  }
];

export const MATERIAL_CUSTOMIZER_OPTIONS: MaterialOption[] = [
  {
    id: 'belgian-boucle-cream',
    name: 'Belgian Bouclé — Crème',
    type: 'Upholstery',
    texture: 'Heavily textured, looped natural wool & alpaca fibers offering soft cloud-like tactility.',
    origin: 'Woven in Ghent, Belgium',
    imageColor: 'bg-[#F9F7F3]',
    description: 'Our most iconic textile. Highly durable, yet incredibly soft and comforting.'
  },
  {
    id: 'belgian-boucle-charcoal',
    name: 'Belgian Bouclé — Smoked Charcoal',
    type: 'Upholstery',
    texture: 'Deep, multi-tonal slate and obsidian wool loops with subtle metallic highlights.',
    origin: 'Woven in Ghent, Belgium',
    imageColor: 'bg-[#2E2F30]',
    description: 'A striking moody statement that anchors architectural spaces.'
  },
  {
    id: 'royal-alpaca-sage',
    name: 'Royal Alpaca & Silk — Moss',
    type: 'Upholstery',
    texture: 'Ultra-refined, dense short-pile weave with an exquisite natural luster.',
    origin: 'Sourced from Arequipa, Peru; Loomed in Prato, Italy',
    imageColor: 'bg-[#606E64]',
    description: 'A luxurious herbal green tone that captures organic serenity.'
  },
  {
    id: 'nero-marquina',
    name: 'Nero Marquina Marble',
    type: 'Stone Accent',
    texture: 'Honed high-density jet-black crystalline limestone with striking white calciferous veining.',
    origin: 'Quarried in Basque Country, Spain',
    imageColor: 'bg-[#121212] border border-gray-700',
    description: 'Bold, masculine, and rich with natural geological drama.'
  },
  {
    id: 'roman-travertine',
    name: 'Roman Travertine — Unfilled',
    type: 'Stone Accent',
    texture: 'Natural pitted, porous sedimentary rock with soft cream, tan, and bone striations.',
    origin: 'Quarried in Tivoli, Italy',
    imageColor: 'bg-[#D6CFC4]',
    description: 'Timeless structural mass that has anchored luxury since antiquity.'
  },
  {
    id: 'reclaimed-elm',
    name: 'Reclaimed Smoked Elm',
    type: 'Timber',
    texture: 'Century-old dense heartwood, hand-wire-brushed to reveal beautiful deep fissures.',
    origin: 'Sourced from historic Japanese estates',
    imageColor: 'bg-[#4B3B2B]',
    description: 'Rich, historical depth that breathes quiet warmth into modern designs.'
  }
];

export const LIFESTYLE_THEMES: SanctuaryTheme[] = [
  {
    id: 'minimalist-penthouse',
    name: 'Minimalist Penthouse',
    tagline: 'Quiet Luxury & Horizon',
    description: 'An architectural expression of air, light, and soaring vistas. Characterized by wide-plank oak flooring, soaring scale, low-profile seating, and pure travertine monoliths.',
    bgGradient: 'from-slate-50 via-[#FAF9F6] to-stone-100',
    recommendedPalette: ['Crème Bouclé', 'Honed Travertine', 'Brushed Brass', 'Bleached Oak']
  },
  {
    id: 'brutalist-villa',
    name: 'Brutalist Villa',
    tagline: 'Sovereign Mass & Raw Textures',
    description: 'A powerful conversation between raw board-formed concrete and warm natural textures. Heavy stone columns, bold linear furniture, and textured textiles to absorb the echoes.',
    bgGradient: 'from-[#ECEBE6] via-[#E2E1DC] to-[#DAD9D4]',
    recommendedPalette: ['Smoked Charcoal', 'Nero Marquina Marble', 'Raw Plaster', 'Acid-Etched Bronze']
  },
  {
    id: 'parisian-haussmann',
    name: 'Parisian Haussmann',
    tagline: 'Classical Heritage & Avand-Garde',
    description: 'Soaring ceilings, intricate crown moldings, and chevron parquetry meet sculptural contemporary furniture. High-contrast artistry, gilded light, and romantic silk draperies.',
    bgGradient: 'from-amber-50/20 via-[#FDFCF7] to-[#F5F2EA]',
    recommendedPalette: ['Ivory Cashmere', 'White Arabescato Marble', 'Satin Brass', 'Oxblood Leather']
  },
  {
    id: 'japandi-pavilion',
    name: 'Japandi Pavilion',
    tagline: 'Silent Wisdom & Warm Wabi-Sabi',
    description: 'Where Nordic functionalism meets ancient Japanese minimalism. Low-slung silhouettes, screen-filtered light, organic paper fixtures, and raw wire-brushed elms.',
    bgGradient: 'from-[#F5F4F0] via-[#EFEFEA] to-[#E6E5DF]',
    recommendedPalette: ['Natural Moss Alpaca', 'Smoked Elm Wood', 'Sandstone', 'Hand-thrown Ceramic']
  }
];

export const CURATION_STEPS: CurationStep[] = [
  {
    id: 1,
    title: 'Architectural Canvas',
    subtitle: 'Select the landscape that anchors your spatial vision.',
    key: 'canvas',
    options: [
      {
        id: 'canvas-penthouse',
        title: 'Minimalist Penthouse',
        description: 'Glass facades, soaring light, floating lines.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
        value: 'minimalist-penthouse'
      },
      {
        id: 'canvas-villa',
        title: 'Brutalist Villa',
        description: 'Raw concrete, massive volume, monolithic scale.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
        value: 'brutalist-villa'
      },
      {
        id: 'canvas-haussmann',
        title: 'Parisian Haussmann',
        description: 'Herringbone wood, classical moldings, soaring ceilings.',
        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
        value: 'parisian-haussmann'
      },
      {
        id: 'canvas-pavilion',
        title: 'Japandi Pavilion',
        description: 'Paper screens, low profiles, cedar, and quietude.',
        image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80',
        value: 'japandi-pavilion'
      }
    ]
  },
  {
    id: 2,
    title: 'Primary Palette & Textures',
    subtitle: 'Define the tactile signature of your environment.',
    key: 'palette',
    options: [
      {
        id: 'palette-cream',
        title: 'Crème & Honed Travertine',
        description: 'Warm, luminous, incredibly soft, and organic.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
        value: 'cream-travertine'
      },
      {
        id: 'palette-smoked',
        title: 'Smoked Charcoal & Oak',
        description: 'Moody, masculine, sculptural, and profound.',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
        value: 'smoked-charcoal'
      },
      {
        id: 'palette-sage',
        title: 'Sage Silk & Satin Brass',
        description: 'Serene, intellectual, botanical, and polished.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
        value: 'sage-brass'
      },
      {
        id: 'palette-oxblood',
        title: 'Oxblood Leather & Arabescato',
        description: 'Heritage, rich, daring, and highly collectible.',
        image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
        value: 'oxblood-heritage'
      }
    ]
  },
  {
    id: 3,
    title: 'Sculptural Focal Point',
    subtitle: 'Choose the center of gravity for your salon.',
    key: 'focalPoint',
    options: [
      {
        id: 'focal-sofa',
        title: 'Bespoke Curvilinear Seating',
        description: 'Anchored by the Elysian Bouclé Sectional.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
        value: 'elysian-sofa'
      },
      {
        id: 'focal-lighting',
        title: 'Atmospheric Floating Sculpture',
        description: 'Anchored by the Apparatus Aether Brass Globe.',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        value: 'aether-pendant'
      },
      {
        id: 'focal-monolith',
        title: 'Quarried Stone Mass',
        description: 'Anchored by the Honed Travertine Plinth Console.',
        image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
        value: 'monolith-table'
      },
      {
        id: 'focal-totem',
        title: 'Monumental Obsidian Pillar',
        description: 'Anchored by the hand-chipped Obsidian Totem.',
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        value: 'obsidian-totem'
      }
    ]
  },
  {
    id: 4,
    title: 'Sensory Aura & Ambiance',
    subtitle: 'Formulate the invisible dimension of the space.',
    key: 'ambiance',
    options: [
      {
        id: 'ambiance-amber',
        title: 'Santal & Incandescence',
        description: 'Warm candlelight, notes of amber, cedar, leather.',
        image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80',
        value: 'santal-incandescence'
      },
      {
        id: 'ambiance-dappled',
        title: 'Dappled Sunlight & Silence',
        description: 'Filtered shadows, quiet breeze, damp rain on slate.',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
        value: 'sunlight-silence'
      },
      {
        id: 'ambiance-mist',
        title: 'Himalayan Cedar & Crisp Dawn',
        description: 'Cold, clean mountain mist, botanical clarity.',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1db207faf?auto=format&fit=crop&w=600&q=80',
        value: 'cedar-mist'
      },
      {
        id: 'ambiance-mineral',
        title: 'Frankincense & High Cathedral Echoes',
        description: 'Smoky, sacred, intellectual mineral atmosphere.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80',
        value: 'mineral-sacred'
      }
    ]
  }
];
