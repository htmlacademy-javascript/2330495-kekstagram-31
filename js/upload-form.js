
import {isEscapeKey} from './utils';
import {openModal,closeModal} from './open-close-modal';
import {imgUploadForm, hashtagsInput, commentsInput, formReset} from './validation-form';

const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const pageBody = document.querySelector('body');

const ImgUploadCancelBtn = imgUploadOverlay.querySelector('.img-upload__cancel');
const previewImage = imgUploadOverlay.querySelector('.img-upload__preview img');


const onPhotoKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.activeElement === hashtagsInput || document.activeElement === commentsInput){
      evt.stopPropagation();
    }else {
      // imgUploadForm.reset();
      formReset();
      closeFormUpload();
    }
  }
};

const onPhotoEditorResetBtnClick = ()=> closeFormUpload();

const readFile = (file) => {
  const reader = new FileReader();
  reader.onload = (evt) => {
    previewImage.src = evt.target.result;
  };
  reader.readAsDataURL(file);
};

const openFormUpload = () => {
  pageBody.classList.add('modal-open');
  openModal(imgUploadOverlay, onPhotoKeydown);
  ImgUploadCancelBtn.addEventListener('click', onPhotoEditorResetBtnClick);
};

const handleFileInputChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    readFile(file);
    openFormUpload();
  }
};
// не забыть почистить другие инпуты
const cleanFormInputs = () => {
  imgUploadInput.value = '';
};

function closeFormUpload (){
  closeModal(imgUploadOverlay,onPhotoKeydown);
  pageBody.classList.remove('modal-open');
  ImgUploadCancelBtn.removeEventListener('click',onPhotoEditorResetBtnClick);
  cleanFormInputs();
}

export {previewImage,imgUploadInput,handleFileInputChange,imgUploadOverlay};
