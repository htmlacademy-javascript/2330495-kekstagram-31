
import {isEscapeKey} from './utils';
import {openModal,closeModal} from './open-close-modal';
import {formReset} from './loading-modul.js';
import {hashtagsInput, commentsInput, imgUploadForm,imgUploadOverlay,pageBody} from './const.js';


const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const miniPreviewImages = imgUploadForm.querySelectorAll('.effects__preview');
const ImgUploadCancelBtn = imgUploadOverlay.querySelector('.img-upload__cancel');
const previewImage = imgUploadOverlay.querySelector('.img-upload__preview img');


const onPhotoKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.activeElement === hashtagsInput || document.activeElement === commentsInput){
      evt.stopPropagation();
    }else {
      closeFormUpload();
    }
  }
};

const onPhotoEditorResetBtnClick = ()=> closeFormUpload();

const readFile = (file) => {
  const reader = new FileReader();
  reader.onload = (evt) => {
    previewImage.src = evt.target.result;
    miniPreviewImages.forEach ((miniPreviewImage) =>{
      miniPreviewImage.style.backgroundImage = `url(${evt.target.result})`;
    });
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

function closeFormUpload (){
  closeModal(imgUploadOverlay,onPhotoKeydown);
  pageBody.classList.remove('modal-open');
  ImgUploadCancelBtn.removeEventListener('click',onPhotoEditorResetBtnClick);
  formReset();
}

export {previewImage,imgUploadInput,handleFileInputChange,imgUploadOverlay,closeFormUpload };
