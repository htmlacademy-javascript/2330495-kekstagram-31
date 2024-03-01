import {getRandomPositiveInteger,getRandomArrayElement} from './util.js';
import {DESCRIPTIONS,MAX_AVATARS,MAX_COMMENTS,MAX_LIKES,MAX_PHOTOS,MESSAGES,MIN_COMMENTS,MIN_LIKES,MIN_VALUE,NAMES} from './const.js';

let indentifier;
const ID = [];

// Проверяет на уникальность ID фото
const getIndentifier = () => {

  if(ID.length > MAX_PHOTOS){
    return 'Фотографии кончились';
  }
  indentifier = getRandomPositiveInteger(MIN_VALUE, MAX_PHOTOS);

  while (ID.includes(indentifier)){
    indentifier = getRandomPositiveInteger(MIN_VALUE, MAX_PHOTOS);
  }
  ID.push(indentifier);
  return indentifier;
};


// Создает обьект комментариев
const createDataComments = () => ({
  id: crypto.randomUUID(),
  avatar: `img/avatar-${getRandomPositiveInteger(MIN_VALUE,MAX_AVATARS)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  user: getRandomArrayElement(NAMES)
});

// Создает обьект фото
const createDataPhoto = () => ({
  id: getIndentifier(),
  url:`photos/${indentifier}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length:`${getRandomPositiveInteger(MIN_COMMENTS, MAX_COMMENTS)}`},createDataComments)
});

const photosData = () => Array.from({length: MAX_PHOTOS}, createDataPhoto);

export {photosData};
