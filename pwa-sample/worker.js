importScripts("precache-manifest.70c3eaa60d853536c8eca01b5a87f67f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

"use strict";

self.addEventListener('install', function(evt) {
  // when worker installed
  console.log('ServiceWorker Installed');
});

self.addEventListener('activate', function(evt) {
  // when worker active
  console.log('ServiceWorker Active');
});

self.addEventListener('fetch', function(evt) {
  // when worker fetch
  console.log('ServiceWorker Fetch');
});

