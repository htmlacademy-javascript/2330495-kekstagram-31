import {findTemplate} from './utils.js';
import {REMOVE_MESSAGE_TIMEOUT,pageBody} from './const';

// const body = document.body;

const showErrorMessage = (message) => {
  const errorArea = findTemplate('#data-error').cloneNode(true);

  if (message) {
    errorArea.querySelector('.data-error__title').textContent = message;
  }

  pageBody.append (errorArea);

  const errorLoadDataArea = pageBody.querySelector('.data-error');

  setTimeout(()=> {
    errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

export {showErrorMessage};
