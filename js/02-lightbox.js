import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let modal;

gallery.innerHTML = createGallery(galleryItems);
gallery.addEventListener("click", clickGallery);


function clickGallery(e) {
  e.preventDefault();
  createModalWindow(e);
};

function createGallery(items) {
  return items.map(item =>
    `<a class="gallery__item" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        loading="lazy"
        alt="${item.description}"
      />
    </a>`).join("");
};

// < a class="gallery__item" href = "large-image.jpg" >
//     <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a >

function createModalWindow(e) {
  console.log(e.target);
  console.log(e.target.value);
  console.log(e.currentTarget);
  console.log(e.currentTarget.value);
  console.log(e.currentTarget.href);
  console.log(e.target.src);
  const urlImg = e.target.src;

  modal = basicLightbox.create(
    `<div class="backdrop">
            <div class="modal">
                <img
                    src=${urlImg}
                    data-source=${urlImg}
                    loading="lazy"
                    alt="${e.target.alt}"
                    width=100%
                />
            </div>
        </div>`
  );
  modal.show();
  document.querySelector(".modal").addEventListener("click", destroyModalWindows);
  document.querySelector("body").addEventListener("keydown", isKeyPressed);
}
function destroyModalWindows() {
  modal.close();
  document.querySelector(".modal").removeEventListener("click", destroyModalWindows);
  document.querySelector("body").removeEventListener("keydown", isKeyPressed);
}

function isKeyPressed(e) {
  if (e.code === "Escape") {
    modal.close();
    document.querySelector("body").removeEventListener("keydown", isKeyPressed);
  }
}


// Усім зображенням, які необхідно завантажувати відкладено, задаємо клас lazyload і замінюємо атрибут src на data - src.Це необхідно бібліотеці lazysizes для правильної роботи.

//     index.html
//     < img class="lazyload" data - src="path/to/my-image.jpg" alt = "Generic alt" />


// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// < a class="gallery__item" href = "large-image.jpg" >
//     <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a >

//     Виконуй це завдання у файлах 02 - lightbox.html і 02 - lightbox.js.Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
