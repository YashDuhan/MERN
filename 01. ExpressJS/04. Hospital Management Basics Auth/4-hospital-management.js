// Queries can be called via http://localhost:3000/health-checkup/?kidneyID=1

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  //   res.json({
  //     msg: "Server Running...",
  //   });'
  res.send("Server running...");
});

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyID = req.query.kidneyID;

  if (username == "yash" && password == "123") {
    if (kidneyID == "1" || kidneyID == "2") {
      res.json({
        msg: "You kidney is fine",
      });
    } else {
      res.json({
        msg: "Invalid kidney ID",
      });
    }
  }
  res.status(400).json({
    msg: "Invalid inputs",
  });
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
