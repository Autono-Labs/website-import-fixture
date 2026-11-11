const menu = document.querySelector(".menu"), nav = document.getElementById("nav");
menu?.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
for (const button of document.querySelectorAll("[data-copy]")) button.addEventListener("click", async () => {
  await navigator.clipboard?.writeText(button.dataset.copy); button.textContent = "Copied";
});
