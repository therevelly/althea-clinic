document.addEventListener("DOMContentLoaded", () => {
  // Sticky Navbar Scroll Handler
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 15px 40px rgba(30, 27, 24, 0.08)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.85)";
      navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.04)";
    }
  });

  // Reveal Elements on Scroll (Excluding Hero Elements to Let CSS Handle Hero Load)
  const selectorsToReveal = [
    ".trust-grid > div",
    ".service-card",
    ".team-image-wrapper",
    ".team-content",
    ".appointment-info",
    ".appointment-form-wrapper",
  ];

  selectorsToReveal.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add("reveal");
    });
  });

  // Stagger Delays for Grid Elements
  document.querySelectorAll(".service-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 120}ms`;
  });

  document.querySelectorAll(".trust-grid > div").forEach((item, i) => {
    item.style.transitionDelay = `${i * 100}ms`;
  });

  // IntersectionObserver for Below-the-Fold Sections
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));

  // Mobile Navigation Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});
