export default function useKairos() {
  const config = useRuntimeConfig();

  async function get<T>(collection: string, params?: Record<string, string>) {
    const { data } = await $fetch<{ data: T[] }>(
      `${config.public.kairosApiUrl}/${collection}`,
      {
        headers: { "x-api-key": config.public.kairosApiKey },
        params,
      },
    );
    return data;
  }

  async function getOne<T>(
    collection: string,
    slug: string,
    params?: Record<string, string>,
  ): Promise<T | null> {
    try {
      const { data } = await $fetch<{ data: T }>(
        `${config.public.kairosApiUrl}/${collection}/${slug}`,
        {
          headers: { "x-api-key": config.public.kairosApiKey },
          params,
        },
      );
      return data;
    } catch {
      return null;
    }
  }

  return { get, getOne };
}
