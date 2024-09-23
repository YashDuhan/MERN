import { useContext } from "react";
import { CountContext } from "./context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  // Wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCountRendered />
    </div>
  );
}

function EvenCountRendered() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "It is even" : null}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}>
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}>
        Decrease
      </button>
    </div>
  );
}

export default App;
