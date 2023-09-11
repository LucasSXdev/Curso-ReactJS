import { useState, useRef } from "react";
export default function App() {
  let variable = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const showValues = () => {
    alert(`
    variavel:${variable}
    Ref:${ref.current}  
    state:${state}  `);
  };

  return (
    <div>
      <h2>Conhecendo o useRef</h2>
      <hr />
      <p>variavel{variable}</p>

      <p>Ref{ref.current}</p>

      <p>state{state}</p>
      <button onClick={() => ref.current++}>Aumentar ref</button>
      <button onClick={() => variable++}>Aumentar variavel</button>
      <button onClick={() => setState((state) => state + 1)}>
        Aumentar state
      </button>
      <hr />
      <button onClick={showValues}>Exibir valores</button>
    </div>
  );
}

//No exemplo do código acima criamos uma variavel e uma useRef e uma state para exemplificar
//O useRef vai persistir os valores assim que a tela for renderizada novamente
//a varivavel, ao ser renderizada a tela, vai ser zerada novamente
//O state vai ser persistido também, mas ele muda o seu valor em tempo real.
