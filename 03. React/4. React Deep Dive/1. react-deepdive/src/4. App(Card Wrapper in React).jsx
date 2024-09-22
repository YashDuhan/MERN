// Wrapper component

function App() {
  return (
    <>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <CardWrapper>
        <div>Hello world</div>
      </CardWrapper>

      <CardWrapper>
        <div>Hello there</div>
      </CardWrapper>
    </>
  );
}

function CardWrapper({ children }) {
  return <div style={{ border: "2px solid black" }}>{children}</div>;
}

function TextComponent() {
  return <>this is a text component</>;
}

export default App;
