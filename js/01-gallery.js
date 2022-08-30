import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
let modal = null;

gallery.innerHTML = createGallery(galleryItems);
gallery.addEventListener("click", clickGallery);

function clickGallery(e) {
    e.preventDefault();
    createModalWindow(e);
};

function createGallery(items) {
    return items.reduce((acc, item) =>
        acc += `<div class="gallery__item">
                    <a class="gallery__link" href=${item.original}> 
                        <img
                            class="gallery__image"
                            src=${item.preview}
                            data-source=${item.original}
                            alt="${item.description}"
                        />
                    </a>
                </div>`, "");
};

function createModalWindow(e) {
    const urlImg = e.target.dataset.source;

    modal = basicLightbox.create(
        `<div class="backdrop">
            <div class="modal">
                <img
                    src=${urlImg}
                    data-source=${urlImg}
                    alt="${e.target.alt}"
                />
            </div>
        </div>`, {
        onShow: () => {
            modal.element().onclick = modal.close;
            document.addEventListener("keydown", isKeyPressed);
        },
        onClose: () => {
            document.removeEventListener("keydown", isKeyPressed);
        }
    });
    modal.show();
}

function isKeyPressed(e) {
    if (e.code === "Escape") {
        modal.close();
        document.removeEventListener("keydown", isKeyPressed);
    }
}


// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01 - gallery.html і 01 - gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >, і вказуватися в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// < div class="gallery__item" >
//     <a class="gallery__link" href="large-image.jpg">
//         <img
//             class="gallery__image"
//             src="small-image.jpg"
//             data-source="large-image.jpg"
//             alt="Image description"
//         />
//     </a>
// </div >

//     Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// Додай закриття модального вікна після натискання клавіші Escape.Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна