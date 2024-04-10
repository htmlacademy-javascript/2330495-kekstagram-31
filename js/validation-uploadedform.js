import {sendData} from './api.js';
import {imgUploadForm, hashtagsInput, commentsInput, SubmitButtonText} from './const.js';
import {disabledButton, enabledButton, templateSuccess, templateError } from './loading-modal.js';
import {closeFormUpload} from './upload-photo-form.js';
import {appendNotification} from './notification.js';

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'pristine-error'
});


const errorMessage = 'Ошибка здесь';
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const hashtagsValidator = (value) =>{
  const hashtags = value.trim().split(/\s+/);
  const uniqueHashtags = new Set(hashtags);

  if (uniqueHashtags.size > 5) {
    return false;
  }

  if (hashtags.length !== uniqueHashtags.size) {
    return false;
  }

  return hashtags.every((tag) => re.test(tag));
};

const message = 'Длина комментария не должна превышать 140 символов';

const commenstValidator = () =>{
  const commentsLength = commentsInput.value.trim();
  return commentsLength.length > 140 ? false : message;
};

pristine.addValidator(hashtagsInput, hashtagsValidator, errorMessage);
pristine.addValidator(commentsInput, commenstValidator,message);


const sendFormData = (formElement) => {
  const isValid = pristine.validate();

  if (isValid) {
    // Отправка данных
    disabledButton(SubmitButtonText.SENDING);
    sendData(new FormData(formElement))
      .then(() => {
        appendNotification(templateSuccess, () => closeFormUpload(imgUploadForm));

        pristine.reset();
        closeFormUpload(imgUploadForm);
      })
      .catch(() => {
        enabledButton(SubmitButtonText.IDLE);
        appendNotification(templateError);
      });
  }
};

export {sendFormData};
