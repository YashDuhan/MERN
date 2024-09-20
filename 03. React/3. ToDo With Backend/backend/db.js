const mongoose = require("mongoose");
// mongodb url
// mongodb+srv://yash2004duhan:ytNbPofpur6pkcu2@cluster0.lwwth.mongodb.net/
mongoose.connect(
  "mongodb+srv://yash2004duhan:ytNbPofpur6pkcu2@cluster0.lwwth.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
