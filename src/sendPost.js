// Function to make http Request
const sendData = async (username, scored) => {
  const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/q17NxTZ4VQj5jDHKX0Kh/scores/';
  // Message formart
  const message = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        user: username.value,
        score: scored.value,
      },
    ),
  };

  const response = await fetch(postUrl, message);
  const data = await response.json();
  if (data.ok) {
    console.log(data);
    return data;
  } return 'Empty';
};

export default sendData;