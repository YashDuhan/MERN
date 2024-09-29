// Assignment
// Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");
fs.readFile("./02file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// This loop is synchronous, it will block the execution of the code until it is done.
for (let i = 0; i < 10000000000; i++) {
  // this loop will take a long time to finish
}
console.log("loop ended!");

// readfile works asynchronously, it will not block the execution of the code.
// it will read data and wait in callback queue until the call stack is empty.
// after the loop is done, it print "loop ended!" and then read the file and print the data.
