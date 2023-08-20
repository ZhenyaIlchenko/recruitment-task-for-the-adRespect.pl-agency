export default function searchToggler() {
  // let toggler = document.querySelector('#search-toggler');
  let search = document.querySelector('#search');

  let toggleSearch = () => {
    search.classList.toggle('active');
  }

  document.addEventListener('click', (event) => {
    if (!event.target.closest('#search-toggler')) return;
    toggleSearch();
  });
}
