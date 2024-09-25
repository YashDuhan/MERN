const express = require("express");
const app = express();
const port = 3000;

// Default route
app.get("/", function (req, res) {
  res.json({
    msg: "Server is up",
  });
});

// Sign-up route
app.post("/signup", function (req, res) {});

// sign-in route
app.post("/signin", function (req, res) {});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
