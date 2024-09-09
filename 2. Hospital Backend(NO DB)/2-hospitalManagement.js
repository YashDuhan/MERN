const express = require("express");
const app = express();
const port = 3000;

// Data
var users = [
  {
    id: 1,
    name: "Yash Duhan",
    kidneys: [
      {
        healthy: true,
      },
    ],
    age: 19,
  },
];

// GET REQUEST
app.get("/", function (req, res) {
  const id = users[0].id;
  const name = users[0].name;
  const age = users[0].age;
  const yashKidneys = users[0].kidneys;
  const totalKidneys = yashKidneys.length;
  let totalHealthy = 0;
  for (let i = 0; i < totalKidneys; i++) {
    if (yashKidneys[i].healthy) {
      totalHealthy++;
    }
  }
  const totalUnhealthy = totalKidneys - totalHealthy;
  res.json({
    id,
    name,
    age,
    totalKidneys,
    totalHealthy,
    totalUnhealthy,
  });
});

// POST REQUEST
app.use(express.json());
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Added a kidney",
  });
});

// PUT REQUEST
app.put("/", function (req, res) {
  if (isThereAnyUnHealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true; //Making all kidneys healthy
    }
    res.json({
      msg: "Made all kidneys healthy",
    });
  } else {
    res.status(411).json({
      msg: "No unhealthy kidneys found",
    });
  }
});

// DELETE REQUEST
app.delete("/", function (req, res) {
  if (isThereAnyUnHealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "Deleted unhealthy kidneys",
    });
  } else {
    res.status(411).json({
      msg: "No unhealthy kidneys found",
    });
  }
});

// ERROR HANDLING
// 1. Deleting unhealthy kidneys even when there are no Unhealth kidneys
// 2. POST body data is gibbrish
// 3. PUT request(kidneys are already healthy)

function isThereAnyUnHealthyKidney() {
  let atleastOneUnhealthyKidneys = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidneys = true;
      break;
    }
  }
  return atleastOneUnhealthyKidneys;
}

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
