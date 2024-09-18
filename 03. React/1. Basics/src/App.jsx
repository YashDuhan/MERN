// Not state
// let state = {
//   count: 0,
// };
// Import the useState hook
import { useState } from "react";

function App() {
  // Declare the state for count
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Pass count and setCount as props to the CustomButton */}
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

// CustomButton Component
function CustomButton(props) {
  // Handler to update the count
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default App;
