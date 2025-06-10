const { faker } = require('@faker-js/faker'); 
const readline = require('readline');         


const users = [];

function addFakeUsers(count) {
  console.log(`\n--- Generating ${count} Fake Users ---`);
  for (let i = 0; i < count; i++) {
    const user = {
      name: faker.person.fullName(),
      addressStreet: faker.location.streetAddress(),
      country: faker.location.country(),
    };
    users.push(user);
    
  }
  console.log(`${count} fake users generated.`);
}

// Bonus: Node.js module to prompt the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function promptAndAddUser() {
  return new Promise((resolve, reject) => {
    console.log("\n--- Add Your Own User Information ---");
    const newUser = {};

    rl.question('Enter your name: ', (name) => {
      newUser.name = name.trim();
      rl.question('Enter your address street: ', (addressStreet) => {
        newUser.addressStreet = addressStreet.trim();
        rl.question('Enter your country: ', (country) => {
          newUser.country = country.trim();
          users.push(newUser);
          console.log(`User "${newUser.name}" added successfully!`);
          resolve();
        });
      });
    });
  });
}

function displayAllUsers() {
  console.log("\n--- All Users in the Array ---");
  if (users.length === 0) {
    console.log("No users to display yet.");
    return;
  }
  users.forEach((user, index) => {
    console.log(`User ${index + 1}:`);
    console.log(`  Name: ${user.name}`);
    console.log(`  Address: ${user.addressStreet}`);
    console.log(`  Country: ${user.country}`);
    console.log('--------------------');
  });
}

// --- Main execution flow ---
async function main() {
  // Add 3 fake users
  addFakeUsers(3);

  // Bonus: Prompt user for their info
  await promptAndAddUser();

  // Display all users (fake and user-entered)
  displayAllUsers();

  rl.close(); // Close the readline interface when done
}

// Run the main function
main();