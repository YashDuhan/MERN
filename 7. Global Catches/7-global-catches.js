const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Default route
app.get("/", function (req, res) {
  res.json({
    msg: "Server Running...",
  });
});

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + " kidneys");
});

// global catches are used to catch the error inside the function
//  e.g if user input wrong data then the global catch will prevent the server from crashing
app.use(function (err, req, res, next) {
  res.status(500).send("An error has occurred");
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
