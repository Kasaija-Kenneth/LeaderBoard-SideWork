const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const uniqueId = 'UjUsHlhrqGGPD9EjImcN/scores/';
const getUrl = `${postUrl}${uniqueId}`;

// Function to make http Request
const sendData = async (users, scores) => {
  const data = {
    method: 'POST',
    user: users,
    score: scores,
  };

  // Message formart
  const message = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(getUrl, message);
  if (response.ok) {
    return response;
  } return 'Empty';
};

export default sendData;