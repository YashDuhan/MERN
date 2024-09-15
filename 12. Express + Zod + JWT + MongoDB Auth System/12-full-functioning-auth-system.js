// Express
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
// Zod
const zod = require("zod");
const nameValid = zod.string().min(2);
const emailValid = zod.string().email();
const passwordValid = zod.string().min(6);
// JWT
const jwt = require("jsonwebtoken");
const jwtSecret = "123456";
// Mongo DB
const mongoose = require("mongoose");
// Syntax = mongoose.connect("url/tableName");
mongoose.connect(
  "mongodb+srv://yash2004duhan:QxGmeVbRw5FNErB1@cluster0.z1dli.mongodb.net/NewTable"
);
// Define Schema
const users = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
  token: String,
});
// Default Route
app.get("/", function (req, res) {
  res.send("Server is running...");
});
// Sing-in Route
app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const nameSchema = nameValid.safeParse(name);
  const emailSchema = emailValid.safeParse(email);
  const passwordSchema = passwordValid.safeParse(password);
  // Check if inputs are valid
  if (!nameSchema.success || !emailSchema.success || !passwordSchema.success) {
    return res.status(411).json({
      msg: "Invalid Input",
    });
  }
  // Check if user already exists
  const existingUser = await users.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({ msg: "User already exists" });
  }
  // Generate JWT token
  const token = jwt.sign({ email: email }, jwtSecret);

  // Create new user and save to database
  const user = new users({
    name: name,
    email: email,
    password: password,
    token: token,
  });
  user.save();
  res.json({ msg: "User created successfully" });
  res.send(token);
});

// Print User information
app.get("/profile", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtSecret);
    // Find user in database by email
    const user = await users.findOne({ email: decoded.email });
    // Throw exception if user does not exist
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    // Return user information
    res.json({
      msg: "Profile fetched successfully",
      name: user.name,
      email: user.email,
      password: user.password,
      token: user.token,
    });
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
