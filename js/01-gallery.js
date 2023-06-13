import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const ImagesMarkup = createItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", ImagesMarkup);

function createItemsMarkup(item) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  }).join("");
}

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

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
});

