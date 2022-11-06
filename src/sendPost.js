// Function to make http Request
const sendData = async (username, scored) => {
  const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/X3ZtI9gM1rpl6B4cCc5A/scores/';
  // Message formart
  const message = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        user: username,
        score: scored,
      },
    ),
  };

  const response = await fetch(postUrl, message);
  console.log('In Response', response);
  const data = await response.json();
  console.log('Data = ', data);
  return data;
};

export default sendData;