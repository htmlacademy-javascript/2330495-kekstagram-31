// Выводит случайное число
const getRandomPositiveInteger = (a,b) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// Выводит элемент с индексом случайного числа
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger (0, elements.length - 1)];

export {getRandomPositiveInteger,getRandomArrayElement};

// Находит template в разметке
const findTemplate = (id) =>{
  const template = document.querySelector(id);
  if(!template){
    return ('Template not found');
  }
  return template.content.firstElementChild;
};

export{findTemplate};
