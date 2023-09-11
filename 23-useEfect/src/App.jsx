//É um hook que permite chamar uma função:
//No momento da criação do componente.
//Quando o estado do componente muda.
//O useEffect pode observar e reagir a mudanças de estado de um componente
//Recebe uma callback como primeiro parametro, essa vai ter alguma ação
//O segundo parametro normalmente vai ser o componente que vai estar sendo observado pelo useEffect
//Lembrar de sempre utilizar alguma coisa dentro do array de dependecia(segundo parametro)
//Para fazer a limpeza no useEffect, basta colocar um retorno que deverá ser uma funçao de callback

import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    alert("O efeito colateral foi ativado");
  }, [count]);
  return (
    <div>
      <h2>Conhecendo o useEffect</h2>
      <button onClick={() => setCount((state) => state + 1)}>
        Contador:{count}
      </button>

      <hr />
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        Contador:{count2}
      </button>
    </div>
  );
}
