function filtrar(categoria) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (categoria === 'todos') {
      card.style.display = 'block';
    } else {
      if (card.classList.contains(categoria)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}
