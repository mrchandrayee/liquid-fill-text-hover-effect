const liquidText = document.querySelector(".liquid-text");
const perspective = document.querySelector(".perspective-container");

// Touch users can tap to toggle the same fill state used by hover.
perspective.addEventListener("click", (event) => {
  if (window.matchMedia("(hover: none)").matches) {
    liquidText.classList.toggle("is-filled");
  }
});

// Keep the demo keyboard accessible: Enter/Space activate the button natively.
liquidText.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    liquidText.classList.remove("is-filled");
    liquidText.blur();
  }
});
