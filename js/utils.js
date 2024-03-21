// Генерит случайное число
const getRandomPositiveInteger = (a,b) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Выводит элемент с индексом случайного числа
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger (0, elements.length - 1)];

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

export {getRandomPositiveInteger, getRandomArrayElement, findTemplate, renderListNode, isEscapeKey};


