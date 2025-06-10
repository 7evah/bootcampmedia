const fs = require('fs').promises; 
const path = require('path');    
const chalk = require('chalk');  

async function execute(filePath) {
  const absolutePath = path.resolve(process.cwd(), filePath); 
  console.log(chalk.cyan(`\nReading content from: ${absolutePath}...`));

  try {
    const content = await fs.readFile(absolutePath, 'utf8');
    console.log(chalk.green('File content:'));
    console.log(chalk.white(content));
  } catch (error) {
    console.error(chalk.red(`\nError reading file '${filePath}':`));
    if (error.code === 'ENOENT') {
      console.error(chalk.red('File not found. Please ensure the path is correct.'));
    } else {
      console.error(chalk.red(`An unexpected error occurred: ${error.message}`));
    }
  }
}

module.exports = {
  execute 
};