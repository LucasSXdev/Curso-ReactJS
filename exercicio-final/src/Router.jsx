import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ListItens from "./pages/Items/ListItems";
import CreateItem from "./pages/Items/CreateItem";
import Updateitem from "./pages/Items/UpdateItem";
import ShowItem from "./pages/Items/ShowItem";
import ItemsLayout from "./pages/Items/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          { index: true, element: <ListItens /> },
          { path: "new", element: <CreateItem /> },
          {
            path: ":id",
            element: <ShowItem />,
          },
          { path: ":id/update", element: <Updateitem /> },
        ],
      },
    ],
  },
]);

export default router;
