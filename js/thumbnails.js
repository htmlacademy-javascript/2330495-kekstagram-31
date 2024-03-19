import {findTemplate} from './utils.js';

const createThumbnail = ({url,description,comments,likes})=>{
  const thumbnail = findTemplate('#picture').cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = url;
  image.alt = description;

  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

export {createThumbnail};


