import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImg } from './js/pixabay-api';
import { renderImg } from './js/render-functions';

const formEl = document.querySelector('.search-container');
const galleryEl = document.querySelector('.gallery-list');
const lightbox = new SimpleLightbox('.gallery-list a');
const loaderEl = document.querySelector('.loader');

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { query } = form.elements;
  galleryEl.innerHTML = '';

  loaderEl.style.display = 'block';

  const searchValue = query.value.trim();

  if (!searchValue) {
    iziToast.error({
      position: 'topRight',
      iconColor: '#FAFAFB',
      message: 'Сan not be empty or contain only spaces!',
      backgroundColor: '#EF4040',
    });
    loaderEl.style.display = 'none';
    return;
  }

  fetchImg(searchValue)
    .then(data => {
      const imgArr = data.hits;

      if (imgArr.length === 0) {
        iziToast.error({
          position: 'topRight',
          iconColor: '#FAFAFB',
          message: `Sorry, there are no images matching <br/>your search query. Please try again!`,
          backgroundColor: '#EF4040',
        });
        formEl.reset();
      } else {
        galleryEl.innerHTML = '';
        renderImg(imgArr);
        lightbox.refresh();
      }
    })
    .catch(err => {
      iziToast.error({
        position: 'topRight',
        iconColor: '#FAFAFB',
        message: `An error occurred. Please try again later!`,
        backgroundColor: '#FF0000',
      });

      console.log(err);
    })
    .finally(() => {
      loaderEl.style.display = 'none';
    });

  formEl.reset();
}

formEl.addEventListener('submit', handleFormSubmit);
