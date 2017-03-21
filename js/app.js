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
      }
    },
    // Retinajs
    'retinajs': {
      'retinajsReset': function () {
        var retinaImgs = document.querySelectorAll('[data-rjs]');

        for (var i = 0; i < retinaImgs.length; i++) {
          retinaImgs[i].removeAttribute('width');
          retinaImgs[i].removeAttribute('height');
        }
      }
    },
    // Init
    'init': function() {
      // Nav
      app.nav.navInit();

      // Retinajs
      setTimeout(function() {
        console.log('timeout');
        app.retinajs.retinajsReset();
      }, 250);

      window.addEventListener('resize', app.retinajs.retinajsReset);

      // If Masonry exists on the page, initialize
      if (null != app.masonry.masonryGridEl) {
        app.masonry.masonryInit();
      }

    }
  };
  window.app = app;
})();

// Move to inside IIFE at production time !!!
app.init();
