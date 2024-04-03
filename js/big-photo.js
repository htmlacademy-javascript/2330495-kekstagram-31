import {isEscapeKey} from './utils.js';
import {renderListNode} from './utils.js';
import {openModal,closeModal} from './open-close-modal.js';
import {createComments} from './comments.js';
import {picturesData} from './data.js';

const bigPhotoContainer = document.querySelector('.big-picture');
const bigPhotoCloseElement = bigPhotoContainer.querySelector('.big-picture__cancel');
const bigPhotoImage = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const bigPhotoDiscription = document.querySelector('.social__caption');

const commentsContainer = document.querySelector('.social__comments');
const commentsTotalCount = document.querySelector('.social__comment-total-count');
const commentsShowCount = document.querySelector('.social__comment-shown-count');
const commentsLoader = document.querySelector('.comments-loader');

let currentCount;
const COMMENTS_STEP = 5;
let commentsData = [];

const renderBigPhoto = (photoNode)=>{
  const currentPhoto = picturesData.find((photo) => photo.id === Number(photoNode.dataset.photoId));

  bigPhotoImage.src = currentPhoto.url;
  bigPhotoImage.alt = currentPhoto.description;
  likesCount.textContent = currentPhoto.likes;
  bigPhotoDiscription.textContent = currentPhoto.description;
  commentsTotalCount.textContent = currentPhoto.comments.length;

  commentsData = currentPhoto.comments;
  renderNextComments();
  commentsLoader.addEventListener('click', renderNextComments);
};


function renderNextComments (){
  const step = currentCount + COMMENTS_STEP;
  const renderedComments = commentsData.slice(currentCount, step);
  const renderedCommentsLength = renderedComments.length + currentCount;

  if (renderedCommentsLength >= commentsData.length){
    commentsShowCount.textContent = commentsData.length;
    commentsLoader.classList.add('hidden');
    renderListNode ({dataItems:renderedComments,createdNote:createComments,container:commentsContainer});
  } else {
    commentsLoader.classList.remove('hidden');
    renderListNode ({dataItems:renderedComments,createdNote:createComments,container:commentsContainer});
    commentsShowCount.textContent = step ;
  }
  currentCount += COMMENTS_STEP;
}

//Функция закрытия большого фото по Escape
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const openBigPhoto = () => openModal(bigPhotoContainer,onDocumentKeydown);

//Функция открытия большого фото
const renderCurrentPhoto = (evt)=> {
  const currentPhotoNode = evt.target.closest('.picture');

  if(currentPhotoNode){
    evt.preventDefault();
    currentCount = 0;
    commentsContainer.textContent = '';
    renderBigPhoto(currentPhotoNode);
    openBigPhoto();
  }
};

//Функция закрытия большого фото
function closeBigPhoto () {
  closeModal(bigPhotoContainer,onDocumentKeydown);
  commentsLoader.removeEventListener('click', renderNextComments);
}

// Обработчик, который закрывает большую фотографию
bigPhotoCloseElement.addEventListener('click',closeBigPhoto);

export{renderCurrentPhoto, onDocumentKeydown};
