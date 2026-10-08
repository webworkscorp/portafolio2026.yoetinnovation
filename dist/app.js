function initProjects() {
  const container = document.getElementById('project-list');
  if (!container || container.children.length > 0 || typeof projects === 'undefined') return;

  container.innerHTML = projects.map((p, idx) => `
    <article class="project" id="project-${idx}">
      <div class="project-main">
        <div class="project-info">
          <p class="project-count">${String(idx + 1).padStart(2, '0')} <span>· ${String(projects.length).padStart(2, '0')}</span></p>
          <h3>${p.name}</h3>
          <div class="project-description">
            <h4>${p.logo}</h4>
            <p>${p.desc}</p>
          </div>
        </div>
        <div class="project-photo is-loaded" style="aspect-ratio: ${p.width} / ${p.height};">
          <div class="photo-shimmer" aria-hidden="true"></div>
          <picture>
            <source srcset="${p.image}" type="image/webp">
            <img
              src="${p.fallback}"
              alt="Diseño web para ${p.name}"
              width="${p.width}"
              height="${p.height}"
              decoding="async"
              ${idx === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'}
            >
          </picture>
        </div>
      </div>
    </article>
  `).join('');

  // Fluid, hardware-accelerated image reveal
  const photoCards = container.querySelectorAll('.project-photo');
  photoCards.forEach((card) => {
    const img = card.querySelector('img');
    if (!img) return;

    const reveal = () => {
      requestAnimationFrame(() => {
        card.classList.add('is-loaded');
      });
    };

    if (img.complete && img.naturalWidth > 0) {
      reveal();
    } else {
      img.addEventListener('load', reveal, { once: true });
      img.addEventListener('error', reveal, { once: true });
      if ('decode' in img) {
        img.decode().then(reveal).catch(() => {});
      }
    }
  });
}

function initLandingInteractions() {
  // Smooth scroll explore button directly to showcase
  const exploreBtn = document.getElementById('explore-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      const projectsSection = document.querySelector('.projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Smooth scroll back to top
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Clean landing page URL: clean any existing hash
  if (window.location.hash) {
    try {
      history.replaceState(null, '', window.location.pathname);
    } catch (_) {}
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initLandingInteractions();
});

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initProjects();
  initLandingInteractions();
}
