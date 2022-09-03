import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const getGallery = document.querySelector('.gallery');

const getGalleryItems = galleryItems.map(({ preview, original, description }) => {
    console.log(preview);
    return `<a class="gallery__item"  href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
                />
          </a>`
}).join('');

getGallery.insertAdjacentHTML("afterbegin", getGalleryItems);


let lightbox = new SimpleLightbox('.gallery .gallery__item', {
    heightRatio: 0.8,

});