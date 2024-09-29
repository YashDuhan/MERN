const express = require("express");
const app = express();
const port = 3000;

let requestCounter = 0;
// App.use will make the function run every time on execution
app.use(function (req, res, next) {
  requestCounter++;
  next();
});

app.get("/", function (req, res) {
  res.status.json({
    msg: "Server started",
  });
});

app.get("/hit-request", function (req, res) {
  res.status(200).json({
    msg: "Request hit",
  });
});

app.get("/count-request", function (req, res) {
  res.status(200).json({
    requests: requestCounter,
  });
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
