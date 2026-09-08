document.addEventListener("DOMContentLoaded", function () {
  // Navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback: make all visible
    reveals.forEach((el) => el.classList.add("visible"));
  }

  // Back to top
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (!backToTop) return;
    backToTop.classList.toggle("show", window.scrollY > 500);
  });

  if (backToTop) {
    backToTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  // Show current time (UTC) — existing small script merged here
  function showTime() {
    const el = document.getElementById("currentTime");
    if (el) el.innerHTML = new Date().toUTCString();
  }
  showTime();
  setInterval(showTime, 1000);
});