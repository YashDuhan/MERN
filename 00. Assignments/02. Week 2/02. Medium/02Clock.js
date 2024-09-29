// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
  const now = new Date();
  // console.log(now);
  // This above line prints in 2024-09-29T01:38:20.006Z
  // here time is shown after 0

  // Format time in HH:MM:SS
  let hours24 = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  console.log(`${hours24}:${minutes}:${seconds}`);

  // update after 1 second
  setTimeout(updateClock, 1000);
}

updateClock();
