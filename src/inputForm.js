/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import sendData from './getPost.js';

const userInput = () => {
  const formSection = document.querySelector('.input');
  formSection.appendChild(document.createElement('div'));
  formSection.firstChild.className = 'form-div';
  formSection.firstChild.appendChild(document.createElement('div'));
  formSection.firstChild.appendChild(document.createElement('div'));
  formSection.firstChild.firstChild.className = 'header-div';
  formSection.firstChild.firstChild.appendChild(document.createElement('h3'));
  formSection.firstChild.lastChild.className = 'form-body';

  const formHeader = document.querySelector('.header-div');
  formHeader.firstChild.innerHTML = 'Add your scrore';

  const formBody = document.querySelector('.form-div');
  formBody.lastChild.appendChild(document.createElement('form'));
  const form = document.querySelector('form');
  form.appendChild(document.createElement('input'));
  form.appendChild(document.createElement('input'));
  form.appendChild(document.createElement('button'));

  // covert form element to array using Array.from() and assigning class names to array elements
  Array.from(form).forEach((element, index) => {
    if (index === 0) {
      element.className = 'score';
      element.placeholder = 'your score';
    } else if (index === 1) {
      element.className = 'name';
      element.placeholder = 'your name';
    } else {
      element.className = 'button';
      element.innerHTML = 'submit';
    }
  });

  // function to submit form
  const formData = document.querySelector('.form-body');
  formData.addEventListener('submit', (e) => {
    e.preventDefault;

    const username = document.querySelector('.name').value;
    const scored = document.querySelector('.score').value;
    sendData(username, scored);
  });
};

export default userInput;