// js loaded confirmation
console.log("portfolio loaded!");

// get the current year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
