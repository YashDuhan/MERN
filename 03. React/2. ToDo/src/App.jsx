import { useState } from "react";

function App() {
  // Declare the state
  const [todos, setTodos] = useState([
    {
      title: "Go to work",
      description: "Go to work from 9-5",
      completed: false,
    },
    {
      title: "Learn React",
      description: "Read the official React documentation",
      completed: false,
    },
    {
      title: "Buy groceries",
      description: "Buy essential items like milk, bread, eggs",
      completed: false,
    },
  ]);

  function addTodo() {
    // ... spreads the original values
    // Uses the line 5
    // ...todos is the current state value and , { data} is the new state to be added/updated
    setTodos([
      ...todos,
      {
        title: "new todo",
        description: "A randomly generated task",
        completed: false,
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {/* Dynamic rendering of Todo components */}
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
