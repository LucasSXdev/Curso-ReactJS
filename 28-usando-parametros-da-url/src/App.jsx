import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//1-Para criarmos uma rota dinamica que vai redirecionar para uma url por ex, podemos colocar a sintaxe
//no nosso router dessa forma path:"nomedarota/:rotadaurl" e associar um elemento a ela tambem
//depois é só passar em um link a referencia dessa rota
//2-No elemento acessamos o parametro atraves do hook Useparams
