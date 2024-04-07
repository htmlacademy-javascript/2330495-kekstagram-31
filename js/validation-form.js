import {sendData} from './api';
import {imgUploadForm, hashtagsInput, commentsInput} from './const.js';
import { clearFilter } from './effect-photo-editor.js';


const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper', // Элемент, на который будут добавляться классы
  errorClass: 'img-upload__field-wrapper--error', // Класс, обозначающий невалидное поле
  // successClass: '', // Не указываем класс
  errorTextParent: 'img-upload__field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'div', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'pristine-error' // Класс для элемента с текстом ошибки
});

const errorMessage = 'Ошибка здесь';
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const hashtagsValidator = (value) =>{
  const hashtags = value.trim().split(/\s+/); // Разделяем строку по пробелам и удаляем лишние пробелы в начале и конце
  const uniqueHashtags = new Set(hashtags); // Преобразуем массив в множество, чтобы убрать дубликаты
  // Проверяем, что количество хэштегов не превышает 5
  if (uniqueHashtags.size > 5) {
    return false; // Возвращаем false, если количество хэштегов больше 5
  }

  // Проверяем, что количество хэштегов после удаления дубликатов равно исходному количеству
  if (hashtags.length !== uniqueHashtags.size) {
    return false; // Возвращаем false, если были дубликаты
  }

  // Проверяем каждый хэштег по вашему регулярному выражению
  return hashtags.every((tag) => re.test(tag));
};

const message = 'Длина комментария не должна превышать 140 символов';

const commenstValidator = () =>{
  const commentsLength = commentsInput.value.trim(); // Получаем значение комментариев и удаляем лишние пробелы
  if (commentsLength.length < 140) {
    return message;
  }
};

pristine.addValidator(hashtagsInput, hashtagsValidator, errorMessage);
pristine.addValidator(commentsInput, commenstValidator, message);

const formSubmitButton = document.querySelector('#upload-submit');

const formReset = () => {
  imgUploadForm.reset();
  clearFilter();
};

const SubmitButtonText = {
  IDLE:'Опубликовано',
  SENDING:'Публикую...',
};

const disabledButton = (text) => {
  formSubmitButton.disabled = true;
  formSubmitButton.textContent = text;
};

const enabledButton = (text) =>{
  formSubmitButton.disabled = false;
  formSubmitButton.textContent = text;
};

const sendFormData = (formElement) => {
  const isValide = pristine.validate();

  if(isValide){
    disabledButton(SubmitButtonText.SENDING);
    sendData (new FormData(formElement));
    enabledButton(SubmitButtonText.IDLE);
    formReset();
  }
};

const formSubmitHadler = (evt) =>{
  evt.preventDefault();
  sendFormData(evt.target);
};

imgUploadForm.addEventListener('submit',
  formSubmitHadler);

export {formReset};
