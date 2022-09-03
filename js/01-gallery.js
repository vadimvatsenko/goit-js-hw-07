import { galleryItems } from './gallery-items.js';
// Change code below this line

const getGallery = document.querySelector('.gallery');

const getGalleryItems = galleryItems.map(({ preview, original, description }) => {
    console.log(preview);
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
          </div>`
}).join('');

getGallery.insertAdjacentHTML("afterbegin", getGalleryItems);

getGallery.addEventListener('click', onParentClick);

function onParentClick(evt) {
  // запрет перехода по ссылке
  evt.preventDefault();
  console.log('onParentClick -> evt.target', evt.target);
  // если не равно классу - пропустить
  if (evt.target.className !== 'gallery__image') {
    return;
  }
  // ссылка на текущий data-source
  const ligthBoxShow = basicLightbox.create(`
		<img src = '${evt.target.dataset.source}' alt = '${evt.target.alt}'/>
	`);

  ligthBoxShow.show();

  document.addEventListener("keydown", event => {
  console.log(event.code);//Код клавиатуры
  if (event.code !== 'Escape') {
    return;
  };
  ligthBoxShow.close();
});
};




  


