const axios = require('axios');
const chalk = require('chalk');

const OPENWEATHER_API_KEY = '6eaa6e9141a6d8390ddc9ad330676984';
const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


async function getWeather(city) {
  if (!OPENWEATHER_API_KEY || OPENWEATHER_API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY_HERE') {
    console.error(chalk.red.bold('\nERROR: Please provide your OpenWeatherMap API key in weather.js!'));
    console.error(chalk.red('You can get one for free at https://openweathermap.org/api'));
    return;
  }
  if (!city || city.trim() === '') {
    console.log(chalk.yellow('Please enter a city name.'));
    return;
  }

  const apiUrl = `${OPENWEATHER_BASE_URL}?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`; // units=metric for Celsius

  console.log(chalk.blue(`\nFetching weather for ${city}...`));

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.cod !== 200) { // OpenWeatherMap returns cod (code) for status
      throw new Error(data.message || 'Unknown API error');
    }

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;

    console.log(chalk.green.bold(`\nWeather in ${data.name}:`));
    console.log(chalk.yellow(`Temperature: ${temperature}°C (Feels like: ${feelsLike}°C)`));
    console.log(chalk.cyan(`Description: ${description.charAt(0).toUpperCase() + description.slice(1)}`));
    console.log(chalk.magenta(`Humidity: ${humidity}%`));
    console.log(chalk.gray('-------------------------\n'));

  } catch (error) {
    console.error(chalk.red.bold(`\nError fetching weather for ${city}:`));
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
          console.error(chalk.red('Invalid API key. Please check your OpenWeatherMap API key.'));
      } else if (error.response.status === 404) {
          console.error(chalk.red('City not found. Please check the city name.'));
      } else {
          console.error(chalk.red(`Status: ${error.response.status}, Message: ${error.response.data.message || error.message}`));
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error(chalk.red('No response received. Check your internet connection.'));
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error(chalk.red('Request setup error:'), error.message);
    }
    console.error(chalk.gray('-------------------------\n'));
  }
}

module.exports = {
  getWeather 
};