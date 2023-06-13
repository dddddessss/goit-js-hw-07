import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const html = `
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  `;

  galleryItem.insertAdjacentHTML('beforeend', html);

  return galleryItem;
}

function renderGallery() {
  const galleryItemsElements = galleryItems.map(item => createGalleryItem(item));
  gallery.append(...galleryItemsElements);
}

renderGallery();

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
