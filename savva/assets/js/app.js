/* =========================================================
   SAVVA — логика сайта
   1) переключение языков EN/AR + RTL
   2) мобильное меню
   3) меню с вкладками
   4) галерея, часы, ссылки
   5) форма и мелкая анимация
   ========================================================= */
(function () {
  'use strict';

  var STORAGE_KEY = 'savva-lang';
  var lang = 'en';
  var currentCat = 'espresso';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var t  = function (key) { return (I18N[lang] && I18N[lang][key]) || key; };

  /* ---------- 1. Язык ---------- */
  function detectLang() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
    if (saved === 'en' || saved === 'ar') return saved;
    var p = new URLSearchParams(location.search).get('lang');
    if (p === 'ar' || p === 'en') return p;
    return (navigator.language || '').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
  }

  function applyLang(next) {
    lang = next;
    var pack = I18N[lang];
    document.documentElement.lang = pack.htmlLang;
    document.documentElement.dir  = pack.dir;
    document.title = pack['meta.title'];

    $$('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });

    $('#langLabel').textContent = pack.langName;
    $('#langBtn').setAttribute('aria-label', t('a11y.toggleLang'));
    $('#burger').setAttribute('aria-label', t('a11y.toggleMenu'));

    renderHours();
    renderMenu();
    renderGallery();

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  /* ---------- 2. Мобильное меню ---------- */
  function initNav() {
    var burger = $('#burger'), nav = $('#nav');
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

    var header = $('#header');
    var onScroll = function () { header.classList.toggle('is-stuck', window.scrollY > 10); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // подсветка активного раздела
    var links = $$('.nav a');
    var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
    if ('IntersectionObserver' in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a, i) { a.classList.toggle('is-active', sections[i] === en.target); });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(function (s) { if (s) spy.observe(s); });
    }
  }

  /* ---------- 3. Меню ---------- */
  function renderMenu() {
    var tabs = $('#menuTabs'), grid = $('#menuGrid');
    if (!SITE.menuCategories.some(function (c) { return c.id === currentCat; })) {
      currentCat = SITE.menuCategories[0].id;
    }

    tabs.innerHTML = '';
    SITE.menuCategories.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tab' + (c.id === currentCat ? ' is-active' : '');
      b.textContent = c[lang];
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(c.id === currentCat));
      b.addEventListener('click', function () { currentCat = c.id; renderMenu(); });
      tabs.appendChild(b);
    });

    grid.innerHTML = '';
    SITE.menu.filter(function (m) { return m.cat === currentCat; }).forEach(function (m, i) {
      var art = document.createElement('article');
      art.className = 'card';
      art.style.animationDelay = (i * 45) + 'ms';

      var tag = m.tag ? '<span class="card__tag">' + t('menu.' + m.tag) + '</span>' : '';
      var price = (SITE.showPrices && m.price)
        ? '<span class="card__price">' + m.price + ' ' + (lang === 'ar' ? 'ر.س' : 'SAR') + '</span>'
        : '';

      art.innerHTML =
        '<div class="card__media">' + tag +
          '<img src="assets/img/' + m.img + '" alt="" loading="lazy" width="800" height="600">' +
        '</div>' +
        '<div class="card__body">' +
          '<div class="card__top"><h3 class="card__name"></h3>' + price + '</div>' +
          '<p class="card__desc"></p>' +
        '</div>';
      art.querySelector('.card__name').textContent = m[lang].n;
      art.querySelector('.card__desc').textContent = m[lang].d;
      grid.appendChild(art);
    });
  }

  /* ---------- 4. Галерея, часы, ссылки ---------- */
  function renderGallery() {
    var g = $('#galleryGrid');
    g.innerHTML = '';
    SITE.gallery.forEach(function (item) {
      var fig = document.createElement('figure');
      fig.className = 'gal';
      fig.innerHTML = '<img src="assets/img/' + item.img + '" alt="" loading="lazy" width="800" height="600"><figcaption></figcaption>';
      fig.querySelector('figcaption').textContent = item[lang];
      g.appendChild(fig);
    });
  }

  function renderHours() {
    var ul = $('#hoursList');
    ul.innerHTML = '';
    SITE.hours.forEach(function (h) {
      var li = document.createElement('li');
      var d = document.createElement('span'); d.textContent = h[lang];
      var v = document.createElement('span'); v.textContent = h.time; v.dir = 'ltr';
      li.appendChild(d); li.appendChild(v);
      ul.appendChild(li);
    });
  }

  function initLinks() {
    ['#headerMap', '#heroMap', '#visitMap', '#mapCard'].forEach(function (sel) {
      var el = $(sel); if (el) el.href = SITE.info.mapsUrl;
    });
    var ph = $('#phoneLink');
    ph.href = SITE.info.phoneHref;
    ph.textContent = SITE.info.phone; ph.dir = 'ltr';
    $('#igLink').href = SITE.info.instagram;
    var lt = $('#ltLink'); if (lt) lt.href = SITE.info.linktree;
    var ltb = $('#linktreeBtn'); if (ltb) ltb.href = SITE.info.linktree;
    var ct = $('#coordsText'); ct.textContent = SITE.info.coords; ct.dir = 'ltr';
    $('#year').textContent = new Date().getFullYear();

    $('#copyCoords').addEventListener('click', function (e) {
      var btn = e.currentTarget;
      var done = function () {
        btn.textContent = t('visit.copied');
        setTimeout(function () { btn.textContent = t('visit.copy'); }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(SITE.info.coords).then(done, done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = SITE.info.coords; document.body.appendChild(ta);
        ta.select(); try { document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(ta); done();
      }
    });
  }

  /* ---------- 5. Форма и анимация ---------- */
  function initForm() {
    var form = $('#contactForm'), status = $('#formStatus');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#fName').value.trim(), contact = $('#fContact').value.trim();
      if (!name || !contact) {
        status.textContent = t('contact.err');
        status.classList.add('is-error');
        return;
      }
      status.classList.remove('is-error');
      status.textContent = t('contact.sent');
      form.reset();
      // TODO: здесь можно подключить отправку на почту / WhatsApp / Formspree.
    });
  }

  function initReveal() {
    var items = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Старт ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initLinks();
    initForm();
    initReveal();
    applyLang(detectLang());
    $('#langBtn').addEventListener('click', function () {
      applyLang(lang === 'en' ? 'ar' : 'en');
    });
  });
})();
