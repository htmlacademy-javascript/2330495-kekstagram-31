import {photosData} from './data.js';
import {MAX_PHOTOS} from './const.js';
import {createThumbnail} from './thumbnails.js';
import {renderListNode} from './utils.js';
import {photosBox} from './open-close-bigphoto';

// Генерит случайные фотографии
const photos = photosData(MAX_PHOTOS);

// Выводит все фото случайного пользователя на экран
renderListNode({dataItems:photos, createdNote:createThumbnail,container:photosBox});

