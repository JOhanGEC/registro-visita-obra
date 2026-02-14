const CACHE_NAME = "visita-obra-v1";

const urlsToCache = [
  "/",
  "index.html",
  "style.css",
  "app.js",
  "manifest.json"
];

// Instalar y guardar en caché
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar
self.addEventListener("activate", event => {
  console.log("Service Worker Activado");
});

// Interceptar peticiones
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
