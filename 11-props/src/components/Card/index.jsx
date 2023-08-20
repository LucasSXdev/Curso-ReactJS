import Button from "../Button/index";
import styles from "./styles.module.css";

export default function Card(props) {
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
        <img src="./src/assets/imgs/starWars.jpg" alt="" />
      </div>
      <div className={styles.description__container}>
        <h1 className={styles.descritpion__title} style={{ fontSize: "3rem" }}>
          {props.title}
        </h1>
        <p className={styles.description__paragraph}>
          Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
          tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
          todos os tempos. Este clássico pôster trará aventura, nostalgia e a
          magia de Star Wars para qualquer lugar que você decidir pendurar. Não
          perca a chance de adicionar essa linda memória ao seu acervo!
        </p>
        <Button text="comprar agora" />
      </div>
    </main>
  );
}
