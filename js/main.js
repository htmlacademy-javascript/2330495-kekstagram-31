import {photosData} from './data.js';
import {MAX_PHOTOS} from './const.js';
import {createThumbnail} from './thumbnails.js';
import {renderPack} from './utils.js';

// Генерит случайные фотографии
const photos = photosData(MAX_PHOTOS);

// Находит контейнер для фото и выводит все фото на экран
const photosBox = document.querySelector('.pictures');

renderPack (photos, createThumbnail, photosBox);
