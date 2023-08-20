import StatusText from "./components/StatusText";
import { Subtitle } from "./components/Subtitle";
import Title from "./components/Title";

export default function App() {
  return (
    <div>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}

//Para criar componentes no react é uma boa prática separar eles em arquivos separados
//Criamos esses componentes com funções podendo elas ser anonimas também
//Uma boa prática é colocar esses componentes em uma outra pasta chamada components
//Não se esquecer de importar da forma certa para que não ocorra erros
//Para cada componente podemos colocar eles dentro de uma pasta com um arquivo index.jsx também.
//Colocar o nome das pastas e componentes em maiusculo
