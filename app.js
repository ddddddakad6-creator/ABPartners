// Minimal interactions for the replicated layout
(() => {
  const nav = document.querySelector('.m_navigation');
  const toggle = document.querySelector('.btn_navigationToggle');
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });

    // close nav on click (mobile)
    nav.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  // FAQ accordion: click question to toggle answer
  document.querySelectorAll('.m_faq .faq_item').forEach(item => {
    const q = item.querySelector('.faq_q');
    if (!q) return;
    item.classList.add('is-collapsed');
    q.addEventListener('click', () => item.classList.toggle('is-collapsed'));
  });
})();
