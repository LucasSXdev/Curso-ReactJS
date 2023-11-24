import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Address } from "./pages/adress";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/painel",
    element: <Home />,
  },
  {
    path: "/adress",
    element: <Address />,
  },
]);

export default route;
