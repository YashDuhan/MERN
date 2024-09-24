function App() {
  return (
    <>
      <h1>Raw CSS</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "red" }}>Hi</div>
        <div style={{ backgroundColor: "green" }}>Hi</div>
        <div style={{ backgroundColor: "blue" }}>Hi</div>
      </div>
      <h1>FlexBox</h1>
      <div className="flex justify-between ">
        <div className="bg-yellow-500">Hi</div>
        <div className="bg-red-500">Hi</div>
        <div className="bg-blue-500">Hi</div>
      </div>
      <h1>Grid Cols</h1>
      <div className="grid grid-cols-10">
        <div className="bg-yellow-500 col-span-4">Hi</div>
        <div className="bg-red-500 col-span-4">Hi</div>
        <div className="bg-blue-500 col-span-2">Hi</div>
      </div>
      <h1>Responsive</h1>
      <div className="bg-red-500 md:bg-blue-500">Hello There</div>
      <h1>
        3 Equally placed divs but if resolution goes below md then they get
        stacked
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-12">
        <div className="bg-yellow-500 col-span-4">Hi</div>
        <div className="bg-red-500 col-span-4">Hi</div>
        <div className="bg-blue-500 col-span-4">Hi</div>
      </div>
    </>
  );
}

export default App;
