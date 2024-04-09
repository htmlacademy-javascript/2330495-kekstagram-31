import {previewImage} from './upload-form';
import {imgUploadOverlay} from './const.js';

const effectLevelValue = imgUploadOverlay.querySelector('.effect-level__value');
const effectLevel = imgUploadOverlay.querySelector('.img-upload__effect-level');
const slider = imgUploadOverlay.querySelector('.effect-level__slider');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value)
      ? value.toFixed(0)
      : value.toFixed(1),
    from: (value) => parseFloat(value)
  }
});

const updateSliderOptions = ({min, max, start, step, filterName, unit}) =>{
  slider.noUiSlider.updateOptions ({
    range: { min,max},
    start,
    step,
  });
  slider.noUiSlider.on('update', (values, handle) =>{
    effectLevelValue.value = values[handle];
    effectLevelValue.min = min;
    effectLevelValue.max = max;
    effectLevelValue.step = step;
    previewImage.style.filter = `${filterName}(${effectLevelValue.value}${unit})`;
  });
};

effectLevel.classList.add('hidden');

const clearFilter = () => {
  effectLevelValue.value = '';
  effectLevel.classList.add('hidden');
  previewImage.style.filter = '';
};

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
      updateSliderOptions({min: 0, max: 1, start: 1, step: 0.1, filterName:'grayscale', unit:''});
      break;
    case 'sepia':
      updateSliderOptions({min: 0, max: 1, start: 1, step: 0.1, filterName:'sepia', unit:''});
      break;
    case 'marvin':
      updateSliderOptions({min: 0, max: 100, start: 100, step: 1, filterName:'invert', unit:'%'});
      break;
    case 'phobos':
      updateSliderOptions({min: 0, max: 3, start: 3, step: 0.1, filterName:'blur', unit:'px'});
      break;
    case 'heat':
      updateSliderOptions({min: 1, max: 3, start: 3, step: 0.1, filterName:'brightness', unit:''});
      break;
    default:clearFilter();
  }
};

export {onEffectChange,clearFilter};

