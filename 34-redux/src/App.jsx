import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import route from "./Routes";

export default function App() {
  return <RouterProvider router={route}></RouterProvider>;
}
