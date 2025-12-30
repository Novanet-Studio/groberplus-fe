export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface Category {
  documentId: string;
  title: string;
  slug: string;
  description?: string;
  image: StrapiImage[];
  products?: Product[];
}

export interface Product {
  documentId: string;
  title: string;
  description: string;
  hasSlowMotion: boolean;
  slug: string;
  images: StrapiImage[];
  blueprints: StrapiImage[];
  category?: Category;
}
