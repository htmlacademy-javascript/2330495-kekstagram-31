import {isEscapeKey} from './utils';
import {openModal,closeModal} from './open-close-modal';

// Форма выбора файла с изображением для загрузки;
const uploadForm = document.querySelector('.img-upload__form');
const pageBody = document.querySelector('body');


const uploadFileControl = uploadForm.querySelector('#upload-file');
const photoEditorForm = document.querySelector('.img-upload__overlay');
const photoEditorResetBtn = document.querySelector('.img-upload__cancel');

const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


const onPhotoEditorResetBtnClick = ()=> closePhotoEditor();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.activeElement === hashtagInput || document.activeElement === commentInput){
      evt.stopPropagation();
    }else {
      uploadForm.reset();
      closePhotoEditor();
    }
  }
};

const initUploadModal = ()=>{

  uploadFileControl.addEventListener('change',()=>{
    openModal(photoEditorForm,onDocumentKeydown);
    pageBody.classList.add('modal-open');
    photoEditorResetBtn.addEventListener('click',onPhotoEditorResetBtnClick);

    uploadFileControl.value = '';
  });
};

initUploadModal();

function closePhotoEditor(){
  closeModal(photoEditorForm,onDocumentKeydown);
  pageBody.classList.remove('modal-open');
  photoEditorResetBtn.removeEventListener('click',onPhotoEditorResetBtnClick);
}

//Валидация
const pristine = new Pristine(uploadForm,{
  classTo:'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass: 'error__title'
});


pristine.addValidator(hashtagInput,(value)=>{
  const hashtag = /^#[a-za-яё0-9]{1,19}$/i.test(value);
  return hashtag;
},'Ошибка здесь');



// uploadForm.addEventListener ('submit',(evt)=>{

//   const isValid = pristine.validate();
//   evt.preventDefault();
//   if (isValid){
//     console.log ('Можно отправлять');
//   } else {
//     console.log ('Форма невалидна');

//   }
// });

