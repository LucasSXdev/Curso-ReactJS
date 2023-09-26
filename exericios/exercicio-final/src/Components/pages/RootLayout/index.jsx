import { Outlet, Link } from "react-router-dom";
import Header from "../../Header";

export default function RootLayout() {
  return (
    <section>
      <Header />
      <div>
        <h2>Stock items</h2>
        <div>
          <Link to="/estoque">Todos itens</Link>
          <Link to="/cadastroproduto">Novo item</Link>
        </div>
      </div>
      <Outlet />
      <footer>
        <p>Feito com React e React Router</p>
      </footer>
    </section>
  );
}
