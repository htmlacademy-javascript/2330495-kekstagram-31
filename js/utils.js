import {DEBOUNCE_DELAY} from './const';

const findTemplate = (id) =>{
  const template = document.querySelector(id);
  if(!template){
    return ('Template not found');
  }
  if (!(template instanceof HTMLTemplateElement)) {
    return ('Element is not a template');
  }
  return template.content.firstElementChild;
};

const renderListNode = ({dataItems, createdNote, container, className}) =>{
  const fragment = document.createDocumentFragment();
  container.querySelectorAll(className).forEach ((item) => {
    item.outerHTML = '';
  });
  dataItems.forEach((item) => fragment.append(createdNote(item)));
  container.append(fragment);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const delayRenderPhotos = (callback, timeoutDelay = DEBOUNCE_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {findTemplate, renderListNode, isEscapeKey, delayRenderPhotos};
