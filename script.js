'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const btnScrollTo1 = document.querySelector('.btn--scroll-to');
const section2 = document.querySelector('#section--1');

btnScrollTo1.addEventListener('click', () => {
  section2.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSelectors = document.querySelectorAll('.section');
// console.log(allSelectors);
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

//.insertAdjacentHTML

//Creating and inserting elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We need cookied for improved functionality and analytics';

// message.innerHTML =
//   'We need cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// //Delete elemenst
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   // message.remove();
//   message.parentElement.removeChild(message);
// });

// //Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '100%';

// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 80 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// //Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //Data attribute

// console.log(logo.dataset.versionNumber);

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', e => {
//   e.preventDefault();
//   // const s1coord = section1.getBoundingClientRect();
//   // console.log(s1coord);

//   // console.log(e.target.getBoundingClientRect());

//   // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   // console.log(
//   //   'height/width viewport',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );
//   //Scrolling
//   // window.scrollTo(
//   //   s1coord.left + window.pageXOffset,
//   //   s1coord.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1coord.left + window.pageXOffset,
//   //   top: s1coord.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');
// const alert1 = () => {
//   alert('mouseenter: Great! You are reading the heading :D');
// };

// h1.addEventListener('mouseenter', alert1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alert1);
// }, 3000);

// // h1.onmouseenter = () => {
// //   alert('onmouseenter: Great! You are reading the heading :D');
// // };

//rgb(255,255,255)

//event propagation////////////////////////////////////////////////////////////////
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
