
import {createThumbnail} from './thumbnail-template.js';
import {renderListNode} from './utils.js';
import {onCurrentPhotoClick} from './render-big-photo.js';
import {smallScaleButton,bigScaleButton,onSmallBtnClick,onBigBtnClick} from './scale-photo-editor.js';
import {changePhotoEffect} from './effect-photo-editor.js';
import {getData} from './api.js';
import {imgUploadInput, uploadImgFile, uploadPhoto} from'./upload-photo-form.js';
import {showErrorMessage} from './data-error.js';
import {showFilteredPhotos} from './filter-thumbnails.js';
import {imgUploadForm, thumbnailsBox, effectsList} from './const.js';

let picturesData;

getData.then ((data)=>{
  picturesData = data;
  renderListNode({dataItems:picturesData, createdNote:createThumbnail, container:thumbnailsBox});
  showFilteredPhotos(picturesData);
}).catch ((error) => {
  showErrorMessage(error.message);
});

thumbnailsBox.addEventListener('click', onCurrentPhotoClick);

imgUploadInput.addEventListener('change', uploadImgFile);
effectsList.addEventListener ('change', changePhotoEffect);
smallScaleButton.addEventListener('click', onSmallBtnClick);
bigScaleButton.addEventListener('click', onBigBtnClick);

imgUploadForm.addEventListener('submit', uploadPhoto);

export {picturesData, thumbnailsBox};
