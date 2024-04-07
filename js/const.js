
const SCALE_STEP = 0.25;
const COMMENTS_STEP = 5;
const REMOVE_MESSAGE_TIMEOUT = 5000;

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const pageBody = document.querySelector('body');
const bigPhotoContainer = document.querySelector('.big-picture');
const hashtagsInput = imgUploadForm.querySelector('.text__hashtags');
const commentsInput = imgUploadForm.querySelector('.text__description');

export{COMMENTS_STEP , SCALE_STEP, REMOVE_MESSAGE_TIMEOUT ,imgUploadForm, imgUploadOverlay, pageBody, bigPhotoContainer, hashtagsInput, commentsInput};
