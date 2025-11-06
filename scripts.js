const heroForm = document.getElementById('hero-signup');
const heroMessage = document.getElementById('hero-message');
const footerForm = document.getElementById('footer-signup');
const footerMessage = document.getElementById('footer-message');
const yearEl = document.getElementById('year');
const tabChips = document.querySelectorAll('.tab-chip');
const panels = document.querySelectorAll('.panel');
const statElements = document.querySelectorAll('.stat');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const storageKey = 'aegis-email-signups';

function storeSignup(data) {
  try {
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    existing.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem(storageKey, JSON.stringify(existing));
    return true;
  } catch (error) {
    console.warn('Unable to store signup locally', error);
    return false;
  }
}

function validateEmail(email) {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(String(email).toLowerCase());
}

function handleFormSubmit(form, messageElement) {
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const email = data.email?.trim();

    if (!validateEmail(email)) {
      messageElement.textContent = 'Enter a valid email address to join the list.';
      messageElement.style.color = '#f87171';
      return;
    }

    const stored = storeSignup(data);
    if (stored) {
      messageElement.textContent = 'Thanks! You\'re on the list. Expect an invite soon.';
      messageElement.style.color = '#64f4ac';
    } else {
      messageElement.textContent = 'Thanks! We\'ll be in touch soon (local storage unavailable).';
      messageElement.style.color = '#facc15';
    }

    form.reset();
  });
}

handleFormSubmit(heroForm, heroMessage);
handleFormSubmit(footerForm, footerMessage);

// Showcase tabs
if (tabChips.length && panels.length) {
  tabChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const target = chip.dataset.target;
      tabChips.forEach((c) => {
        const isActive = c === chip;
        c.classList.toggle('active', isActive);
        c.setAttribute('aria-selected', String(isActive));
      });
      panels.forEach((panel) => {
        const isActive = panel.id === target;
        panel.classList.toggle('active', isActive);
        panel.toggleAttribute('hidden', !isActive);
      });
    });
  });
}

// Intersection-based animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll('.pillar, .panel__layer, .timeline__step, .stat, .testimonial').forEach((el) => {
  observer.observe(el);
});

// Counter animation for stats
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const stat = entry.target;
        const targetValue = Number(stat.dataset.target || '0');
        const suffix = stat.dataset.suffix || '';
        const valueEl = stat.querySelector('.stat__value');
        if (!valueEl) return;
        const duration = 1200;
        const startTime = performance.now();

        function updateCounter(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.floor(eased * targetValue);
          valueEl.textContent = `${value}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            valueEl.textContent = `${targetValue}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(stat);
      }
    });
  },
  { threshold: 0.4 }
);

statElements.forEach((stat) => counterObserver.observe(stat));

// Scroll parallax for showcase layers
const parallaxObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const panelLayers = entry.target.querySelectorAll('.panel__layer');
      const scrollHandler = () => {
        const rect = entry.target.getBoundingClientRect();
        const progress = Math.min(Math.max(0, 1 - rect.top / window.innerHeight), 1);
        panelLayers.forEach((layer, index) => {
          const offset = (index + 1) * 8 * progress;
          layer.style.transform = `translateY(${offset}px)`;
        });
      };
      scrollHandler();
      window.addEventListener('scroll', scrollHandler, { passive: true });
      parallaxObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.1 }
);

panels.forEach((panel) => parallaxObserver.observe(panel));

// Reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reduced-motion');
}
