import {picturesData} from './data.js';
import {createThumbnail} from './thumbnails.js';
import {renderListNode} from './utils.js';
import {renderCurrentPhoto} from './big-photo.js';
import './upload-photo-form.js';
import {onSmallerClick,onBiggerClick} from './scale-photo-editor.js';

import {onEffectChange} from './effect-photo-editor.js';


const thumbnailsBox = document.querySelector('.pictures');
const effectsList = document.querySelector('.effects__list');
const imgUploadContainer = document.querySelector('.img-upload__preview-container');
const smallScaleButton = imgUploadContainer.querySelector('.scale__control--smaller');
const bigScaleButton = imgUploadContainer.querySelector('.scale__control--bigger');


// Выводит все фото случайных пользователей на экран с помощью шаблона
renderListNode({dataItems:picturesData, createdNote:createThumbnail, container:thumbnailsBox});

// Обработчик который открывает большую фотографию
thumbnailsBox.addEventListener('click', renderCurrentPhoto);

effectsList.addEventListener ('change',onEffectChange);

smallScaleButton.addEventListener('click',onSmallerClick);
bigScaleButton.addEventListener('click',onBiggerClick);
