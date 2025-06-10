const chalk = require('chalk'); 


function execute() {
  console.log(chalk.bold.magenta('Hello, Ninja!'));
  console.log(chalk.green('Welcome to your ultimate command-line utility.'));
  console.log(chalk.yellow('May your commands be swift and true! ✨'));
}

module.exports = {
  execute 
};