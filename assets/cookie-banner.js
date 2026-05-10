/* Cookie consent banner — site: hahamcredit.com (smart-AI neon magenta)
 * Privacy: /privacy-policy/ · localStorage: cookies_accepted_v1
 */
(function () {
  if (typeof window === 'undefined') return;
  try { if (localStorage.getItem('cookies_accepted_v1') === '1') return; } catch (e) {}
  if (!document.body) return;

  var PRIVACY_URL = '/privacy-policy/';

  var css = '' +
    '.cc-banner{position:fixed;left:14px;right:14px;bottom:14px;z-index:9999;' +
    'background:#16162A;color:#E6E8EE;' +
    'padding:14px 18px;border-radius:8px;border:1px solid rgba(255,255,255,.14);' +
    'box-shadow:0 0 0 1px rgba(255,20,147,.18),0 22px 50px -12px rgba(0,0,0,.6),0 0 60px -16px rgba(255,20,147,.4);' +
    'display:flex;align-items:center;gap:14px;flex-wrap:wrap;' +
    'font-family:Heebo,system-ui,sans-serif;' +
    'font-size:13.5px;line-height:1.55;direction:rtl;max-width:980px;margin:0 auto;' +
    'animation:ccUp .35s cubic-bezier(.22,1,.36,1) both;font-weight:400;overflow:hidden}' +
    '.cc-banner::before{content:"";position:absolute;top:-1px;left:24px;right:24px;height:2px;' +
    'background:linear-gradient(90deg,transparent 0%,#FF1493 50%,transparent 100%);' +
    'box-shadow:0 0 12px rgba(255,20,147,.55)}' +
    '.cc-banner::after{content:"";position:absolute;top:8px;right:8px;width:12px;height:12px;' +
    'border:1px solid #FF1493;border-bottom:0;border-left:0;opacity:.8}' +
    '@keyframes ccUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}' +
    '.cc-banner .cc-text{flex:1 1 280px;color:#C4C7D6;min-width:0}' +
    '.cc-banner .cc-text a{color:#FF4DAB;text-decoration:underline;text-underline-offset:3px;' +
    'text-decoration-color:rgba(255,20,147,.45);font-weight:600;transition:all .15s}' +
    '.cc-banner .cc-text a:hover{color:#FF1493;text-decoration-color:#FF1493}' +
    '.cc-banner .cc-accept{flex-shrink:0;padding:11px 24px;background:#FF1493;color:#0A0A12;' +
    'border:0;border-radius:6px;font-family:Heebo,inherit;font-weight:800;font-size:14px;' +
    'cursor:pointer;transition:all .2s cubic-bezier(.22,1,.36,1);white-space:nowrap;' +
    'box-shadow:0 0 0 1px #FF1493,0 8px 22px -4px rgba(255,20,147,.55),0 0 24px -8px rgba(255,20,147,.45);' +
    'letter-spacing:.01em;position:relative}' +
    '.cc-banner .cc-accept:hover{background:#D10E76;color:#FFFFFF;transform:translateY(-1px);' +
    'box-shadow:0 0 0 1px #FF4DAB,0 12px 32px -4px rgba(255,20,147,.7),0 0 40px -10px rgba(255,20,147,.55)}' +
    '@media(max-width:560px){.cc-banner{padding:12px 14px;font-size:12.5px;gap:10px;left:8px;right:8px;bottom:8px}' +
    '.cc-banner .cc-accept{width:100%;padding:11px}}';

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

  b.querySelector('.cc-accept').addEventListener('click', function () {
    try { localStorage.setItem('cookies_accepted_v1', '1'); } catch (e) {}
    b.style.transition = 'transform .3s, opacity .3s';
    b.style.transform = 'translateY(20px)';
    b.style.opacity = '0';
    setTimeout(function () { b.remove(); style.remove(); }, 320);
  });
})();
