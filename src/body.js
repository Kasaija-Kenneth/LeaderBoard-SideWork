const htmlBody = () => {
  const mainBody = document.querySelector('.main-body');

  mainBody.appendChild(document.createElement('section'));
  mainBody.appendChild(document.createElement('section'));

  mainBody.firstChild.className = 'lists';
  mainBody.lastChild.className = 'input';
};

export default htmlBody;
