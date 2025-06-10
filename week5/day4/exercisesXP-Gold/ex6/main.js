const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isValidFullName(fullName) {
  const regex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;

  return regex.test(fullName);
}

function promptForFullName() {
  rl.question('Please enter your full name (e.g., "John Doe"): ', (inputName) => {
    if (isValidFullName(inputName)) {
      console.log(`\n"${inputName}" is a valid full name. ✅`);
    } else {
      console.log(`\n"${inputName}" is NOT a valid full name. ❌`);
      console.log("Rules:");
      console.log("- Must contain only letters.");
      console.log("- Must contain exactly one space (between first and last name).");
      console.log("- The first letter of each name must be uppercase.");
      console.log("- Example: John Doe");
    }
    rl.close(); 
  });
}

promptForFullName();