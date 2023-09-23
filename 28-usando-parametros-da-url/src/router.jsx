import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products:productId",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
