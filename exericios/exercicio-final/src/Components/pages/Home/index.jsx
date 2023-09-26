import Header from "../../Header";

export default function Home() {
  return (
    <section>
      <Header />
      <h2>Dashboard</h2>
      <div>
        <div className="diversity-items">
          <p>2</p>
        </div>
        <div className="total-inventary">
          <p>40</p>
        </div>
        <div className="recent-items">
          <p>2</p>
        </div>
        <div className="items-running-out">
          <p>1</p>
        </div>
      </div>

      <div>
        <ul>
          <li>
            Itens recentes <span>Ações</span>
          </li>
        </ul>

        <ul>
          <li>
            <span>itens acabando</span>
            <span>qtd</span>
            <span>Ações</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
