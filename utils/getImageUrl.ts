export default function getImageUrl(path: string) {
  if (import.meta.browser) {
    const isDev = import.meta.env.DEV;
    return isDev ? `http://localhost:1337${path}` : path;
  }
}
