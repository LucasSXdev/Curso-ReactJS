import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//Primeiro deve ser criado o um arquivo router para definir as rotas
//Depois deve ser passado para o conteudo App que é o pricipal, o Routerprovider que tem um valor router(passar o arquivo router aqui)
//Depois criar cada componente específico de cada rota para dentro do arquivo router
//podemos usar a propriedade children dentro de nossas rotas, onde essas vao herdar da rota pai.
//Quando usamos o Outlet isso quer dizer que as rotas filhas de outra principal estarao nesse lugar.
