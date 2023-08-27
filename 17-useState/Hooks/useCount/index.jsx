import { useState } from "react";

function getInitialVlue() {
  console.log("obtendo o valor incial");
  return 1 + 1;
}

export default function useCount() {
  //Um bom padrão para otimizar o useState é utilizando uma função como callbak para que seja executada apenas uma vez.
  const [count, setCount] = useState(() => getInitialVlue());

  const increment = () => {
    //Em vez de utilizar o count, utilizar uma nova variável, sem depender do count que é o valor anterior.

    setCount((currentState) => currentState + 1);
    setCount((currentState) => currentState + 1);
  };

  return { count, increment };
}
