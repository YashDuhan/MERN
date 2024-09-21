const express = require("express");
const app = express();
const port = 3000;
// using cors to directly fetch output from the frontend
// any frontend can hit this backend now
const cors = require("cors");
app.use(cors());
// importing types to validate via zod
const { createToDo, updateToDo } = require("./types");
const { todo } = require("./db");

app.use(express.json());
// default route
app.get("/", function (req, res) {
  res.json({
    msg: "Server Running...",
  });
});

// add todo
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createToDo.safeParse(createPayload); // Change here
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Wrong Inputs",
    });
    return;
  }

  // put it in mongodb
  // we used await because there could be a chance where database is down or because of external factors, the codeflow will go to return and can lead to problem, hence we are awaiting the function
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "To-Do created",
  });
});

// display todo
// this is also a promise

app.get("/todos", async function (req, res) {
  try {
    const todos = await todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching todos", error });
  }
});
//mark as completed
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateToDo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Input is wrong",
    });
    return;
  }
  await todo.updateOne(
    {
      // need 2 arguments(unique id and set complete to true)
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

// port
app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
