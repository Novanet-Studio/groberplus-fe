export interface CategoryRelation {
  id: string;
  data: {
    slug: string;
    title: string;
    description?: string;
    image: string[];
  };
}

export interface Category {
  slug: string;
  title: string;
  description?: string;
  image: string[];
  products?: Product[];
}

export interface Product {
  slug: string;
  title: string;
  description: string;
  hasSlowMotion: boolean;
  images: string[];
  blueprints: string[];
  relations?: {
    category?: CategoryRelation[];
  };
}
