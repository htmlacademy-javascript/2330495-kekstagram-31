import {findTemplate} from './utils.js';

const createComments = ({avatar, message, user})=>{
  const socialComment = findTemplate('#comment').cloneNode(true);
  const avatarImage = socialComment.querySelector('.social__picture');

  avatarImage.src = avatar;
  avatarImage.alt = user;

  socialComment.querySelector('.social__text').textContent = message;

  return socialComment;
};


export {createComments};
