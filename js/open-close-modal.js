// import {onDocumentKeydown} from './big-photo'
// import {onDocumentKeydown} from './upload-photo-form';

const openModal = (container,keydownClick)=>{
  container.classList.remove('hidden');
  document.addEventListener('keydown', keydownClick);
};

const closeModal = (container,keydownClick)=>{
  container.classList.add('hidden');
  document.removeEventListener('keydown', keydownClick);
};

export {openModal,closeModal};
