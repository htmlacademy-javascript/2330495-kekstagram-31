import {findTemplate} from './utils.js';

const createThumbnail = (photo)=>{
  const thumbnail = findTemplate('#picture').cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  return thumbnail;
};


export {createThumbnail};


