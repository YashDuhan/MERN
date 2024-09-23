function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "red" }}>Hi</div>
        <div style={{ backgroundColor: "green" }}>Hi</div>
        <div style={{ backgroundColor: "blue" }}>Hi</div>
      </div>

      <div className="flex justify-between ">
        <div className="bg-yellow-500">Hi</div>
        <div className="bg-red-500">Hi</div>
        <div className="bg-blue-500">Hi</div>
      </div>
    </>
  );
}

export default App;
