export interface Product {
  title: string;
  description: string;
  image: {
    data: {
      attributes: {
        url: string;
        name: string;
      };
    };
  };
  hasSlowMotion: boolean;
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
