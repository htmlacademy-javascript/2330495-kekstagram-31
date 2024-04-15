
import {MAX_PICTURES_COUNT, ACTIVE_BUTTON_CLASS, Filter, thumbnailsBox} from './const.js';
import {delayRenderPhotos, renderListNode} from './utils.js';
import {createThumbnail} from './thumbnail-template.js';

let currentFilter = Filter.default;
const filterElement = document.querySelector ('.img-filters');
let pictures = [];

const debounceRender = delayRenderPhotos(renderListNode);

const applyFilter = () => {
  let filteredPictures = [];
  if (currentFilter === Filter.default){
    filteredPictures = pictures;
  }
  if (currentFilter === Filter.random){
    filteredPictures = pictures.toSorted(() => 0.5 - Math.random()).slice(0, MAX_PICTURES_COUNT);
  }
  if (currentFilter === Filter.discussed) {
    filteredPictures = pictures.toSorted((a,b) => b.comments.length - a.comments.length);
  }
  debounceRender({dataItems:filteredPictures, createdNote:createThumbnail, container:thumbnailsBox, className:'.picture'});
};

const changeFilter = (evt) =>{
  const targetButton = evt.target;
  const activeButton = document.querySelector('.img-filters__button--active');

  if (!targetButton.matches('button')){
    return;
  }
  if (activeButton === targetButton){
    return;
  }

  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');
  applyFilter();
};

const showFilteredPhotos = (picturesData) =>{
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', changeFilter);
  pictures = picturesData;
};

export {showFilteredPhotos};
