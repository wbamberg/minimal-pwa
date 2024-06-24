navigator.serviceWorker.register("sw.js");

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", enableAppInstallPrompt);

window.addEventListener("appinstalled", disableInAppInstallPrompt);

function enableAppInstallPrompt(event) {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
  installButton.addEventListener("click", inAppInstallPrompt);
}

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
  installButton.removeEventListener("click", inAppInstallPrompt);
}

async function inAppInstallPrompt() {
  if (!installPrompt) return;

  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
}
