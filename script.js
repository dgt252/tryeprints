document.addEventListener("DOMContentLoaded", () => {
  const reveal = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveal.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveal.forEach((element) => observer.observe(element));
});
