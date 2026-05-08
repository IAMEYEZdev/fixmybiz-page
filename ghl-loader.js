/**
 * Fix My Biz — GHL Auto-Loader
 * Paste this ONE line in GHL Custom Code:
 * <script src="https://iameyezdev.github.io/fixmybiz-page/ghl-loader.js"></script>
 */
(function() {
  // Create iframe
  var iframe = document.createElement('iframe');
  iframe.id = 'fixmybiz-frame';
  iframe.src = 'https://iameyezdev.github.io/fixmybiz-page/';
  iframe.style.cssText = 'width:100%;border:none;overflow:hidden;min-height:100vh;display:block;';
  iframe.setAttribute('scrolling', 'no');

  // Insert iframe where the script tag is
  var scripts = document.getElementsByTagName('script');
  var currentScript = scripts[scripts.length - 1];
  currentScript.parentNode.insertBefore(iframe, currentScript);

  // Listen for height messages from the page
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'fixmybiz-height') {
      iframe.style.height = e.data.height + 'px';
    }
  });

  // Remove GHL container padding that causes white edges
  var style = document.createElement('style');
  style.textContent = '.hl_page-preview--content,.container-width{max-width:100%!important;padding:0!important;}';
  document.head.appendChild(style);
})();
