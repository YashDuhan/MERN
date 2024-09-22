import { useState } from "react";
import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState(0);

  return (
    <>
      <ButtonLogic count={count} setCount={setCount} />
      <br />
      <br />
      <InputBoxSum inputVal={inputVal} setInputVal={setInputVal} />
    </>
  );
}

function InputBoxSum({ inputVal, setInputVal }) {
  // use memo will save the value after computing to avoid re-calculating these value on each re-render
  const counted = useMemo(() => {
    let sum = 0;
    for (let i = 0; i <= inputVal; i++) {
      sum += i;
    }
    return sum;
  }, [inputVal]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a value "
        onChange={function (e) {
          setInputVal(Number(e.target.value));
        }}
      />
      The sum from 0 to {inputVal} is {counted}
    </div>
  );
}

function ButtonLogic({ count, setCount }) {
  function OnClickUpdate() {
    // THe setCount(count++) will cause the user to press the button to twice to actually change the value
    // setCount(count++);
    setCount((prevCount) => prevCount + 1); //the prevCount will directly change the value
  }

  return (
    <>
      <button onClick={OnClickUpdate}> Counter {count}</button>
    </>
  );
}

export default App;
