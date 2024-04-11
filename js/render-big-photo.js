import {isEscapeKey} from './utils.js';
import {openModal,closeModal} from './open-close-modal.js';
import {renderNextComments, commentsLoader, cleanComments} from './render-comments.js';
import {picturesData} from './main.js';
import {bigPhotoContainer} from './const';

const bigPhotoCloseElement = bigPhotoContainer.querySelector('.big-picture__cancel');
const bigPhotoImage = bigPhotoContainer.querySelector('.big-picture__img img');
const likesCount = bigPhotoContainer.querySelector('.likes-count');
const bigPhotoDiscription = bigPhotoContainer.querySelector('.social__caption');
let commentsData = [];

const renderBigPhoto = (photoNode)=>{
  const currentPhoto = picturesData.find((photo) => photo.id === Number(photoNode.dataset.photoId));

  bigPhotoImage.src = currentPhoto.url;
  bigPhotoImage.alt = currentPhoto.description;
  likesCount.textContent = currentPhoto.likes;
  bigPhotoDiscription.textContent = currentPhoto.description;

  commentsData = currentPhoto.comments;
  renderNextComments();
  commentsLoader.addEventListener('click', renderNextComments);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const openBigPhoto = () => openModal(bigPhotoContainer,onDocumentKeydown);

const onCurrentPhotoClick = (evt)=> {
  const currentPhotoNode = evt.target.closest('.picture');

  if(currentPhotoNode){
    evt.preventDefault();
    cleanComments();
    renderBigPhoto(currentPhotoNode);
    openBigPhoto();
  }
};

function closeBigPhoto () {
  closeModal(bigPhotoContainer,onDocumentKeydown);
  commentsLoader.removeEventListener('click', renderNextComments);
}

bigPhotoCloseElement.addEventListener('click',closeBigPhoto);

export{onCurrentPhotoClick, renderBigPhoto, commentsData};
