import {isEscapeKey} from './utils.js';
import {renderBigPhoto, commentsContainer} from './big photo.js';

const bigPhotoContainer = document.querySelector('.big-picture');
const bigPhotoCloseElement = bigPhotoContainer.querySelector('.big-picture__cancel');

//Функция закрытия большого фото по Escape
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

//Функция открытия большого фото
const openBigPhoto = (evt)=> {
  const currentPhotoNode = evt.target.closest('.picture');

  if(currentPhotoNode){
    evt.preventDefault();
    bigPhotoContainer.classList.remove('hidden');

    renderBigPhoto(currentPhotoNode);
  }

  document.addEventListener('keydown', onDocumentKeydown);
};

//Функция закрытия большого фото
function closeBigPhoto () {

  bigPhotoContainer.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
  commentsContainer.innerHTML = '';
}

// Обработчик, который закрывает большую фотографию
bigPhotoCloseElement.addEventListener('click',closeBigPhoto);

export{openBigPhoto};
