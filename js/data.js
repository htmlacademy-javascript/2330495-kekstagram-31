import {getRandomPositiveInteger,getRandomArrayElement} from './utils.js';
import {DESCRIPTIONS,MAX_AVATARS,MAX_COMMENTS,MAX_LIKES,MAX_PHOTOS,MESSAGES,MIN_COMMENTS,MIN_LIKES,MIN_VALUE,NAMES} from './const.js';
// Создает ID для фото
let indentifier = 0;
const getIndentifier = () => {
  indentifier++;
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

