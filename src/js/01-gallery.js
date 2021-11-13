import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");

console.log(galleryItems);
console.log(galleryElement);

// 1. Получаем разметку галаереи и добавляем её в DOM
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join(" ");
}

galleryElement.insertAdjacentHTML(
  "afterbegin",
  createGalleryMarkup(galleryItems)
);

// 2. Вешаем обработчик события на галерею
galleryElement.addEventListener("click", (e) => {
  e.preventDefault();
//   console.log(e.currentTarget, e.target);
  if (e.target.classList.contains("gallery__image")) {
    console.log(e.currentTarget, e.target.dataset.source);

    // 3. Реализуем открытие и закрытие модального окна с помощью библиотеки basicLightbox
    function onEscapeKeyPress(e) {
        if (e.code === "Escape") {
          instance.close(() => window.removeEventListener("keydown", onEscapeKeyPress));
        }
      }

    let instance = basicLightbox
      .create(
        `
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`
      );
      instance.show();
    window.addEventListener("keydown", onEscapeKeyPress);
    // console.log(instance);
    
  }
});




