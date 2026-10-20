/* ============================================================
   لينة عمر الزعلان — Portfolio
   Script: قائمة الجوال، السكرول، العدّادات، الظهور التدريجي
   ============================================================ */

   document.addEventListener('DOMContentLoaded', () => {

    /* ---------- قائمة الجوال ---------- */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
  
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
      });
  
      navMenu.querySelectorAll('.navbar__link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  
    /* ---------- تمييز الرابط النشط في الشريط حسب القسم ---------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');
  
    const setActiveLink = (id) => {
      navLinks.forEach(link => {
        link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
      });
    };
  
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
  
    sections.forEach(section => sectionObserver.observe(section));
  
    /* ---------- زر العودة للأعلى + خلفية الشريط ---------- */
    const scrollTopBtn = document.getElementById('scrollTop');
    const navbar = document.getElementById('navbar');
  
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 400;
      scrollTopBtn?.classList.toggle('visible', scrolled);
      navbar?.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  
    /* ---------- الظهور التدريجي للعناصر عند التمرير ---------- */
    const revealTargets = document.querySelectorAll(
      '.about, .skills, .work, .contact, .skill-card, .project-card, .stat'
    );
    revealTargets.forEach(el => el.classList.add('reveal'));
  
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  
    revealTargets.forEach(el => revealObserver.observe(el));
  
    /* ---------- عدّادات الإحصائيات (Count-up) ---------- */
    const statNumbers = document.querySelectorAll('.stat__num[data-count]');
  
    const animateCount = (el) => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1400;
      const startTime = performance.now();
  
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.round(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
  
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    statNumbers.forEach(el => statsObserver.observe(el));
  
  });