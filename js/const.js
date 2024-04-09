
const SCALE_STEP = 0.25;
const COMMENTS_STEP = 5;
const REMOVE_MESSAGE_TIMEOUT = 5000;
const SubmitButtonText = {
  IDLE:'Опубликовано',
  SENDING:'Публикую...',
};
const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};
const SORTFUNC = {
  random: () => 0.5 - Math.random(),
  discussed: (a,b) => b.comments.length - a.comments.length
};
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
const MAX_PICTURE_COUNT = 10;
const DEBOUNCE_DELAY = 500;

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const pageBody = document.querySelector('body');
const bigPhotoContainer = document.querySelector('.big-picture');
const hashtagsInput = imgUploadForm.querySelector('.text__hashtags');
const commentsInput = imgUploadForm.querySelector('.text__description');

export{COMMENTS_STEP , SCALE_STEP, REMOVE_MESSAGE_TIMEOUT ,imgUploadForm, imgUploadOverlay, pageBody, bigPhotoContainer, hashtagsInput, commentsInput, FILTER, SORTFUNC, MAX_PICTURE_COUNT, ACTIVE_BUTTON_CLASS,DEBOUNCE_DELAY,SubmitButtonText};
