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
let questionClose = document.querySelector('.modal-form__toggle');
let questionBtn = document.querySelector('.footer-page__button');
let scrollPos = 0;
const element = document.querySelector('.quest-order__text-wrapqqqqqqqqqqqqqqqqqqq');

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

questionBtn.addEventListener('click', function () {
  questionModal.classList.add('modal-form--show');
});

questionClose.addEventListener('click', function () {
  questionModal.classList.remove('modal-form--show');
});

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    element.classList.remove('quest-order__text-wrap--hidden');
  } else {
    // Scrolling DOWN
    element.classList.add('quest-order__text-wrap--hidden');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);

$(document).ready(function () {
  $('.modal-form__item input').on('input', function (e) {
    let $this = $(e.target);
    if ($this.val() === '') {
      $this.removeClass('modal-form__item-filled');
    } else {
      $this.addClass('modal-form__item-filled');
    }
  });

  $('.modal-form__question').validate({
    rules: {
      name: true,
      minlength: 2
    },
    email: {
      required: true,
      email: true
    },
    messages: {
      email: {
        required: 'Пожалуйста заполните поле',
        email: 'Введён некорректный e-mail, попробуйте заново'
      },
      name: {
        required: 'Пожалуйста заполните поле',
        minlength: 'Введите не менее 2х символов'
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $('.modal-form__list input').on('submit', function () {
    if ($('.modal-form__question').valid()) {
      $('.modal-form__button').addClass('modal-form__button--checked');
    } else {
      $('.modal-form__button').removeClass('modal-form__button--checked');
    }
  });
});
