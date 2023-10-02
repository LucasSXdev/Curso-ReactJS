import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { StockContextProvider } from "./Context/StockContext";

export default function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  );
}
