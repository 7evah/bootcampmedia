const readline = require('readline'); 
const chalk = require('chalk');
const { getWeather } = require('./weather'); // Import getWeather function

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


async function startDashboard() {
  console.log(chalk.green.bold('================================='));
  console.log(chalk.green.bold('  Welcome to the Weather Dashboard!'));
  console.log(chalk.green.bold('================================='));
  console.log(chalk.yellow('Type a city name to get weather information.'));
  console.log(chalk.red('Type "exit" to quit.\n'));

  // Function to prompt for input and handle it
  const promptForCity = () => {
    rl.question(chalk.blue('Enter city name: '), async (city) => {
      const trimmedCity = city.trim();
      if (trimmedCity.toLowerCase() === 'exit') {
        console.log(chalk.green('\nGoodbye!'));
        rl.close(); // Close the readline interface
      } else {
        await getWeather(trimmedCity); // Fetch and display weather
        promptForCity(); // Prompt again for the next city
      }
    });
  };

  promptForCity(); // Start the first prompt
}

module.exports = {
  startDashboard // Export the startDashboard function
};