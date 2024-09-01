export default function getImageUrl(path: string) {
  const {
    public: { strapi },
  } = useRuntimeConfig();
  const isLocal = import.meta.dev && strapi.url.includes("localhost");

  return isLocal ? `http://localhost:1337${path}` : path;
}
