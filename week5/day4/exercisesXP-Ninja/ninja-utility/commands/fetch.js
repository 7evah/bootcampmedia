const axios = require('axios'); 
const chalk = require('chalk'); 


async function execute(apiType) {
  const jsonPlaceholderBaseUrl = 'https://jsonplaceholder.typicode.com/';
  const apiUrl = `${jsonPlaceholderBaseUrl}${apiType}`;

  console.log(chalk.cyan(`\nFetching data from: ${apiUrl}...`));

  try {
    const response = await axios.get(apiUrl);
    console.log(chalk.blue('Data fetched successfully!'));
    console.log(chalk.white(JSON.stringify(response.data.slice(0, 3), null, 2))); 
    console.log(chalk.gray(`... (showing first 3 entries of ${response.data.length})`));
  } catch (error) {
    console.error(chalk.red(`\nError fetching data from ${apiUrl}:`));
    if (error.response) {
      console.error(chalk.red(`Status: ${error.response.status}`));
      console.error(chalk.red(`Data: ${JSON.stringify(error.response.data)}`));
    } else if (error.request) {
      console.error(chalk.red('No response received from server.'));
    } else {
      console.error(chalk.red('Request setup error:'), error.message);
    }
    console.error(chalk.red('Please check the API type (e.g., users, posts, albums) and your internet connection.'));
  }
}

module.exports = {
  execute 
};