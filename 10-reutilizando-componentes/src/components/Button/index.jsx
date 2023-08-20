import styles from "./styles/styles.module.css";

export default function Button() {
  return (
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
  );
}
