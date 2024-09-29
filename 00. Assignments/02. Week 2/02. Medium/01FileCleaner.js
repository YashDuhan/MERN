// Assignment
// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman
// After the program runs, the output should be

// hello world my name is raman

// Solution

const fs = require("fs");

function CleanFile() {
  // Check if the file exists or not
  fs.readFile("./01FileCleaner.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(`Error Reading File : ${err}`);
      return;
    }

    //   Remove extra space
    constNewData = data.replace(/\s+/g, " ").trim();

    //   Write file
    fs.writeFile("./01FileCleaner.txt", constNewData, "utf-8", (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);
        return;
      }
      console.log("File cleaned successfully!");
    });
  });
}

CleanFile();
