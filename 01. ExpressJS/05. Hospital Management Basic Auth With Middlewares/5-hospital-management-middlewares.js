const express = require("express");
const app = express();
const port = 3000;

// Middlewares
function userAuthMiddleware(req, res, next) {
  const username = req.params.username;
  const password = req.params.password;
  if (username == "yash" && password == "123") {
    res.json({
      msg: "Username and password are validated correctly",
    });
    next(); // transfer control to next middleware
  }
  res.status(400).json({
    msg: "Invalid inputs",
  });
}

function checkKidneyMiddleware(req, res, next) {
  const kidneyID = req.query.kidneyID;
  if (kidneyID == "1" || kidneyID == "2") {
    res.json({
      msg: "You kidney is fine",
    });
    next(); // transfer control to main function
  } else {
    res.json({
      msg: "Invalid kidney ID",
    });
  }
}

// Main function

    // Default Route
app.get("/", function(req,res)){
    res.json({
      msg: "Server is running",
    });
}

app.get("/health-checkup", userAuthMiddleware,checkKidneyMiddleware,function(req,res){
    // After Validating both the middlewares, control will be transferred here
    res.send("Your Heart is healthy");
})

app.get("/kidney-checkup", userAuthMiddleware,checkKidneyMiddleware,function(req,res){
    res.send("Your kidneys are healthy");
})

app.listen(port, function(){
    console.log(`Server running at http://localhost:${port}`);
});