const express = require("express");
const app = express();
const port = 3000;

// Middleware for logging requests

// 1st Method
// let countReq = 0;

// function CalcReq(req, res, next) {
//   countReq++;
//   res.json({
//     msg: "Total requests: " + countReq,
//   });
//   next();
// }

// app.get("/req", CalcReq, function (req, res) {
//   console.log("Request hit");
// });

// 2nd Method
let countReq = 0;

function CalcReq(req, res, next) {
  countReq++;
  res.json({
    msg: "Total requests: " + countReq,
  });
  next();
}

app.use(CalcReq); // This will automatically use this middleware for all the routes

app.get("/req", function (req, res) {
  console.log("Request hit");
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
