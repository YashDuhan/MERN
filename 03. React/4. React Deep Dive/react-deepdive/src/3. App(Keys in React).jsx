//  Assignment Keys in react
// Create a todo app that renders 3 todos
// create a todo component that accepts title,description as input
//  initialize a state array that has 3 todos
// iterate over the array to render all the todos
// a button in the top level app component to add a new todo

import { useState } from "react";

// counter is the id of todo, we used 4 because 3 todos already exists
let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to market",
      description: "buy milk",
    },
    {
      id: 2,
      title: "go to college",
      description: "study",
    },
    {
      id: 3,
      title: "make dinner",
      description: "Make the dinner today",
    },
  ]);

  function addTodo() {
    // spread operator
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodo}> Add a todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
