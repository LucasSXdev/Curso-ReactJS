import { Card } from "./components/card";

export default function App() {
  return (
    <>
      <Card />
    </>
  );
}

//O fragment pode ser usado com a sintaxe de tag <> para engolbar algum componente
//o fragment é utilizado para evitar ficar usando divs para englobar os componentes
//O motivo é que ele não aparece no documento html no navegador
//um componente precisa estar envolto de algum elemento para ser exportado, por isso o uso do fragment.
