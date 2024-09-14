// schema declaration and validation(Schema can be any data type from string to arrays)

const express = require("express");
const app = express();
const zod = require("zod");
const port = 3000;

const schema = zod.array(zod.number()); // to store array on numbers

app.use(express.json());

app.get("/", function (req, res) {
  app.send("Port Running... ");
});

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneysSchema = schema.safeParse(kidneys); // validate the kidneys array
  if (!kidneysSchema.success) {
    res.status(411).json({
      msg: "Invalid Input",
    });
  } else {
    res.send({
      kidneysSchema,
    });
  }
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
