
const openModal = (container,keydownClick)=>{
  container.classList.remove('hidden');
  document.addEventListener('keydown', keydownClick);
};

const closeModal = (container,keydownClick)=>{
  container.classList.add('hidden');
  document.removeEventListener('keydown', keydownClick);
};

export {openModal,closeModal};
