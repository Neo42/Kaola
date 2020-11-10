const popup = document.querySelector('.search-popup');
popup.style.height = `${window.screen.height}px`;

document.querySelector('header .search-bar')
  .addEventListener('click',
    () => popup.classList.toggle('hidden'));

document.querySelector('.back-icon')
  .addEventListener('click', () => popup.classList.toggle('hidden'));
