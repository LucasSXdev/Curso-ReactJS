import * as C from "./App.styles";

export default function App() {
  return (
    <>
      <C.Container>
        <span>ola</span>
        <p>teste</p>
        <C.Button>Botão grande</C.Button>
        <C.Button small>Botão menor</C.Button>
      </C.Container>
    </>
  );
}

//para estilizar elementos filhos dos componentes, basta colocar dentro do proprio componente a estilização, no arquivo de estilização.
//a mesma regra se aplica para a responsividade.
