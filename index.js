function filterItems(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-buttons .btn');

  // Update Active State
  buttons.forEach((btn) => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Show/Hide Items
  items.forEach((item) => {
    if (category === 'all' || item.classList.contains(category)) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}