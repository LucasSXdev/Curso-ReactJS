import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <section>
      <h2>Stock items</h2>
      <div>
        <Link to="">Todos itens</Link>
        <Link to="">Novo item</Link>
      </div>
      <Outlet />
    </section>
  );
}
