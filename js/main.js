'use strict';

/* ============================================================
   main.js — Nav scroll state, mobile menu, scroll-reveal,
             counters, parallax, particles, ripple, utilities
   ============================================================ */


/* ── Nav: transparent → solid on scroll ── */
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  function update() {
    const scrolled = window.scrollY > 50;
    nav.classList.toggle('nav--scrolled', scrolled);
  }

  window.addEventListener('scroll', update, { passive: true });
  update(); // initialise on page load
}());


/* ── Nav: hamburger + mobile panel ── */
(function initMobileNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const overlay   = document.querySelector('.nav__mobile-overlay');
  if (!hamburger || !overlay) return;

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    overlay.classList.contains('open') ? closeMenu() : openMenu();
  });

  // ✕ close button inside the panel
  const closeBtn = overlay.querySelector('.nav__mobile-close');
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Click outside the panel (on the dark backdrop)
  overlay.addEventListener('click', (e) => {
    const panel = overlay.querySelector('.nav__mobile-panel');
    if (panel && !panel.contains(e.target)) closeMenu();
  });

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Accordion sub-menus — buttons with [data-toggle]
  overlay.querySelectorAll('[data-toggle]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const submenu = document.getElementById(trigger.dataset.toggle);
      const chevron = trigger.querySelector('.mobile-chevron');
      if (!submenu) return;

      const isOpen = submenu.classList.contains('open');

      // Collapse all first
      overlay.querySelectorAll('.nav__mobile-submenu.open')
             .forEach((sm) => sm.classList.remove('open'));
      overlay.querySelectorAll('.mobile-chevron.open')
             .forEach((ch) => ch.classList.remove('open'));

      if (!isOpen) {
        submenu.classList.add('open');
        if (chevron) chevron.classList.add('open');
      }
    });
  });
}());


/* ── Scroll-reveal (Intersection Observer) ── */
/* Adds .visible to: .fade-up, .reveal, .accent-line-anim      */
(function initScrollReveal() {
  const els = document.querySelectorAll('.fade-up, .reveal, .accent-line-anim');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => observer.observe(el));
}());


/* ── Stat counter animation ── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    const target  = parseInt(el.dataset.count, 10);
    const display = el.querySelector('.count-val');
    if (!display) return;

    const duration = 2000;
    const start    = performance.now();

    (function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      display.textContent = Math.floor(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(tick);
      else display.textContent = target;
    }(start));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}());


/* ── Hero BG parallax ── */
(function initHeroParallax() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;
  heroBg.classList.add('loaded');
}());


/* ── Hero particles ── */
(function initParticles() {
  const container = document.querySelector('.hero__particles');
  if (!container) return;

  for (let i = 0; i < 18; i++) {
    const p    = document.createElement('span');
    p.className = 'particle';

    const size = Math.random() * 5 + 3;
    p.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `bottom:${Math.random() * 20}%`,
      `animation-duration:${Math.random() * 12 + 8}s`,
      `animation-delay:-${Math.random() * 10}s`,
      `opacity:${(Math.random() * 0.4 + 0.1).toFixed(2)}`,
    ].join(';');

    container.appendChild(p);
  }
}());


/* ── Button ripple ── */
(function initRipple() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const rect   = btn.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height) * 1.4;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${e.clientX - rect.left - size / 2}px`,
      `top:${e.clientY - rect.top  - size / 2}px`,
    ].join(';');

    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  });
}());


/* ── Active nav link highlight ── */
(function initActiveNav() {
  const path = window.location.pathname;

  document.querySelectorAll('.nav__link, .nav__dropdown-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const clean = href.replace(/^\.\//, '').replace(/index\.html$/, '');
    if (clean && path.endsWith(clean)) {
      link.closest('.nav__item')?.classList.add('active');
    }
  });
}());


/* ── Smooth scroll for in-page anchors ── */
(function initSmoothAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10
      ) || 80;

      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navHeight,
        behavior: 'smooth',
      });
    });
  });
}());


/* ── Footer year ── */
(function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}());


/* ── Logo: split TT logo + Green Plan clickable areas ── */
(function initLogoLinks() {
  const logo = document.querySelector('.nav__logo[usemap]');
  if (!logo) return;

  function setup() {
    const naturalW = logo.naturalWidth || 1000;
    const splitRatio = 700 / naturalW; // Green Plan badge starts at ~70% of image width
    const renderedW  = logo.offsetWidth;
    const renderedH  = logo.offsetHeight;
    const splitX     = Math.round(renderedW * splitRatio);

    const wrap = document.createElement('span');
    wrap.style.cssText = 'position:relative;display:inline-block;line-height:0;';
    logo.parentNode.insertBefore(wrap, logo);
    wrap.appendChild(logo);
    logo.removeAttribute('usemap');

    function mkLink(href, left, width, target) {
      const a = document.createElement('a');
      a.href = href;
      a.style.cssText = 'position:absolute;top:0;left:' + left + 'px;width:' + width + 'px;height:' + renderedH + 'px;';
      if (target) { a.target = target; a.rel = 'noopener noreferrer'; }
      wrap.appendChild(a);
    }

    mkLink('index.html', 0, splitX);
    mkLink('https://greenplan.hu/', splitX, renderedW - splitX, '_blank');
  }

  if (logo.complete && logo.naturalWidth) setup();
  else logo.addEventListener('load', setup);
}());
