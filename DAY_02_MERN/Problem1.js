const axios = require("axios");

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

fetchData()
  .then((data) => {
    console.log("API Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
