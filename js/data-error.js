import {findTemplate} from './utils.js';
import {REMOVE_MESSAGE_TIMEOUT} from './const';

const body = document.body;

const showErrorMessage = (message) => {
  const errorArea = findTemplate('#data-error').cloneNode(true);

  if (message) {
    errorArea.querySelector('.data-error__title').textContent = message;
  }

  body.append (errorArea);

  const errorLoadDataArea = body.querySelector('.data-error');

  setTimeout(()=> {
    errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

export {showErrorMessage};
