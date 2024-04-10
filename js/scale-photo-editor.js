import {SCALE_STEP} from './const';
import {previewImage} from './upload-photo-form.js';
import {imgUploadOverlay} from './const.js';

const imgUploadContainer = imgUploadOverlay.querySelector('.img-upload__preview-container');
const scaleControl = imgUploadContainer.querySelector('.scale__control--value');
const smallScaleButton = imgUploadContainer.querySelector('.scale__control--smaller');
const bigScaleButton = imgUploadContainer.querySelector('.scale__control--bigger');


let scale = 1;

const onSmallBtnClick = () =>{
  if (scale > SCALE_STEP){
    scale -= SCALE_STEP;
    previewImage.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onBigBtnClick = () =>{
  if (scale < 1){
    scale += SCALE_STEP;
    previewImage.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

export {smallScaleButton,bigScaleButton,onSmallBtnClick,onBigBtnClick};
