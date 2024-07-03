var CACHE_NAME = 'portal-v1';
var urlsToCache = [
  './',
  './index.html',
  './infogtk.html',
  './dapodik.html',
  './rapor.html',
  './gbr/2.png',
  './gbr/3.png',
  './gbr/4.png',
  './manifest.json',
  './fa/b.png',
  './fa/c.png',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js'

];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});




