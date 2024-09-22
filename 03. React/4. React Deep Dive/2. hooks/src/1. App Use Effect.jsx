import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  // use effect is used to fetch the data only once even if the component re-renders
  useEffect(() => {
    // we used axios because it can fetch data in easier way
    axios
      // the backend is down
      .get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodos(response.data.todos);
      });
  }, []);

  return (
    <>
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
