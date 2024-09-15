const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
// Library for json web tokens
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";

// User Data
const USER_DATA = [
  {
    username: "rajesh@gmail.com",
    password: "12345",
    name: "Rajesh Singh",
  },
  {
    username: "arpit@gmail.com",
    password: "54321",
    name: "Arpit Patel",
  },
  {
    username: "Saransh@gmail.com",
    password: "1534534",
    name: "Saransh Singh",
  },
];

function userExists(username, password) {
  // Logic to check if user exists
  let userExists = false;
  for (let i = 0; i < USER_DATA.length; i++) {
    if (
      USER_DATA[i].username === username &&
      USER_DATA[i].password === password
    ) {
      userExists = true;
    }
  }
  return userExists;
}

// Default route
app.get("/", function (req, res) {
  res.send("Port Running... ");
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does not exist",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({ token });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // returning all the users
    res.json({
      // users: USER_DATA,
      // If you want to send all the users except the one you used to login
      users: USER_DATA.filter(function (value) {
        if (value.username == username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

// port
app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
