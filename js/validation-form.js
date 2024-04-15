
import {imgUploadForm, hashtagsInput, commentsInput, MAX_HASHTAGS, MAX_COMMENTS_LENGTH, MAX_HASHTAGS_LENGTH} from './const.js';
import {templateSuccess, templateError, appendNotification} from './notification.js';
import {closeFormUpload} from './upload-photo-form.js';
import {sendData} from './api.js';

const formSubmitButton = document.querySelector('#upload-submit');
const message = `Длина комментария не должна превышать ${MAX_COMMENTS_LENGTH} символов`;
let errorMessage = '';

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'pristine-error'
});

const validateHashtagStart = (hashtags) =>
  hashtags.some((hashtag) => hashtag[0] !== '#');

const validateHashtagFormat = (hashtags) =>
  hashtags.some((hashtag) => !/^#[a-zа-яё0-9]{1,19}$/i.test(hashtag));

const validateHashtagUniqueness = (hashtags) =>
  hashtags.some((hashtag, num, array) => array.includes(hashtag, num + 1));

const rules = [
  {
    check: validateHashtagStart,
    error: 'Хэштег должен начинаться с символа \'#\'',
  },
  {
    check: validateHashtagFormat,
    error: `Хэштег должен состоять из букв и чисел и не может быть длинее ${MAX_HASHTAGS_LENGTH} символов`,
  },
  {
    check: validateHashtagUniqueness,
    error: 'Один и тот же хэштег не может быть использован дважды',
  },
  {
    check: (hashtags) => hashtags.length > MAX_HASHTAGS,
    error: `Нельзя указать больше ${MAX_HASHTAGS} хэштегов`,
  },
];

const validateHashtags = (inputText) => {
  if (!inputText) {
    return true;
  }
  const hashtags = inputText.toLowerCase().trim().split(/\s+/);

  return rules.every((rule) => {
    const isInvalid = rule.check(hashtags);
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const validateCommentsFormat = (inputText) =>{
  const commentsLength = inputText.toLowerCase().trim();
  return commentsLength.length > 140 ? false : message;
};

const getErrorMessage = () => errorMessage;

pristine.addValidator(hashtagsInput, validateHashtags, getErrorMessage);
pristine.addValidator(commentsInput, validateCommentsFormat, message);

const sendFormData = (formElement) => {
  const isValid = pristine.validate();
  if (isValid) {
    formSubmitButton.disabled = true;
    sendData(new FormData(formElement))
      .then(() => {
        appendNotification(templateSuccess, () => closeFormUpload(imgUploadForm));
        pristine.reset();
      })
      .catch(() => {
        appendNotification(templateError);
      })
      .finally (() => {
        formSubmitButton.disabled = false;
      });
  }
};

export {sendFormData, pristine};
