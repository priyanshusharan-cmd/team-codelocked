// TeamCodeLocked — Contact page
// Scroll-driven intro: cards start scattered around the hero and settle into the grid.

(() => {
  const section = document.querySelector('.scrolly');
  const stage = section.querySelector('.stage');
  const hero = stage.querySelector('.hero');
  const frameBg = stage.querySelector('.frame-bg');
  const frameHead = stage.querySelector('.frame-head');
  const slots = [...stage.querySelectorAll('.slot')];
  const dock = stage.querySelector('.dock');
  const cards = [...stage.querySelectorAll('[data-card]')];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  // Scattered layout. x/y = card centre as a fraction of the stage,
  // w = card width as a fraction of the stage width, r = rotation (deg).
  const SCATTER = {
    desktop: {
      a: { x: 0.10, y: 0.33, w: 0.115, r: -7 },
      b: { x: 0.11, y: 0.68, w: 0.19, r: -11 },
      c: { x: 0.89, y: 0.36, w: 0.12, r: 8 },
      d: { x: 0.12, y: 0.92, w: 0.105, r: 6 },
      e: { x: 0.77, y: 0.87, w: 0.10, r: -8 },
      f: { x: 0.90, y: 0.82, w: 0.11, r: 6 },
    },
    mobile: {
      a: { x: 0.13, y: 0.20, w: 0.24, r: -9 },
      b: { x: 0.24, y: 0.88, w: 0.46, r: -6 },
      c: { x: 0.88, y: 0.22, w: 0.20, r: 9 },
      // d and f start just off-screen and slide in from the sides
      d: { x: -0.18, y: 0.58, w: 0.24, r: 10 },
      e: { x: 0.80, y: 0.90, w: 0.30, r: 7 },
      f: { x: 1.18, y: 0.60, w: 0.24, r: -8 },
    },
  };

  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  let geo = [];
  let ticking = false;

  function measure() {
    if (reduceMotion.matches) {
      cards.forEach((c) => { c.style.transform = ''; c.style.setProperty('--lp', 1); });
      hero.style.cssText = '';
      return;
    }
    const s = stage.getBoundingClientRect();
    const layout = innerWidth < 760 ? SCATTER.mobile : SCATTER.desktop;
    cards.forEach((c) => (c.style.transform = 'none'));
    geo = cards.map((c, i) => {
      const r = c.getBoundingClientRect();
      const t = layout[c.dataset.card];
      const cx = r.left - s.left + r.width / 2;
      const cy = r.top - s.top + r.height / 2;
      return {
        dx: t.x * s.width - cx,
        dy: t.y * s.height - cy,
        scale: (t.w * s.width) / r.width,
        rot: t.r,
        delay: i * 0.025,
      };
    });
    render();
  }

  function progress() {
    const r = section.getBoundingClientRect();
    const travel = r.height - innerHeight;
    return travel > 0 ? clamp(-r.top / travel) : 1;
  }

  function render() {
    ticking = false;
    if (reduceMotion.matches) return;
    const p = progress();

    // Cards: scattered → grid
    cards.forEach((c, i) => {
      const g = geo[i];
      if (!g) return;
      const lp = easeOut(clamp((p - 0.03 - g.delay) / 0.55));
      const k = 1 - lp;
      const sc = 1 + (g.scale - 1) * k;
      c.style.transform = `translate3d(${g.dx * k}px, ${g.dy * k}px, 0) rotate(${g.rot * k}deg) scale(${sc})`;
      c.style.setProperty('--lp', lp.toFixed(3));
    });

    // Hero fades up and away
    const hp = ease(clamp((p - 0.02) / 0.3));
    hero.style.opacity = (1 - hp).toFixed(3);
    hero.style.transform = `translateY(${-50 * hp}px) scale(${1 - 0.06 * hp})`;
    hero.style.visibility = hp >= 1 ? 'hidden' : '';
    hero.style.pointerEvents = hp > 0.5 ? 'none' : '';

    // Frame chrome fades in as the cards land
    const fp = ease(clamp((p - 0.16) / 0.34));
    frameBg.style.opacity = fp;
    slots.forEach((s) => (s.style.opacity = fp));
    const headP = ease(clamp((p - 0.4) / 0.25));
    frameHead.style.opacity = headP;
    frameHead.style.transform = `translateY(${10 * (1 - headP)}px)`;
    const dp = ease(clamp((p - 0.55) / 0.2));
    dock.style.opacity = dp;
    dock.style.transform = `translate(-50%, ${16 * (1 - dp)}px)`;
    dock.style.pointerEvents = dp > 0.5 ? '' : 'none';
  }

  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(render); }
  };

  let resizeTimer;
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(measure, 120); });
  reduceMotion.addEventListener('change', measure);
  // Re-measure once images/fonts settle (they can change grid sizes slightly)
  addEventListener('load', measure);
  document.fonts?.ready.then(measure);
  measure();

  // ───────── Contact form (no backend yet) ─────────
  const form = document.getElementById('contact-form');
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstBad = null;
    form.querySelectorAll('[required]').forEach((el) => {
      const bad = !el.value.trim() || (el.type === 'email' && !el.checkValidity());
      el.setAttribute('aria-invalid', bad);
      if (bad && !firstBad) firstBad = el;
    });
    if (firstBad) {
      status.className = 'form-status err';
      status.textContent = 'Add your name, email and a message.';
      firstBad.focus();
      return;
    }
    // TODO: static site — post to a form service (e.g. Formspree) here.
    status.className = 'form-status ok';
    status.textContent = 'Thanks, we’ll get back to you.';
    form.reset();
  });
})();
