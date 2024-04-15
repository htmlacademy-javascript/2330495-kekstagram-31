
const openModal = (container, clickOnElement)=>{
  container.classList.remove('hidden');
  document.addEventListener('keydown', clickOnElement);
};

const closeModal = (container, clickOnElement)=>{
  container.classList.add('hidden');
  document.removeEventListener('keydown', clickOnElement);
};

export {openModal,closeModal};
