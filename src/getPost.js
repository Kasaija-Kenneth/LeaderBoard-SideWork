export const displayData = (data) => {
  const list = document.querySelector('.scores');
  const allData = (data.result);
  let items = '';
  allData.forEach((result, index) => {
    items += `<div 
      class="score-item" 
      style="background-color:${(index % 2 === 0 ? '#d3d3d3' : '#ffaf7a')}">
      <span>${result.user}:</span><span> ${result.score}</span></div>`;
    list.innerHTML = items;
  });
};

// Function to make http Request
const getData = async () => {
  const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/X3ZtI9gM1rpl6B4cCc5A/scores/';
  const response = await fetch(postUrl);
  const feedBack = await response.json();
  displayData(feedBack);
};

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  getData();
});

export default getData;