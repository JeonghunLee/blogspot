// === Jeonghun external JS (vanilla) — 2025-09-02 ===
document.addEventListener('DOMContentLoaded', () => {
  // Collapsible sections: BlogArchive, Label1, PopularPosts
  const groups = [
    { selector: '.BlogArchive h2', contentSel: ':scope > .widget-content' },
    { selector: '#Label1 h2',      contentSel: ':scope > .widget-content' },
    { selector: '.PopularPosts h2',contentSel: ':scope > .widget-content' },
  ];
  groups.forEach(g => {
    document.querySelectorAll(g.selector).forEach(h2 => {
      h2.style.cursor = 'pointer';
      h2.addEventListener('click', (e) => {
        e.preventDefault();
        const box = h2.parentElement.querySelector(g.contentSel);
        if (!box) return;
        const shown = getComputedStyle(box).display !== 'none';
        box.style.display = shown ? 'none' : '';
      });
    });
  });

  // Localization: replace Korean '웹/모바일 버전 보기' text
  document.querySelectorAll('a').forEach(a => {
    const t = a.textContent.trim();
    if (t.includes('웹 버전 보기'))    a.textContent = 'View Web(PC)';
    if (t.includes('모바일 버전 보기')) a.textContent = 'View Mobile';
  });
});
