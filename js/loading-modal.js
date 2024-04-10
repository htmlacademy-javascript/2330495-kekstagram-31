import {sendFormData} from './validation-uploadedform.js';
import {clearFilter} from './effect-photo-editor.js';
import {imgUploadForm} from './const.js';
import {findTemplate} from './utils.js';


const formSubmitButton = document.querySelector('#upload-submit');
const templateSuccess = findTemplate('#success');
const templateError = findTemplate('#error');

const formReset = () => {
  imgUploadForm.reset();
  clearFilter();
};

const disabledButton = (text) => {
  formSubmitButton.disabled = true;
  formSubmitButton.textContent = text;
};

const enabledButton = (text) =>{
  formSubmitButton.disabled = false;
  formSubmitButton.textContent = text;
};

const formSubmitHadler = (evt) =>{
  evt.preventDefault();
  sendFormData(evt.target);
};

imgUploadForm.addEventListener('submit',
  formSubmitHadler);


export {formReset, disabledButton, enabledButton, templateSuccess, templateError};
