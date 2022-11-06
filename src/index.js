import './style.css';
import sendData from './sendPost.js';
import getData from './getPost.js';

const formDt = document.querySelector('form');
formDt.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#name').value;
  const scored = document.querySelector('#score').value;
  sendData(username, scored);
  formDt.reset();// clear input fields after submit is pressed
});

getData();