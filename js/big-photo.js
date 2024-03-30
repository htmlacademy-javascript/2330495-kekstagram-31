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
const commentsShowCount = document.querySelector('.social__comment-shown-count');
const commentsLoader = document.querySelector('.comments-loader');

let currentCount = 0;
const COMMENTS_STEP = 5;

const renderBigPhoto = (photoNode)=>{
  const currentPhoto = picturesData.find((photo) => photo.id === Number(photoNode.dataset.photoId));

  bigPhotoImage.src = currentPhoto.url;
  bigPhotoImage.alt = currentPhoto.description;
  likesCount.textContent = currentPhoto.likes;
  bigPhotoDiscription.textContent = currentPhoto.description;
  commentsTotalCount.textContent = currentPhoto.comments.length;

  renderComments(currentPhoto.comments);
};


const renderNextComments = (dataComments)=>{
  const renderedComments = dataComments.slice(currentCount, currentCount + COMMENTS_STEP);
  const renderedCommentsLength = renderedComments.length + currentCount;

  if (renderedCommentsLength >= dataComments.length){
    commentsShowCount.textContent = dataComments.length;
    commentsLoader.classList.add('hidden');
    renderListNode ({dataItems:renderedComments,createdNote:createComments,container:commentsContainer});
  } else {
    commentsLoader.classList.remove('hidden');
    renderListNode ({dataItems:renderedComments,createdNote:createComments,container:commentsContainer});
    currentCount += COMMENTS_STEP;
    commentsShowCount.textContent = currentCount ;
  }
};

// Функция рендера комментов
function renderComments (currentComments){
  renderNextComments(currentComments);

  commentsLoader.addEventListener('click',()=>{
    renderNextComments(currentComments);
  });
}

//Функция закрытия большого фото по Escape
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const openBigPhoto = () => openModal(bigPhotoContainer);

//Функция открытия большого фото
const renderCurrentPhoto = (evt)=> {
  const currentPhotoNode = evt.target.closest('.picture');

  if(currentPhotoNode){
    evt.preventDefault();
    commentsContainer.textContent = '';
    renderBigPhoto(currentPhotoNode);
    openBigPhoto();
  }
};

//Функция закрытия большого фото
function closeBigPhoto () {
  currentCount = 0;
  closeModal(bigPhotoContainer);
}

// Обработчик, который закрывает большую фотографию
bigPhotoCloseElement.addEventListener('click',closeBigPhoto);

export{renderCurrentPhoto, onDocumentKeydown};
