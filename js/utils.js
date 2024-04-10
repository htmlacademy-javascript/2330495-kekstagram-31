import {DEBOUNCE_DELAY} from './const';

// Находит template в разметке
const findTemplate = (id) =>{
  const template = document.querySelector(id);
  if(!template){
    return ('Template not found');
  }
  // Проверка на тип узла DOM
  if (!(template instanceof HTMLTemplateElement)) {
    return ('Element is not a template');
  }
  return template.content.firstElementChild;
};

// Создает функцию добавления фрагмента в контейнер
const renderListNode = ({dataItems, createdNote, container}) =>{
  const fragment = document.createDocumentFragment();
  dataItems.forEach((item) => fragment.append(createdNote(item)));
  container.append(fragment);
};

// Cоздает функцию проверки нажатой клавиши
const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = DEBOUNCE_DELAY) => {

  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export { findTemplate, renderListNode, isEscapeKey,debounce};


