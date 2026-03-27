'use strict';

/* ============================================================
   filters.js — Reference card filtering for referenciak.html
   Two independent filter axes: type + location.
   A card is visible only when it matches BOTH active filters.
   ============================================================ */

(function initFilters() {
  const grid    = document.getElementById('ref-grid');
  const empty   = document.getElementById('ref-empty');
  if (!grid) return;

  const cards   = Array.from(grid.querySelectorAll('.ref-card'));
  const typeBtns = Array.from(document.querySelectorAll('[data-filter-type]'));
  const locBtns  = Array.from(document.querySelectorAll('[data-filter-location]'));

  let activeType = '*';
  let activeLoc  = '*';

  /* ── Apply current filters to all cards ── */
  function applyFilters() {
    let visible = 0;

    cards.forEach((card) => {
      const typeMatch = activeType === '*' || card.dataset.type     === activeType;
      const locMatch  = activeLoc  === '*' || card.dataset.location === activeLoc;
      const show      = typeMatch && locMatch;

      if (show) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (empty) empty.classList.toggle('visible', visible === 0);
  }

  /* ── Update active button in a group ── */
  function setActive(btns, clicked) {
    btns.forEach((btn) => btn.classList.remove('active'));
    clicked.classList.add('active');
  }

  /* ── Bind type buttons ── */
  typeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeType = btn.dataset.filterType;
      setActive(typeBtns, btn);
      applyFilters();
    });
  });

  /* ── Bind location buttons ── */
  locBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeLoc = btn.dataset.filterLocation;
      setActive(locBtns, btn);
      applyFilters();
    });
  });

  /* ── Initial state ── */
  applyFilters();
}());
