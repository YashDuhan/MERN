const express = require("express");

const app = express();
const port = 3000;

/* (req,res) = > request and response */

// function sum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("Your Answer: " + ans);
// });

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
