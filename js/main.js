import {picturesData} from './data.js';
import {createThumbnail} from './thumbnails.js';
import {renderListNode} from './utils.js';
import {renderCurrentPhoto} from './big-photo.js';
import './open-close-modal.js';


const thumbnailsBox = document.querySelector('.pictures');

// Выводит все фото случайных пользователей на экран с помощью шаблона
renderListNode({dataItems:picturesData, createdNote:createThumbnail, container:thumbnailsBox});

// Обработчик который открывает большую фотографию
thumbnailsBox.addEventListener('click', renderCurrentPhoto);
