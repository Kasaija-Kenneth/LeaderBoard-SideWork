import './style.css';
import htmlBody from './body.js';
import scoreDetails from './scoreList.js';
import userInput from './inputForm.js';

const globalWrapper = document.createElement('div');
document.body.appendChild(globalWrapper);

globalWrapper.className = 'global-wrapper';
globalWrapper.appendChild(document.createElement('header'));
globalWrapper.firstChild.className = 'header-wrapper';
globalWrapper.firstChild.appendChild(document.createElement('div'));
globalWrapper.firstChild.firstChild.className = 'main-header';
globalWrapper.firstChild.firstChild.innerHTML = 'Leaderboard';

globalWrapper.appendChild(document.createElement('div'));
globalWrapper.lastChild.className = 'main-body';

htmlBody();
scoreDetails();
userInput();
