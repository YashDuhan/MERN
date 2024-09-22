// Assignment -> React component return
// Create a react app that takes a title as a prop and renders it inside a dev
// the top level app component renders 2 Headers

function App() {
  return (
    // <div>
    //   <Header title="yash"></Header>
    //   <Header title="ravi"></Header>
    // </div>

    // <></> won't let you create an extra div
    <>
      <Header title="yash"></Header>
      <Header title="ravi"></Header>
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
