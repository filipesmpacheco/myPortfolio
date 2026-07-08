/**
 * Page bootstrap: wires the language switch and applies the
 * saved (or browser-detected) language on load.
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  initLanguage();
});
