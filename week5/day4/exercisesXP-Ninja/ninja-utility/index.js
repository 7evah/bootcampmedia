const { Command } = require('commander'); 
const program = new Command();


const greetCommand = require('./commands/greet');
const fetchCommand = require('./commands/fetch');
const readCommand = require('./commands/read');

program
  .version('1.0.0')
  .description('A versatile command-line utility for various ninja tasks!');

program
  .command('greet')
  .description('Display a colorful greeting message.')
  .action(() => {
    greetCommand.execute();
  });

// Define the 'fetch' command
program
  .command('fetch <apiType>') 
  .description('Fetch data from a public JSONPlaceholder API (e.g., users, posts, albums).')
  .action((apiType) => {
    fetchCommand.execute(apiType);
  });

// Define the 'read' command
program
  .command('read <filePath>') 
  .description('Read and display the content of a specified file.')
  .action((filePath) => {
    readCommand.execute(filePath);
  });

// Parse command-line arguments and execute the appropriate command
program.parse(process.argv);

// If no command is provided, show help by default
if (!process.argv.slice(2).length) {
  program.outputHelp();
}