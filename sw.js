const CACHE_NAME = "offline";
const OFFLINE_URL = "offline.html";

self.addEventListener("install", function (event) {
	console.log("[ServiceWorker] Install");
});

self.addEventListener("activate", (event) => {
	console.log("[ServiceWorker] Activate");
});

self.addEventListener("fetch", function (event) {
	console.log("[Service Worker] Fetch", event.request.url);
});
