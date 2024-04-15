import {findTemplate, renderListNode} from './utils.js';
import {commentsData} from './render-big-photo.js';
import {COMMENTS_STEP,bigPhotoContainer} from './const.js';

const commentsShowCount = bigPhotoContainer.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPhotoContainer.querySelector('.social__comment-total-count');
const commentsContainer = bigPhotoContainer.querySelector('.social__comments');
const commentsLoader = bigPhotoContainer.querySelector('.comments-loader');
let currentCount;


const createComments = ({avatar, message, name})=>{
  const socialComment = findTemplate('#comment').cloneNode(true);
  const avatarImage = socialComment.querySelector('.social__picture');

  avatarImage.src = avatar;
  avatarImage.alt = name;

  socialComment.querySelector('.social__text').textContent = message;

  return socialComment;
};

const renderNextComments = () => {
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
  commentsTotalCount.textContent = commentsData.length;
};

const cleanComments = () =>{
  currentCount = 0;
  commentsContainer.textContent = '';
};

export {renderNextComments, commentsContainer, commentsLoader, cleanComments};
