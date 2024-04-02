import {SCALE_STEP} from './const';

const imgUploadComtainer = document.querySelector('.img-upload__preview-container');
const image = imgUploadComtainer.querySelector('.img-upload__preview img');
const scaleControl = imgUploadComtainer.querySelector('.scale__control--value');

let scale = 1;


const onSmallerClick = () =>{
  //проверка на то что картинка не станет меньше шага
  if (scale > SCALE_STEP){
    scale -= SCALE_STEP;
    image.style.transform = `scale(${scale})`;
    //запись в велью получаем проценты
    scaleControl.value = `${scale * 100}%`;
  }
};

const onBiggerClick = () =>{
  if (scale < 1){
    scale += SCALE_STEP;
    image.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

export {onSmallerClick,onBiggerClick};
