
const { addDays, format } = require('date-fns'); 


function performDateOperations() {
  console.log("--- Performing Date Operations with date-fns ---");

  // 1. Get the current date and time.
  const currentDate = new Date();
  console.log(`Current Date: ${currentDate.toLocaleString()}`);

  // 2. Add 5 days to the current date.
  const futureDate = addDays(currentDate, 5);
  console.log(`Date after adding 5 days: ${futureDate.toLocaleString()}`);

  // 3. Format the resulting date as a string.
  // Example formats: 'yyyy-MM-dd', 'MM/dd/yyyy', 'EEEE, MMMM do, yyyy'
  const formattedDate = format(futureDate, 'EEEE, MMMM do, yyyy');
  console.log(`Formatted Date (e.g., 'DayOfWeek, Month Day, Year'): ${formattedDate}`);

  const shortFormattedDate = format(futureDate, 'MM/dd/yyyy');
  console.log(`Formatted Date (e.g., 'MM/DD/YYYY'): ${shortFormattedDate}`);

  console.log("-------------------------------------------\n");
}

// Export the function
module.exports = {
  performDateOperations
};