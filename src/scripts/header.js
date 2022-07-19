'use strict';

const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
});
