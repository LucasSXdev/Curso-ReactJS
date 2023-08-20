import styles from "./styles.module.css";

export default function Button({ text }) {
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
      {text}
    </button>
  );
}
