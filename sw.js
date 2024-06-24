self.addEventListener("install", function (event) {
	console.log("[ServiceWorker] Install");
});

self.addEventListener("activate", (event) => {
	console.log("[ServiceWorker] Activate");
});
