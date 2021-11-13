import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");

console.log(galleryItems);
console.log(galleryElement);

// 1. Получаем разметку галаереи и добавляем её в DOM
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `;
    })
    .join(" ");
}

galleryElement.insertAdjacentHTML(
  "afterbegin",
  createGalleryMarkup(galleryItems)
);

// 2. Подключаем библиотеку на нашу галерею

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
