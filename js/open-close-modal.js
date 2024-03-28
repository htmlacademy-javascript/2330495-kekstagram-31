import {onDocumentKeydown} from './big-photo';

const openModal = (container)=>{
  container.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = (container)=>{
  container.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

export {openModal,closeModal};
