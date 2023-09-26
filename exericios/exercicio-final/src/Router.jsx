import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/pages/RootLayout";
import Home from "./Components/pages/Home";
import Estoque from "./Components/pages/Estoque";
import InfoProduto from "./Components/pages/InfoProduto";
import CadastroProduto from "./Components/pages/CadastroProduto";
import EditarProduto from "./Components/pages/EditarProduto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/estoque",
        element: <Estoque />,
      },
      {
        path: "infoproduto",
        element: <InfoProduto />,
      },
      {
        path: "cadastroproduto",
        element: <CadastroProduto />,
      },
      {
        path: "editarproduto",
        element: <EditarProduto />,
      },
    ],
  },
]);

export default router;
