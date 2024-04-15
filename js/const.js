
const REMOVE_MESSAGE_TIMEOUT = 5000;
const DEBOUNCE_DELAY = 500;
const SCALE_STEP = 0.25;
const MAX_COMMENTS = 5;
const MAX_HASHTAGS = 5;
const MAX_COMMENTS_LENGTH = 140;
const MAX_HASHTAGS_LENGTH = 20;
const MAX_PICTURES_COUNT = 10;
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATE: '/data',
  SEND_DATE: '/'
};

const Method = {
  GET:'GET',
  POST:'POST'
};

const ErrorText = {
  [Method.GET] :'Не удалось загрузить данные. Попробуйте еще раз',
  [Method.POST]:'Не удалось загрузить данные формы'
};

const Filter = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const pageBody = document.querySelector('body');
const bigPhotoContainer = document.querySelector('.big-picture');
const hashtagsInput = imgUploadForm.querySelector('.text__hashtags');
const commentsInput = imgUploadForm.querySelector('.text__description');
const thumbnailsBox = document.querySelector('.pictures');
const effectsList = document.querySelector('.effects__list');


export {MAX_COMMENTS,
  SCALE_STEP,
  REMOVE_MESSAGE_TIMEOUT,
  MAX_PICTURES_COUNT,
  ACTIVE_BUTTON_CLASS,
  DEBOUNCE_DELAY,
  BASE_URL,
  MAX_HASHTAGS,
  MAX_COMMENTS_LENGTH,
  MAX_HASHTAGS_LENGTH,
  Filter,
  Route,
  Method,
  ErrorText,
  imgUploadForm,
  imgUploadOverlay,
  pageBody,
  bigPhotoContainer,
  hashtagsInput,
  commentsInput,
  thumbnailsBox,
  effectsList
};
