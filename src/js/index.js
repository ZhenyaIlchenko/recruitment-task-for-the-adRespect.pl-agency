import Carousel from "bootstrap/js/dist/carousel";
import Dropdown from "bootstrap/js/dist/dropdown";
import Collapse from "bootstrap/js/dist/collapse";
import searchToggler from "./search-togler";

searchToggler();

import SimpleLightbox from "simplelightbox";
let lightbox = new SimpleLightbox('.gallery a');

import Masonry from 'masonry-layout';

var msnry = new Masonry( '.masonry', {
  itemSelector: '.masonry-item',
  columnWidth: '.masonry-item',
  percentPosition: true,
  gutter: '.masonry-gutter',
  horizontalOrder: true
});

let masonryGrid = document.querySelector('#masonry');
let masonryMore = document.querySelector('#masonry-more');
let masonryMoreItems = document.querySelectorAll('.masonry-item-more');

let showMasonryMoreItems = () => {
  masonryMoreItems.forEach((item) => {
    item.classList.remove('masonry-item-more');
  });
  masonryMore.style.display = 'none';
  masonryGrid.classList.remove('masonry-overlay');
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('#masonry-more')) return;
  showMasonryMoreItems();
  msnry.layout();
})
