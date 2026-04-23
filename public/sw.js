/**
 * CRS RIDDOR Helper — service worker.
 * Hand-rolled because Serwist's webpack plugin does not run under the Next
 * 16 default Turbopack build. Small and purpose-built:
 *   - precaches the app shell + brand assets on install
 *   - stale-while-revalidate for GET responses inside our origin
 *   - network-only for Next server actions and other POST traffic
 */

const VERSION = "crs-riddor-v1";
const SHELL = [
  "/",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
  "/icons/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GETs within our own origin. POST (server actions) always
  // hits the network; failure surfaces as a client-side catch so the
  // offline queue can take over.
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Don't cache Next dev/internal traffic — avoids stale HMR artefacts.
  if (url.pathname.startsWith("/_next/webpack-hmr")) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(VERSION);
      const cached = await cache.match(request);
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            cache.put(request, response.clone());
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "skip-waiting") self.skipWaiting();
});
