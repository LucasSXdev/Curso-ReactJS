import styles from "./styles.module.css";

export function Card() {
  return (
    <main
      style={{
        backgroundColor: "silver",
        borderRadius: "20px",
        display: "flex",
        gap: "4rem",
        alignItems: "center",
        padding: "2rem",
        height: "100%",
      }}
    >
      <div className={styles.Card}>
        <img src="./src/imgs/starWars.jpg" alt="" />
      </div>
      <div className={styles.description__container}>
        <h1 className={styles.descritpion__title} style={{ fontSize: "3rem" }}>
          Pôster Star Wars (1977)
        </h1>
        <p className={styles.description__paragraph}>
          Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
          tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
          todos os tempos. Este clássico pôster trará aventura, nostalgia e a
          magia de Star Wars para qualquer lugar que você decidir pendurar. Não
          perca a chance de adicionar essa linda memória ao seu acervo!
        </p>
        <button
          className={styles.description__button}
          style={{
            padding: "10px",
            color: "white",
            borderRadius: "10px",
            backgroundColor: "black",
          }}
        >
          Comprar agora
        </button>
      </div>
    </main>
  );
}
