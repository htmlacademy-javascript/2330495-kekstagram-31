import {debounce} from './utils';
import {FILTER,SORTFUNC,MAX_PICTURE_COUNT, ACTIVE_BUTTON_CLASS} from './const.js';
import {renderCurrentPhoto,renderBigPhoto} from './render-big-photo';
import {renderListNode} from './utils.js';
import {createThumbnail} from './thumbnails.js';
import {thumbnailsBox} from './main.js';


let currentFilter = FILTER.default;
let pictures = [];
const filterElement = document.querySelector ('.img-filters');

//  const debounceRender = debounce(renderBigPhoto);

const applyFilter = () => {
  let filteredPictures = [];
  if (currentFilter === FILTER.default){
    filteredPictures = pictures;
    console.log(filteredPictures);
  }
  if (currentFilter === FILTER.random){
    filteredPictures = pictures.toSorted(() => 0.5 - Math.random()).slice(0, MAX_PICTURE_COUNT);

    console.log(filteredPictures);
  }
  if (currentFilter === FILTER.discussed){
    filteredPictures = pictures.toSorted(SORTFUNC.discussed);
    console.log(filteredPictures);

  }
  // debounceRender(filteredPictures);
  renderListNode({dataItems:filteredPictures, createdNote:createThumbnail, container:thumbnailsBox});

};

const onFilterChange = (evt) =>{
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

const configFilter = (picturesData) =>{
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  pictures = picturesData;
};

filterElement.addEventListener('click', onFilterChange);


export {configFilter};
