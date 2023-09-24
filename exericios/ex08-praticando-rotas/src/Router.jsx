import { createBrowserRouter } from "react-router-dom";
import Contato from "./components/pages/Contato";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
]);

export default Router;
