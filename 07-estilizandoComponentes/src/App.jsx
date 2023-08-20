export default function App() {
  return (
    <div
      style={{
        backgroundColor: "silver",
        textAlign: "center",
      }}
    >
      <img src="./public/react.png" alt="" />
      <h1>React</h1>
      <p>A biblioteca para interfaces web e nativas</p>
      <button>Aprenda React</button>
      <button>Referencia da API</button>
      <hr />
      <h2>Crie interface de usuario de componentes</h2>
      <p>
        React permite que você construa interfaces de usuário a partir de
        pedaços individuais chamados componentes.
      </p>
      <hr />
      <h2>
        Componentes React são funções JavaScript. A sintaxe de marcação é
        chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo
        React.
      </h2>
      <hr />
      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </div>
  );
}

//podemos aplicar estilo diretamente na tag utilizando chaves e dentro um objeto com nome das propriedades css na sintaxe de javascript.
//podemos utilizar o css atraves do module.css que será um arquivo para estilização usando o css mesmo.
