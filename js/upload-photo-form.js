
import {isEscapeKey} from './utils.js';
import {openModal,closeModal} from './open-close-modal.js';
import {formReset} from './loading-modal.js';
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

const readImg = (img) => {
  const reader = new FileReader();
  reader.onload = (evt) => {
    previewImage.src = evt.target.result;
    miniPreviewImages.forEach ((miniPreviewImage) =>{
      miniPreviewImage.style.backgroundImage = `url(${evt.target.result})`;
    });
  };
  reader.readAsDataURL(img);
};

const openFormUpload = () => {
  pageBody.classList.add('modal-open');
  openModal(imgUploadOverlay, onPhotoKeydown);
  ImgUploadCancelBtn.addEventListener('click', onPhotoEditorResetBtnClick);
};

const onUploadInputChange = (event) => {
  const uploadedImg = event.target.files[0];
  if (uploadedImg) {
    readImg(uploadedImg);
    openFormUpload();
  }
};

function closeFormUpload (){
  closeModal(imgUploadOverlay,onPhotoKeydown);
  pageBody.classList.remove('modal-open');
  ImgUploadCancelBtn.removeEventListener('click',onPhotoEditorResetBtnClick);
  formReset();
}

export {previewImage,imgUploadInput,onUploadInputChange,imgUploadOverlay,closeFormUpload };
