import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/products">Produtos</Link>
      <Link to="/cart">Carrinho</Link>
      <Link to="/">Home</Link>
    </nav>
  );
}
