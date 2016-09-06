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
    // Init
    'init': function() {
      app.nav.navInit();
    }
  };
  window.app = app;
})();

// Move to inside IIFE at production time !!!
app.init();
