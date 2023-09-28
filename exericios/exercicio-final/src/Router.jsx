import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/pages/RootLayout";
import Home from "./Components/pages/Home";
import Layout from "./Components/pages/items/Layout";
import Stock from "./Components/pages/items/Stock";
import ShowItem from "./Components/pages/items/ShowItem";
import CreateItems from "./Components/pages/items/CreateItems";
import UpdateItems from "./Components/pages/items/UpdateItems";

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
        element: <Layout />,
        children: [
          { index: true, element: <Stock /> },
          { path: "new", element: <CreateItems /> },
          { path: ":id", element: <ShowItem /> },
          { path: ":id/update", element: <UpdateItems /> },
        ],
      },
    ],
  },
]);

export default router;
