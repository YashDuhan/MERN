// Assignment (part 1)
// Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

// Assignment (part 2)
// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

// ---------------Approach - 1---------------
// Using setInterval
let count = 0;
function counter() {
  count += 1;
  console.log(count);
  //   stop the counter when reached 10
  if (count < 10) {
    clearInterval(interval);
  }
}

// call the counter function after every 1sec
const interval = setInterval(counter, 1000);

// ---------------Approach - 2---------------
// OR
// Using setTimeout

let count = 0;
function counter() {
  count += 1;
  console.log(count);
  if (count < 10) {
    setTimeout(counter, 1000);
  }
}

counter();
