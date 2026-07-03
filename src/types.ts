export interface LuxuryPiece {
  id: string;
  name: string;
  category: 'furniture' | 'lighting' | 'art' | 'textiles';
  designer: string;
  price: string;
  image: string;
  description: string;
  provenance: string; // E.g., "Hand-finished in Carrara, Italy"
  materials: string[];
  dimensions: string;
  leadTime: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  type: string;
  texture: string;
  origin: string;
  imageColor: string; // Color hex or class name for rendering circles
  description: string;
}

export interface SanctuaryTheme {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bgGradient: string;
  recommendedPalette: string[];
}

export interface CurationStep {
  id: number;
  title: string;
  subtitle: string;
  key: string;
  options: {
    id: string;
    title: string;
    description: string;
    image: string;
    value: string;
  }[];
}
