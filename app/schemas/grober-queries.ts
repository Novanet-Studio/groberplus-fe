import type { Category, Product } from "~/schemas/types/app";

export async function getCategories(): Promise<Category[]> {
  const { get } = useKairos();
  return (await get<Category>("categories", { itemsPerPage: "100" })) ?? [];
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category | null> {
  const { getOne } = useKairos();
  return getOne<Category>("categories", slug);
}

export async function getCategoryWithProducts(
  slug: string,
): Promise<{ category: Category; products: Product[] } | null> {
  const { getOne, get } = useKairos();
  const category = await getOne<Category>("categories", slug);
  if (!category) return null;

  const allProducts = await get<Product>("products", {
    itemsPerPage: "100",
    populate: "category",
  });

  const products = (allProducts ?? []).filter(
    (p) => p.relations?.category?.[0]?.data?.slug === slug,
  );

  return { category, products };
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { getOne } = useKairos();
  return getOne<Product>("products", slug, { populate: "category" });
}
