const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion && 'IntersectionObserver' in window) {
  // Large editorial headings fade without moving, keeping their letter spacing stable.
  // Smaller project cards and content blocks also rise as they enter.
  const revealTargets = document.querySelectorAll<HTMLElement>(
    '.selected-work, .supporting-work, .support-project, .about-section, .contact-section, ' +
    '.work-flagship, .work-featured, .work-card, .work-archive, .archive-card, ' +
    '.resume-frame, .case-intro, .case-engineering, .case-systems, .feature-heading, ' +
    '.feature-row, .evolution, .case-close, .page-story, .page-personal, .page-close, .page-contact, ' +
    '.story-copy, .systems-grid'
  );
  const risingTargets = '.support-project, .work-card, .archive-card, .story-copy, .systems-grid';
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

  revealTargets.forEach((target) => {
    // Keep content already in view visible on load and when following anchor links.
    if (target.getBoundingClientRect().top <= window.innerHeight * 0.9) return;
    target.classList.add('reveal-pending');
    if (target.matches(risingTargets)) target.classList.add('reveal-rise');
    revealObserver.observe(target);
  });
}

// Browsers can restore a hovered Polaroid from the back-forward cache while the
// pointer is still over it. Restore the tilt until the pointer leaves the artwork.
window.addEventListener('pageshow', (event) => {
  if (!event.persisted) return;
  const art = document.querySelector<HTMLElement>('.hero-art');
  if (!art) return;
  art.classList.add('polaroid-await-pointer-exit');
  const reset = () => art.classList.remove('polaroid-await-pointer-exit');
  art.addEventListener('pointerleave', reset, { once: true });
  window.addEventListener('pointermove', (pointerEvent) => {
    if (!art.contains(pointerEvent.target as Node)) reset();
  }, { once: true });
});
