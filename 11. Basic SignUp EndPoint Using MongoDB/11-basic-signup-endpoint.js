const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

// Connection with MongoDB
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://yash2004duhan:QxGmeVbRw5FNErB1@cluster0.z1dli.mongodb.net/tempTable"
);

// Define Schema
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

// Default route
app.get("/", function (req, res) {
  res.json({
    msg: "Server Running...",
  });
});

// Post in database

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  // This will check if the email is already present in the database
  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    return res.status(400).json({ msg: "Username already exists" });
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({ msg: "User registered successfully" });
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
