// Assignment
// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const data = "Hello ho w are you doing?";

fs.writeFile("./03WriteInFile.txt", data, "utf-8", (err) => {
  if (err) throw err;
  console.log("File Saved");
});

// It will create a new file if it doesn't exist
