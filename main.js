// Hero tabs (Power BI / SQL / Python)
document.querySelectorAll('.tabs button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tabs button').forEach(function (b) { b.setAttribute('aria-selected', b === btn); });
    document.querySelectorAll('.panel').forEach(function (p) { p.hidden = p.id !== btn.dataset.panel; });
  });
});
// Footer year
document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
