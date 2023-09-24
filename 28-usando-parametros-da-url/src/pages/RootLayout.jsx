import { Outlet } from "react-router";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>Essa é a estrutura principal da pagina</p>
        <hr />
        <Outlet />
        <hr />
      </main>
      <footer>feito com reactJS</footer>
    </>
  );
}
