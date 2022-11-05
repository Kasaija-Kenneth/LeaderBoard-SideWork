const scoreDetails = () => {
  const leaderBoard = document.querySelector('.lists');

  leaderBoard.appendChild(document.createElement('div'));
  leaderBoard.appendChild(document.createElement('div'));
  leaderBoard.firstChild.className = 'lists-header';
  leaderBoard.lastChild.className = 'scores';

  const listHeader = document.querySelector('.lists-header');
  listHeader.appendChild(document.createElement('h3'));
  listHeader.firstChild.className = 'lists-parag';
  listHeader.firstChild.innerHTML = 'Recent Scores';

  listHeader.appendChild(document.createElement('button'));
  listHeader.lastChild.className = 'refresh';
  listHeader.lastChild.innerHTML = 'Refresh';
};

export default scoreDetails;