
import {createThumbnail} from './thumbnails.js';
import {renderListNode} from './utils.js';
import {renderCurrentPhoto} from './render-big-photo.js';
import './validation-form.js';
import {smallScaleButton,bigScaleButton,onSmallBtnClick,onBigBtnClick} from './scale-photo-editor.js';
import {onEffectChange} from './effect-photo-editor.js';
import {getData} from './api.js';
import {imgUploadInput,handleFileInputChange} from'./upload-form.js';
import {showErrorMessage} from './data-error.js';
import {configFilter} from './filter.js';
import './loading-modul.js';

const thumbnailsBox = document.querySelector('.pictures');
const effectsList = document.querySelector('.effects__list');
let picturesData;

getData.then ((data)=>{
  picturesData = data;
  renderListNode({dataItems:picturesData, createdNote:createThumbnail, container:thumbnailsBox});
  configFilter(picturesData);
}).catch ((error) => {
  showErrorMessage(error.message);
});

// Обработчик который открывает большую фотографию
thumbnailsBox.addEventListener('click', renderCurrentPhoto);

effectsList.addEventListener ('change',onEffectChange);

smallScaleButton.addEventListener('click', onSmallBtnClick);
bigScaleButton.addEventListener('click', onBigBtnClick);

imgUploadInput.addEventListener('change', handleFileInputChange);

export {picturesData, thumbnailsBox};
