// Assignment - Re-render
// update the last app to allow user to update the title of the first header with a new title

import { useState } from "react";

// function App() {
//   // here the state is actually called inside the main parent, hence it's re-rendering the whole thing
//   const [title, setTitle] = useState("yash");

//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//       <Header title="ravi1"></Header>
//       <Header title="ravi2"></Header>
//       <Header title="ravi3"></Header>
//       <Header title="ravi4"></Header>
//     </div>
//   );
// }

// TO avoid re-renderings we will push the state down

function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title="ravi1"></Header>
    </>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("my name is yash");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;

// We could've also used React.memo to skip re-rendering for any components
