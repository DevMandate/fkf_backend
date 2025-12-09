const loader = document.getElementById("loader");

function showLoader(message = "Loading, please wait...") {
  loader.querySelector("p").textContent = message;
  loader.classList.remove("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
}
