import $ from "jquery";

declare global {
  interface Window {
    $: typeof $;
    jQuery: typeof $;
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default defineNuxtPlugin(async () => {
  window.$ = window.jQuery = $;

  // owl.carousel/magnific-popup read window.jQuery synchronously at
  // module-eval time (not real UMD modules), so they must load *after*
  // window.jQuery is set — a static import would be hoisted above this
  // assignment and see undefined.
  await import("owl.carousel");
  await import("magnific-popup");

  // Same issue for these CDN-only jQuery plugins (no npm equivalent used
  // here): they read the bare/window jQuery global at script-parse time,
  // so they're loaded as scripts from this plugin, in order, once
  // window.jQuery is guaranteed to exist — instead of racing them against
  // the Nuxt client bundle via <script defer> in nuxt.config.ts.
  await loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js"
  );
  await loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"
  );
  await loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"
  );
});
