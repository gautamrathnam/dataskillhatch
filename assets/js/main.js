/* =========================
   FADE-IN ANIMATION
   ========================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

/* =========================
   COUNTER ANIMATION
   ========================= */
const counters = document.querySelectorAll('.counter-number');

const runCounter = counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const increment = target / 120;

  const updateCounter = () => {
    count += increment;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
};

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => {
  counterObserver.observe(counter);
});

/* =========================
   TESTIMONIAL SLIDER
   ========================= */
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {
  setInterval(() => {
    testimonials.forEach(t => t.classList.remove("active"));
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add("active");
  }, 4000);
}
