
const path = require('path'); 
const fs = require('fs');     

function displayFileInfo() {
  console.log("--- Displaying File Information ---");

  const filePath = path.join(__dirname, 'data', 'example.txt');
  console.log(`Resolved file path: ${filePath}`);

  try {
    // 2. Use fs.existsSync to check if the file exists.
    const fileExists = fs.existsSync(filePath);
    console.log(`File exists: ${fileExists}`);

    if (fileExists) {
      // 3. Use fs.statSync to get information about the file.
      const stats = fs.statSync(filePath);

      // Display the file’s size and creation time
      console.log(`File size: ${stats.size} bytes`);
      console.log(`Creation time: ${stats.birthtime.toLocaleString()}`); // .toLocaleString() for a readable date/time
      console.log(`Last modified time: ${stats.mtime.toLocaleString()}`); // Also useful: last modified time
      console.log(`Is file: ${stats.isFile()}`); // Check if it's a regular file
      console.log(`Is directory: ${stats.isDirectory()}`); // Check if it's a directory

    } else {
      console.log("Cannot get file stats because the file does not exist.");
      console.log("Please ensure 'data/example.txt' is created with content.");
    }
  } catch (error) {
    console.error("An error occurred while getting file info:", error.message);
  }
  console.log("---------------------------------\n");
}

// Export the function
module.exports = {
  displayFileInfo
};