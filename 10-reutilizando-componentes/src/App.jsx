import { Card } from "./components/Card/Card";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        padding: "10px",
      }}
    >
      <Card />
    </div>
  );
}

//Para reutilizar componentes basta colocar o nome do componente no nosso arquivo principal jsx
//podemos também colocar ele em uma outra pasta e ir dividindo nossa aplicação.
