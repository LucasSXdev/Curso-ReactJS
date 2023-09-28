import { Outlet, Link } from "react-router-dom";
import Header from "../../Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      
      <Outlet />
      <footer>
        <p>Feito com React e React Router</p>
      </footer>
    </>
  );
}
