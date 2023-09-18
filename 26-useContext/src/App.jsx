import UserInfo from "./components/UserInfo";
import userContext from "./context/userContext";

export default function App() {
  const user = {
    nome: "Lucas",
    email: "lucaswats39@gmail.com",
  };

  return (
    <userContext.Provider value={user}>
      <h1>Usando contexto</h1>
      <UserInfo></UserInfo>
    </userContext.Provider>
  );
}

//Precisamos de um componente pai  para que possa ser utilizado o contexto nos filhos
//Depois adicionar a palavra Provider e passar um valor a ser compartilhado
//Precisamos criar uma variavel que vai ser o contexto utilizando o hook que vai recuperar os dados que serao compartilhados para os elementos filhos
