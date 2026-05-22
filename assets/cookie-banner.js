/* Cookie consent banner — site: hahamcredit.com (editorial pink magazine)
 * Privacy: /privacy-policy/ · localStorage: cookies_accepted_v1
 */
(function () {
  if (typeof window === 'undefined') return;
  try { if (localStorage.getItem('cookies_accepted_v1') === '1') return; } catch (e) {}
  if (!document.body) return;

  var PRIVACY_URL = '/privacy-policy/';

  var css = '' +
    '.cc-banner{position:fixed;left:14px;right:14px;bottom:14px;z-index:9999;' +
    'background:#FFFFFF;color:#1F0B2A;' +
    'padding:14px 20px;border-radius:0;border:2px solid #1F0B2A;' +
    'box-shadow:6px 6px 0 #FF1493;' +
    'display:flex;align-items:center;gap:14px;flex-wrap:wrap;' +
    'font-family:Bellefair,"David Libre",Heebo,serif;' +
    'font-size:14.5px;line-height:1.55;direction:rtl;max-width:980px;margin:0 auto;' +
    'animation:ccUp .4s cubic-bezier(.22,1,.36,1) both;font-weight:400}' +
    '@keyframes ccUp{from{transform:translate(6px,6px);opacity:0}to{transform:translate(0,0);opacity:1}}' +
    '.cc-banner .cc-text{flex:1 1 280px;color:#4A2843;min-width:0;font-family:Heebo,system-ui,sans-serif;font-size:13.5px}' +
    '.cc-banner .cc-text a{color:#A00A60;text-decoration:underline;text-underline-offset:2px;font-weight:600;transition:color .15s}' +
    '.cc-banner .cc-text a:hover{color:#FF1493}' +
    '.cc-banner .cc-accept{flex-shrink:0;padding:13px 26px;background:#1F0B2A;color:#FFE9F3;' +
    'border:0;border-radius:0;font-family:Bellefair,serif;font-weight:400;font-size:17px;' +
    'cursor:pointer;transition:all .2s ease;white-space:nowrap;' +
    'letter-spacing:0;position:relative}' +
    '.cc-banner .cc-accept::after{content:"";position:absolute;inset:4px;border:1px solid #FFE9F3;opacity:.35;pointer-events:none;transition:opacity .2s ease}' +
    '.cc-banner .cc-accept:hover{background:#FF1493;color:#FFFFFF}' +
    '.cc-banner .cc-accept:hover::after{opacity:.6}' +
    '@media(max-width:560px){.cc-banner{padding:12px 16px;font-size:13.5px;gap:10px;left:8px;right:8px;bottom:8px;box-shadow:4px 4px 0 #FF1493}' +
    '.cc-banner .cc-text{font-size:12.5px}' +
    '.cc-banner .cc-accept{width:100%;padding:12px;font-size:16px}}';

  css += '.cc-banner{left:0!important;right:0!important;bottom:0!important;top:auto!important;margin:0!important;max-width:none!important;border-radius:0!important;border-width:0!important;padding:8px 14px!important;gap:10px!important;font-size:12.5px!important;line-height:1.4!important;flex-wrap:nowrap!important;align-items:center!important;box-shadow:0 -2px 12px rgba(0,0,0,.18)!important}.cc-banner::before{display:none!important}.cc-banner::after{display:none!important}.cc-banner .cc-text{padding-top:0!important;font-size:12px!important;line-height:1.4!important;flex:1 1 auto!important;min-width:0!important;overflow:hidden!important;text-overflow:ellipsis!important;display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important}.cc-banner .cc-accept{padding:7px 18px!important;font-size:13px!important;border-radius:6px!important;clip-path:none!important;font-style:normal!important;letter-spacing:0!important;width:auto!important;min-width:0!important;white-space:nowrap!important;transform:none!important}@media(max-width:640px){.cc-banner{padding:7px 10px!important;font-size:11.5px!important;gap:8px!important;flex-wrap:wrap!important}.cc-banner .cc-text{flex:1 1 100%!important;font-size:11.5px!important;-webkit-line-clamp:3!important}.cc-banner .cc-accept{width:auto!important;padding:7px 16px!important;font-size:12.5px!important;flex:0 0 auto!important;align-self:flex-end!important}}'; /* YMEDIA-SLIM-OVERRIDE v1 */


  var style = document.createElement('style');
  style.setAttribute('data-cc', '');
  style.textContent = css;
  document.head.appendChild(style);

  var b = document.createElement('div');
  b.className = 'cc-banner';
  b.setAttribute('role', 'dialog');
  b.setAttribute('aria-label', 'הודעת עוגיות');
  b.innerHTML =
    '<div class="cc-text">אנו משתמשים בעוגיות לשיפור חוויית הגלישה בהתאם לחוק הגנת הפרטיות בישראל. ' +
    'בלחיצה על "אני מאשר/ת" אתה מסכים לשימוש בעוגיות. ' +
    '<a href="' + PRIVACY_URL + '">מדיניות פרטיות &raquo;</a></div>' +
    '<button type="button" class="cc-accept">אני מאשר/ת</button>';
  document.body.appendChild(b);

  // YMEDIA-SLIM-OVERRIDE v1 — reserve viewport bottom-padding for the banner
  var __ymPad = function(){ try { document.body.style.paddingBottom = (b.offsetHeight + 4) + 'px'; } catch(e){} };
  __ymPad();
  if (window.ResizeObserver) { try { new ResizeObserver(__ymPad).observe(b); } catch(e){} }
  window.addEventListener('resize', __ymPad);


  b.querySelector('.cc-accept').addEventListener('click', function () {
    try { document.body.style.paddingBottom = ''; } catch (e) {}
    try { localStorage.setItem('cookies_accepted_v1', '1'); } catch (e) {}
    b.style.transition = 'transform .3s, opacity .3s';
    b.style.transform = 'translate(6px,6px)';
    b.style.opacity = '0';
    setTimeout(function () { b.remove(); style.remove(); }, 320);
  });
})();
