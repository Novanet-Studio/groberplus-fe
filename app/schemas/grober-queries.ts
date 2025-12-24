export const getCategoriesQuery = `
  query {
    categories {
      documentId
      title
      description
      slug
      image {
        url
        name
      }
    }
  }
`;

export const getCategoryWithProductsQuery = `
  query getCategoryWithProducts($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
      documentId
      title
      slug
      image {
        url
        name
      }
      products {
        documentId
        title
        slug
        images {
          url
          name
        }
      }
    }
  }
`;

export const getCategoryBySlugQuery = `
  query getCategory($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
      documentId
      title
      slug
      image {
        url
      }
    }
  }
`;

export const getProductBySlugQuery = `
  query getProduct($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      documentId
      title
      description
      hasSlowMotion
      slug
      images {
        url
        name
      }
      blueprints {
        url
        name
      }
      category {
        title
        slug
      }
    }
  }
`;
