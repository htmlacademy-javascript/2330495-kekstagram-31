const MAX_PHOTOS = 25;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_AVATARS = 6;
const MIN_VALUE = 1;
let indentifier;
const ID = [];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const MESSAGES = [
  'Всё отлично!В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию,хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Солнечный закат',
  'Горячий кофе',
  'Радужный дождь',
  'Солнечный день',
  'Зеленый луг',
  'Красивый океан',
  'Волшебный лес'
];

// Выводит случайное число
const getRandomPositiveInteger = (a,b) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
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

// Выводит элемент с индексом случайного числа
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger (0, elements.length - 1)];

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
photosData(MAX_PHOTOS);
