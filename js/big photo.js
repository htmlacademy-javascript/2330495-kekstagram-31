import {renderListNode} from './utils.js';
import {createComments} from './comments.js';
import {picturesData} from './data.js';

const bigPhotoImage = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const bigPhotoDiscription = document.querySelector('.social__caption');

const commentsContainer = document.querySelector('.social__comments');
const commentsTotalCount = document.querySelector('.social__comment-total-count');

const renderBigPhoto = (photoNode)=>{
  const currentPhoto = picturesData.find((photo) => photo.id === Number(photoNode.dataset.photoId));

  bigPhotoImage.src = currentPhoto.url;
  bigPhotoImage.alt = currentPhoto.description;
  likesCount.textContent = currentPhoto.likes;
  bigPhotoDiscription.textContent = currentPhoto.description;
  commentsTotalCount.textContent = currentPhoto.comments.length;
  renderListNode ({dataItems:currentPhoto.comments,createdNote:createComments,container:commentsContainer});

};

export {renderBigPhoto, commentsContainer};
