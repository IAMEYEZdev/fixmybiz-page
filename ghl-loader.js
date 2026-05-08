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

  // Remove GHL container padding and hide empty sections that cause white gaps
  var style = document.createElement('style');
  style.textContent = [
    '.hl_page-preview--content,.container-width{max-width:100%!important;padding:0!important;}',
    // Hide all GHL native sections — only the iframe should be visible
    '#preview-container .section:not(:has(#fixmybiz-frame)){display:none!important;}',
    '.inner-section:empty{display:none!important;}',
    // Nuclear option: hide everything except our iframe
    '#fixmybiz-frame{position:relative;z-index:10;}',
    '.hl_page-creator--content>div:not(:has(#fixmybiz-frame)):not(.hl_page-creator--row:has(#fixmybiz-frame)){display:none!important;}'
  ].join('');
  document.head.appendChild(style);

  // Also directly hide any previous siblings (empty GHL sections)
  var parent = iframe.parentNode;
  var sibling = iframe.previousSibling;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling.id !== 'fixmybiz-frame') {
      sibling.style.display = 'none';
    }
    sibling = sibling.previousSibling;
  }
})();
