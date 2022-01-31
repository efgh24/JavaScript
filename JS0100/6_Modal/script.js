'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(modal);
// console.log(overlay);
// console.log(btnCloseModal);
// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden') //the .class is for selectors
  overlay.classList.remove('hidden') //the .class is for selectors
}

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);

const closedModal = function () {
  modal.classList.add('hidden') //the .class is for selectors
  overlay.classList.add('hidden') //the .class is for selectors
}
btnCloseModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);

document.addEventListener('keydown', function (e) {
  // console.log("A key was pressed");
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closedModal();
  }
});
