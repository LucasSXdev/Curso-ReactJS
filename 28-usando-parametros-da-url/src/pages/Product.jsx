import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <section>
      <Header />
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>Nome do produto</h2>
      <p>descrição do produto</p>
      <p>RS 00,00</p>
      <button>Comprar</button>
    </section>
  );
}
