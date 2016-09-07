(function() {
  var app = {
    // Nav
    'nav': {
      'navToggleEl': document.querySelector('.js-menu-toggle'),
      'navMenuEl': document.querySelector('.js-menu'),
      'navInit': function () {
        app.nav.navToggleEl.addEventListener('click', app.nav.navToggle)
      },
      'navToggle': function () {
          app.nav.navToggleEl.classList.toggle('is-active');
          app.nav.navMenuEl.classList.toggle('is-active');
      }
    },
    // Masonry
    'masonry': {
      'masonryInit': new Masonry( document.querySelector('.o-grid-masonry'), {
        // options
        itemSelector: '.o-grid-masonry__item',
        columnWidth: '.o-grid-masonry__sizer',
        gutter: 20,
        percentPosition: true
      })
    },
    // Init
    'init': function() {
      app.nav.navInit();
    }
  };
  window.app = app;
})();

// Move to inside IIFE at production time !!!
app.init();
