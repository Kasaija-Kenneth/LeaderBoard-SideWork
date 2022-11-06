import sendData from './sendPost.js';

// function to submit form
const formDt = document.querySelector('form');
formDt.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('.name');
  const scored = document.querySelector('.score');
  sendData(username, scored);
});