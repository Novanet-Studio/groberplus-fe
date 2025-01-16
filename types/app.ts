// Generated by https://quicktype.io
export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface ProductAttributes {
  title: string;
  description: string;
  hasSlowMotion: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  image: Image;
  gallery: Gallery;
  category: Category;
}

export interface Category {
  data: Data;
}

export interface Data {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: {
      attributes: {
        url: string;
        name: string;
      };
    };
  };
}

export interface CategoryAttributes extends PurpleAttributes {
  products: {
    data: Product[];
  };
  image: Image;
}

export interface Gallery {
  data: DAT[];
}

export interface DAT {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export interface Image {
  data: DAT;
}

export interface Category {
  title: string;
  description: string;
  slug: string;
  image: {
    data: {
      attributes: {
        url: string;
        name: string;
      };
    };
  };
  products: {
    data: {
      attributes: Product[];
    };
  }[];
}
