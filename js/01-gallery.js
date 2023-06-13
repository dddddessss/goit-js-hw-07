import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.setAttribute('data-source', item.original);
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function renderGallery() {
  const galleryItemsElements = galleryItems.map(item => createGalleryItem(item));
  gallery.append(...galleryItemsElements);
}

renderGallery();

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`, {
    onShow: instance => {
      document.addEventListener('keydown', handleKeyDown);
    },
    onClose: instance => {
      document.removeEventListener('keydown', handleKeyDown);
    },
  });

  instance.show();
});

function handleKeyDown(event) {
  if (event.code === 'Escape') {
    basicLightbox.close();
  }
}
console.log(galleryItems);