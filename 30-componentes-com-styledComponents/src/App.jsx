import Button from "./components/Button";
import Container from "./components/Container";

export default function App() {
  return (
    <>
      <Container>
        <p>teste</p>
        <Button>Clique aqui</Button>
      </Container>
    </>
  );
}

//Podemos criar componentes com styled components de 3 formas
//1- No proprio arquivo principal que sera usado
//2-Podemos criar em uma pasta de componentes e importar para o arquivo principal
//3-Podemos criar um único arquivo que vai conter todos os componentes e importar para o arquivo principal
