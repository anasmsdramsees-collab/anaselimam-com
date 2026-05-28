/* ============================================================
   ANAS ELIMAM — Personal Site JS
   Calendly popup widget bootstrap (LEOMAX account).
   ============================================================ */

(function () {
  'use strict';

  var CALENDLY_URL = 'https://calendly.com/leomaxglobalsa/30min';

  function setupCalendlyPopup() {
    // Inject Calendly widget CSS
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // Inject Calendly widget JS
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      var script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Intercept all clicks on Calendly anchors site-wide (event delegation)
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a');
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (href.indexOf('calendly.com') === -1) return;
      e.preventDefault();

      if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        // Calendly script not yet loaded - wait briefly then retry
        var waited = 0;
        var poll = setInterval(function () {
          waited += 100;
          if (window.Calendly && window.Calendly.initPopupWidget) {
            clearInterval(poll);
            window.Calendly.initPopupWidget({ url: CALENDLY_URL });
          } else if (waited > 3000) {
            clearInterval(poll);
            window.open(CALENDLY_URL, '_blank');
          }
        }, 100);
      }
    }, true);

    // Strip target="_blank" so right-click/middle-click also work as links
    function stripTargets() {
      document.querySelectorAll('a[href*="calendly.com"]').forEach(function (a) {
        if (a.getAttribute('target') === '_blank') a.removeAttribute('target');
      });
    }
    stripTargets();

    var mo = new MutationObserver(stripTargets);
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCalendlyPopup);
  } else {
    setupCalendlyPopup();
  }
})();
