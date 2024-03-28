import {isEscapeKey} from './utils.js';
import {renderListNode} from './utils.js';
import { openModal,closeModal } from './open-close-modal.js';
import {createComments} from './comments.js';
import {picturesData} from './data.js';

const bigPhotoContainer = document.querySelector('.big-picture');
const bigPhotoCloseElement = bigPhotoContainer.querySelector('.big-picture__cancel');
const bigPhotoImage = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const bigPhotoDiscription = document.querySelector('.social__caption');

const commentsContainer = document.querySelector('.social__comments');
const commentsTotalCount = document.querySelector('.social__comment-total-count');


//Функция закрытия большого фото по Escape
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const openBigPhoto = () => openModal(bigPhotoContainer);

const renderBigPhoto = (photoNode)=>{
  const currentPhoto = picturesData.find((photo) => photo.id === Number(photoNode.dataset.photoId));

  bigPhotoImage.src = currentPhoto.url;
  bigPhotoImage.alt = currentPhoto.description;
  likesCount.textContent = currentPhoto.likes;
  bigPhotoDiscription.textContent = currentPhoto.description;
  commentsTotalCount.textContent = currentPhoto.comments.length;
  renderListNode ({dataItems:currentPhoto.comments,createdNote:createComments,container:commentsContainer});

};

//Функция открытия большого фото
const renderCurrentPhoto = (evt)=> {
  const currentPhotoNode = evt.target.closest('.picture');

  if(currentPhotoNode){
    evt.preventDefault();
    renderBigPhoto(currentPhotoNode);
    openBigPhoto();
  }


};

//Функция закрытия большого фото
function closeBigPhoto () {
  closeModal(bigPhotoContainer);
  commentsContainer.innerHTML = '';
}

// Обработчик, который закрывает большую фотографию
bigPhotoCloseElement.addEventListener('click',closeBigPhoto);

export{renderCurrentPhoto, onDocumentKeydown};
