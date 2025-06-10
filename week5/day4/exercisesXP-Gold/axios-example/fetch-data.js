const axios = require('axios'); // Require the axios package

const JSONPLACEHOLDER_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchAndDisplayPosts() {
  console.log("--- Fetching and Displaying Post Titles ---");

  try {
    // Make an HTTP GET request to the JSONPlaceholder API
    const response = await axios.get(JSONPLACEHOLDER_POSTS_URL);

    // Axios automatically parses JSON data, available in response.data
    const posts = response.data;

    if (posts && posts.length > 0) {
      console.log("Posts fetched successfully. Titles:");
      // Display the title of each post
      posts.forEach(post => {
        console.log(`- ${post.title}`);
      });
    } else {
      console.log("No posts found or retrieved.");
    }
  } catch (error) {
    console.error("An error occurred while fetching posts:");
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(`Status: ${error.response.status}`);
      console.error(`Data: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from server. Check internet connection or API endpoint.");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error(`Request setup error: ${error.message}`);
    }
  }
  console.log("-----------------------------------------\n");
}

// Export the function
module.exports = {
  fetchAndDisplayPosts
};