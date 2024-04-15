
import {isEscapeKey} from './utils.js';
import {openModal, closeModal} from './open-close-modal.js';
import {hashtagsInput, commentsInput, imgUploadForm, imgUploadOverlay, pageBody} from './const.js';
import {sendFormData, pristine} from './validation-form.js';
import {clearFilter} from './effect-photo-editor.js';

const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const miniPreviewImages = imgUploadForm.querySelectorAll('.effects__preview');
const ImgUploadCancelBtn = imgUploadOverlay.querySelector('.img-upload__cancel');
const previewImage = imgUploadOverlay.querySelector('.img-upload__preview img');

const readImg = (img) => {
  const reader = new FileReader();
  reader.onload = () => {
    previewImage.src = URL.createObjectURL(img);
    miniPreviewImages.forEach ((miniPreviewImage) =>{
      miniPreviewImage.style.backgroundImage = `url(${previewImage.src})`;
    });
  };
  reader.readAsDataURL(img);
};


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

const openFormUpload = () => {
  pageBody.classList.add('modal-open');
  openModal(imgUploadOverlay, onPhotoKeydown);
  ImgUploadCancelBtn.addEventListener('click', onPhotoEditorResetBtnClick);
};

const uploadImgFile = (event) => {
  const uploadedImg = event.target.files[0];
  if (uploadedImg) {
    readImg(uploadedImg);
    openFormUpload();
  }
};

const resetForm = () => {
  imgUploadForm.reset();
  clearFilter();
};

const uploadPhoto = (evt) =>{
  evt.preventDefault();
  sendFormData(evt.target);
};

function closeFormUpload (){
  closeModal(imgUploadOverlay,onPhotoKeydown);
  pageBody.classList.remove('modal-open');
  ImgUploadCancelBtn.removeEventListener('click',onPhotoEditorResetBtnClick);
  resetForm();
  pristine.reset();
}

export {previewImage, imgUploadInput, uploadPhoto, imgUploadOverlay, closeFormUpload, uploadImgFile};
