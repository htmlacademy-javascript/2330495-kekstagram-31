import {photosData} from './data.js';
import {findTemplate} from './util.js';

// Находит контейнер,куда помещаются все фото
const container = document.querySelector('.pictures');

const photos = photosData();

const createThumbnail = (photo)=>{
  const thumbnail = findTemplate('#picture').cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  return thumbnail;
};

const fragment = document.createDocumentFragment();

const renderThumbnail = (photo) =>{
  const thumbnail = createThumbnail(photo);
  fragment.append(thumbnail);
};

photos.forEach(renderThumbnail);
container.append(fragment);

