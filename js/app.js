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
      'masonryGridEl': document.querySelector('.o-grid-masonry'),
      'masonryInit': function() {
        var masonry = new Masonry( app.masonry.masonryGridEl, {
          // options
          columnWidth: '.o-grid-masonry__sizer',
          itemSelector: '.o-grid-masonry__item',
          gutter: '.o-grid-masonry__gutter-sizer',
          percentPosition: true,
          stagger: 50,
          transitionDuration: 300
        })

        imagesLoaded(app.masonry.masonryGridEl).on('progress', function() {
          // layout Masonry after each image loads
          masonry.layout();
        });
      },
      'imageLoader': function() {

      }
    },
    // Init
    'init': function() {
      // Initialize nav binding
      app.nav.navInit();

      // If Masonry exists on the page, Initialize
      if (null != app.masonry.masonryGridEl) {
        app.masonry.masonryInit();
      }

    }
  };
  window.app = app;
})();

// Move to inside IIFE at production time !!!
app.init();
