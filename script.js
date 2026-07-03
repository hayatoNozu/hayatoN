const revealTargets = document.querySelectorAll(
  ".section-heading, .profile-grid, .work-card, .skill-grid section, .contact-section > *",
);

revealTargets.forEach((target, index) => {
  target.classList.add("reveal");
  target.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  },
);

revealTargets.forEach((target) => revealObserver.observe(target));
