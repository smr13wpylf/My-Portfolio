/* ═══════════════════════════════════════════════════
   SHAYLY McDONNELL PORTFOLIO — Main JS
   Navigation · Scroll · Animations · Form handling
═══════════════════════════════════════════════════ */

'use strict';

// ── NAV SCROLL BEHAVIOR ──────────────────────────
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  // Add scrolled class
  if (currentScroll > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
}, { passive: true });

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');

  // Animate hamburger
  const spans = navToggle.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    document.body.style.overflow = 'hidden';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
    document.body.style.overflow = '';
  }
});

// Close menu on nav link click (mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
    document.body.style.overflow = '';
  });
});

// ── ACTIVE NAV LINK (INTERSECTION) ───────────────
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(section => navObserver.observe(section));

// ── SCROLL FADE-IN ANIMATIONS ────────────────────
const fadeElements = document.querySelectorAll(
  '.section__label, .section__title, .section__subtitle, ' +
  '.about__lead, .about__body, .about__tags, .about__quote, ' +
  '.project-card, .essay-card, .method__framework, ' +
  '.method__principles, .method__blueprint-card, ' +
  '.statement__quote, .contact__body, .contact__way, ' +
  '.contact__form-wrap, .contact__newsletter'
);

fadeElements.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children if needed
      entry.target.style.transitionDelay = `${(i % 5) * 60}ms`;
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.08
});

fadeElements.forEach(el => fadeObserver.observe(el));

// ── CONTACT FORM ─────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    // Loading state
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
    btn.disabled = true;

    // Simulate sending (no backend — visual feedback only)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Success state
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
    formSuccess.style.opacity = '0';
    formSuccess.style.transition = 'opacity 0.5s ease';
    setTimeout(() => { formSuccess.style.opacity = '1'; }, 50);

    // Save to localStorage as fallback record
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      inquiry: document.getElementById('inquiry').value,
      message: document.getElementById('message').value,
      timestamp: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      existing.push(formData);
      localStorage.setItem('contact_submissions', JSON.stringify(existing));
    } catch (err) {
      // Silent fail
    }
  });
}

// ── NEWSLETTER FORM ──────────────────────────────
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    const btn = newsletterForm.querySelector('button');

    btn.innerHTML = '<i class="fas fa-check"></i> Subscribed';
    btn.style.background = 'rgba(201, 168, 76, 0.3)';
    btn.disabled = true;
    input.disabled = true;

    try {
      const subs = JSON.parse(localStorage.getItem('newsletter_subs') || '[]');
      subs.push({ email: input.value, date: new Date().toISOString() });
      localStorage.setItem('newsletter_subs', JSON.stringify(subs));
    } catch (err) {
      // Silent fail
    }
  });
}

// ── SMOOTH ANCHOR SCROLLING ──────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = nav.getBoundingClientRect().height;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── HERO PARALLAX ────────────────────────────────
const heroBg = document.querySelector('.hero__bg-text');

if (heroBg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.15}px))`;
    }
  }, { passive: true });
}

// ── CURSOR TRAIL (subtle gold dots) ──────────────
let cursorTimeout;
const maxDots = 8;
const dots = [];

function createDot(x, y) {
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  dot.style.cssText = `
    position: fixed;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(201, 168, 76, 0.5);
    pointer-events: none;
    z-index: 9999;
    left: ${x}px;
    top: ${y}px;
    transform: translate(-50%, -50%);
    transition: opacity 0.6s ease, transform 0.6s ease;
  `;
  document.body.appendChild(dot);
  dots.push(dot);

  if (dots.length > maxDots) {
    const old = dots.shift();
    old.remove();
  }

  setTimeout(() => {
    dot.style.opacity = '0';
    dot.style.transform = 'translate(-50%, -50%) scale(0)';
    setTimeout(() => {
      if (dot.parentNode) dot.remove();
      const idx = dots.indexOf(dot);
      if (idx > -1) dots.splice(idx, 1);
    }, 600);
  }, 300);
}

// Only on desktop
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let lastDotTime = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastDotTime > 80) {
      createDot(e.clientX, e.clientY);
      lastDotTime = now;
    }
  });
}

// ── TYPING EFFECT — hero eyebrow (subtle) ────────
const eyebrow = document.querySelector('.hero__eyebrow span:nth-child(2)');
if (eyebrow) {
  const text = eyebrow.textContent;
  eyebrow.textContent = '';
  eyebrow.style.opacity = '1';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      eyebrow.textContent += text[i++];
      setTimeout(type, 45);
    }
  };

  // Start after brief delay
  setTimeout(type, 800);
}

// ── MARQUEE PAUSE ON HOVER ───────────────────────
const marqueeTrack = document.querySelector('.marquee__track');
if (marqueeTrack) {
  const marquee = document.querySelector('.marquee');
  marquee.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marquee.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

// ── INIT ─────────────────────────────────────────
document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
});

console.log('%c✦ Shayly McDonnell Portfolio', 'color: #c9a84c; font-family: Georgia, serif; font-size: 14px; font-style: italic;');
console.log('%cLeft Angle Cross of Refinement · 6/2 Manifesting Generator · Life Path 7', 'color: #6b6c74; font-size: 11px;');
