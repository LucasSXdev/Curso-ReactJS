import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//Loader é uma função necessaria para carregar os dados para que uma rota específica funcione.
//Para tratar os erros é obrigatório o uso de loader para tratar erros de rota.
//
