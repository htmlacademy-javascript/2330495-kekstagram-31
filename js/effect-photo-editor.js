import {previewImage} from './upload-form';
import {imgUploadOverlay} from './upload-form';

const effectLevelValue = imgUploadOverlay.querySelector('.effect-level__value');
const effectLevel = imgUploadOverlay.querySelector('.img-upload__effect-level');
const slider = imgUploadOverlay.querySelector('.effect-level__slider');

noUiSlider.create(slider, {
  start: 0,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1
  },
  format: {
    to: (value) => Number.isInteger(value)
      ? value.toFixed(0)
      : value.toFixed(1),
    from: (value) => parseFloat(value)
  }
});

slider.noUiSlider.on('update', () =>{
  effectLevelValue.value = slider.noUiSlider.get();
});

effectLevel.classList.add('hidden');

const onEffectChange = (evt) => {
  const effect = evt.target.value;

  if (effect === 'none'){
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }

  switch (effect){
    case 'none':
      previewImage.style.filter = 'none';
      break;
    case 'chrome':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        // с чего начинать и какой шаг
        start: 100,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () =>{
        previewImage.style.filter = `grayscale(${effectLevelValue.value})`;
      });
      break;
    case 'sepia':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 100,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () =>{
        previewImage.style.filter = `sepia(${effectLevelValue.value})`;
      });
      break;
    case 'marvin':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      slider.noUiSlider.on('update', () =>{
        previewImage.style.filter = `invert(${effectLevelValue.value}%)`;
      });
      break;
    case 'phobos':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () =>{
        previewImage.style.filter = `blur(${effectLevelValue.value}px)`;
      });
      break;
    case 'heat':
      slider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () =>{
        previewImage.style.filter = `brightness(${effectLevelValue.value})`;
      });
  }
};

export {onEffectChange};

