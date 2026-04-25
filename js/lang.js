(function () {
  'use strict';

  var currentLang = localStorage.getItem('portfolio-lang') || 'ru';
  var ruSpans = document.querySelectorAll('[data-ru]');
  var enSpans = document.querySelectorAll('[data-en]');
  var langBtns = document.querySelectorAll('.lang-btn');

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    ruSpans.forEach(function (el) {
      el.classList.toggle('hidden', lang !== 'ru');
      if (lang === 'ru') el.textContent = el.getAttribute('data-ru');
    });

    enSpans.forEach(function (el) {
      el.classList.toggle('hidden', lang !== 'en');
      if (lang === 'en') el.textContent = el.getAttribute('data-en');
    });

    langBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  // Initialize with default language text content
  applyLang(currentLang);

  // Listen for button clicks
  langBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        applyLang(lang);
      }
    });
  });
})();
