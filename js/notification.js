import {pageBody} from './const';
import {isEscapeKey} from './utils';

const closeNotification = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector ('.success') || document.querySelector ('.error');
  const closeButton = document.querySelector ('button');
  if (evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)){
    existElement.remove();
    pageBody.removeEventListener ('click', closeNotification);
    pageBody.removeEventListener ('keydown', closeNotification);
  }
};

const appendNotification = (template, trigger = null) =>{
  trigger?.();
  const notification = template.cloneNode(true);
  pageBody.append (notification);
  pageBody.addEventListener ('click', closeNotification);
  pageBody.addEventListener ('keydown', closeNotification);
};

export {appendNotification};

