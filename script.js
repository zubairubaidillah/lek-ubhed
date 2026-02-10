/* ================================
   GLOBAL VARIABLES
================================ */
const navbar = document.getElementById("navbar");
const darkToggle = document.getElementById("darkToggle");
const fadeElements = document.querySelectorAll(".fade-in");

/* ================================
   SMOOTH SCROLL NAVBAR
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ================================
   NAVBAR SCROLL EFFECT
================================ */
window.addEventListener("scroll", () => {
  if (!navbar) return;

  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ================================
   FADE-IN ON SCROLL
================================ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach(el => observer.observe(el));

/* ================================
   DARK MODE TOGGLE
================================ */
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Toggle icon
    darkToggle.textContent = document.body.classList.contains("dark")
      ? "☀️"
      : "🌙";
  });
}
