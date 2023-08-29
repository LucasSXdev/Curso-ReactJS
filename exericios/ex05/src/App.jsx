import { useState } from "react";

export default function App() {
  const [Number, setNumber] = useState(0);

  function add() {
    let newNumber = Number + 1;
    setNumber(newNumber);
  }

  function subt() {
    let newNumber = Number - 1;
    setNumber(newNumber);
  }

  return (
    <div>
      <button onClick={subt}>-1</button>
      <button onClick={add}>+1</button>
      <div>{Number}</div>
    </div>
  );
}
