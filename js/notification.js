import {pageBody} from './const';

const closeNotification = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector ('.success') || document.querySelector ('.error');
  const closeButton = document.querySelector ('button');
}
