// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryItemsEl = document.querySelector('.gallery');

const selectorGallery = (images) => {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery__list"><a class="gallery__item" href=${original}><img class= "gallery__image" src="${preview}" alt="" title="${description}"></a></li>`
    }).join('');
}

const cardImagesMarkup = selectorGallery(galleryItems);

galleryItemsEl.insertAdjacentHTML("afterbegin", cardImagesMarkup);

galleryItemsEl.addEventListener('click', selectGalleryEl);


const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

function selectGalleryEl(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    lightbox;
}

console.log(galleryItems);