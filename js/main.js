
import {createThumbnail} from './thumbnail-template.js';
import {renderListNode} from './utils.js';
import {onCurrentPhotoClick} from './render-big-photo.js';
import {smallScaleButton,bigScaleButton,onSmallBtnClick,onBigBtnClick} from './scale-photo-editor.js';
import {onEffectChange} from './effect-photo-editor.js';
import {getData} from './api.js';
import {imgUploadInput,onUploadInputChange, onUploadFormSubmit} from'./upload-photo-form.js';
import {showErrorMessage} from './data-error.js';
import {configFilter} from './filter-thumbnails.js';
import {imgUploadForm} from './const.js';
import './notification.js';
import './validation-form.js';

const thumbnailsBox = document.querySelector('.pictures');
const effectsList = document.querySelector('.effects__list');
let picturesData;

// Рендер миниатюр и их фильтров
getData.then ((data)=>{
  picturesData = data;
  renderListNode({dataItems:picturesData, createdNote:createThumbnail, container:thumbnailsBox});
  configFilter(picturesData);
}).catch ((error) => {
  showErrorMessage(error.message);
});

// Обработчик который открывает большую фотографию
thumbnailsBox.addEventListener('click', onCurrentPhotoClick);

// Обработчик который загружает фото
imgUploadInput.addEventListener('change', onUploadInputChange);
// Обработчики которые редактируют фото
effectsList.addEventListener ('change',onEffectChange);
smallScaleButton.addEventListener('click', onSmallBtnClick);
bigScaleButton.addEventListener('click', onBigBtnClick);

// Обработчик который отправляет форму
imgUploadForm.addEventListener('submit',onUploadFormSubmit);

export {picturesData, thumbnailsBox};
