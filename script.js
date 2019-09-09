// Парсер картинок

// Написать функцию которая на вход принимает url картинки и возвращает логическое значения.
// Функция должна проверять начитается ли url с "https" и является картинкой,
// то есть имеет одно из расширений:

// .jpg,
// jpeg,
// .tif,
// .tiff,
// .png,
// .gif

function isImageUrlValid(url) {
    const reg = /^https:\/\/\S+?\.(jpg|jpeg|tif|tiff|png|gif)$/;
    return reg.test(url);
};


// Проверка:

console.log(isImageUrlValid('https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042492_01.jpg')); //true
console.log(isImageUrlValid('http://lezvia.com.ua/image/data/photo/otlichit-original-gillette-fusion-lezvia-com-ua-2.jpg')); // false //нет 's' в 'http'
console.log(isImageUrlValid('https://mirpozitiva.ru/uplo ads/posts/2016-08/medium/1472042492_01.jpg')); // false // есть пробел в адресе
console.log(isImageUrlValid('https://zabavnik.club/wp-content/uploads/2018/02/kartinki_png_1_01075113.png')); // true