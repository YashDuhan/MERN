// Custom Hooks

const { axios } = require("axios");
const { useEffect } = require("react");
const { useState } = require("react");

function useTodos() {
  // this whole code was actually written in App.jsx but we created a new function with use-Prefix and created a custom hook(RAW FUNCTIONS CAN"T BE TRANSFORMED INTO CUSTOM HOOKS, ONLY ALREADY EXISTING HOOKS CAN)
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // pass the backend url to axios
    axios.get("").then((res) => {
      setTodos(res.data.todos);
    });
  });
}

function App() {
  const todos = useTodos();
  return <>{todos}</>;
}

export default App;
