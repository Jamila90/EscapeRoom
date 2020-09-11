'use strict';

let mainHeader = document.querySelector('.main-header');
let mainNav = document.querySelector('.nav');
let toggleBtn = document.querySelector('.main-header__toggle');
let mainHeaderLink = document.querySelector('.main-header__link-wrap');
let footer = document.querySelector('.footer-page');
let linkCity = document.querySelector('.main-header__link');
let modalCity = document.querySelector('.modal');
let questionModal = document.querySelector('.modal-form');
let modalToggle = document.querySelector('.modal__toggle');
let questionToggle = document.querySelector('.footer-page__button');

mainHeader.classList.remove('main-header--nojs');
mainNav.classList.remove('nav--nojs');
mainHeaderLink.classList.remove('main-header__link-wrap--nojs');
toggleBtn.classList.remove('main-header__toggle--nojs');
footer.classList.remove('footer-page--nojs');

toggleBtn.addEventListener('click', function () {
  mainNav.classList.toggle('nav--closed');
  mainHeaderLink.classList.toggle('main-header__link-wrap--closed');
  footer.classList.toggle('footer-page--closed');
});

toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle('main-header__toggle--closed');
});

linkCity.addEventListener('click', function () {
  modalCity.classList.add('modal--show');
});

modalToggle.addEventListener('click', function () {
  modalCity.classList.remove('modal--show');
});

questionToggle.addEventListener('click', function () {
  questionModal.classList.add('modal-form--show');
});

questionToggle.addEventListener('click', function () {
  questionModal.classList.remove('modal-form--show');
});
